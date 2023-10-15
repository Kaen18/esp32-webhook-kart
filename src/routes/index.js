const express = require("express");
const router = express.Router();
const fs = require("fs");

const pathRouter = `${__dirname}`;

/**
 *
 * @param {*} filename
 * @returns file without extension
 */

const _clear = (filename) => {
    return filename.split(".").shift();
};

fs.readdirSync(pathRouter).filter((file) => {
    const fileNameClear = _clear(file);

    const skip = ["index"].includes(fileNameClear);
    if (!skip) {
        router.use(`/${fileNameClear}`, require(`./${fileNameClear}`));
        console.log(`--->> ${fileNameClear}`);
    }
});

/*router.get("*", (req, res) => {
  res.status(404).send({ error: "Not Found" });
});*/

module.exports = router;
