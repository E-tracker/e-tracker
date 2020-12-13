import passportGoogleOauth20 from 'passport-google-oauth20'
const GoogleStrategy = passportGoogleOauth20.Strategy;
import mongoose from 'mongoose'
import User from '../models/User.js'

const passportInitializer = (passport) => {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
    async (accesToken, refreshToken, profile, done)=>{
        const newUser = {
            googleId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            image: profile.photos[0].value
        }

        try {
            let user = await User.findOne({ googleId: profile.id })

            if(user){
                done(null, user)
            }else{
                user = await User.create(newUser)
                done(null,user)
            }
        } catch (error) {
            console.log(error);
        }
    }))

    passport.serializeUser((user,done)=>{
        done(null, user.id)
    })

    passport.deserializeUser((id, done)=>{
        User.findById(id,function(err,user){
            done(err,user)
        })
    })
}

export default passportInitializer