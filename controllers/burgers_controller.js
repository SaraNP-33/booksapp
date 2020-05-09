var express =require("express");

var router=express.Router();

var Book =require("../models/Books.js");

router.get("/",function(req,res){
    Book.all(function(data){
        var renderhbs ={
            books:data
        };
        console.log(renderhbs);
        console.log("*********************************")
        res.render("index", renderhbs);
    });
});

router.post ("/api/books", function(req,res){
    console.log(req.body);
    console.log("--------------------------------------")
    Book.create([
        "title", "devoured"
    ],[
        req.body.title, req.body.devoured
    ], function(result){
        res.json({id: result.inserId})
    });

});

router.put("/api/books/:id", function(req,res){
    var condition = "id =" + req.params.id;

    console.log("condition", condition);

    Book.update({
        devoured:req.body.devoured
    }, condition,function(result){
        if(result.changedRows==0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    });
});

router.delete("/api/books/:id", function(req, res){
    var condition="id =" + req.params.id;

    Book.delete(condition, function(result){
        if(result.affectedRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    });
});

module.exports= router;