const express = require(`express`)
const userModel = require(`../model/userModel`)
const contactModel = require(`../model/contactModel`)

const createContact = async (req, res)=>{
    try {
        const {userId} = req.params
        const user = await userModel.findById(userId)

        const newContact = new contactModel(req.body)

        newContact.users = user
        await newContact.save()

        user.contact.push(newContact)
        await user.save()
        res.status(201).json({
            status: "Successful",
            message: "Contact created successfully.",
            data: newContact
        }) 
    } catch (error) {
        res.status(500).json({
            status: "Server Error",
            errorMessage: error.message
        })
    }
}

const getContacts = async(req, res)=>{
    try {
        const {userId} = req.params
        const contacts = await userModel.findById(userId).populate({path:"contact"})

        res.status(200).json({
           status: "Successful",
           data: contacts 
        })

    } catch (error) {
        res.status(500).json({
            status:"Server error",
            errorMessage: error.message
        })
    }
}

const getContact = async(req, res)=>{
    try {
        const {conId} = req.params
        const contact = await contactModel.findById(conId)

        res.status(200).json({
            status: "Successful",
            data: contact
        })
    } catch (error) {
        res.status(500).json({
            status: "Server error",
            errorMessage: error.message
        })
    }
}

module.exports = {createContact, getContacts, getContact}