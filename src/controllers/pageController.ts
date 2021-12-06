import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import productSchema from '../models/products';

// PÁGINA INICIAL.
export const home = (req: Request, res: Response) => {
    res.render('pages/home', {
        menu: createMenuObject('home')
    });
};

// PÁGINA DE PRODUTOS.
export const store = async (req: Request, res: Response) => {
    //  CONSULTA OS PRODUTOS NO DATABASE.
    let produtos = await productSchema.find({}).sort({ tittle: 1 });
    let quantidade = produtos.length;

    console.log(produtos);

    res.render('pages/store', {
        menu: createMenuObject('products'),
        produtos,
        quantidade
    });
};

// PÁGINA DE VIOLINOS.
export const violinos = async (req: Request, res: Response) => {

    let violins = await productSchema.find({ tag: {$in: ['violino']} });
    let quantidade = violins.length;

    res.render('pages/store', {
        menu: createMenuObject('violins'),
        violins,
        quantidade
    });
};

// PÁGINA DE VIOLAS.
export const violas = async (req: Request, res: Response) => {

    let viola = await productSchema.find({ tag: {$in: ['viola']} });
    let quantidade = viola.length;

    res.render('pages/store', {
        menu: createMenuObject('violas'),
        viola,
        quantidade
    });
};

// PÁGINA DE VIOLONCELOS.
export const violoncelos = async (req: Request, res: Response) => {

    let violoncelo = await productSchema.find({ tag: {$in: ['celos', 'violoncelos', 'celo', 'violoncelo']} });
    let quantidade = violoncelo.length;

    res.render('pages/store', {
        menu: createMenuObject('celos'),
        violoncelo,
        quantidade
    });
};

// PÁGINA DE CONTRA-BAIXO.
export const cBaixos = async (req: Request, res: Response) => {

    let cBaixos = await productSchema.find({ tag: {$in: ['contrabaixos', 'contra-baixos', 'contra-baixo', 'contrabaixo']} });
    let quantidade = cBaixos.length;

    res.render('pages/store', {
        menu: createMenuObject('cbaixos'),
        cBaixos,
        quantidade
    });
};

// PÁGINA DE REVENDEDORES.
export const find = (req: Request, res: Response) => {
    res.render('pages/ourPartners', {
        menu: createMenuObject('stores')
    });
};

// PÁGINA SOBRE NÓS.
export const about = (req: Request, res: Response) => {
    res.render('pages/aboutUs', {
        menu: createMenuObject('about')
    });
};

// PÁGINA DE CRIAÇÃO.
export const create = (req: Request, res: Response) => {
    res.render('pages/createPage');
};

// PÁGINA ÚNICA DE CADA PRODUTO.
export const individualPage = async (req: Request, res: Response) => {
    //  CONSULTA O DATABASE PARA ACESSO VIA SLUG.
    const produtos = await productSchema.findOne({ slug: req.params.slug });
    res.render('pages/individualPage', { produtos });
};

// PÁGINA DE EDIÇÃO.
export const edit = async (req: Request, res: Response) => {
    const produtos = await productSchema.findOne({ slug: req.params.slug });
    res.render('pages/editPage', { produtos: produtos });
};

// PÁGINA DE LOGIN.
export const adminLogin = async (req: Request, res: Response) => {
    res.render('pages/adminLogin');
};

// PAINEL.
export const adminDashboard = async (req: Request, res: Response) => {

    let items = await productSchema.find({}).sort({ tittle: 1 });
    let quantidade = items.length;

    res.render('pages/adminDashboard', { items, quantidade });
};

export const errorPage = async (req: Request, res: Response) => {
    res.render('pages/error');
};