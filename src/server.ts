import express, { Request, Response, ErrorRequestHandler } from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';
import adminRoutes from './routes/admin';
import session from 'express-session';
import { mongoConnect } from './database/mongo';
import { urlencoded } from 'body-parser';
import { default as connectMongoDBSession} from 'connect-mongodb-session';

dotenv.config(); // CARREGA O CONTEÚDO DO dotENV.

mongoConnect(); // CONECTANDO AO BANCO DE DADOS.

const server = express();
const MongoDBStore = connectMongoDBSession(session);

server.set('view engine', 'mustache'); // DEFININDO O MOTOR VISUAL.
server.set('views', path.join(__dirname, 'views')); // CAMINHO DOS ARQUIVOS.
server.engine('mustache', mustache()); // MOTOR VISUAL.

server.use(express.static(path.join(__dirname, '../public'))); // PASTA ESTÁTICA.

server.use(express.json());
server.use(urlencoded({extended: true})); // QUERYSTRING PARSING.

var store = new MongoDBStore({
    uri: process.env.MONGO_URL as string,
    collection: 'mySessions'
});

server.use(session({
    secret:process.env.SECRET_KEY as string,
    resave:false,
    saveUninitialized:false,
    store: store
}));

    // ROTAS
server.use(mainRoutes);
server.use(adminRoutes);

server.use((req: Request, res: Response)=>{
    res.render('pages/404');
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(400); // BAD REQUEST
}

server.listen(process.env.PORT); // INICIANDO O SERVIDOR LOCAL.