"use strict";

var mongoose = require('mongoose');

var HrActivity = mongoose.model("hrActivity", {
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
  assign_date: {
    type: String
  },
  shift: {
    type: String
  },
  activity_start: {
    type: String
  },
  activity_end: {
    type: String
  },
  activity_location: {
    type: String
  },
  activity_name: {
    type: String
  },
  activity_description: {
    type: String
  },
  hr_remarks: {
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
  HrActivity: HrActivity
};