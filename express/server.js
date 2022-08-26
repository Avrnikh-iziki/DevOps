require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT
const url = `mongodb://${process.env.HOST}/test`
const myRoutes = require('./routes')

app.use(cors())
app.use(express.json())

mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() =>console.log("MongoDB successfully connected"))
    .catch(err => console.log(err))

app.use('/express', myRoutes)
app.listen(port, () => {
    console.log(`Server is running at port  ${port}`)
})
