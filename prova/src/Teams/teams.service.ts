import { TeamsTypesRecived, TeamsTypesPosted } from "./types/teams.types" 
import  TeamModel  from "./teams.schema"
import { PokemonService } from "../pokemon/pokemon.service"

export class TeamService {
    async create(team: TeamsTypesRecived) {
        const nameTrainer = team.trainerName
        const pokemons = team.team.map(async data => {
            let pokemon = await new PokemonService().getName(data)
            return pokemon
        })
        const teamPosted: TeamsTypesPosted = {
            trainerName: nameTrainer,
            team: await Promise.all(pokemons)
        }
        
        const createdTeam = await TeamModel.create(teamPosted)

        return createdTeam
    }
    async list() {
        const listedTeam = await TeamModel.find()

        return listedTeam
    }
    async find(trainerName) {
        const findedTeam = await TeamModel.find({trainerName: trainerName})

        return findedTeam
    }
    async update(trainerName, dataToUpdate : TeamsTypesRecived) {
        const pokemons = dataToUpdate.team.map(async data => {
            let pokemon = await new PokemonService().getName(data)
            return pokemon
        })
        const updatedTeam = await TeamModel.findOneAndUpdate({trainerName: trainerName}, {
            trainerName : dataToUpdate.trainerName,
            team : await Promise.all(pokemons),
        }, {new : true})

        return updatedTeam
    }
    async delete(trainerName) {
        await TeamModel.findOneAndDelete({trainerName: trainerName})
        return
    }
}