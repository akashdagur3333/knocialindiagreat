"use strict";

var _require = require('../module/vsrWaiver'),
    VsrWaiver = _require.VsrWaiver;

var counterSchema = require('../module/counter');

var addVsrWaiver = function addVsrWaiver(req, res) {
  counterSchema.findOneAndUpdate({
    id: "VsrWaiver_seq"
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
        id: "VsrWaiver_seq",
        seq: 1
      });
      newval.save();
      seqId = 1;
    } else {
      seqId = cd.seq;
    }

    var vsrWaiver = new VsrWaiver({
      _id: seqId,
      rpt_id: req.body.rpt_id,
      name: req.body.name,
      father_name: req.body.father_name,
      amount: req.body.amount,
      remarks: req.body.remarks,
      gst_amount: req.body.gst_amount,
      waived_by: req.body.waived_by,
      created_by: req.body.created_by,
      created_at: Date.now()
    });
    vsrWaiver.save(function (err, docs) {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    });
  });
};

var getAllVsrWaiver = function getAllVsrWaiver(req, res) {
  VsrWaiver.find(function (err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

var deleteVsrWaiver = function deleteVsrWaiver(req, res) {
  var deleteid = req.params.id;
  VsrWaiver.findByIdAndDelete(deleteid, function (err, del) {
    if (!err) {
      res.json(del);
    } else {
      res.json(err);
    }
  });
};

module.exports = {
  addVsrWaiver: addVsrWaiver,
  getAllVsrWaiver: getAllVsrWaiver,
  deleteVsrWaiver: deleteVsrWaiver
};