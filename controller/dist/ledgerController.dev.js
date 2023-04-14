"use strict";

var _require = require('../module/ledger'),
    Ledger = _require.Ledger;

var counterSchema = require('../module/counter');

var addLedger = function addLedger(req, res) {
  counterSchema.findOneAndUpdate({
    id: "ledger_seq"
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
        id: "ledger_seq",
        seq: 1
      });
      newval.save();
      seqId = 1;
    } else {
      seqId = cd.seq;
    }

    var ledger = new Ledger({
      _id: seqId,
      ledger_name: req.body.ledger_name,
      created_by: req.body.created_by,
      created_at: Date.now()
    });
    ledger.save(function (err, docs) {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    });
  });
};

var getAllLedger = function getAllLedger(req, res) {
  Ledger.find(function (err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

var deleteLedger = function deleteLedger(req, res) {
  var deleteid = req.params.id;
  Ledger.findByIdAndDelete(deleteid, function (err, del) {
    if (!err) {
      res.json(del);
    } else {
      res.json(err);
    }
  });
};

var updateLedger = function updateLedger(req, res) {
  Ledger.findByIdAndUpdate(req.params.id, {
    ledger_name: req.body.ledger_name,
    updated_by: req.body.created_by,
    updated_at: Date.now()
  }, function (docs, err) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

module.exports = {
  addLedger: addLedger,
  getAllLedger: getAllLedger,
  deleteLedger: deleteLedger,
  updateLedger: updateLedger
};