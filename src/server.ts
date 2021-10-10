import express, { Request, Response, ErrorRequestHandler } from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';
import adminRoutes from './routes/admin';
import { mongoConnect } from './database/mongo';
import { urlencoded } from 'body-parser';

dotenv.config(); // CARREGA O CONTEÚDO DO dotENV.

mongoConnect(); // CONECTANDO AO BANCO DE DADOS.

const server = express();

server.set('view engine', 'mustache'); // DEFININDO O MOTOR VISUAL.
server.set('views', path.join(__dirname, 'views')); // CAMINHO DOS ARQUIVOS.
server.engine('mustache', mustache()); // MOTOR VISUAL.

server.use(express.static(path.join(__dirname, '../src/public'))); // PASTA ESTÁTICA.

server.use(express.json());
server.use(urlencoded({extended: true})); // QUERYSTRING PARSING.

    // ROTAS
server.use(mainRoutes);
server.use(adminRoutes);

server.use((req: Request, res: Response)=>{
    res.send('404')
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(400); // BAD REQUEST
}

server.listen(process.env.PORT); // INICIANDO O SERVIDOR LOCAL.