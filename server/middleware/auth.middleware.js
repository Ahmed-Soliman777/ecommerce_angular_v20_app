const jwt = require('jsonwebtoken')

function authenticate(req, res, next) {
    const token = req.headers['token']


    if (!token) {
        res.status(400).json({ message: 'invalid token' })
    }

    try {

        const payload = jwt.verify(token, process.env.JWT_secret)

        req.user = payload

        next()

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

function isAdmin(req, res, next) {
    if (req.user && req.user.isAdmin) {
        next()
    } else {
        res.status(400).json({ message: 'invalid access' })
    }
}

module.exports = { authenticate, isAdmin }