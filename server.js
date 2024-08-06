const mongoose= require("mongoose")
const express =require("express")
const cors = require("cors")
let app = express()
app.use(cors())
app.use(express.json()); // checks data in json format or not
let userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    age:String,
    mail:String,
    password:String,
    mobileNumber:String,
});

let User= new mongoose.model("user",userSchema);
app.post("/signup", async (req,res)=>{
    console.log(req.body)
    // res.json(["some dummy response."])
    try {
        let newUser= new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            age:req.body.age,
            mail:req.body.mail,
            password:req.body.password,
            mobileNumber:req.body.mobileNumber,
        
        });
        await User.insertMany([newUser])
        console.log(`saved success fully`)
        res.json({status:"success",msg:"Account Created"})
    } catch (error) {
        console.log(`unable to save`)
        res.json({status:"failed",msg:" unable to create Account "})
    }
})


try {
    let connectToMDB= mongoose.connect("mongodb+srv://pavanajjarapu007:pavan@pavankumar.eubtnkt.mongodb.net/?retryWrites=true&w=majority&appName=pavankumar") 
    console.log("connected to DB successfully.")
} catch (error) {
    console.log("Not connected to MDB.")
}
app.listen(2389,()=>{
    console.log(`listening to port 2389....`)
})
