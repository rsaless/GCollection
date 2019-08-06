const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

router.get('/',auth, (req, res) => {
    let obj = req.query;
    console.log(res.locals.auth_data);
    return res.status(200).send({message: "tudo ok com o metodo GET"});
})
router.post('/',(req, res) => {
    let obj = req.query;
    return res.status(200).send({message: "tudo ok com o metodo POST"});
})

module.exports = router;