var orm= require('../config/orm.js');

var Book ={
    all: function(cb){
        orm.all("books", function(res){
            cb(res);
        });
    },
    create: function(cols, vals, cb){
        orm.create("books", cols, vals,function(res){
            cb(res);
        });
    },
    update: function(objColsVals, condition,cb){
        orm.update("books",obkColVals, condition,function(res){
            cb(res);
        })
    },
    delete:function(condition,cb){
        orm.delete("books",condition,function(res){
            cd(res);
        })
    }
};

module.exports=Book;

