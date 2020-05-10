const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    return res.send({message: 'Tudo ok com o método GET do usuario'});
})

router.post('/',(req,res) => {
    return res.send({message: 'Tudo ok com o método POST do usuario'});
})

router.post('/create',(req,res) => {
    return res.send({message: 'usuário criado com sucesso'});
})

module.exports = router;