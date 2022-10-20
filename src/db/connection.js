const mongoose = require("mongoose");

const book = mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Connection Successful to DataBase`);
}).catch((err) => {
    console.log(`Cannot Connect to DataBase ==>> ${err}`);
})