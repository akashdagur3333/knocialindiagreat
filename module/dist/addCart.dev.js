"use strict";

var mongoose = require('mongoose');

var Items = mongoose.model("items", {
  _id: {
    type: Number
  },
  user_id: {
    type: Number,
    required: true
  },
  data: [// {
    //     product_id:{type:Number},
    //     quantity:{type:Number},
    //     unit:{type:String},
    //     price:{type:Number}
    //     }
  ],
  created_by: {
    type: String
  },
  created_at: {
    type: Date,
    dafault: Date.now()
  }
});
module.exports = Items;