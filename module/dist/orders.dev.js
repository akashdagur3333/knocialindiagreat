"use strict";

var mongoose = require('mongoose');

var Orders = mongoose.model("Orders", {
  _id: {
    type: Number,
    required: true
  },
  user_id: {
    type: Number,
    required: true
  },
  user_name: {
    type: String,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  products: [],
  created_by: {
    type: String
  },
  created_at: {
    type: Date,
    dafault: Date.now()
  }
});
module.exports = Orders;