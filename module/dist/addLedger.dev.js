"use strict";

var mongoose = require('mongoose');

var Ledger = mongoose.model("categories", {
  _id: {
    type: Number,
    required: true
  },
  LedgerName: {
    type: String,
    required: true
  },
  created_by: {
    type: String,
    required: true
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