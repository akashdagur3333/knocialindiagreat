"use strict";

var _require = require('../module/shift'),
    Shift = _require.Shift;

var counterSchema = require('../module/counter');

var addShift = function addShift(req, res) {
  counterSchema.findOneAndUpdate({
    id: "shift_seq"
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
        id: "shift_seq",
        seq: 1
      });
      newval.save();
      seqId = 1;
    } else {
      seqId = cd.seq;
    }

    var shift = new Shift({
      _id: seqId,
      shift_name: req.body.shift_name,
      shift_start: req.body.shift_start,
      shift_end: req.body.shift_end,
      shift_description: req.body.shift_description,
      break1: req.body.break1,
      break1_duration: req.body.break1_duration,
      break2: req.body.break2,
      break2_duration: req.body.break2_duration,
      break3: req.body.break3,
      break3_duration: req.body.break3_duration,
      status: req.body.status,
      created_by: req.body.created_by,
      created_at: Date.now()
    });
    shift.save(function (err, docs) {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    });
  });
};

var getAllShift = function getAllShift(req, res) {
  Shift.find(function (err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

var deleteShift = function deleteShift(req, res) {
  var deleteid = req.params.id;
  Shift.findByIdAndDelete(deleteid, function (err, del) {
    if (!err) {
      res.json(del);
    } else {
      res.json(err);
    }
  });
};

var updateShift = function updateShift(req, res) {
  Shift.findByIdAndUpdate(req.params.id, {
    shift_name: req.body.shift_name,
    shift_start: req.body.shift_start,
    shift_end: req.body.shift_end,
    shift_description: req.body.shift_description,
    break1: req.body.break1,
    break1_duration: req.body.break1_duration,
    break2: req.body.break2,
    break2_duration: req.body.break2_duration,
    break3: req.body.break3,
    break3_duration: req.body.break3_duration,
    status: req.body.status,
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
  addShift: addShift,
  getAllShift: getAllShift,
  deleteShift: deleteShift,
  updateShift: updateShift
};