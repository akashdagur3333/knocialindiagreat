"use strict";

var _require = require('../module/product'),
    product = _require.product;

var decoder = require('jwt-decode');

var counterSchema = require('../module/counter');

var addProduct = function addProduct(req, res) {
  counterSchema.findOneAndUpdate({
    id: "product_seq"
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
        id: "product_seq",
        seq: 1
      });
      newval.save();
      seqId = 1;
    } else {
      seqId = cd.seq;
    } // var created_by =localStorage.getItem('token');
    // created_by=decoder(created_by);


    var Product = new product({
      _id: seqId,
      category: req.body.category,
      productName: req.body.productName,
      productPrice: req.body.productPrice,
      description: req.body.description,
      unit: req.body.unit,
      created_by: req.body.created_by,
      status: req.body.status
    });
    Product.save(function (err, docs) {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    });
  });
};

var getProduct = function getProduct(req, res) {
  product.find(function (err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

var updateProduct = function updateProduct(req, res) {
  var updated = Date.now();
  product.findByIdAndUpdate(req.params._id, {
    category: req.body.category,
    productName: req.body.productName,
    productPrice: req.body.productPrice,
    description: req.body.description,
    unit: req.body.unit,
    updated_by: req.body.created_by,
    updated_at: updated,
    status: req.body.status
  }, function (err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

var deleteProduct = function deleteProduct(req, res) {
  product.findByIdAndDelete(req.params._id, function (err, docs) {
    if (!err) {
      res.json({
        message: 'Delete Successfully'
      });
    } else {
      res.json(err);
    }
  });
};

module.exports = {
  addProduct: addProduct,
  getProduct: getProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct
};