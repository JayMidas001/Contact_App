const mongoose = require(`mongoose`)

const mySchema = new mongoose.Schema({
    fullName:{type:String},
    email:{type:String},
    password:{type:String},
    contact:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"contact"
    }],
    isVerified:{
        type:String
    }
}, {timestamps:true})

const userModel = mongoose.model('user', mySchema)

module.exports = userModel