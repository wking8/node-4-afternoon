require('dotenv').config()
const express = require('express')
const app = express()
const session = require('express-session')
const { PORT, SESSION_SECRET } = process.env
const checkForSession = require('./middleware/checkForSession')
const swagController = require('./controllers/swagControllers')
const authController = require('./controllers/authController')


// Top level middleware
app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(checkForSession.myMiddleware);


// Endpoints
app.get('/api/swag', swagController.read)
app.post('/api/login', authController.login)
app.post('/api/register', authController.register)
app.post('/api/signout', authController.signout)
app.get('/api/user', authController.getUser)

app.listen(PORT, () => console.log(`Honky on port ${PORT}`))