const mongoose = require(`mongoose`)

const mySchema = new mongoose.Schema({
    fullName:{type:String},
    phoneNumber:{type:String},
    email:{type:String},
    relationship:{type:String}
}, {timestamps:true})

const contactModel = mongoose.model('Contact', mySchema)

module.exports = contactModel