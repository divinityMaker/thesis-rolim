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
    tag : {
        type : string,
        trim : true,
        lowercase : true
    }
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
    tag : {
        type : Array,
        trim : true,
    }
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
    model<productsType>(modelName, productSchema)
    ;