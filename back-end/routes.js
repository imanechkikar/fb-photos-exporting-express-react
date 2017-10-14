/**
 * Created by IMAD on 12/10/2017.
 */

//Routes
var express=require('express');
var FB = require('fb');
var passport = require('passport');
var User=require('./models/users');

const apiRoutes=express.Router();

apiRoutes.get("/",function(req,res){
    res.send('Hello');
});

apiRoutes.post("/api/register",function(req,res,next){
    var userData={
        email:req.body.email,
        password:req.body.password
    };
    User.create(userData,function(err,result){
        if(err) {
            return res.status(500).json({message:err.message});
        }
        res.json(result);
    })
});

apiRoutes.post("/api/login", function (req,res) {
    User.findOne({email:req.body.email,password:req.body.password},function (err,result) {
        if (err) {
            return res.status(500).json({message: err.message});
        }
        if (!result) {
            res.json(401, {message: "email/password invalid"});
        }
        else
            if (result.password !== req.body.password) {res.json(401, {message: "email/password invalid !!"});}
            else {
                res.json(result);
            }
        }
    )
});

apiRoutes.get('/api/auth/facebook', passport.authenticate('facebook',{ authType: 'rerequest', scope: 'user_photos' }));

apiRoutes.get('/api/auth/facebook/callback',
    passport.authenticate('facebook', { successRedirect : '/api/getAlbums', failureRedirect: '/api/login' }),
    function(req, res) {
        res.redirect('/');
    }
);

apiRoutes.get('/api/getAlbums', require('connect-ensure-login').ensureLoggedIn(), function(req, res){
        FB.api('/me/albums', function(response){
            console.log(response);
            res.send(response);
        })
    }
);

module.exports = apiRoutes;