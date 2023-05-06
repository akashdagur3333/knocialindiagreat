"use strict";

var _require = require('../module/batchSize'),
    Batch_size = _require.Batch_size;

var counterSchema = require('../module/counter');

var addBatchSize = function addBatchSize(req, res) {
  counterSchema.findOneAndUpdate({
    id: "batch_size"
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
        id: "batch_size",
        seq: 1
      });
      newval.save();
      seqId = 1;
    } else {
      seqId = cd.seq;
    }

    var batchsize = new Batch_size({
      _id: seqId,
      batchSize: req.body.batchSize,
      created_by: req.body.created_by,
      created_at: Date.now()
    });
    batchsize.save(function (err, docs) {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    });
  });
};

var getAllBatchSize = function getAllBatchSize(req, res) {
  Batch_size.find(function (err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

var deleteBatchSize = function deleteBatchSize(req, res) {
  var deleteid = req.params.id;
  Batch_size.findByIdAndDelete(deleteid, function (err, del) {
    if (!err) {
      res.json(del);
    } else {
      res.json(err);
    }
  });
};

var updateBatchSize = function updateBatchSize(req, res) {
  Batch_size.findByIdAndUpdate(req.params.id, {
    batchSize: req.body.batchSize,
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
  addBatchSize: addBatchSize,
  getAllBatchSize: getAllBatchSize,
  deleteBatchSize: deleteBatchSize,
  updateBatchSize: updateBatchSize
};