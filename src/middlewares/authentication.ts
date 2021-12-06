import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

export const auth = {
  private: (req: Request, res: Response, next: NextFunction) => {
    if (req.session.isAuth) {
      next();
    } else {
      res.redirect("/admin");
    }
  }
}
