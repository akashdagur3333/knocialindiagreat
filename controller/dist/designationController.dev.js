"use strict";

var _require = require('../module/designation'),
    Designation = _require.Designation;

var counterSchema = require('../module/counter');

var addDesignation = function addDesignation(req, res) {
  counterSchema.findOneAndUpdate({
    id: "designation_seq"
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
        id: "designation_seq",
        seq: 1
      });
      newval.save();
      seqId = 1;
    } else {
      seqId = cd.seq;
    }

    var designation = new Designation({
      _id: seqId,
      head_department: req.body.head_department,
      designation: req.body.designation,
      created_by: req.body.created_by,
      created_at: Date.now()
    });
    designation.save(function (err, docs) {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    });
  });
};

var getAllDesignation = function getAllDesignation(req, res) {
  Designation.find(function (err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

var deleteDesignation = function deleteDesignation(req, res) {
  var deleteid = req.params.id;
  Designation.findByIdAndDelete(deleteid, function (err, del) {
    if (!err) {
      res.json(del);
    } else {
      res.json(err);
    }
  });
};

var updateDesignation = function updateDesignation(req, res) {
  Designation.findByIdAndUpdate(req.params.id, {
    head_department: req.body.head_department,
    designation: req.body.designation,
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
  addDesignation: addDesignation,
  getAllDesignation: getAllDesignation,
  deleteDesignation: deleteDesignation,
  updateDesignation: updateDesignation
};