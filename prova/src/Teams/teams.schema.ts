import { model, Schema } from "mongoose";

const TeamSchema = new Schema({

    trainerName: String,
    team: [{
        name: String,
        type: Array,
        stats: Array,
        dex: Number,
        height: Number,
        weight: Number,
        moves: Array
    }],
})

export default model('PokemonTeam', TeamSchema)