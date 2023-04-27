"use strict";

var _require = require('../module/fineWaiver'),
    FineWaiver = _require.FineWaiver;

var counterSchema = require('../module/counter');

var addFineWaiver = function addFineWaiver(req, res) {
  counterSchema.findOneAndUpdate({
    id: "fineWaiver_seq"
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
        id: "fineWaiver_seq",
        seq: 1
      });
      newval.save();
      seqId = 1;
    } else {
      seqId = cd.seq;
    }

    var fineWaiver = new FineWaiver({
      _id: seqId,
      rpt_id: req.body.rpt_id,
      name: req.body.name,
      father_name: req.body.father_name,
      amount: req.body.amount,
      finePending: req.body.finePending,
      remarks: req.body.remarks,
      gst_amount: req.body.gst_amount,
      waived_by: req.body.waived_by,
      created_by: req.body.created_by,
      created_at: Date.now()
    });
    fineWaiver.save(function (err, docs) {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    });
  });
};

var getAllFineWaiver = function getAllFineWaiver(req, res) {
  FineWaiver.find(function (err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

var deleteFineWaiver = function deleteFineWaiver(req, res) {
  var deleteid = req.params.id;
  FineWaiver.findByIdAndDelete(deleteid, function (err, del) {
    if (!err) {
      res.json(del);
    } else {
      res.json(err);
    }
  });
};

module.exports = {
  addFineWaiver: addFineWaiver,
  getAllFineWaiver: getAllFineWaiver,
  deleteFineWaiver: deleteFineWaiver
};