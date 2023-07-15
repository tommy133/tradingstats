import express, { Router } from 'express';
import multer from 'multer';

const router: Router = express.Router();

let store = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'uploads');
    },
    filename:function(req,file,cb){
        cb(null, Date.now()+'.'+file.originalname);
    }
});


let upload = multer({storage:store});

router.post('/upload', upload.single('chart'), function(req,res){
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });  
    } else {
    console.log('file received');
    return res.send({
        success: true
    })
    }
});

export default router;
