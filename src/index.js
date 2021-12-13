const express = require('express');
const app = express();
const cors = require('cors')


app.use(cors({ origin: true, credentials: true }));


app.use(express.json());
app.use(express.urlencoded({extended: false}));

 app.use(require('./routes/test1'));
 app.use(require('./routes/test2'));
 app.use(require('./routes/test3'));
 app.use(require('./routes/test4'));

app.listen(4000);
console.log('Server on port 4000')