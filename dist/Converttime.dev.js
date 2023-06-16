"use strict";

var convert = function convert(data) {
  var second = Math.floor(data % 60);
  var minute = Math.floor(data / 60 % 60);
  var hour = Math.floor(data / (60 * 60));
  return hour + 'H ' + minute + 'M ' + second + 'S';
};

module.exports = convert;