var User = require('../models/registrationModel');
var LocalStrategy = require('passport-local').Strategy;


module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function (_id, done) {
        User.findById(_id, function (err, user) {
            done(err, user);
        });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },  
        function (req, email, password, done) {

            // asynchronous
            // User.findOne wont fire unless data is sent back
            process.nextTick(function () {

                // find a user whose email is the same as the forms email
                // we are checking to see if the user trying to login already exists
                User.findOne({ 'email': email }, function (err, user) {
                    // if there are any errors, return the error
                    if (err)
                        return done(err);

                    // check to see if theres already a user with that email
                    if (user) {
                        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                    } else {

                        // if there is no user with that email
                        // create the user
                        var newUser = new User();

                        // set the user's local credentials
                        newUser.email = email;
                        newUser.password = newUser.generateHash(password);
                        newUser.appmode = req.body.appmode;
                        newUser.post = req.body.post;
                        newUser.name = req.body.name;
                        newUser.fathername = req.body.fathername;
                        newUser.mothername = req.body.mothername;
                        newUser.gender = req.body.gender;
                        newUser.maritalstatus = req.body.maritalstatus;
                        newUser.category = req.body.category;
                        newUser.jkDomicile = req.body.jkDomicile;
                        newUser.identitymark = req.body.identitymark;
                        newUser.disability = req.body.disability;
                        newUser.exserviceman = req.body.exserviceman;
                        newUser.ews = req.body.ews;
                        newUser.religion = req.body.religion;
                        newUser.mothertongue = req.body.mothertongue;
                        newUser.dob = req.body.dob;
                        newUser.mobilenumber = req.body.mobilenumber;
                        newUser.aadhar = req.body.aadhar;
                        newUser.address = req.body.address;
                        newUser.district = req.body.district;
                        newUser.state = req.body.state;
                        newUser.pincode = req.body.pincode;
                        newUser.hboardname = req.body.hboardname;
                        newUser.hyear = req.body.hyear;
                        newUser.hpercentage = req.body.hpercentage;
                        newUser.iboardname = req.body.iboardname;
                        newUser.iyear = req.body.iyear;
                        newUser.ipercentage = req.body.ipercentage;
                        newUser.gboardname = req.body.gboardname;
                        newUser.gyear = req.body.gyear;
                        newUser.gpercentage = req.body.gpercentage;
                        newUser.pboardname = req.body.pboardname;
                        newUser.pyear = req.body.pyear;
                        newUser.ppercentage = req.body.ppercentage;
                        newUser.examcenter = req.body.examcenter;

                        // save the user
                        if(req.files){
                            newUser.photo = req.files.photo[0].path;
                            newUser.signature = req.files.signature[0].path;
                        }

                        newUser.save(function (err) {
                            if (err)
                                throw err;
                            return done(null, newUser, req.flash('signupMessage', 'You are Successfully Registered Please Login to Complete Application.'));
                        });
                    }

                });

            });

        }));
    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signin', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, email, password, done) {
        User.findOne({ 'email': email }, function (err, user) {
            if (err) {
                return done(err);
            } if (!user) {
                return done(null, false, req.flash('loginMessage', 'No user found.'));

            }
            if (!user.validPassword(password)) {
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));

            }
            return done(null, user);
        });
    }));

};