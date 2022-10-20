module.exports = profile = (req, res) => {
    res.clearCookie("user");
    res.status(200).render("login.hbs");
}