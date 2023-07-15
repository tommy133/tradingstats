import express, { Router } from 'express';
import multer from 'multer';
import path from 'path';

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

router.post('/upload', upload.single('chart'), (req,res) => {
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

router.post('/download', (req,res) => {
    const filepath = path.join(__dirname,'uploads') +'/'+ req.body.filename;
    res.sendFile(filepath);
});

export default router;
