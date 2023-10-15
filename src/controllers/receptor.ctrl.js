const { handleError } = require("../utils/handler")

const _receptorController = async (req, res) => {
    try {
        const datos = req.body

        console.log(datos)
        res.status(200).send({ error: "SIN_ERROR", desc: "Datos Recibidos" })
    } catch (error) {
        handleError(res, "receptorC", error)
    }
}



module.exports = { _receptorController }