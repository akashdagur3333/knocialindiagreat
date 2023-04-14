"use strict";

var _require = require('../module/qualification'),
    Qualification = _require.Qualification;

var counterSchema = require('../module/counter');

var addQualification = function addQualification(req, res) {
  counterSchema.findOneAndUpdate({
    id: "qualification_seq"
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
        id: "qualification_seq",
        seq: 1
      });
      newval.save();
      seqId = 1;
    } else {
      seqId = cd.seq;
    }

    var qualification = new Qualification({
      _id: seqId,
      qualification_name: req.body.qualification_name,
      created_by: req.body.created_by,
      created_at: Date.now()
    });
    qualification.save(function (err, docs) {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    });
  });
};

var getAllQualification = function getAllQualification(req, res) {
  Qualification.find(function (err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

var deleteQualification = function deleteQualification(req, res) {
  var deleteid = req.params.id;
  Qualification.findByIdAndDelete(deleteid, function (err, del) {
    if (!err) {
      res.json(del);
    } else {
      res.json(err);
    }
  });
};

var updateQualification = function updateQualification(req, res) {
  Qualification.findByIdAndUpdate(req.params.id, {
    qualification_name: req.body.qualification_name,
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
  addQualification: addQualification,
  getAllQualification: getAllQualification,
  deleteQualification: deleteQualification,
  updateQualification: updateQualification
};