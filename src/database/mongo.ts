import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const mongoConnect = async () => {
    try{
        console.log("Conectando ao database...");
        await connect(process.env.MONGO_URL as string);
        console.log("MongoDB conectado com sucesso");
    } catch(error) {
        console.log("Ocorreu um erro de conexão ao database:", error);
    }
}