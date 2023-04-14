"use strict";

var jwt = require('jsonwebtoken');

var _require = require('../backend/data'),
    tokenPrivacy = _require.tokenPrivacy;

var Authanticate = function Authanticate(req, res, next) {
  try {
    var token = req.headers.authorization.split(' ')[1];
    var decode = jwt.verify(token, tokenPrivacy);
    req.user = decode;
    next();
  } catch (error) {
    if (error.name == "TokenExpiredError") {
      res.status(401).json({
        message: "Token Expired"
      });
    }

    res.json({
      message: "Authentication failed"
    });
  }
};

module.exports = {
  Authanticate: Authanticate
};