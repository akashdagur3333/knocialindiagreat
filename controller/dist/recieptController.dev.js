"use strict";

var _require = require('../module/reciept'),
    Reciept = _require.Reciept;

var counterSchema = require('../module/counter');

var addReciept = function addReciept(req, res) {
  counterSchema.findOneAndUpdate({
    id: "reciept_seq"
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
        id: "reciept_seq",
        seq: 1
      });
      newval.save();
      seqId = 1;
    } else {
      seqId = cd.seq;
    }

    var reciept = new Reciept({
      _id: seqId,
      rpt_id: req.body.rpt_id,
      reciept_serial: req.body.reciept_serial,
      ol_serial: req.body.ol_serial,
      name: req.body.name,
      father_name: req.body.father_name,
      financial_year: req.body.financial_year,
      ledger: req.body.ledger,
      type: req.body.type,
      amount: req.body.amount,
      txn_id: req.body.txn_id,
      submited_at: req.body.submited_at,
      gst_amount: req.body.gst_amount,
      created_by: req.body.created_by,
      created_at: Date.now()
    });
    reciept.save(function (err, docs) {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    });
  });
};

var getAllReciept = function getAllReciept(req, res) {
  Reciept.find(function (err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

var deleteReciept = function deleteReciept(req, res) {
  var deleteid = req.params.id;
  Reciept.findByIdAndDelete(deleteid, function (err, del) {
    if (!err) {
      res.json(del);
    } else {
      res.json(err);
    }
  });
};

module.exports = {
  addReciept: addReciept,
  getAllReciept: getAllReciept,
  deleteReciept: deleteReciept
};