const mongoose = require(`mongoose`)

const mySchema = new mongoose.Schema({
    fullName:{type:String},
    phoneNumber:{type:String},
    email:{type:String},
    relationship:{type:String},
    users:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }]
}, {timestamps:true})

const contactModel = mongoose.model('contact', mySchema)

module.exports = contactModel