const path = require('path');
const multer = require('multer');
const { MulterError } = require('multer');

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        if(file.fieldname === "photo"){
            cb(null, 'uploads/photo/')
        }
        else if(file.fieldname === "signature"){
            cb(null, 'uploads/signature/')
        }
    },
    filename: function(req, file, cb){
        if(file.fieldname === "photo"){
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
        }
        else if (file.fieldname === "signature"){
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
        }
    }
})

var upload = multer({
    storage: storage,
    fileFilter: function(req, file, callback){
        if(
            file.mimetype == "image/png" || 
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg"
        ){
            callback(null, true)
        } else{
            console.log('only jgp/jpeg and png file supported')
            callback(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
}).fields(
    [
        {name: 'photo', maxCount:1},
        {name: 'signature', maxCount:1}
    ]
)

module.exports = upload