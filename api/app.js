const express = require('express');
const app = express();

app.get('/',(req, res) => {
    let obj = req.query;
    return res.send({message: "tudo ok com o metodo send"});
})

app.listen(3000);

module.exports = app;