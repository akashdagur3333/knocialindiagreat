"use strict";

var moment = require("moment/moment");

var date = new Date();
var datezone = moment(date).format('YYYY/MM/DD');
module.exports = {
  datezone: datezone
};