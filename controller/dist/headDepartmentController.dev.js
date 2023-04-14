"use strict";

var _require = require('../module/head_department'),
    Head_department = _require.Head_department;

var counterSchema = require('../module/counter');

var addDepartment = function addDepartment(req, res) {
  counterSchema.findOneAndUpdate({
    id: "headDepartment_seq"
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
        id: "headDepartment_seq",
        seq: 1
      });
      newval.save();
      seqId = 1;
    } else {
      seqId = cd.seq;
    }

    var head_department = new Head_department({
      _id: seqId,
      name: req.body.name,
      created_by: req.body.created_by,
      created_at: Date.now()
    });
    head_department.save(function (err, docs) {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    });
  });
};

var getAllDepartments = function getAllDepartments(req, res) {
  Head_department.find(function (err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

var deleteDepartment = function deleteDepartment(req, res) {
  var deleteid = req.params.id;
  Head_department.findByIdAndDelete(deleteid, function (err, del) {
    if (!err) {
      res.json(del);
    } else {
      res.json(err);
    }
  });
};

var updateDepartment = function updateDepartment(req, res) {
  Head_department.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
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
  addDepartment: addDepartment,
  getAllDepartments: getAllDepartments,
  deleteDepartment: deleteDepartment,
  updateDepartment: updateDepartment
};