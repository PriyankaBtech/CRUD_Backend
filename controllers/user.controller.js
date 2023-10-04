const User = require('../models/user.model.js')

exports.home = (req, res) => {
    res.send("welcome to Home!")
}

exports.createUser = async (req, res) => {
    // extract info
    try {
        // req.body => give an object with lot of information
        const {name, email} = req.body

        // transfer the above data to DB
        const user = await User.create({
            name,
            email
        })

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        })

    } catch (error) {
        console.log(error)

        res.status(400).json({
            success: false,
            message: error.message
        })
        
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json({
            success: true,
            message: "successfully get the users",
            users
        })
        
    } catch (error) {
        console.log(error)

        res.status(400).json({
            success: false,
            message: error.message
        })        
    }
}

exports.editUser = async (req, res) => {
    try {
        User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success: true,
            message: "user updated successfully"
        })
        
    } catch (error) {
        console.log(error)

        res.status(400).json({
            success: false,
            message: error.message
        })  
        
    }
}

exports.deleteUser = async (req, res) => {
    try {
        // take data from URL
        const userId = req.params.id
        const deleteUser = await User.findByIdAndDelete(userId)
        res.status(200).json({
            success: true,
            message: "user deleted successfully",
        })
        
    } catch (error) {
        console.log(error)

        res.status(400).json({
            success: false,
            message: error.message
        })     
        
    }
}

