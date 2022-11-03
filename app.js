const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const db = require('./app/models/')
db.mogoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log(`Database connected!`)
    }).catch((err) => {
        console.log(`Cannot connect to the database!`, err)
        process.exit()
    })

app.get('/', (req, res) => {
    res.json({
        message: "welcome guys ini nafi"
    })
})

require('./app/routes/post.routes')(app)

const PORT = 8080
app.listen(PORT, () =>{
    console.log(`server berjalan di http://localhost:${PORT}`)
})
