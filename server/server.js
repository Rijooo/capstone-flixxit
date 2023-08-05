const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const db = require('./db.js');
const app = express();

app.use(cors(
  {
    origin:["https://capstone-flixxi-client.vercel.app/login"],
    methods:["POST","GET"],
    credentials:true
  }
));
app.use(express.json());

db.Database();
app.use("/api/user", userRoutes);

app.listen(8000, () => {
  console.log("server started on port 8000");
});
