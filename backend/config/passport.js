const passport = require('passport')
const jwtStrategy = require('passport').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const User = require('../models/User')

module.exports = passport.use(new jwtStrategy({
    jwtFronRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrkey: 'mySecretKey' /* process.env.SECRETORKEY, */
}, (payload, done) => {
    User.findById(payload._doc._id)
    .then(user => {
        if(!user) return done(null, false)
        else return done(null, user)
    })
    .catch(error => {
        return done(null, false)
    })
}))