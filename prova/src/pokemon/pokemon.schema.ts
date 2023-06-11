import { model, Schema } from "mongoose";

const PokemonSchema = new Schema ({

    name: {
        required: true,
        type: String
    },
    type:{
        required: true,
        type: Array
    },
    stats: {
        required: true,
        type: Array
    },
    dex: {
        required: true,
        type: Number
    },
    height: {
        required: true,
        type: Number
    },
    weight: {
        required: true,
        type: Number
    },
    moves: {
        required: true,
        type: Array
    }


})

export default model('Pokemon', PokemonSchema)