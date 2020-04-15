const { User } = require('../app/models')

exports.post = async (req, res) => {
    const { username } = req.body
    const { password } = req.body
    if (!username || !password) {
        res.status(400).json({
            message: "User Detail Cannot be empty"
        })
    } else {
        const result = await User.count({
            where: {
                username: username
            }
        });

        if (result >= 1) {
            res.status(406).json({ message: 'User Already Registered'})
        }
        else {
            User.create({ username: username, password: password })
            res.status(201).json({ message: 'Successfully Registered' })
        }

    }
}

exports.get = async (req, res) => {
    const users = await User.findAll();
    res.send(users)
}