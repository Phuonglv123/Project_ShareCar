const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

//load model
const User = require('../../models/user');
const Passenger = require('../../models/passenger');
const AccountDriver = require('../../models/accountDiver');

router.get('/', (req, res, next) => {
    res.json({msg: 'login test'})
})

router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username: username})
        .then(user => {
            if (!user) {
                return res.status(404).json({email: "user not found"})
            } else {
                bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if (isMatch) {

                            var payload = {
                                id: user._id,
                                username: user.username,
                                phone: user.phone,
                                isActive: user.isActive,
                            };

                            jwt.sign(
                                payload,
                                keys.secretOrKey,
                                {expiresIn: 3600},
                                (err, token) => {
                                    console.log("payload 2:", payload)
                                    res.json({
                                        payload,
                                        user,
                                        success: true,
                                        token: 'Bearer ' + token
                                    })
                                }
                            )

                            // res.json({ success: true, token })

                        } else {
                            return res.status(404).json({password: 'Password incorrect'})
                        }
                    })
            }
        })
})

module.exports = router;