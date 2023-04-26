"use strict";

var _require = require('../module/office_location'),
    Office_location = _require.Office_location;

var counterSchema = require('../module/counter');

var addLocation = function addLocation(req, res) {
  counterSchema.findOneAndUpdate({
    id: "location_seq"
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
        id: "location_seq",
        seq: 1
      });
      newval.save();
      seqId = 1;
    } else {
      seqId = cd.seq;
    }

    var office_location = new Office_location({
      _id: seqId,
      office_code: req.body.office_code,
      location: req.body.location,
      address: req.body.address,
      created_by: req.body.created_by,
      created_at: Date.now()
    });
    office_location.save(function (err, docs) {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    });
  });
};

var getAllLocations = function getAllLocations(req, res) {
  Office_location.find(function (err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

var deleteLocations = function deleteLocations(req, res) {
  var deleteid = req.params.id;
  Office_location.findByIdAndDelete(deleteid, function (err, del) {
    if (!err) {
      res.json(del);
    } else {
      res.json(err);
    }
  });
};

var updateLocations = function updateLocations(req, res) {
  Office_location.findByIdAndUpdate(req.params.id, {
    office_code: req.body.office_code,
    location: req.body.location,
    address: req.body.address,
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
  addLocation: addLocation,
  getAllLocations: getAllLocations,
  deleteLocations: deleteLocations,
  updateLocations: updateLocations
};