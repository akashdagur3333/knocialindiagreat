"use strict";

var mongoose = require('mongoose');

var Sub_department = mongoose.model("sub_department", {
  _id: {
    type: Number,
    required: true
  },
  head_department: {
    type: String,
    required: true
  },
  Sub_department: {
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
  Sub_department: Sub_department
};