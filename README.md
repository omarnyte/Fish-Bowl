# Fish Bowl

## Models 

### Room
```javascript
    {
        slug: {
            type: String,
            required: "Slug is required"
        },
        players: [playerSchema]
        },
        maxPlayers: {
            type: Number, 
            default: 12
        },
        currentGame: {
            type: Mongoose.Object.id,
            ref: "Game"
        },
        previousGames: Object
    }
```

### Player (subschema)
```javascript
    {
        username: {
            type: String,
            required: "Username is required"
        }
    }
```

### Team (subschema)
```javascript
    {
        name: {
            type: String,
            required: "Team name is required",
            default: randomTeamNameGenerator()
        },
        players: [playerSchema]
    }
```

### Game
```javascript
    {
        scores: Object,
        teams: [teamSchema],
        currentTeamIndex: {
            type: Number, 
            default: 0
        },
        currentPlayerIndex: {            
            type: Number, 
            default: 0
        },
        currentRound: {
            type: String,
            enum: ["Taboo", "Charades", "Password"],
            default: "Taboo"
        },
        rounds: roundsSchema
        clues: [clueSchema]
    }
```

### Rounds (subschema)
```javascript
    {
        taboo: roundSchema,
        password: roundSchema,
        charades: roundSchema
    }
```

### Round (sub-subschema)
```javascript
    {
        guessedClues: [clueSchema],
        remainingClues: [clueSchema],
        scores: Object 
    }
```

### Clues (subschema)
```javascript
    {
        player: {
            type: String
        },
        phrase: {
            type: String
            validate: { 
                validator: function(v) { 
                    const splitPhrase = v.split(' ');
                    return splitPhrase <= 3 && splitPhrase > 0;
                }, 
                message: 'Clue phrase must be between 1 and 3 words.'
            }
        }
    }
```

## Global State
```javascript
    {
        entities: {
            clues: {
                remaining: [],
                guessed: [],
                skipped: []
            },
            round: {
                roundName: "Taboo"
            },
            game: {
                scores: {
                    "team1": 25,
                    "team2": 50
                }
            }
        },
        session: {
            currentUser: {
                username: "username",
                teamName: "team1"
            }
        }, 
        errors: {

        }
    }
```

## Routes
### Frontend Routes
* /lobby
* /createRoom/
* /room/:roomId
  

