import pokemonSchema from './pokemon.schema'
import { writeFile } from 'fs/promises'

export class PokemonService {
    async Atv1A() {
        const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
        const pokeUrls = await pokemons.json().then(resolve => {
            return resolve.results
        })
        const pokeAtv1 = pokeUrls.map(async pokemon => {
            let url = pokemon.url

            const resposta = await fetch(url)
            const result = await resposta.json()

            const pokeStat = await result.stats.map(pokeStat => {
                return {
                    nameStat: pokeStat.stat.name,
                    value: pokeStat.base_stat
                }
            })

            const pokeType = result.types.map(typeIndex => {
                return typeIndex.type.name
            })
            const pokeMoves = await result.moves.map(movesUrl => {
                const moves =  movesUrl.move.name
                return moves
            })
            function randomMoves(item) {
                const arr = item.sort(() => Math.random() - 0.5)
                const result = arr.slice(0, 4)
                return result.map(data => Object.assign(data))
            }

            const moves = randomMoves(pokeMoves)

            const res = {
                name: result.name,
                type: pokeType,
                stats: pokeStat,
                dex: result.game_indices[9].game_index,
                height: result.height,
                weight: result.weight,
                moves: moves
            }
            return res
        })
        const resEsperada = await Promise.all(pokeAtv1)

        return resEsperada
    }

    async Atv1B() {
        const pokemons = await this.Atv1A()
        await writeFile('pokeURL.json', JSON.stringify(pokemons, null, 2))
        const result = await pokemonSchema.insertMany(pokemons)

        return result
    }

    async find(name) {
        const findedPokemon = await pokemonSchema.findOne({name: name})
        return findedPokemon
    }

    async getTypes(type) {
        const result = await pokemonSchema.find({type: type})
        return result
    }

    async getDex(dex) {
        const result = await pokemonSchema.find({dex: dex})
        return result
    }

    async getName(name) {
        const result = await pokemonSchema.find({name: name})
        return result
    }



}