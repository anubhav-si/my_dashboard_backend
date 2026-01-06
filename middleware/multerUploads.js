const multer = require("multer");

const storage = multer.diskStorage({});

const uploads = multer({
    storage,
    limits:{fileSize: 5 * 1024 * 1024},
    fileFilter:(req,file,cb)=>{
        if(!file.mimetype.startsWith("image/")){
            return cb(new Error("only image file allowed"),false)
        }
        cb(null,true);
    }
})

module.exports = uploads;