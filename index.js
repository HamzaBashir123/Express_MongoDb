import express from 'express'
import authRoutes from './routes/authRoutes.js'
import profileRoutes from './routes/profileRoutes.js'
import connectDB  from "./Db/connect.js"

const app = express()

const PORT = 8000

app.use(express.json())

app.use((req, res, next)=> {
    req.body.date = new Date()
    console.log(req.body)
    next()
})

app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)

app.listen(PORT,async()=> {

    await connectDB()
    console.log("Server chal gaya at port number" + PORT)
})

