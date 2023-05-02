"use strict";

var mongoose = require('mongoose');

var TestQuestion = mongoose.model("testQuestions", {
  _id: {
    type: Number,
    required: true
  },
  questionType: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  opt1: {
    type: String,
    required: true
  },
  opt2: {
    type: String,
    required: true
  },
  opt3: {
    type: String,
    required: true
  },
  opt4: {
    type: String,
    required: true
  },
  answere: {
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
  TestQuestion: TestQuestion
};