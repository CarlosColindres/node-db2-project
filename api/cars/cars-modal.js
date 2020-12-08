const db = require('../../data/dbConfig')

module.exports = {
    getAll() {
        return db('cars')
    },
    create(car) {
        return db('cars').insert(car)
    }
}