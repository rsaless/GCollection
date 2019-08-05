const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    let obj = req.query;
    return res.send({message: "tudo ok com o metodo GET"});
})
router.post('/',(req, res) => {
    let obj = req.query;
    return res.send({message: "tudo ok com o metodo POST"});
})

module.exports = router;