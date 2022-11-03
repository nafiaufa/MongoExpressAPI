const dbConfig = require('../../config/db.config')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const db = {}

db.mogoose = mongoose
db.url = dbConfig.url
db.posts = require('./post.model')(mongoose)

module.exports = db