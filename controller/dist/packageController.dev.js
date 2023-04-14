"use strict";

var _require = require('../module/package'),
    Package = _require.Package;

var counterSchema = require('../module/counter');

var addPackage = function addPackage(req, res) {
  counterSchema.findOneAndUpdate({
    id: "package_seq"
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
        id: "package_seq",
        seq: 1
      });
      newval.save();
      seqId = 1;
    } else {
      seqId = cd.seq;
    }

    var stream = new Stream({
      _id: seqId,
      qualification_name: req.body.qualification_name,
      stream: req.body.stream,
      created_by: req.body.created_by,
      created_at: Date.now()
    });
    stream.save(function (err, docs) {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    });
  });
};

var getAllStream = function getAllStream(req, res) {
  Stream.find(function (err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

var deleteStream = function deleteStream(req, res) {
  var deleteid = req.params.id;
  Stream.findByIdAndDelete(deleteid, function (err, del) {
    if (!err) {
      res.json(del);
    } else {
      res.json(err);
    }
  });
};

var updateStream = function updateStream(req, res) {
  Stream.findByIdAndUpdate(req.params.id, {
    qualification_name: req.body.qualification_name,
    stream: req.body.stream,
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
  addStream: addStream,
  getAllStream: getAllStream,
  deleteStream: deleteStream,
  updateStream: updateStream
};