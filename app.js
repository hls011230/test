var express = require("express");
var session = require('express-session');
var path = require('path');
// 引入路径
var indexctrl = require('./routes/indexctr')



var app = express();
// 设置模板引擎
var ejs = require('ejs');
app.engine('.html',ejs.__express);
app.set("view engine","html");
// 静态化文件夹
app.use(express.static(path.join(__dirname,"public")));


// 使用session
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: '123',
  name:"hls",
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge:8640000},
  
}))

// 路由
app.use("/",indexctrl);
app.use("/admin",indexctrl);







// 监听端口
app.listen(3000);