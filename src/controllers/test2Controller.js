
const comprasTest2 = async (req, res) => {
    const { valorCompra, valorPago } = req.body;


    var result = valorPago - valorCompra

    var nota100 = result / 100;
    var nota10 = ( result % 100 ) / 10;
    var nota1 = (( result % 100 ) % 10 ) / 1

    var troco = [ 
         Nota100 = Math.floor(nota100) ,
         Nota10 = Math.floor(nota10) ,
         Nota1 = Math.floor(nota1) 
        ]
    

    res.status(201).json(troco);
}

module.exports = {
    comprasTest2,
}