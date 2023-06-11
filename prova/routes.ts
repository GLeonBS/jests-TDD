import { Router } from 'express'
import  PokemonController  from './src/pokemon/pokemon.controller'
import  TeamController  from './src/Teams/teams.controller'

const routes =  Router()


routes.get('/pokemons', PokemonController.Atv1A)
routes.post('/pokemons', PokemonController.Atv1B)
routes.get('/getTypes/:type', PokemonController.getTypes)
routes.get('/getName/:name', PokemonController.getName)
routes.get('/getDex/:dex', PokemonController.getDex)
routes.post('/teams', TeamController.create)
routes.get('/teams', TeamController.list)
routes.get('/teams/:trainerName', TeamController.find)
routes.put('/teams/:trainerName', TeamController.update)
routes.delete('/teams/:trainerName', TeamController.delete)

export default routes