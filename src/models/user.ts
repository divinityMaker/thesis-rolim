import { Schema, model, connection } from 'mongoose';

type userType = {
    username : String,
    password : String
}

const User = new Schema<userType>({
    username : String,
    password : String
})

const modelName : string = 'User';

export default (connection && connection.models[modelName]) ? 
    connection && connection.models[modelName]
    :
    model<userType>(modelName, User);
