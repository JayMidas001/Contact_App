const express = require(`express`)
const cors = require(`cors`)
const userRouter = require(`./router/userRouter`)
const contactRouter = require(`./router/contactRouter`)
require(`./config/dbConfig`)
require(`dotenv`).config()
const app = express()
app.use(cors({origin:'*'}))

app.use(express.json())
app.use(`/api/v1`, userRouter)
app.use('/api/v1', contactRouter)
const port = process.env.port || 3343

app.listen(port,()=>{
    console.log(`App is up & running on port: ${port}`);
    })