const mongoose = require("mongoose");

//jo bhi environment me define kiya hoga wo process object ke andar load ho jayega
require("dotenv").config();

// establish connection b/w app and database
const dbConnect = () => {
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => console.log("DB Connection Successful."))
.catch((error) => {
    console.log('issue in db connection')
    console.log(error.message)
    process.exit(1);
})
}

module.exports = dbConnect;  






