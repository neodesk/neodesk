function auth(req, res, next) {
    if (req.session.user != undefined) {
        res.locals.user = req.session.user;
        res.redirect('/user')
    } else if (req.session.operator != undefined){
        res.locals.operator = req.session.operator;
        res.redirect('/operator')
    } else {
        next();
    }
}

module.exports = auth;