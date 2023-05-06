"use strict";

var mongoose = require('mongoose');

var Reporting = mongoose.model("reporting", {
  _id: {
    type: Number,
    required: true
  },
  aadhar_number: {
    type: String,
    required: true
  },
  employee_type: {
    type: String
  },
  total_vsr: {
    type: Number
  },
  paid_vsr: {
    type: Number
  },
  fine: {
    type: Number
  },
  other: {
    type: Number
  },
  paid_fine: {
    type: Number
  },
  paid_other: {
    type: Number
  },
  otherWaiver: {
    type: Number
  },
  fineWaiver: {
    type: Number
  },
  vsrWaiver: {
    type: Number
  },
  pending_value: {
    type: Number
  },
  total_value: {
    type: Number
  },
  selection_type: {
    type: String
  },
  reported_at: {
    type: String
  },
  batch_starting_date: {
    type: Date
  },
  employee_name: {
    type: String
  },
  father_name: {
    type: String
  },
  mother_name: {
    type: String
  },
  "package": {
    type: String
  },
  gender: {
    type: String
  },
  blood_group: {
    type: String
  },
  contact_no1: {
    type: Number
  },
  contact_no2: {
    type: Number
  },
  dob: {
    type: Date
  },
  address: {
    type: String
  },
  email: {
    type: String
  },
  identity_mark: {
    type: String
  },
  maritial_status: {
    type: String
  },
  designation: {
    type: String
  },
  nationality: {
    type: String
  },
  religion: {
    type: String
  },
  college_name: {
    type: String
  },
  college_city: {
    type: String
  },
  college_state: {
    type: String
  },
  qualification: {
    type: String
  },
  stream: {
    type: String
  },
  financial_year: {
    type: String
  },
  offer_letter_account: {
    type: String
  },
  band: {
    type: String
  },
  offer_letter_date: {
    type: Date
  },
  status: {
    type: Number
  },
  reported_by: {
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
  Reporting: Reporting
};