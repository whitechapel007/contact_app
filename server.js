const express = require("express");
const connectDB = require("./config/db");

const path = require("path");

const app = express();

//init middleware

app.use(express.json({ extended: false }));

//connection to mongo db

connectDB();

//define routes

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(PORT, () => console.log(`listening on port ${PORT}   `));
