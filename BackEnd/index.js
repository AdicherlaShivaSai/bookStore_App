import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import bookRoute from "./routes/book.route.js"
import userRoute from "./routes/user.route.js"

const app = express()

app.use(cors())
app.use(express.json())

dotenv.config()

const URI = process.env.MongoDBURI
const PORT = process.env.PORT || 4000

try{
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("Connected to MongoDB")
}catch(error){
    console.log("Error: ",error)
}

app.use("/book", bookRoute)
app.use("/user", userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})