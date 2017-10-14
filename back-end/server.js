/**
 * Created by IMAD on 10/10/2017.
 */

var express=require('express');
var passport          =     require('passport');
var FacebookStrategy  =     require('passport-facebook').Strategy;
var session           =     require('express-session');
var cookieParser      =     require('cookie-parser');
var morgan=require('morgan');
var cors=require('cors');

var mongoose=require('mongoose');
var FB = require('fb');


var bodyParser=require('body-parser');


var config=require('./config');


var app=express();

app.use(express.static('node_modules'));
app.use(express.static('public'));


// DATABASE CONFIGURATION

mongoose.connect(config.database, config.options);



// OAUTH CONFIGURATION

// Passport session setup.
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Use the FacebookStrategy within Passport.

passport.use(new FacebookStrategy({
        clientID: config.facebook_api_key,
        clientSecret:config.facebook_api_secret ,
        callbackURL: config.callback_url
    },
    function(accessToken, refreshToken, profile, done) {
        FB.setAccessToken(accessToken);
        return done(null, profile);
    }
));



// ROUTES

// use it before all route definitions
app.use(cors());
const apiRoutes = require('./routes');
app.use("/",apiRoutes);


//RUNNING SERVER
app.listen(8300);
console.log('Server is running');