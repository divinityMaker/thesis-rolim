import { Request, Response} from 'express'
import User from '../models/user';
import dotenv from 'dotenv';

dotenv.config();

export const loginAction = async (req : Request, res : Response) => {
    if(req.body.username && req.body.password) {
        let username: string = req.body.username;
        let password: string = req.body.password;

        let account = await User.findOne({
            where: {username, password}
        });

        req.session.isAuth = true;

            return res.redirect('admin/criar')
        }
    }
