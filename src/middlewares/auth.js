function auth(req, res, next) {
    if (req.session.user != undefined) {
        next()
    } else if (req.session.operator != undefined){
        next()
    } else {
        res.redirect('/login');
    }
}

module.exports = auth;