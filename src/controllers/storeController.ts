import { Request, Response } from 'express';
import productSchema from '../models/products';

export const store = (req: Request, res: Response) => {

    //res.render('pages/page');
}

export const create = (req: Request, res: Response) => {
    res.render('pages/storeAdd');
};

//Cria um produto e o adiciona no banco de dados.
export const createAction = async (req: Request, res: Response) => {

//Formatando as tags para não quebrar o DB.       
    //req.body.tags = req.body.tag.split(',').map((item: string) => item.trim()); 
    
//Em caso de erro, será notificado pelo try/catch.
    try{
        const create = new productSchema(req.body);
        await create.save();
    }catch(error) {
        console.log("Produto não foi adicionado.", error);
        return res.redirect('/admin/criar');
    };
    
            //Caso tudo de certo, será redirecionado para a aba /produtos.
    console.log("Produto adicionado com sucesso.");
    res.redirect('/produtos');
    };