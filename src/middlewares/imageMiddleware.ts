import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import jimp from 'jimp';

module.exports = {
    dest: path.resolve(__dirname, '..', '/public', 'uploads'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', './public/uploads/'))
        },
        filename: (req, file, cb) => {
            const ext = file.mimetype.split('/')[1];
            let filename = `${uuidv4()}.${ext}`;
            req.body.photo = filename;
            
            cb(null, filename);
        },
    })
    
    // storage: multer.memoryStorage(),
    //     fileFilter: (req, file, cb) => {
    //         const allowedMimes: string[] = [
    //             'image/jpeg'
    //         ]

    //         if (allowedMimes.includes(file.allowedMimes)) {
    //             cb(null, true);
    //         }   else {
    //             cb(null, false);
    //         }
    //     }

}   