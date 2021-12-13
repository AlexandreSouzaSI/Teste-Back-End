
const palindromosTest1 = async (req, res) => {
    var { n1, n2 } = req.body;
    console.log(typeof(n1));
    console.log(n2);
    
        var arrayNumber = [];
        var q;
        var r;
        if (n1 < n2) {
            for(; n1 < n2; n1++) {
                r = n1
                var divisor = 10E4;
                var d = n1 / divisor
                console.log("aqui"+d)
                arrayNumber.push(n1)
            }
        } else {
            for(; n2 < n1; n2++)
            arrayNumber.push(n2)
        }
        

            res.status(201).json(`A Resposta foi ${arrayNumber}`);
    }
module.exports = {
    palindromosTest1,
}