import { describe, test, expect } from '@jest/globals'
import { ArrayRandomValues } from '../src/atividades/ArrayRandomValues'

describe('Recebendo valores aleatórios', () => {
    const arrayRandomValues = new ArrayRandomValues()
    
    test('Deve retornar um array de valores aleatórios do tamanho inserido', () => {
        let arr = []
        arr = arrayRandomValues.getRandomValues(arr, 5)
        expect(arr.length).toBe(5)
    })
})