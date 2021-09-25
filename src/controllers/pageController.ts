import { Request, Response } from 'express';
import { userInfo } from 'os';
import products from '../models/products';

export const home = (req: Request, res: Response) => {

    res.send('home no controller');
    //res.render('pages/page');
}

export const find = (req: Request, res: Response) => {

    //res.render('pages/page');
}

export const about = (req: Request, res: Response) => {

    //res.render('pages/page');
}