const express = require('express');
const fs = require('fs');
const app = express();
const DATABASE = './src/database'

app.use(express.json());

const veiculosTest3 = async (req, res) => {
        const veiculo = req.body;
        console.log(veiculo)
        const file = DATABASE + '/veiculos.json';
        readFile(file)
        .then(result => {
            // veiculo.id = getNextVeiculoId(result);
            result.push(veiculo);
            writeFile(file,result)
            .then(result => {
                res.send(veiculo);
            })
            .catch(error => {
                res.status(500).json({message: error.message+"11"})
            })
        })
        .catch(error => {
            res.status(500).json({message: error.message+"2"})
        })
    }

    function writeFile(file,data){
        const writeData = (typeof data == "string") ? data : JSON.stringify(data);
        return new Promise((resolve, reject) => {
            fs.writeFile(file, writeData, (error) => {
                if(error) reject(error);
                resolve("OK");
            })
        })
    }
    

    function readFile(file){
        return new Promise((resolve, reject) => {
            fs.readFile(file, 'utf-8', (error,data) => {
                if(error) reject(error);
                if(typeof data == "undefined"){
                    resolve([]);
                } else {
                    resolve(JSON.parse(data));
                }
            })
        })
    }

    // function getNextVeiculoId(veiculos){
    //     let nextId = (veiculos.length > 0) ? (veiculos[veiculos.length - 1].id + 1) : 1;
    //     return nextId;
    // }

module.exports = {
    veiculosTest3,
}