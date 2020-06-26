const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Memes = new Schema(
    {
        titulo: {
            type: String,
            default: null
        },
        descricao: {
            type: String,
            default: null
        },
        ano: {
            type: Number,
            default: null
        }
    },
    {   
        timestamps: true        
    }
);

module.exports = mongoose.model('Memes', Memes);