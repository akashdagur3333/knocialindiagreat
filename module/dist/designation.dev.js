"use strict";

var mongoose = require('mongoose');

var Designation = mongoose.model("designation", {
  _id: {
    type: Number,
    required: true
  },
  head_department: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  created_by: {
    type: String
  },
  created_at: {
    type: Date
  },
  updated_by: {
    type: String
  },
  updated_at: {
    type: Date
  }
});
module.exports = {
  Designation: Designation
};