
const comprasTest2 = async (req, res) => {
    const { valorCompra, valorPago } = req.body;
    const erro = "O Valor da compra é maior que o valor pago."

    console.log(valorCompra)
    console.log(valorPago)

    if(valorCompra <= valorPago){
        const result = valorPago - valorCompra
        
        const nota100 = result / 100;
        const nota10 = ( result % 100 ) / 10;
        const nota1 = (( result % 100 ) % 10 ) / 1
        
        const troco = [ 
            Nota100 = Math.floor(nota100) ,
            Nota10 = Math.floor(nota10) ,
            Nota1 = Math.floor(nota1) 
        ]
        
        
        res.status(201).json(troco);
    } else {
        res.status(201).json(erro);
    }
    
}

module.exports = {
    comprasTest2,
}