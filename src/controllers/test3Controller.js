const express = require('express');
const fs = require('fs');
const app = express();
const DATABASE = './src/database'

app.use(express.json());

const veiculosTest3 = async (req, res) => {
        const veiculo = req.body;
        console.log(veiculo)
        let veiculos = [];
        const file = DATABASE + '/veiculos.json';
        readFile(file)
        .then(result => {
            result.push(veiculo);
            console.log(result)
            veiculos = result;
            writeFile(file,result)
            .then(result => {
                res.send(veiculos);
            })
            .catch(error => {
                res.status(500).json({message: error.message})
            })
        })
        .catch(error => {
            res.status(500).json({message: error.message})
        })
    }

    function writeFile(file,data){
        console.log(data)
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

const GetVeiculos = async (req, res) => {
        let veiculos = [];
        const file = DATABASE + '/veiculos.json';
        readFile(file)
        .then(result => {
            console.log(result)
            veiculos = result;
            writeFile(file,result)
            .then(result => {
                res.send(veiculos);
            })
            .catch(error => {
                res.status(500).json({message: error.message})
            })
        })
    }

module.exports = {
    veiculosTest3,
    GetVeiculos
}