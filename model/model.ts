import mongoose from 'mongoose'

const modelSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    director:{
        type: String,
        required : true
    }
},
{
    timestamps : true
})

export const model = mongoose.model('movies',modelSchema,'moviesDb')