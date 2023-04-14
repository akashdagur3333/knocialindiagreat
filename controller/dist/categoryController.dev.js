"use strict";

var _require = require('mongoose'),
    model = _require.model;

var _require2 = require('../module/category'),
    category = _require2.category;

var counterSchema = require('../module/counter');

var addCategory = function addCategory(req, res) {
  counterSchema.findOneAndUpdate({
    id: "category_seq"
  }, {
    "$inc": {
      "seq": 1
    }
  }, {
    "new": true
  }, function (err, cd) {
    var seqId;

    if (cd == null) {
      var newval = new counterSchema({
        id: "category_seq",
        seq: 1
      });
      newval.save();
      seqId = 1;
    } else {
      seqId = cd.seq;
    }

    var Category = new category({
      _id: seqId,
      categoryName: req.body.category,
      status: req.body.status
    });
    Category.save(function (err, docs) {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    });
  });
};

var showCategory = function showCategory(req, res) {
  category.find(function (docs, err) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

var deleteCategory = function deleteCategory(req, res) {
  var deleteid = req.params._id;
  console.log(deleteid);
  category.findByIdAndDelete(deleteid, function (err, msg) {
    if (!err) {
      res.json(msg);
    } else {
      res.json(err);
    }
  });
};

var updateCategory = function updateCategory(req, res) {
  category.findByIdAndUpdate(req.params._id, {
    categoryName: req.body.category,
    status: req.body.status
  }, function (err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

module.exports = {
  showCategory: showCategory,
  addCategory: addCategory,
  deleteCategory: deleteCategory,
  updateCategory: updateCategory
};