const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const cookie = require("cookie-parser");
const ejs = require("ejs");
const multer = require("multer");
const async = require("async");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const expressValidator = require("express-validator");
const sweetalert = require("sweetalert2");
const http = require("https");
const _ = require("lodash");
const mongoose = require("mongoose");

const app = express();

app.set("view engine" , "ejs");

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(cookie());


// mongoose.set("strictQuery", false);
// // mongoose.set("useNewUrlParser",true);

// main().catch((err) => console.log(err));

// async function main() {
// 	await mongoose.connect("mongodb+srv://admin-naveen:Kkavn425@cluster0.hvrkrmt.mongodb.net/health-hist");
// 	console.log("Connected");
// }


const loginSchema = {
    email : String,
    password : String
}

const logindetail = new mongoose.model("logindetail",loginSchema);

app.get("/",function(req,res){
    res.render("home");
});


// app.post("/",function(req,res){
//     const email1 = req.body.email;
//     const password1 = req.body.password;

//     const newlogindetail = new logindetail({
//         email : email1,
//         password : password1
//     })    
//     // newlogindetail.save();

// }); 

app.get("/LogIn",function(req,res){
    res.render("LogIn");
});

app.get("/SignUp",function(req,res){
    res.render("SignUp");
});

app.get("/",function(req,res){
    res.render("home");
});

app.get("/Dashboard",function(req,res){
    res.render("Dashboard");
});

app.get("/Department",function(req,res){
    res.render("Department");
});

app.get("/Employees",function(req,res){
    res.render("Employees");
});

app.get("/Appointment",function(req,res){
    res.render("Appointment");
});

const PORT = process.env.PORT || 3000 ;
app.listen(PORT,function(req,res){
    console.log(`port ok on ${PORT}`);
});