import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import jimp from 'jimp';
import { Request, Response, NextFunction } from 'express';

export const multerConfig = {
    //dest: path.resolve(__dirname, '..', '/public', 'uploads'),
    // storage: multer.diskStorage({
    //     destination: (req, file, cb) => {
    //         cb(null, path.resolve(__dirname, '..', './public/uploads/'))
    //     },
    //    filename: (req, file, cb) => {
    //         const ext = file.mimetype.split('/')[1];
    //         let filename = `${uuidv4()}.${ext}`;
    //         req.body.photo = filename;

    //         cb(null, filename);
    //     },
    // }),
    // fileFilter: (req, file, cb) => {
    //             const allowedMimes: string[] = [
    //                 'image/jpeg',
    //                 'image/jpg',
    //                 'image/png'
    //             ]
    
    //             if (allowedMimes.includes(file.allowedMimes)) {
    //                 cb(null, true);
    //             }   else {
    //                 cb(new Error('Arquivo não suportado.'));
    //             }
    //         }
    
    storage: multer.memoryStorage(),
        // fileFilter: (req, file, cb) => {
        //     const allowedMimes: string[] = [
        //         'image/jpeg'
        //     ]

        //     if (allowedMimes.includes(file.allowedMimes)) {
        //         cb(null, true);
        //     }   else {
        //         cb(null, false);
        //     }
        // }
}   

export const resize = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) {
        next();
        return;
    }

    const ext = req.file.mimetype.split('/')[1];
    let filename = `${uuidv4()}.${ext}`;
    req.body.photo = filename;

    const photo = await jimp.read(req.file.buffer);
    photo.resize(177, 177);
    photo.write('./src/public/uploads/'+filename);
    next(); 
}
