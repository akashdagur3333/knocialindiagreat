"use strict";

var _require = require('../module/relieving'),
    Relieving = _require.Relieving;

var counterSchema = require('../module/counter');

var addRelieving = function addRelieving(req, res) {
  counterSchema.findOneAndUpdate({
    id: "relieving_seq"
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
        id: "relieving_seq",
        seq: 1
      });
      newval.save();
      seqId = 1;
    } else {
      seqId = cd.seq;
    }

    var relieving = new Relieving({
      _id: seqId,
      name: req.body.name,
      father_name: req.body.father_name,
      aadhar_number: req.body.aadhar_number,
      leftStatus: req.body.leftStatus,
      training_start: req.body.training_start,
      training_completed: req.body.training_completed,
      doj: req.body.doj,
      seperation_date: req.body.seperation_date,
      emp_type: req.body.emp_type,
      left_hr_remarks: req.body.left_hr_remarks,
      rejoining: req.body.rejoining,
      vsr_status: req.body.vsr_status,
      final_hr_remarks: req.body.final_hr_remarks,
      created_by: req.body.created_by,
      created_at: Date.now()
    });
    relieving.save(function (err, docs) {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    });
  });
};

var getAllRelieving = function getAllRelieving(req, res) {
  Relieving.find(function (err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

var deleteRelieving = function deleteRelieving(req, res) {
  var deleteid = req.params.id;
  Relieving.findByIdAndDelete(deleteid, function (err, del) {
    if (!err) {
      res.json(del);
    } else {
      res.json(err);
    }
  });
};

var updateRelieving = function updateRelieving(req, res) {
  Relieving.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    father_name: req.body.father_name,
    aadhar_number: req.body.aadhar_number,
    leftStatus: req.body.leftStatus,
    training_start: req.body.training_start,
    training_completed: req.body.training_completed,
    doj: req.body.doj,
    seperation_date: req.body.seperation_date,
    emp_type: req.body.emp_type,
    left_hr_remarks: req.body.left_hr_remarks,
    rejoining: req.body.rejoining,
    vsr_status: req.body.vsr_status,
    final_hr_remarks: req.body.final_hr_remarks,
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
  addRelieving: addRelieving,
  getAllRelieving: getAllRelieving,
  deleteRelieving: deleteRelieving,
  updateRelieving: updateRelieving
};