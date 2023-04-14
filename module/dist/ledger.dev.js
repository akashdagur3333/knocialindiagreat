"use strict";

var mongoose = require('mongoose');

var Ledger = mongoose.model("ledger", {
  _id: {
    type: Number,
    required: true
  },
  ledger_name: {
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
  Ledger: Ledger
};