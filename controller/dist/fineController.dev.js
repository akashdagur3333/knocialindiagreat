"use strict";

var _require = require('../module/fine'),
    Fine = _require.Fine;

var counterSchema = require('../module/counter');

var addFine = function addFine(req, res) {
  counterSchema.findOneAndUpdate({
    id: "fine_seq"
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
        id: "fine_seq",
        seq: 1
      });
      newval.save();
      seqId = 1;
    } else {
      seqId = cd.seq;
    }

    var fine = new Fine({
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
    fine.save(function (err, docs) {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    });
  });
};

var getAllFine = function getAllFine(req, res) {
  Fine.find(function (err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

var deleteFine = function deleteFine(req, res) {
  var deleteid = req.params.id;
  Fine.findByIdAndDelete(deleteid, function (err, del) {
    if (!err) {
      res.json(del);
    } else {
      res.json(err);
    }
  });
};

module.exports = {
  addFine: addFine,
  getAllFine: getAllFine,
  deleteFine: deleteFine
};