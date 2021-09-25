import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';
import adminRoutes from './routes/admin';
import { mongoConnect } from './database/mongo';

dotenv.config();

mongoConnect(); //CONECTANDO AO BANCO DE DADOS

const server = express();

server.use(express.json());
server.use(express.urlencoded({extended:true}));


server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

//ROTAS
server.use(mainRoutes);
server.use(adminRoutes);

server.use((req, res)=>{
    res.send('404')
});

server.listen(process.env.PORT);