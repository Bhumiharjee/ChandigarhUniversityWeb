const Contact = require('../db/models/contactus')

module.exports = profile = async (req, res) => {
    try {
        const { firstname, lastname, country, subject } = req.body;
        const contact = new Contact({
            fname: firstname,
            lname: lastname,
            country: country,
            message: subject
        })
        await contact.save();
        res.status(200).render("contact.hbs");
    } catch (error) {
        res.status(500).send(error.message);
    }
}