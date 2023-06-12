const request = require('supertest');
const express = require('express');

const app = express();

describe('Teste de rotas', () => {
    test('Deve retornar uma lista de times (GET /teams)', () => {
        const res = request(app).get('/teams')

        res.expect('Content-Type', /json/).expect(200, [
            {
                "_id": "64861503586577993ef0e695",
                "trainerName": "Leon",
                "team": [
                    [
                        {
                            "_id": "64860876af1635d9540a4259",
                            "name": "bulbasaur",
                            "type": [
                                "grass",
                                "poison"
                            ],
                            "stats": [
                                {
                                    "nameStat": "hp",
                                    "value": 45
                                },
                                {
                                    "nameStat": "attack",
                                    "value": 49
                                },
                                {
                                    "nameStat": "defense",
                                    "value": 49
                                },
                                {
                                    "nameStat": "special-attack",
                                    "value": 65
                                },
                                {
                                    "nameStat": "special-defense",
                                    "value": 65
                                },
                                {
                                    "nameStat": "speed",
                                    "value": 45
                                }
                            ],
                            "dex": 1,
                            "height": 7,
                            "weight": 69,
                            "moves": [
                                "leaf-storm",
                                "worry-seed",
                                "echoed-voice",
                                "sleep-talk"
                            ],
                            "__v": 0
                        }
                    ],
                    [
                        {
                            "_id": "64860876af1635d9540a425a",
                            "name": "ivysaur",
                            "type": [
                                "grass",
                                "poison"
                            ],
                            "stats": [
                                {
                                    "nameStat": "hp",
                                    "value": 60
                                },
                                {
                                    "nameStat": "attack",
                                    "value": 62
                                },
                                {
                                    "nameStat": "defense",
                                    "value": 63
                                },
                                {
                                    "nameStat": "special-attack",
                                    "value": 80
                                },
                                {
                                    "nameStat": "special-defense",
                                    "value": 80
                                },
                                {
                                    "nameStat": "speed",
                                    "value": 60
                                }
                            ],
                            "dex": 2,
                            "height": 10,
                            "weight": 130,
                            "moves": [
                                "bide",
                                "solar-beam",
                                "double-edge",
                                "amnesia"
                            ],
                            "__v": 0
                        }
                    ],
                    [
                        {
                            "_id": "64860876af1635d9540a425c",
                            "name": "charmander",
                            "type": [
                                "fire"
                            ],
                            "stats": [
                                {
                                    "nameStat": "hp",
                                    "value": 39
                                },
                                {
                                    "nameStat": "attack",
                                    "value": 52
                                },
                                {
                                    "nameStat": "defense",
                                    "value": 43
                                },
                                {
                                    "nameStat": "special-attack",
                                    "value": 60
                                },
                                {
                                    "nameStat": "special-defense",
                                    "value": 50
                                },
                                {
                                    "nameStat": "speed",
                                    "value": 65
                                }
                            ],
                            "dex": 4,
                            "height": 6,
                            "weight": 85,
                            "moves": [
                                "scratch",
                                "swift",
                                "rest",
                                "bide"
                            ],
                            "__v": 0
                        }
                    ],
                    [
                        {
                            "_id": "64860876af1635d9540a425d",
                            "name": "charmeleon",
                            "type": [
                                "fire"
                            ],
                            "stats": [
                                {
                                    "nameStat": "hp",
                                    "value": 58
                                },
                                {
                                    "nameStat": "attack",
                                    "value": 64
                                },
                                {
                                    "nameStat": "defense",
                                    "value": 58
                                },
                                {
                                    "nameStat": "special-attack",
                                    "value": 80
                                },
                                {
                                    "nameStat": "special-defense",
                                    "value": 65
                                },
                                {
                                    "nameStat": "speed",
                                    "value": 80
                                }
                            ],
                            "dex": 5,
                            "height": 11,
                            "weight": 190,
                            "moves": [
                                "slash",
                                "facade",
                                "fury-cutter",
                                "fire-fang"
                            ],
                            "__v": 0
                        }
                    ],
                    [
                        {
                            "_id": "64860876af1635d9540a425e",
                            "name": "charizard",
                            "type": [
                                "fire",
                                "flying"
                            ],
                            "stats": [
                                {
                                    "nameStat": "hp",
                                    "value": 78
                                },
                                {
                                    "nameStat": "attack",
                                    "value": 84
                                },
                                {
                                    "nameStat": "defense",
                                    "value": 78
                                },
                                {
                                    "nameStat": "special-attack",
                                    "value": 109
                                },
                                {
                                    "nameStat": "special-defense",
                                    "value": 85
                                },
                                {
                                    "nameStat": "speed",
                                    "value": 100
                                }
                            ],
                            "dex": 6,
                            "height": 17,
                            "weight": 905,
                            "moves": [
                                "secret-power",
                                "substitute",
                                "sleep-talk",
                                "endure"
                            ],
                            "__v": 0
                        }
                    ],
                    [
                        {
                            "_id": "64860876af1635d9540a425f",
                            "name": "squirtle",
                            "type": [
                                "water"
                            ],
                            "stats": [
                                {
                                    "nameStat": "hp",
                                    "value": 44
                                },
                                {
                                    "nameStat": "attack",
                                    "value": 48
                                },
                                {
                                    "nameStat": "defense",
                                    "value": 65
                                },
                                {
                                    "nameStat": "special-attack",
                                    "value": 50
                                },
                                {
                                    "nameStat": "special-defense",
                                    "value": 64
                                },
                                {
                                    "nameStat": "speed",
                                    "value": 43
                                }
                            ],
                            "dex": 7,
                            "height": 5,
                            "weight": 90,
                            "moves": [
                                "strength",
                                "aqua-ring",
                                "rapid-spin",
                                "iron-defense"
                            ],
                            "__v": 0
                        }
                    ]
                ],
                "__v": 0
            },
            {
                "_id": "648615b2909aebaaf1318385",
                "trainerName": "Lucas",
                "team": [
                    [
                        {
                            "_id": "64860876af1635d9540a4259",
                            "name": "bulbasaur",
                            "type": [
                                "grass",
                                "poison"
                            ],
                            "stats": [
                                {
                                    "nameStat": "hp",
                                    "value": 45
                                },
                                {
                                    "nameStat": "attack",
                                    "value": 49
                                },
                                {
                                    "nameStat": "defense",
                                    "value": 49
                                },
                                {
                                    "nameStat": "special-attack",
                                    "value": 65
                                },
                                {
                                    "nameStat": "special-defense",
                                    "value": 65
                                },
                                {
                                    "nameStat": "speed",
                                    "value": 45
                                }
                            ],
                            "dex": 1,
                            "height": 7,
                            "weight": 69,
                            "moves": [
                                "leaf-storm",
                                "worry-seed",
                                "echoed-voice",
                                "sleep-talk"
                            ],
                            "__v": 0
                        }
                    ],
                    [
                        {
                            "_id": "64860876af1635d9540a425a",
                            "name": "ivysaur",
                            "type": [
                                "grass",
                                "poison"
                            ],
                            "stats": [
                                {
                                    "nameStat": "hp",
                                    "value": 60
                                },
                                {
                                    "nameStat": "attack",
                                    "value": 62
                                },
                                {
                                    "nameStat": "defense",
                                    "value": 63
                                },
                                {
                                    "nameStat": "special-attack",
                                    "value": 80
                                },
                                {
                                    "nameStat": "special-defense",
                                    "value": 80
                                },
                                {
                                    "nameStat": "speed",
                                    "value": 60
                                }
                            ],
                            "dex": 2,
                            "height": 10,
                            "weight": 130,
                            "moves": [
                                "bide",
                                "solar-beam",
                                "double-edge",
                                "amnesia"
                            ],
                            "__v": 0
                        }
                    ],
                    [
                        {
                            "_id": "64860876af1635d9540a425c",
                            "name": "charmander",
                            "type": [
                                "fire"
                            ],
                            "stats": [
                                {
                                    "nameStat": "hp",
                                    "value": 39
                                },
                                {
                                    "nameStat": "attack",
                                    "value": 52
                                },
                                {
                                    "nameStat": "defense",
                                    "value": 43
                                },
                                {
                                    "nameStat": "special-attack",
                                    "value": 60
                                },
                                {
                                    "nameStat": "special-defense",
                                    "value": 50
                                },
                                {
                                    "nameStat": "speed",
                                    "value": 65
                                }
                            ],
                            "dex": 4,
                            "height": 6,
                            "weight": 85,
                            "moves": [
                                "scratch",
                                "swift",
                                "rest",
                                "bide"
                            ],
                            "__v": 0
                        }
                    ],
                    [
                        {
                            "_id": "64860876af1635d9540a425d",
                            "name": "charmeleon",
                            "type": [
                                "fire"
                            ],
                            "stats": [
                                {
                                    "nameStat": "hp",
                                    "value": 58
                                },
                                {
                                    "nameStat": "attack",
                                    "value": 64
                                },
                                {
                                    "nameStat": "defense",
                                    "value": 58
                                },
                                {
                                    "nameStat": "special-attack",
                                    "value": 80
                                },
                                {
                                    "nameStat": "special-defense",
                                    "value": 65
                                },
                                {
                                    "nameStat": "speed",
                                    "value": 80
                                }
                            ],
                            "dex": 5,
                            "height": 11,
                            "weight": 190,
                            "moves": [
                                "slash",
                                "facade",
                                "fury-cutter",
                                "fire-fang"
                            ],
                            "__v": 0
                        }
                    ],
                    [
                        {
                            "_id": "64860876af1635d9540a425e",
                            "name": "charizard",
                            "type": [
                                "fire",
                                "flying"
                            ],
                            "stats": [
                                {
                                    "nameStat": "hp",
                                    "value": 78
                                },
                                {
                                    "nameStat": "attack",
                                    "value": 84
                                },
                                {
                                    "nameStat": "defense",
                                    "value": 78
                                },
                                {
                                    "nameStat": "special-attack",
                                    "value": 109
                                },
                                {
                                    "nameStat": "special-defense",
                                    "value": 85
                                },
                                {
                                    "nameStat": "speed",
                                    "value": 100
                                }
                            ],
                            "dex": 6,
                            "height": 17,
                            "weight": 905,
                            "moves": [
                                "secret-power",
                                "substitute",
                                "sleep-talk",
                                "endure"
                            ],
                            "__v": 0
                        }
                    ],
                    [
                        {
                            "_id": "64860876af1635d9540a425f",
                            "name": "squirtle",
                            "type": [
                                "water"
                            ],
                            "stats": [
                                {
                                    "nameStat": "hp",
                                    "value": 44
                                },
                                {
                                    "nameStat": "attack",
                                    "value": 48
                                },
                                {
                                    "nameStat": "defense",
                                    "value": 65
                                },
                                {
                                    "nameStat": "special-attack",
                                    "value": 50
                                },
                                {
                                    "nameStat": "special-defense",
                                    "value": 64
                                },
                                {
                                    "nameStat": "speed",
                                    "value": 43
                                }
                            ],
                            "dex": 7,
                            "height": 5,
                            "weight": 90,
                            "moves": [
                                "strength",
                                "aqua-ring",
                                "rapid-spin",
                                "iron-defense"
                            ],
                            "__v": 0
                        }
                    ]
                ],
                "__v": 0
            }
        ]);
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
            .expect(200, [
                {
                    "_id": "648615b2909aebaaf1318385",
                    "trainerName": "Lucas",
                    "team": [
                        [
                            {
                                "_id": "64860876af1635d9540a426a",
                                "name": "pidgeot",
                                "type": [
                                    "normal",
                                    "flying"
                                ],
                                "stats": [
                                    {
                                        "nameStat": "hp",
                                        "value": 83
                                    },
                                    {
                                        "nameStat": "attack",
                                        "value": 80
                                    },
                                    {
                                        "nameStat": "defense",
                                        "value": 75
                                    },
                                    {
                                        "nameStat": "special-attack",
                                        "value": 70
                                    },
                                    {
                                        "nameStat": "special-defense",
                                        "value": 70
                                    },
                                    {
                                        "nameStat": "speed",
                                        "value": 101
                                    }
                                ],
                                "dex": 18,
                                "height": 15,
                                "weight": 395,
                                "moves": [
                                    "quick-attack",
                                    "whirlwind",
                                    "frustration",
                                    "tackle"
                                ],
                                "__v": 0
                            }
                        ],
                        [
                            {
                                "_id": "64860876af1635d9540a425a",
                                "name": "ivysaur",
                                "type": [
                                    "grass",
                                    "poison"
                                ],
                                "stats": [
                                    {
                                        "nameStat": "hp",
                                        "value": 60
                                    },
                                    {
                                        "nameStat": "attack",
                                        "value": 62
                                    },
                                    {
                                        "nameStat": "defense",
                                        "value": 63
                                    },
                                    {
                                        "nameStat": "special-attack",
                                        "value": 80
                                    },
                                    {
                                        "nameStat": "special-defense",
                                        "value": 80
                                    },
                                    {
                                        "nameStat": "speed",
                                        "value": 60
                                    }
                                ],
                                "dex": 2,
                                "height": 10,
                                "weight": 130,
                                "moves": [
                                    "bide",
                                    "solar-beam",
                                    "double-edge",
                                    "amnesia"
                                ],
                                "__v": 0
                            }
                        ],
                        [
                            {
                                "_id": "64860876af1635d9540a425c",
                                "name": "charmander",
                                "type": [
                                    "fire"
                                ],
                                "stats": [
                                    {
                                        "nameStat": "hp",
                                        "value": 39
                                    },
                                    {
                                        "nameStat": "attack",
                                        "value": 52
                                    },
                                    {
                                        "nameStat": "defense",
                                        "value": 43
                                    },
                                    {
                                        "nameStat": "special-attack",
                                        "value": 60
                                    },
                                    {
                                        "nameStat": "special-defense",
                                        "value": 50
                                    },
                                    {
                                        "nameStat": "speed",
                                        "value": 65
                                    }
                                ],
                                "dex": 4,
                                "height": 6,
                                "weight": 85,
                                "moves": [
                                    "scratch",
                                    "swift",
                                    "rest",
                                    "bide"
                                ],
                                "__v": 0
                            }
                        ],
                        [
                            {
                                "_id": "64860876af1635d9540a425d",
                                "name": "charmeleon",
                                "type": [
                                    "fire"
                                ],
                                "stats": [
                                    {
                                        "nameStat": "hp",
                                        "value": 58
                                    },
                                    {
                                        "nameStat": "attack",
                                        "value": 64
                                    },
                                    {
                                        "nameStat": "defense",
                                        "value": 58
                                    },
                                    {
                                        "nameStat": "special-attack",
                                        "value": 80
                                    },
                                    {
                                        "nameStat": "special-defense",
                                        "value": 65
                                    },
                                    {
                                        "nameStat": "speed",
                                        "value": 80
                                    }
                                ],
                                "dex": 5,
                                "height": 11,
                                "weight": 190,
                                "moves": [
                                    "slash",
                                    "facade",
                                    "fury-cutter",
                                    "fire-fang"
                                ],
                                "__v": 0
                            }
                        ],
                        [
                            {
                                "_id": "64860876af1635d9540a425e",
                                "name": "charizard",
                                "type": [
                                    "fire",
                                    "flying"
                                ],
                                "stats": [
                                    {
                                        "nameStat": "hp",
                                        "value": 78
                                    },
                                    {
                                        "nameStat": "attack",
                                        "value": 84
                                    },
                                    {
                                        "nameStat": "defense",
                                        "value": 78
                                    },
                                    {
                                        "nameStat": "special-attack",
                                        "value": 109
                                    },
                                    {
                                        "nameStat": "special-defense",
                                        "value": 85
                                    },
                                    {
                                        "nameStat": "speed",
                                        "value": 100
                                    }
                                ],
                                "dex": 6,
                                "height": 17,
                                "weight": 905,
                                "moves": [
                                    "secret-power",
                                    "substitute",
                                    "sleep-talk",
                                    "endure"
                                ],
                                "__v": 0
                            }
                        ],
                        [
                            {
                                "_id": "64860876af1635d9540a425f",
                                "name": "squirtle",
                                "type": [
                                    "water"
                                ],
                                "stats": [
                                    {
                                        "nameStat": "hp",
                                        "value": 44
                                    },
                                    {
                                        "nameStat": "attack",
                                        "value": 48
                                    },
                                    {
                                        "nameStat": "defense",
                                        "value": 65
                                    },
                                    {
                                        "nameStat": "special-attack",
                                        "value": 50
                                    },
                                    {
                                        "nameStat": "special-defense",
                                        "value": 64
                                    },
                                    {
                                        "nameStat": "speed",
                                        "value": 43
                                    }
                                ],
                                "dex": 7,
                                "height": 5,
                                "weight": 90,
                                "moves": [
                                    "strength",
                                    "aqua-ring",
                                    "rapid-spin",
                                    "iron-defense"
                                ],
                                "__v": 0
                            }
                        ]
                    ],
                    "__v": 0
                }
            ])
    })

    test('Deve deletar um time pelo nome do treinador (DELETE /teams/:trainerName)', () => {
        request(app)
            .delete('/teams/Leon')
            .expect(200, "Sucessfuly deleted team!!")
    })
})