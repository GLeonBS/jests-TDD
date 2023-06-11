import { pokemon } from "./pokemon.types"

export interface TeamsTypesRecived {
    trainerName: String,
    team: Array<String>
}

export interface TeamsTypesPosted {
    trainerName: String,
    team: Array<any>
}