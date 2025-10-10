const users = require('../models/user.modle')

const jwt = require('jsonwebtoken')

function generateToken(user) {
    return jwt.sign({ id: user._id, username: user.username, role: user.role }, process.env.JWT_secret)
}

async function handleRegiterUser(req, res) {
    try {
        const { username, email, password, isAdmin } = req.body

        const register = await users.findOne({ email })

        if (!req.body || register) {
            res.status(400).json("Please enter a proper info")
        }

        const user = await users.create({ username, email, password, isAdmin })
        res.status(200).json({ message: "User registered successfully", User: user })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

async function handleLoginUser(req, res) {
    try {
        const { email, password } = req.body
        const user = await users.findOne({ email })

        const token = generateToken(user)

        if (!user || !(await user.comparePassword(password))) {
            res.status(400).json("Invalid user")
        }

        res.status(200).json({ message: "You are logged in", user: user, token: token })

    } catch (error) {
        req.res(500).json({ message: error.message })
    }
}

module.exports = { handleRegiterUser, handleLoginUser }