const router=require("express").Router()
const user=require("../model/userSchema")
const crypto=require("crypto-js")

router.post("/signup",async(req,res)=>{
    console.log("req.body",req.body);
    try {
        const userData=new user({
            Username:req.body.name,
            Email:req.body.email,
            Age:req.body.age,
            Place:req.body.place,
            Password:crypto.AES.encrypt(req.body.password,process.env.passwordSec).toString()
        })
        const savedData=await userData.save()
        console.log("saved datas ... :",savedData);
        res.status(200).json(savedData)
    } catch (error) {
        console.log(error.messge);
        res.status(500).json("failed")
    }
})

router.get("/getAllData",async(req,res)=>{
    try {
        const allData= await user.find()
        console.log("all data",allData);
        res.status(200).json(allData)
    } catch (error) {
        res.status(500).json("failed")
    }
})

router.get("/getById/:id",async(req,res)=>{
    console.log("id ",req.params.id);
    try {
        const byId= await user.findById(req.params.id)
        console.log("byId",byId);
        res.status(200).json(byId)
    } catch (error) {
        res.status(500).json("failed")
    }

})
router.get("/getqueryData",async(req,res)=>{
    try {
        const byQuery=await user.findOne({Email:req.query.abc})
        console.log("query data :",byQuery);
        res.status(200).json(byQuery)
    } catch (error) {
        res.status(500).json("failed")
    }
})


router.put("/updateData/:id",async(req,res)=>{
    
    try {
        const updatedData=await user.findByIdAndUpdate(req.params.id,{
            $set:{Username:req.body.names,...req.body}
        },{new:true})
        res.status(200).json(updatedData)
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json("failed")
    }
})


router.delete("/deleteData/:id",async(req,res)=>{
    try {
        const deletetdData=await user.findByIdAndDelete(req.params.id)
        res.status(200).json("data deleted")
    } catch (error) {
        res.status(500).json("failed to delete")
    }
})

module.exports=router