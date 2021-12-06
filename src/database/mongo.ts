import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
    // CONEXÃO AO DATABASE.
export const mongoConnect = async () => {
    try{
        console.log("Conectando ao database...");
        await connect(process.env.MONGO_URL as string);
        console.log("Conectado ao database com sucesso.");
    } catch(error) {
        console.log("Ocorreu um erro de conexão ao database:", error);
    }
}