const { User } = require('../app/models');
const jwt = require('jsonwebtoken');
require('dotenv').config({path:'./.env'});


exports.auth = async (req, res) => {
    const { username } = req.body;
    const { password } = req.body;

    if (!username || !password) {
        res.status(500).json({
            message: "User Detail Cannot be empty"
        })

    } else {

        let result = await User.findAndCountAll({
            where: {
                username: username,
                password: password
            },
            limit: 1,
            raw: true,
        })

        if (!result.count) {
            res.json({ message: 'User or Password Incorrect' });
            
        } else {
            const uid = result.rows[0].id;

            var token = jwt.sign({uid}, process.env.SECRET, {
                expiresIn: 300 // expires in 5min
              });

            res.status(200).send({auth: true, token: token});

        }

    }


}