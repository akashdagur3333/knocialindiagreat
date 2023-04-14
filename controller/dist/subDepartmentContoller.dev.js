"use strict";

var _require = require('../module/sub_department'),
    Sub_department = _require.Sub_department;

var counterSchema = require('../module/counter');

var addSubDepartment = function addSubDepartment(req, res) {
  counterSchema.findOneAndUpdate({
    id: "subDepartment_seq"
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
        id: "subDepartment_seq",
        seq: 1
      });
      newval.save();
      seqId = 1;
    } else {
      seqId = cd.seq;
    }

    var sub_department = new Sub_department({
      _id: seqId,
      head_department: req.body.head_department,
      Sub_department: req.body.Sub_department,
      created_by: req.body.created_by,
      created_at: Date.now()
    });
    sub_department.save(function (err, docs) {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    });
  });
};

var getAllSubDepartment = function getAllSubDepartment(req, res) {
  Sub_department.find(function (err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

var deleteSubDepartment = function deleteSubDepartment(req, res) {
  var deleteid = req.params.id;
  Sub_department.findByIdAndDelete(deleteid, function (err, del) {
    if (!err) {
      res.json(del);
    } else {
      res.json(err);
    }
  });
};

var updateSubDepartment = function updateSubDepartment(req, res) {
  Sub_department.findByIdAndUpdate(req.params.id, {
    head_department: req.body.head_department,
    Sub_department: req.body.Sub_department,
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
  addSubDepartment: addSubDepartment,
  getAllSubDepartment: getAllSubDepartment,
  deleteSubDepartment: deleteSubDepartment,
  updateSubDepartment: updateSubDepartment
};