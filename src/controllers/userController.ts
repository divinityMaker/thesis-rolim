import { Request, Response} from 'express'
import User from '../models/user';
import dotenv from 'dotenv';

dotenv.config();

export const loginAction = async (req : Request, res : Response) => {
    if(req.body.username && req.body.password) {
        let username: string = req.body.username;
        let password: string = req.body.password;

        let account = await User.findOne({username, password});

        if (account){
        req.session.isAuth = true;
        return res.redirect('admin/dashboard');
        } else if (!account){
            return res.redirect('/admin/error');
        }
    }   else if(!req.body.username || !req.body.password){
        return res.redirect('/admin/error')
    }
}

