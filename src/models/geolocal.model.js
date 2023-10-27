const mongoose = require("mongoose");

/**
 * {

latitud: -25.23834229,

longitud: -57.551651,

velocidad: 70.30000305,

altitud: 0,

anho: 6.726232629e-44,

mes: 0,

dia: 0,

time: -9.266037891e-38,

coche: 1

}
 */

const GeolocalModel = new mongoose.Schema(
    {
        coche: {
            type: Number,
        },
        latitud: {
            type: Number,
        },
        longitud: {
            type: Number,
        },
        velocidad: {
            type: Number,
        },
        altitud: {
            type: Number,
        },
        anho: {
            type: Number,
        },
        mes: {
            type: Number,
        },
        dia: {
            type: Number,
        },
        time: {
            type: Number,
        },
        fecha: {
            type: Date,
        },
        fechaTS: {
            type: Number,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("geolocal", GeolocalModel);
