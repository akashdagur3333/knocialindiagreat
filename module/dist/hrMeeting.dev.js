"use strict";

var mongoose = require('mongoose');

var HrMeeting = mongoose.model("hrMeeting", {
  _id: {
    type: Number,
    required: true
  },
  assign_to: {
    type: String
  },
  invite_to: {
    type: Array
  },
  meeting_date: {
    type: String
  },
  shift: {
    type: String
  },
  meeting_start: {
    type: String
  },
  meeting_end: {
    type: String
  },
  meeting_location: {
    type: String
  },
  meeting_name: {
    type: String
  },
  meeting_description: {
    type: String
  },
  meeting_remarks: {
    type: String
  },
  created_by: {
    type: String
  },
  created_at: {
    type: String
  },
  updated_by: {
    type: String
  },
  updated_at: {
    type: String
  }
});
module.exports = {
  HrMeeting: HrMeeting
};