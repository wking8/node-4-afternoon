module.exports = {
    myMiddleware: (req, res, next) => {
        // Remember you can destructure like this to avoid having to pass down "req.session". Do it.
        const { session } = req
        if (!session.user) {
            session.user = { username: '', cart: [], total: 0 }
        }
        next()
    }
}