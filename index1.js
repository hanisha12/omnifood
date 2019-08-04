const express = require("express");
const bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var router = express.Router();

const app = express();

var User = require('./modules/upload');
var person=User.find({});
var Reg = require('./modules/registration');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(morgan('dev'));

app.use(session({
    secret: 'hannahnotblablabba',
    resave: false,
    saveUninitialized: true

}));

app.set('uploads',__dirname + '/views/uploads');
app.set('user',__dirname + '/views/user');
app.set('view engine', 'ejs');
app.get("/",function(req,res){
   res.sendFile(__dirname + "/public/index.html");
});

app.get('/register', function(req, res){
        res.sendFile(__dirname + '/public/colorlib-regform-2/index.html');
    });
app.post('/register', function(req, res){
  var name= req.body.name;
  var email= req.body.email;
  var password= req.body.password;
  var gender= req.body.gender;
  var pack= req.body.pack;
  var birthday= req.body.birthday;

  var newuser = new Reg();
  newuser.name=name;
  newuser.email=email;
  newuser.password=password;
  newuser.gender=gender;
  newuser.pack=pack;
  newuser.birthday=birthday;
  newuser.save(function(err,savdUser){
    if (err) {
      console.log(err);
      return res.status(500).send("user already exist");
    }
    return res.status(200).render("user", {name: req.body.name});;
  });
});

app.get('/login', function(req, res){
  res.sendFile(__dirname + '/public/login_v9/index.html');
});

app.post('/login', function(req, res){
  var email = req.body.email;
  var password = req.body.password;
  if(email=="hannah@admin.com" && password=="admin"){
    return res.redirect('/uploads');
  }
  else{
  Reg.findOne({email: req.body.email, password: req.body.password}, function(err,reg){
    if (err) {
      console.log(err);
      return res.status(500).send("error");
    }
    if(!reg) {
      return res.status(400).send("wrong input");
    }
    req.session.user = reg;
     return res.render("user", {name: req.body.email});
  });
}
});

app.get('/',function(req,res){
  if(!req.session.user){
    return res.status(401).send();
  }
  return res.status(200).render("user", {name: req.body.name});
});

app.get('/logout', function(req,res) {
  req.session.destroy();
  return res.status(200).send();
});
app.post('/logout', function(req,res){
  req.session.destroy(function(err){
    if (err) {
      return res.redirect('/login')
    }
    return res.redirect('/')
  })
});

app.get("/uploads",function(req,res){
  person.exec(function(err,data){
    if(err) throw err;
    res.render("uploads", {title:"Upload File", records:data});
  });
});

app.post('/thank', function (req, res){
 var myData = new User({
    name: req.body.name,
    email: req.body.email,
    feedback: req.body.feedback,
    findUs: req.body.findUs
 });

 myData.save(function(err,data) {
   if(err) throw err;
    else {
     res.status(400).sendFile(__dirname + "/public/index.html");
   }
  });
});


app.listen(3000,function(res,req){
  console.log("server is started at port 3000");
});
