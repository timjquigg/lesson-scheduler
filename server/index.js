if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}
const { getUserbyId } = require("../lib/user");

const express = require("express");
const morgan = require("morgan");
const cookieSession = require("cookie-session");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("build"));
app.use(
  cookieSession({
    name: "session",
    keys: ["key1"],
  })
);

const userRoutes = require("./routes/user");
// const appointmentsRoutes = require('./routes/appointments');

app.use("/user", userRoutes);
// app.use('/appointments', appointmentsRoutes);

app.get("/", async (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
