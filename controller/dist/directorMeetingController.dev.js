"use strict";

var _require = require('../module/directorMetting'),
    DirectorMeeting = _require.DirectorMeeting;

var counterSchema = require('../module/counter');

var timeZone = require('../dateZone');

var addDirectorMeeting = function addDirectorMeeting(req, res) {
  counterSchema.findOneAndUpdate({
    id: "directorMeeting_seq"
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
        id: "directorMeeting_seq",
        seq: 1
      });
      newval.save();
      seqId = 1;
    } else {
      seqId = cd.seq;
    }

    var directorMeeting = new DirectorMeeting({
      _id: seqId,
      assign_to: req.body.assign_to,
      invite_to: req.body.invite_to,
      meeting_date: req.body.assign_date,
      shift: req.body.shift,
      Meeting_start: req.body.Meeting_start,
      Meeting_end: req.body.Meeting_end,
      Meeting_location: req.body.Meeting_location,
      Meeting_name: req.body.Meeting_name,
      Meeting_description: req.body.Meeting_description,
      meeting_remarks: req.body.director_remarks,
      created_by: req.body.created_by,
      created_at: timeZone.datezone
    });
    directorMeeting.save(function (err, docs) {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    });
  });
};

var getAllDirectorMeeting = function getAllDirectorMeeting(req, res) {
  DirectorMeeting.find(function (err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

var deleteDirectorMeeting = function deleteDirectorMeeting(req, res) {
  var deleteid = req.params.id;
  DirectorMeeting.findByIdAndDelete(deleteid, function (err, del) {
    if (!err) {
      res.json(del);
    } else {
      res.json(err);
    }
  });
};

var updateDirectorMeeting = function updateDirectorMeeting(req, res) {
  DirectorMeeting.findByIdAndUpdate(req.params.id, {
    assign_to: req.body.assign_to,
    invite_to: req.body.invite_to,
    meeting_date: req.body.assign_date,
    shift: req.body.shift,
    Meeting_start: req.body.Meeting_start,
    Meeting_end: req.body.Meeting_end,
    Meeting_location: req.body.Meeting_location,
    Meeting_name: req.body.Meeting_name,
    Meeting_description: req.body.Meeting_description,
    meeting_remarks: req.body.director_remarks,
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
  addDirectorMeeting: addDirectorMeeting,
  getAllDirectorMeeting: getAllDirectorMeeting,
  deleteDirectorMeeting: deleteDirectorMeeting,
  updateDirectorMeeting: updateDirectorMeeting
};