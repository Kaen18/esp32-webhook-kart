require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
//const { dbConnect } = require("./config/mongo");
const router = require("./src/routes")
const PORT = process.env.PORT || 3900;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(router);

//dbConnect();
app.listen(PORT, () => {
    console.log(`El servidor inicio la conexion en el puerto ${PORT}`);
});
