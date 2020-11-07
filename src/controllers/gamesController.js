const gamesCollection = require('../models/gamesSchema')

const getGames = (request, response) => {
    gamesCollection.find((internalError, games) => {
        if (internalError) {
            response.status(500).send(internalError) 
        } else {
            response.status(200).send(games) 
        }
    })
}

const getGameById = (request, response) => {
    const gameId = request.params.id
    gamesCollection.findById(gameId, (internalError, game) => {
        if (internalError) {
            response.status(500).send(internalError) 
        } else if (game) {
            response.status(201).send(game) 
        } else {
            response.status(404).send({ message: "Id não encontrado!"}) 
        }
    })
}

const updateGameById = (request, response) => {
    const gameId = request.params.id
    const edited = request.body
    const isNew = { new: true }
    gamesCollection.findByIdAndUpdate(gameId, edited, isNew,(internalError, game) => {
        if (internalError) {
            response.status(500).send(internalError) 
        } else if (game) {
            response.status(201).send(game) 
        } else {
            response.status(404).send({ message: "Id não encontrado!"}) 
        }
    })
}

const addGame = (request, response) => {
    const newGame = request.body
    const addedNewGame = new gamesCollection(newGame)
    addedNewGame.save((internalError) => {
        if (internalError) {
            response.status(500).send(internalError)
        } else {
            response.status(200).send(addedNewGame)
        }
    })
}

const deleteGameById = (request, response) => {
    const gameId = request.params.id
    gamesCollection.findByIdAndDelete(gameId, (internalError, game) => {
        if (internalError) {
            response.status(500).send(internalError)
        } else if (game) {
            response.status(200).send({ message: "Game deletado com sucesso!"})
        } else {
            response.status(404).send({ message: "Id não encontrado!"})
        }
    })
    
}

module.exports = {
    getGames,
    getGameById,
    updateGameById,
    addGame,
    deleteGameById
}