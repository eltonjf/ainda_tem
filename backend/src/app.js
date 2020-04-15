const express = require('express')
const app = express();

app.use('/teste', (req, res) => {
    res.status(200).send({
        mensagem: 'Deu',
    });
});

module.exports = app;