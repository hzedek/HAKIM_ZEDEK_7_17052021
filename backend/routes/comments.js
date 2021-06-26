module.exports = app => {
    const Comments = require("../controllers/Comments.js");
    const basicAuth =require('../middleware/auth');
    var router = require("express").Router();
    const express = require('express');

    
    router.post("/", Comments.create);
    router.get("/",  Comments.get);
    router.delete("/:id",Comments.delete);
    router.put("/:id", Comments.update);
    app.use('/api/Comments', router);
  };