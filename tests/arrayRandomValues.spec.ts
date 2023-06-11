import { describe, test, expect } from '@jest/globals'
import { ArrayRandomValues } from '../src/atividades/ArrayRandomValues'
import { ProductTypes } from '../src/atividades/types/product.types'

describe('Recebendo valores aleatórios', () => {
    const arrayRandomValues = new ArrayRandomValues()
    const products: ProductTypes[] = [
        { nome: "Caneta", qtde: 10, preco: 7.99 },
        { nome: "Impressora", qtde: 0, preco: 649.5 },
        { nome: "Caderno", qtde: 4, preco: 27.1 },
        { nome: "Lapis", qtde: 3, preco: 5.82 },
        { nome: "Tesoura", qtde: 1, preco: 19.99 },
        { nome: "Estojo", qtde: 7, preco: 9.99 },
        { nome: "Teclado", qtde: 2, preco: 609.99 },
        { nome: "Tenis", qtde: 3, preco: 350.99 },
        { nome: "Fone", qtde: 5, preco: 198.99 },
        { nome: "Mochila", qtde: 15, preco: 150.99 },
    ]

    test('Deve retornar um array de valores aleatórios do tamanho inserido', () => {

        let randomProducts = arrayRandomValues.getRandomArray(products, 5)

        expect(randomProducts.length).toBe(5)
    })

    test('Deve retornar um array aleatório baseado no array inserido', () => {

        let randomProducts = arrayRandomValues.getRandomArray(products, 10)

        expect(randomProducts).not.toBe(products)
    })

    test('Deve retornar um array aleatório do mesmo tipo do array inserido como parametro', () => {

        let randomProducts = arrayRandomValues.getRandomArray(products, 10)

        expect(typeof products).toEqual(typeof randomProducts)
    })
})