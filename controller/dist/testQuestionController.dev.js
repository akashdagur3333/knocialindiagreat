"use strict";

var _require = require('../module/testQuestion'),
    TestQuestion = _require.TestQuestion;

var counterSchema = require('../module/counter');

var _require2 = require('html-to-text'),
    convert = _require2.convert;

var addQuestion = function addQuestion(req, res) {
  counterSchema.findOneAndUpdate({
    id: "testQuestion_seq"
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
        id: "testQuestion_seq",
        seq: 1
      });
      newval.save();
      seqId = 1;
    } else {
      seqId = cd.seq;
    }

    var Question = new TestQuestion({
      _id: seqId,
      questionType: req.body.questionType,
      name: req.body.name,
      question: req.body.question,
      opt1: req.body.opt1,
      opt2: req.body.opt2,
      opt3: req.body.opt3,
      opt4: req.body.opt4,
      answere: req.body.answere,
      status: req.body.status,
      created_by: req.body.created_by,
      created_at: Date.now()
    });
    Question.save(function (err, docs) {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    });
  });
};

var getAllQuestion = function getAllQuestion(req, res) {
  // Hello World
  TestQuestion.find(function (err, docs) {
    if (!err) {
      var question = docs.map(function (x) {
        var options = {
          wordwrap: 130 // ...

        };
        var html = x.question;
        var text = convert(html, options);
        x.question = text;
      });
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

var deleteQuestion = function deleteQuestion(req, res) {
  var deleteid = req.params.id;
  TestQuestion.findByIdAndDelete(deleteid, function (err, del) {
    if (!err) {
      res.json(del);
    } else {
      res.json(err);
    }
  });
}; // const updateShift=(req,res)=>{
//     Shift.findByIdAndUpdate(req.params.id,{
//         questionType:req.body.questionType,
//         name:req.body.name,
//         question:req.body.question,
//         opt1:req.body.opt1,
//         opt2:req.body.opt2,
//         opt3:req.body.opt3,
//         opt4:req.body.opt4,
//         answere:req.body.answere,
//         status:req.body.status,
//         updated_by:req.body.created_by,
//         updated_at:Date.now()
//     },(docs,err)=>{
//         if(!err){
//             res.json(docs);
//         }
//         else{
//             res.json(err);
//         }
//     })
// }


module.exports = {
  addQuestion: addQuestion,
  getAllQuestion: getAllQuestion,
  deleteQuestion: deleteQuestion
};