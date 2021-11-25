require("dotenv").config();
const express = require("express");
const connection = require("./db");
const users = require("./routes/users");
const auth = require("./routes/auth");

const app = express();

connection()
app.use(express.json());

app.use("/api/users", users);
app.use("/api/auth", auth);


const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`);
})