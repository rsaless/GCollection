const express = require('express');
const router = express.Router();

app.get('/',(req, res) => {
    let obj = req.query;
    return res.send({message: "tudo ok com o metodo GET no users"});
})
app.post('/',(req, res) => {
    let obj = req.query;
    return res.send({message: "tudo ok com o metodo POST no users"});
})

module.exports = router;