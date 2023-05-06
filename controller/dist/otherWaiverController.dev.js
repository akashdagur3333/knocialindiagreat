"use strict";

var _require = require('../module/otherWaiver'),
    OtherWaiver = _require.OtherWaiver;

var counterSchema = require('../module/counter');

var addOtherWaiver = function addOtherWaiver(req, res) {
  counterSchema.findOneAndUpdate({
    id: "otherWaiver_seq"
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
        id: "otherWaiver_seq",
        seq: 1
      });
      newval.save();
      seqId = 1;
    } else {
      seqId = cd.seq;
    }

    var otherWaiver = new OtherWaiver({
      _id: seqId,
      rpt_id: req.body.rpt_id,
      name: req.body.name,
      father_name: req.body.father_name,
      amount: req.body.amount,
      otherPending: req.body.otherPending,
      remarks: req.body.remarks,
      gst_amount: req.body.gst_amount,
      waived_by: req.body.waived_by,
      created_by: req.body.created_by,
      created_at: Date.now()
    });
    otherWaiver.save(function (err, docs) {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    });
  });
};

var getAllOtherWaiver = function getAllOtherWaiver(req, res) {
  OtherWaiver.find(function (err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

var deleteOtherWaiver = function deleteOtherWaiver(req, res) {
  var deleteid = req.params.id;
  OtherWaiver.findByIdAndDelete(deleteid, function (err, del) {
    if (!err) {
      res.json(del);
    } else {
      res.json(err);
    }
  });
};

module.exports = {
  addOtherWaiver: addOtherWaiver,
  getAllOtherWaiver: getAllOtherWaiver,
  deleteOtherWaiver: deleteOtherWaiver
};