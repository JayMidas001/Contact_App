const mongoose = require(`mongoose`)

const mySchema = new mongoose.Schema({
    fullName:{type:String},
    email:{type:String},
    password:{type:String},
}, {timestamps:true})

const myModel = mongoose.model('User', mySchema)

module.exports = myModel