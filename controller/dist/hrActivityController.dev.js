"use strict";

var _require = require('../module/hrActivity'),
    HrActivity = _require.HrActivity;

var counterSchema = require('../module/counter');

var timeZone = require('../dateZone');

var addHrActivity = function addHrActivity(req, res) {
  counterSchema.findOneAndUpdate({
    id: "hrActivity_seq"
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
        id: "hrActivity_seq",
        seq: 1
      });
      newval.save();
      seqId = 1;
    } else {
      seqId = cd.seq;
    }

    var hrActivity = new HrActivity({
      _id: seqId,
      assign_to: req.body.assign_to,
      invite_to: req.body.invite_to,
      assign_date: req.body.assign_date,
      shift: req.body.shift,
      activity_start: req.body.activity_start,
      activity_end: req.body.activity_end,
      activity_location: req.body.activity_location,
      activity_name: req.body.activity_name,
      activity_description: req.body.activity_description,
      hr_remarks: req.body.hr_remarks,
      created_by: req.body.created_by,
      created_at: timeZone.datezone
    });
    hrActivity.save(function (err, docs) {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    });
  });
};

var getAllHrActivity = function getAllHrActivity(req, res) {
  HrActivity.find(function (err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

var deleteHrActivity = function deleteHrActivity(req, res) {
  var deleteid = req.params.id;
  HrActivity.findByIdAndDelete(deleteid, function (err, del) {
    if (!err) {
      res.json(del);
    } else {
      res.json(err);
    }
  });
};

var updateHrActivity = function updateHrActivity(req, res) {
  HrActivity.findByIdAndUpdate(req.params.id, {
    assign_to: req.body.assign_to,
    invite_to: req.body.invite_to,
    assign_date: req.body.assign_date,
    shift: req.body.shift,
    activity_start: req.body.activity_start,
    activity_end: req.body.activity_end,
    activity_location: req.body.activity_location,
    activity_name: req.body.activity_name,
    activity_description: req.body.activity_description,
    hr_remarks: req.body.hr_remarks,
    updated_by: req.body.created_by,
    updated_at: timeZone.datezone
  }, function (docs, err) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

module.exports = {
  addHrActivity: addHrActivity,
  getAllHrActivity: getAllHrActivity,
  deleteHrActivity: deleteHrActivity,
  updateHrActivity: updateHrActivity
};