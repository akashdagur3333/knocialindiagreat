"use strict";

var _require = require('../module/vsrValue'),
    VsrValue = _require.VsrValue;

var counterSchema = require('../module/counter');

var addVsrValue = function addVsrValue(req, res) {
  counterSchema.findOneAndUpdate({
    id: "VsrValue_seq"
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
        id: "VsrValue_seq",
        seq: 1
      });
      newval.save();
      seqId = 1;
    } else {
      seqId = cd.seq;
    }

    var vsrValue = new VsrValue({
      _id: seqId,
      vsr_value: req.body.vsr_value,
      created_by: req.body.created_by,
      created_at: Date.now()
    });
    vsrValue.save(function (err, docs) {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    });
  });
};

var getAllVsrValue = function getAllVsrValue(req, res) {
  VsrValue.find(function (err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

var deleteVsrValue = function deleteVsrValue(req, res) {
  var deleteid = req.params.id;
  VsrValue.findByIdAndDelete(deleteid, function (err, del) {
    if (!err) {
      res.json(del);
    } else {
      res.json(err);
    }
  });
};

var updateVsrvalue = function updateVsrvalue(req, res) {
  VsrValue.findByIdAndUpdate(req.params.id, {
    vsr_value: req.body.vsr_value,
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

var great = function great(req, res) {
  return res.end("great work");
};

module.exports = {
  addVsrValue: addVsrValue,
  getAllVsrValue: getAllVsrValue,
  deleteVsrValue: deleteVsrValue,
  updateVsrvalue: updateVsrvalue,
  great: great
};