const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../models/user')
//registration of user
router.post("/register",async (req,res) => {
    

    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = await new User({
            username: req.body.username,
            email:req.body.email,
            password: hashPassword
        });
        const user = await newUser.save();
        res.status(200).json(user)
    } catch(err) {
        console.log(err)
    }
} )


module.exports= router;