import express, { Router } from 'express';
import multer from 'multer';
import path from 'path';

const router: Router = express.Router();

const store = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, 'uploads');
    },
    filename: (req,file,cb) => {
        cb(null, Date.now()+'.'+file.originalname);
    }
});


const upload = multer({storage:store});

router.post('/upload', upload.single('chart'), (req,res) => {
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });  
    } 
    console.log('File received');
    return res.send({
        filename: req.file.filename,
        success: true
    })  
});

router.post('/download', (req,res) => {
    const filepath = path.join(__dirname,'../../uploads') +'/'+ req.body.filename;
    res.sendFile(filepath);
});

export default router;
