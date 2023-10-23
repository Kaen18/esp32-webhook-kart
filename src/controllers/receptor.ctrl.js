const { handleError } = require("../utils/handler")

const _receptorController = async (req, res) => {
    try {
        const datos = req.body

        console.log(datos)
        const fechaHoraActual = new Date()
        // Establecer la zona horaria a la de Paraguay (GMT-4)
        fechaHoraActual.setUTCHours(fechaHoraActual.getUTCHours() - 3)
        // Obtener el timestamp en milisegundos
        const timestamp = fechaHoraActual.getTime()
        console.log(fechaHoraActual)
        console.log(timestamp)
        res.status(200).send({ error: "SIN_ERROR", desc: "Datos Recibidos" })
    } catch (error) {
        handleError(res, "receptorC", error)
    }
}



module.exports = { _receptorController }