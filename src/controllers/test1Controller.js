const { type } = require("os");
const { stringify } = require("querystring");

const palindromosTest1 = async (req, res) => {
    var { n1, n2 } = req.body;
    var numeros = [];
    var result = [];
    const erro = "Não á numeros Palindromos na sequencia, escolha outra !";

    if(n1 < n2) {
        for( ; n1 < n2; n1++){
            numeros.push(n1.toString())
        }
    }
    for( ; n2 <= n1; n2++){
        numeros.push(n2.toString())
    }

    console.log(numeros)
    function ehPalindromo(numero) {
        var totalNumero = numero.length;
        var numeroConferir = Math.floor(totalNumero / 2);
        if(totalNumero == 1){
            return
        }
        for (var i = 0; i < numeroConferir; i++) {
            var num = numero[i];
            var indice = i;
            var indiceComparar = totalNumero - (indice + 1);
            var numComparar = numero[indiceComparar];
            if(num !== numComparar){
                return false
            }
        }
        return true
    }

    
    numeros.forEach((numero, ind) => {
        if(ehPalindromo(numero)) {
            result.push("("+numero+")  ")
            console.log("O Numero: ", numero, "é palindromo");
        } else {
            console.log("O numero : ", numero, "Não é palindromo !" );
        }
    })
    if(result.length > 0){
        res.status(201).json(result);
    } else {
        res.status(201).json(erro);
    }
    }
module.exports = {
    palindromosTest1,
}