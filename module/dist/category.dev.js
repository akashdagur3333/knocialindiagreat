"use strict";

var mongoose = require('mongoose');

var category = mongoose.model("categories", {
  _id: {
    type: Number
  },
  categoryName: {
    type: String
  },
  status: {
    type: Boolean
  }
});
module.exports = {
  category: category
};