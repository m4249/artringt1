const conn=require('../db/conn')
const admin_blog=require('../schema/admin_blogs')

const mongoose = require('mongoose');
var db = mongoose.connection;

const router = require('express').Router();

var express = require("express");
const mid = express();
mid.use(express.static("public"));
mid.use(express.urlencoded({ extended: true }));


router.route('/').get((req, res) => {
    res.set({ "Allow-access-Allow-Origin": "*"});
    return res.redirect("index.html");
});
router.route('/').post((req, res) => {
    var imageurl = req.body.imageurl;
    var title = req.body.title;
    var author = req.body.author;
    var description = req.body.description;
    
    var data = new admin_blog({
        image_url:imageurl,
        title: title,
        author: author,
        description: description
    });
    
    db.collection("adminblog").insertOne(data, (err, collection) => {
        if (err) throw err;
        console.log("admin_blog success");
    }); 
    return res.redirect("index.html");
});

module.exports=router