var {TestQuestion}=require('../module/testQuestion');
const counterSchema=require('../module/counter');
const { convert } = require('html-to-text');

const addQuestion=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"testQuestion_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"testQuestion_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var Question= new TestQuestion({
                _id:seqId,
                questionType:req.body.questionType,
                name:req.body.name,
                question:req.body.question,
                opt1:req.body.opt1,
                opt2:req.body.opt2,
                opt3:req.body.opt3,
                opt4:req.body.opt4,
                answere:req.body.answere,
                status:req.body.status,
                created_by:req.body.created_by,
                created_at:Date.now()
            });
            Question.save((err,docs)=>{
                if(!err){
                    res.json(docs);
                }
                else{
                    res.json(err);
                }
            });
        }
    )
        }

const getAllQuestion=(req,res)=>{
    
// Hello World
    TestQuestion.find((err,docs)=>{
        if(!err){
            
           var question= docs.map(x=>
                {
                    const options = {
                        wordwrap: 130,
                        // ...
                      };
                      const html = x.question;
                      const text = convert(html, options);
                      x.question=text;
                                 })
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteQuestion= (req,res)=>{
    var deleteid=req.params.id;
    TestQuestion.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}

// const updateShift=(req,res)=>{
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


module.exports={addQuestion,getAllQuestion,deleteQuestion}