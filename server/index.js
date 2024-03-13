const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")

const dotenv=require("dotenv")
dotenv.config()
app.use(cors())

const userRouter=require("./router/Auth")

const loginRouter=require("./router/Login")


mongoose.connect(process.env.mongoUrl).then(()=>{
    console.log("data base is connected");
}).catch((err)=>{
    console.log(err.message);
})
 

app.use(express.json()) 
app.use("/api",userRouter)
app.use("/loginApi",loginRouter)

app.listen(5000,()=>{
    console.log("port connected");
})