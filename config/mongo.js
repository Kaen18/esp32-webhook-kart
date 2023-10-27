const mongoose = require("mongoose");

const dbConnect = () => {
    const DB_URI = process.env.MONGO_URI;

    mongoose
        .connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Conexión exitosa a la base de datos");
            // Aquí puedes realizar otras acciones después de la conexión exitosa
        })
        .catch((error) => {
            console.error("Error al conectar a la base de datos:", error);
        });

    /*mongoose.connect(
      DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err, res) => {
        if (!err) {
          console.log(`CONEXION A LA BASE DE DATOS CORRECTA`);
        } else {
          console.error(
            `OCURRIO UN ERROR AL INTENTAR CONECTARSE A LA BASE DE DATOS`
          );
          console.error(err);
        }
      }
    );*/
};

module.exports = { dbConnect };
