"use strict";

var authRole = function authRole(permission) {
  return function (req, res, next) {
    var userRole = req.body.role;
    console.log(userRole);

    if (permission.includes(userRole)) {
      console.log('great');
      next();
    } else {
      return res.json({
        message: "You dont have permission"
      });
    }
  };
};

module.exports = {
  authRole: authRole
};