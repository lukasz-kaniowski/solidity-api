var express = require('express')
var bodyParser = require('body-parser')
const solc = require('solc')
const { PORT = 3000 } = process.env

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/', function(req, res) {
  if (!req.body || !req.body.contract) return res.sendStatus(400)
  const output = solc.compile(req.body.contract, 1)
  res.status(200).send(output);
});  
app.listen(PORT)
