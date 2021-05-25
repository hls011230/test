var express = require("express");
var router = express.Router();
var formidable = require("formidable");
const { render } = require("ejs");

router.get("/index",function(req,res){
    res.render("index",{username:"小黄"})
})


// 查询数据
router.post("get_data",function(req,res){
   var form = formidable.IncomingForm();
   form.parse(req,function(err,fileds){
       var name = fileds.name;
       var query = 'delete from database where name = '+name+'';
       mysql.query(query,function(err,rows){
           res.json({"d":1})
       })
   })

})


module.exports = router;
