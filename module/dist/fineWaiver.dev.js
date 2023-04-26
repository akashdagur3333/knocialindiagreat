"use strict";

var mongoose = require('mongoose');

var FineWaiver = mongoose.model("finewaiver", {
  _id: {
    type: Number
  },
  rpt_id: {
    type: String
  },
  name: {
    type: String
  },
  father_name: {
    type: String
  },
  amount: {
    type: Number
  },
  remarks: {
    type: String
  },
  gst_amount: {
    type: Number
  },
  waived_by: {
    type: String
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
  FineWaiver: FineWaiver
};