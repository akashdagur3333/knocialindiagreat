"use strict";

var _require = require('../module/other'),
    Other = _require.Other;

var counterSchema = require('../module/counter');

var addOther = function addOther(req, res) {
  counterSchema.findOneAndUpdate({
    id: "other_seq"
  }, {
    "$inc": {
      "seq": 1
    }
  }, {
    "new": true
  }, function (err, cd) {
    var seqId;

    if (cd == null) {
      var newval = new counterSchema({
        id: "other_seq",
        seq: 1
      });
      newval.save();
      seqId = 1;
    } else {
      seqId = cd.seq;
    }

    var other = new Other({
      _id: seqId,
      rpt_id: req.body.rpt_id,
      name: req.body.name,
      father_name: req.body.father_name,
      imposed_date: Date.now(),
      amount: req.body.amount,
      imposed_by: req.body.imposed_by,
      remarks: req.body.remarks,
      gst_amount: req.body.gst_amount,
      created_by: req.body.created_by,
      created_at: Date.now()
    });
    other.save(function (err, docs) {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    });
  });
};

var getAllOther = function getAllOther(req, res) {
  Other.find(function (err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

var deleteOther = function deleteOther(req, res) {
  var deleteid = req.params.id;
  Other.findByIdAndDelete(deleteid, function (err, del) {
    if (!err) {
      res.json(del);
    } else {
      res.json(err);
    }
  });
};

module.exports = {
  addOther: addOther,
  getAllOther: getAllOther,
  deleteOther: deleteOther
};