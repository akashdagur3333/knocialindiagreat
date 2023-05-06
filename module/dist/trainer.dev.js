"use strict";

var mongoose = require('mongoose');

var Trainer = mongoose.model("trainer", {
  _id: {
    type: Number,
    required: true
  },
  name: {
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
  Trainer: Trainer
};