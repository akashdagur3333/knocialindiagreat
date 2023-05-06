"use strict";

var _require = require('../module/trainer'),
    Trainer = _require.Trainer;

var counterSchema = require('../module/counter');

var addTrainer = function addTrainer(req, res) {
  counterSchema.findOneAndUpdate({
    id: "trainer_seq"
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
        id: "trainer_seq",
        seq: 1
      });
      newval.save();
      seqId = 1;
    } else {
      seqId = cd.seq;
    }

    var trainer = new Trainer({
      _id: seqId,
      name: req.body.name,
      created_by: req.body.created_by,
      created_at: Date.now()
    });
    trainer.save(function (err, docs) {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    });
  });
};

var getAllTrainer = function getAllTrainer(req, res) {
  Trainer.find(function (err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

var deleteTrainer = function deleteTrainer(req, res) {
  var deleteid = req.params.id;
  Trainer.findByIdAndDelete(deleteid, function (err, del) {
    if (!err) {
      res.json(del);
    } else {
      res.json(err);
    }
  });
};

var updateTrainer = function updateTrainer(req, res) {
  Trainer.findByIdAndUpdate(req.params.id, {
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
  addTrainer: addTrainer,
  getAllTrainer: getAllTrainer,
  deleteTrainer: deleteTrainer,
  updateTrainer: updateTrainer
};