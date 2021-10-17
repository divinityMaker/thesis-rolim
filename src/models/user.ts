import { Schema, model, connection } from 'mongoose';

type userType = {
    username : {
        type : string,
        trim : true,
        required : 'Insira um usuário'
    },
    password : {
        type : string,
        required : 'Insira uma senha'
    }
}

const User = new Schema<userType>({
    username : {
        type : String,
        trim : true,
        required : 'Insira um usuário'
    },
    password : {
        type : String,
        required : 'Insira uma senha'
    }
})

const modelName : string = 'User';

export default (connection && connection.models[modelName]) ? 
    connection && connection.models[modelName]
    :
    model<userType>(modelName, User)
    ;
