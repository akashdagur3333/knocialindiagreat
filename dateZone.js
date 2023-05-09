const moment = require("moment/moment");

var date=new Date();

const datezone=moment(date).format('YYYY/MM/DD');

module.exports={datezone}