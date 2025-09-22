require("dotenv").config()

const express = require("express");
const connectdb = require("./config/connectdb");
const fileUpload= require("express-fileupload");
const path = require("path")

const app = express();
const PORT = 3006;
const router=require('./router/userRouter')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api",router);
connectdb.connectdb();
app.get("/", (req, res) => {
  res.send("SERVER CREATED");
});

app.listen(PORT, () => {
  console.log(`SERVER WILL BE RUNNING AT http://localhost:${PORT}/`);
});
