const myModel = require(`../model/userModel`)
const contactModel = require(`../model/userModel2`)
const bcrypt = require(`bcrypt`)
const jwt = require(`jsonwebtoken`)
require(`dotenv`).config()



const signUp = async(req,res)=>{
    try {
            const {fullName, email, password} = req.body
        const emailExist = await myModel.findOne({email})
        if (emailExist) {
            return res.status(400).json(`User with email already exist`)
        } else {
        //perform an encryption using salt
        const saltedPassword = await bcrypt.genSalt(10)
        //perform an encrytion of the salted password
        const hashedPassword = await bcrypt.hash(password, saltedPassword)
        // create object of the body
        const data ={
            fullName: fullName,
            email,
            password: hashedPassword,
        }
        const user = await myModel.create(data)
        res.status(201).json({message:`User created successfully`, data: user})

        }
    } catch (error) {
    res.status(500).json(error.message)
    }
}


const logIn = async (req,res)=>{
    try{
        const {email, password}=req.body
        const userExist = await myModel.findOne({email})
        if(!userExist){
            return res.status(400).json({message:"User with email does not exist"})
        }
        const confirmPassowrd = await bcrypt.compare(password, userExist.password)
        if(!confirmPassowrd){
            return res.status(400).json({message:"Invalid password"})
        }
        const token = await jwt.sign({
            userId: userExist._id,
            email: userExist.email},
            process.env.jwt_secret,
            {expiresIn:"1h"})
        res.status(200).json({message:"User logged in successfully",data:userExist, token})
    }catch(error){
        res.status(500).json(error.message)
    }
}

const createContact = async(req,res)=>{
    try {
            const {fullName, phoneNumber, email, relationship} = req.body
        const data ={
            fullName,
            phoneNumber,
            email,
            relationship
        }
        const user = await contactModel.create(data)
        res.status(201).json({message:`Contact created successfully`, data: user})

    } catch (error) {
    res.status(500).json(error.message)
    }
}


const getAllUsers = async(req,res)=>{
    try {
     const users = await myModel.find()
     if(users.length <= 0){
        return res.status(404).json(`No available users`)
     }else{
        res.status(200).json({message:`Kindly find the ${users.length} registered users below`, data: users})
     }
        
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getAllContact = async(req,res)=>{
    try {
     const users = await contactModel.find()
     if(users.length <= 0){
        return res.status(404).json(`No available users`)
     }else{
        res.status(200).json({message:`Kindly find the ${users.length} registered users below`, data: users})
     }
        
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = {signUp, logIn, createContact, getAllUsers, getAllContact}
