import { describe, test, expect } from "@jest/globals"
import { Matemagica } from "../src/atividades/matemagica/Matemagica"

describe('Contas', () => {
    const matemagica = new Matemagica()
    test('Deve receber dois números como parâmetro e retornar a somatória', () => {
        expect(matemagica.getSum(2, 1)).toBe(3)
    })
    
    test('Deve retornar erro de parâmetros ao tentar somar qualquer parâmetro que não seja um número', () => {
        expect(matemagica.getSum(2, '1')).toBe("Tipo do parâmetro não aceito")
    })

    test('Deve receber dois números como parâmetro e retornar a divisão', () => {
        expect(matemagica.getDiv(8, 2)).toBe(4)
    })

    test('Deve receber dois números como parâmetro e retornar a subtração', () => {
        expect(matemagica.getSub(8, 2)).toBe(6)
    })

    test('Deve receber dois números como parâmetro e retornar a multiplicação', () => {
        expect(matemagica.getMulti(8, 2)).toBe(16)
    })
})

