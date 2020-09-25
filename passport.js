const passport = require('passport')
const googleStrategy = require('passport-google-oauth').OAuth2Strategy
const users = require('./models/user')
const keys = require('./config/keys')

passport.serializeUser((user, done) => {
    done(null, user.id) //not google id
})

passport.deserializeUser((id, done) => {
    users.findById(id)
        .then((founduser) => {
            done(null, founduser)
        })
})

passport.use(

    new googleStrategy({
        callbackURL: 'http://127.0.0.1:3300/auth/google/redirect',
        clientID: keys.google.ClientID,
        clientSecret: keys.google.ClientSecret

    }, (accessToken, refreshToken, Profile, done) => {
        console.log(Profile);

        users.findOne({
                googleid: Profile.id
            })
            .then((userdata) => {

                if (userdata) {
                    console.log('User already exist' + userdata.id)
                    done(null, userdata)
                } else {
                    const data = {
                        name: Profile.displayName,
                        googleid: Profile.id,
                        email: Profile.emails[0].value,
                        photo: Profile.photos[0].value
                    }
                    const newUser = new users(data)

                    // saving data
                    newUser.save(error => {
                        if (error)
                            console.log('Ooops, Something Happened' + error)
                        else
                            console.log('Data is saved')
                    }).then(newUser => {
                        console.log('new user created');
                        done(null, newUser)
                    })
                }
            })
            .catch(err => console.log("error " + err))
    })


)