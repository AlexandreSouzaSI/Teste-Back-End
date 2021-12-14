const { response } = require("express");
const { axios } = require("axios")

const cepTest4 = async (req, res) => {
    const { valor } = req.body;
    
    console.log(valor)
    try {
    for(let i = 0; i < valor.length; i++){

        let val = valor[i];
  
  
       
        const response = await axios.default.get(`http://viacep.com.br/ws/${val}/json/`)
        console.log(response)
    }
      } catch {
        console.log()
      }

    }

module.exports = {
    cepTest4,
}