"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
const store = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '.' + file.originalname);
    }
});
const upload = (0, multer_1.default)({ storage: store });
router.post('/upload', upload.single('chart'), (req, res) => {
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
    });
});
router.post('/download', (req, res) => {
    const filepath = path_1.default.join(__dirname, '../../uploads') + '/' + req.body.filename;
    res.sendFile(filepath);
});
exports.default = router;
