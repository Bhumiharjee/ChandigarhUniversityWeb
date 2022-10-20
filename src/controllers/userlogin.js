const User = require('../db/models/user')
const bcrypt = require("bcryptjs");
module.exports = userlogin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ email: username })
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = await user.generateToken()
            res.cookie("user", token, {
                expires: new Date(Date.now() + (60 * 60 * 60 * 60))
            });
            res.status(200).render("home.hbs");
        }
    } catch (error) {
        console.log(error)
        res.status(422).json({ "message": error.message })
    }
}