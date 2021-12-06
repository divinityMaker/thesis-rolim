import { Request, Response } from 'express';
import productSchema from '../models/products';

//  CRIAR PRODUTO.
export const createAction = async (req: Request, res: Response) => {
    //   FORMATA AS TAGS PARA UM ARRAY.
    req.body.tag = req.body.tag.toLowerCase();
    req.body.tag = req.body.tag.split(',').map((item: string) => item.trim());
    //  CRIA O SCHEMA COM OS VALORES PASSADO NO FORMULÁRIO. 
    const create = new productSchema(req.body);

    try {
        await create.save(); // SALVA O SCHEMA COM OS VALORES NO DATABASE.
    } catch (error) {
        console.log("Produto não foi adicionado.", error);
        return res.redirect('/admin/criar');
    };

    console.log("Produto adicionado com sucesso.");
    res.redirect('/admin/dashboard');
};

//  EDITAR PRODUTO.
export const editAction = async (req: Request, res: Response) => {

    req.body.tag = req.body.tag.toLowerCase();
    req.body.slug = require('slug')(req.body.tittle, { lower: true });
    req.body.tag = req.body.tag.split(',').map((item: string) => item.trim());

    try {
        await productSchema.updateOne(
            { slug: req.params.slug },
            req.body
        );
    } catch (error) {
        return res.redirect('/admin/' + req.params.slug + '/editar');
    };
    
    res.redirect('/admin/dashboard');
};

//  APAGAR PRODUTO.
export const deleteAction = async (req: Request, res: Response) => {

    try {
        await productSchema.deleteOne({ slug: req.params.slug });
    } catch (error) {
        return res.redirect('/admin/' + req.params.slug + '/editar');
    };

    res.redirect('/admin/dashboard');
};