import { PokemonService } from "./pokemon.service";
import { Request, Response } from 'express'

class PokemonController {
    async Atv1A(req: Request, res: Response) {
        const pokemons = await new PokemonService().Atv1A()
        
        return res.status(200).json(pokemons)
    } 

    async Atv1B(req: Request, res: Response) {
        const pokemons = await new PokemonService().Atv1B()
        
        return res.status(200).json(pokemons)
    } 

    async getTypes(req: Request, res: Response) {
        const pokemons = await new PokemonService().getTypes(req.params.type)
        
        return res.status(200).json(pokemons)
    }

    async getDex(req: Request, res: Response) {
        const pokemons = await new PokemonService().getDex(req.params.dex)
        
        return res.status(200).json(pokemons)
    }

    async getName(req: Request, res: Response) {
        const pokemons = await new PokemonService().getName(req.params.name)
        
        return res.status(200).json(pokemons)
    }
}


export default new PokemonController()