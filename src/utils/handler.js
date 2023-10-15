const handleError = (res, error, errorRaw) => {
    console.error(errorRaw);
    res.status(500).send({ error, message: errorRaw.message });
};

module.exports = { handleError };