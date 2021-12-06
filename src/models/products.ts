import { Schema, model, connection } from 'mongoose';
const slug = require('slug');

type productsType = {
    photo : string,
    tittle : {
        type : string,
        trim : true,
        required : 'Insira um título'
    },
    slug : String,
    body : {
        type : string,
        trim : true
    },
    price : {
        type : string,
        trim : true
    }
    tag : [String]
}

const productSchema = new Schema<productsType>({
    photo : String,
    tittle : {
        type : String,
        trim : true,
        required : 'Insira um título'
    },
    slug : String,
    body : {
        type : String,
        trim : true
    },
    price : {
        type : String,
        trim : true
    },
    tag : [String]
})

productSchema.pre('save', function(next) {
    if(this.isModified('tittle')) {
        this.slug = slug( this.tittle, {lower:true} );
    }
    next();
});

const modelName : string = 'Produtos';

export default (connection && connection.models[modelName]) ? 
    connection && connection.models[modelName]
    :
    model<productsType>(modelName, productSchema);