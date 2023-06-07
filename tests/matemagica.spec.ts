import { describe, test, expect } from "@jest/globals"
import { Matemagica } from "../src/atividades/matemagica/Matemagica"

describe('Adições', () => {
    const matemagica = new Matemagica()
    test('Deve receber dois números como parâmetro e retornar a somatória', () => {
        expect(matemagica.getSum(2, 1)).toBe(3)
    })
    test('Deve retornar erro de parâmetros ao tentar somar uma string', () => {
        expect(matemagica.getSum(2, '1')).toBe("Tipo do parâmetro não aceito")
    })
    test('Deve retornar erro de parâmetros ao tentar somar um booleano', () => {
        expect(matemagica.getSum(2, true)).toBe("Tipo do parâmetro não aceito")
    })
})

describe('Divisões', () => {
    const matemagica = new Matemagica()
    test('Deve receber dois números como parâmetro e retornar a divisão', () => {
        expect(matemagica.getDiv(8, 2)).toBe(4)
    })
    test('Deve retornar erro de parâmetros ao tentar dividir uma string', () => {
        expect(matemagica.getDiv(8, '2')).toBe("Tipo do parâmetro não aceito")
    })
    test('Deve retornar erro de parâmetros ao tentar dividir um booleano', () => {
        expect(matemagica.getDiv(8, true)).toBe("Tipo do parâmetro não aceito")
    })
})

describe('Subtrações', () => {
    const matemagica = new Matemagica()
    test('Deve receber dois números como parâmetro e retornar a subtração', () => {
        expect(matemagica.getSub(8, 2)).toBe(6)
    })
    test('Deve retornar erro de parâmetros ao tentar subtrair uma string', () => {
        expect(matemagica.getSub(8, '2')).toBe("Tipo do parâmetro não aceito")
    })
    test('Deve retornar erro de parâmetros ao tentar subtrair um booleano', () => {
        expect(matemagica.getSub(8, true)).toBe("Tipo do parâmetro não aceito")
    })
})

describe('Multiplicações', () => {
    const matemagica = new Matemagica()
    test('Deve receber dois números como parâmetro e retornar a multiplicação', () => {
        expect(matemagica.getMulti(8, 2)).toBe(16)
    })
    test('Deve retornar erro de parâmetros ao tentar multiplicar uma string', () => {
        expect(matemagica.getMulti(8, '2')).toBe("Tipo do parâmetro não aceito")
    })
    test('Deve retornar erro de parâmetros ao tentar multiplicar um booleano', () => {
        expect(matemagica.getMulti(8, true)).toBe("Tipo do parâmetro não aceito")
    })
})

