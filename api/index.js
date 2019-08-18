const express = require('express')
var fs = require('fs');
const app = express()
const port = 3000

const dataOne = require('./modules/file.js');
const excellJson= require('../api/excell/index2.js');

console.log(dataOne.name);
console.log(excellJson.test);



app.get('/', (req, res) => res.send(dataOne));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))