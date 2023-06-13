const request = require('supertest');
const express = require('express');

const app = express();

describe('Teste de rotas', () => {
    test('Deve retornar uma lista de times (GET /teams)', () => {
        const res = request(app).get('/teams')

        res.expect('Content-Type', /json/).expect(200)
    })

    test('Deve cadastrar um time (POST /teams)', () => {
        request(app)
            .post('/teams')
            .send({
                "trainerName": "Lucas",
                "team": [
                    "bulbasaur",
                    "ivysaur",
                    "charmander",
                    "charmeleon",
                    "charizard",
                    "squirtle"]
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })

    test('Deve alterar um time pelo nome do treinador (PUT /teams/:trainerName)', () => {
        request(app)
            .put('/teams/Lucas')
            .send({
                "trainerName": "Lucas",
                "team": [
                    "pidgeot",
                    "ivysaur",
                    "charmander",
                    "charmeleon",
                    "charizard",
                    "squirtle"]
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })

    test('Deve encontrar um time pelo nome do treinador (GET /teams/:trainerName)', () => {
        request(app)
            .get('/teams/Lucas')
            .expect('Content-Type', /json/)
            .expect(200)
    })

    test('Deve deletar um time pelo nome do treinador (DELETE /teams/:trainerName)', () => {
        request(app)
            .delete('/teams/Leon')
            .expect(200, "Sucessfuly deleted team!!")
    })
})