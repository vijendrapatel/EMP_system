const express = require("express");
const app = express();
const cors = require("cors");
const employees = require("./routes/employees")
const create = require("./routes/employees")
const country_name = require("./routes/employees")

app.use(cors());
app.use(express.json());
app.get('/employees',employees);
app.post('/create',create);
app.get('/employees',country_name);

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
