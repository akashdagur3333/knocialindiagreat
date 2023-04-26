"use strict";

var mongoose = require('mongoose');

var financial_year = mongoose.model("financial_year", {
  _id: {
    type: Number,
    required: true
  },
  year_financial: {
    type: String,
    required: true
  },
  status: {
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
  financial_year: financial_year
};