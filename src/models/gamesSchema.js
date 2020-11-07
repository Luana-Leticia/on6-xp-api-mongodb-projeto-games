const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gamesSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    platforms: {
        type: String,
        required: true
    },
    first_release_date: {
        type: Number,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    }
}, {
    collection: 'games',
    versionKey: false
})

const games = mongoose.model('games', gamesSchema)

module.exports = games