
const veiculosTest3 = async (req, res) => {
    const { numero } = req.body;
    res.status(201).json(response.rows);
}

module.exports = {
    veiculosTest3,
}