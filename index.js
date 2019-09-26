const express  = require("express");
const app = express();

const passport = require('passport')
const Googlestrategy = require('passport-google-oauth20').Strategy;
const PORT  = 5000;
const keys = require('./config/keys')
app.listen(PORT,()=>{
    console.log("server running on "+ PORT)
})

passport.use(
    new Googlestrategy({
        clientID: keys.googleClientId,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done)=>{
        console.log('access Token', accessToken);
      
    })
)

app.get('/auth/google',passport.authenticate('google',{
    scope:['profile','email']
}))
