require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 8000;

//Imort Routes
const user = require("./src/routes/user.js");
const contact = require("./src/routes/contactus.js");
const home = require("./src/routes/home.js");

app.use(cookieParser());

// DATABASE RELATED STUFF
require("./src/db/connection");

// FOR EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static")); // for serving static files
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// FOR hbs SPECIFIC STUFF
app.set("view engine", "hbs"); // set the template engine
app.set("views", path.join(__dirname, "views")); // set the views directory

// User Routes
app.use("/", user);
app.use("/user", user);
app.use("/contact", contact);
app.use("/home", home);

// START THE SERVER
app.listen(port, () => {
    console.log(`Website has been successfully started on port ${port}`);
}); 