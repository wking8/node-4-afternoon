const users = require('../models/users')

let id = 1;

module.exports = {
    login: (req, res) => {
        const { username, password } = req.body;
        const { session } = req;
        const user = users.find(user => users.username === username && user.password === password);
        if (user) {
            session.user.username = user.username
            res.status(200).send(session.user);
        } else {
            res.status(500).send(`Rubbish, Filth, Slime.....MUCK!`);
        }
    },
    register: (req, res) => {
        const { username, password } = req.body;
        const { session } = req;
        users.push({ id, username, password })
        id++
        session.user.username = username
        res.status(200).send(session.user)
    },
    signout: (req, res) => {
        req.session.destroy()
        res.status(200).send(req.session)
    },
    getUser: (req, res) => {
        const { session } = req
        res.status(200).send(session.user)
    }
}
