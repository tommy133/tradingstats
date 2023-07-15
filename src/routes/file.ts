import express, { Router } from 'express';
import multer from 'multer';

const router: Router = express.Router();

let store = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, './uploads');
    },
    filename:function(req,file,cb){
        cb(null, Date.now()+'.'+file.originalname);
    }
});


let upload = multer({storage:store}).single('file');

router.post('/upload', function(req,res,next){
    upload(req,res,function(err){
        if(err){
            return res.status(501).json({error:err});
        }
        //do all database record saving activity
        return res.json({originalname:req?.file?.originalname, uploadname:req?.file?.filename});
    });
});

export default router;
