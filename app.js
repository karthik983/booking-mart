const express = require("express");
const app = express();
const config=require("config");

const port = process.env.PORT || config.get("PORT")

app.use(express.urlencoded({ extended: false }))
 
app.use(express.json())

const dbconnect = require("./dbconnect")
dbconnect();

// importing routes
const customer=require("./routes/customers")
app.use("/booking",customer)

const airline=require("./routes/airline")
app.use("/booking",airline)

const airport=require("./routes/airport")
app.use("/booking",airport)

const booking=require("./routes/booking")
app.use("/booking",booking)

const datamart=require("./routes/booking_data_mart")
app.use("/booking",datamart)

const customerlogin=require("./routes/customerlogin")
app.use("/booking",customerlogin)

app.listen(port, () => {
    console.log(`Server started at ${port}`);
})