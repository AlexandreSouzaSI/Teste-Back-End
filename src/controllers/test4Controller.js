const { response } = require("express");
const { fetch } = require("node-fetch");

const cepTest4 = async (req, res) => {
    const { valor } = req.body;
    
    console.log(valor)

    // for(let i = 0; i < valor.length; i++){
    //     let cep = valor[i];

    //     const options = {
    //         method: 'GET',
    //         mode: 'cors',
    //         cache: 'default'
    //     }

    //     fetch(`http://viacep.com.br/ws/${cep}/json/`, options)
    //     .then(response => {response.json()
    //         .then(data => console.log(data))
    //     })
    //     .catch(e => console.log('Deu erro: '+ e,message))
    // }

    }

module.exports = {
    cepTest4,
}