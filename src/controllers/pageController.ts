import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import productSchema from '../models/products';

// PÁGINA INICIAL.
export const home = (req: Request, res: Response) => {
    res.render('pages/home', {
        menu: createMenuObject('home')
    });
};

//  PÁGINA DE PRODUTOS.
export const store = async (req: Request, res: Response) => {
    //  CONSULTA OS PRODUTOS NO DATABASE.
    const produtos = await productSchema.find({}).sort({tittle: 1}).limit(18);
    res.render('pages/store', { 
        menu: createMenuObject('products'), 
        produtos 
    });
};

// PÁGINA DE REVENDEDORES.
export const find = (req: Request, res: Response) => {
    res.render('pages/findUs', {
        menu: createMenuObject('stores')
    });
};

// PÁGINA SOBRE NÓS.
export const about = (req: Request, res: Response) => {
    res.render('pages/aboutUs', {
        menu: createMenuObject('about')
    });
};

//  PÁGINA DE CRIAÇÃO.
export const create = (req: Request, res: Response) => {
    res.render('pages/createPage');
};

//  PÁGINA ÚNICA DE CADA PRODUTO.
export const individualPage = async (req: Request, res: Response) => {
    //  CONSULTA O DATABASE PARA ACESSO VIA SLUG.
    const produtos = await productSchema.findOne({ slug: req.params.slug });
    res.render('pages/individualPage', { produtos: produtos });
};

//  PÁGINA DE EDIÇÃO.
export const edit = async (req: Request, res: Response) => {
    const produtos = await productSchema.findOne({ slug: req.params.slug });
    res.render('pages/editPage', { produtos: produtos });
};

//  PÁGINA DE ADMIN.
export const adminLogin = async (req: Request, res: Response) => {
    res.render('pages/adminLogin');
};