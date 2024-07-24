const express = require(`express`)
const router = require(`./router/userRouter`)
require(`./config/dbConfig`)
require(`dotenv`).config()
const app = express()

app.use(express.json())
app.use(router)
app.use('/api/v1/user', router)
const port = process.env.port || 3344

app.listen(port,()=>{
    console.log(`App is up & running on port: ${port}`);
    })