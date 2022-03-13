const express = require('express');
const config = require('./config');
const axios = require('axios');
const { flask } = require('./config');

exports = module.exports = function(app) {
 
    app.get('/hello', function (req, res) {
        res.send({"Express": "Back-end component works !"})
    })

    app.get('/', function (req, res) {
        axios.get("http://flask:5000/")
        .then( flask_resp => {
            console.log(`statusCode: ${flask_resp.status}`);
            console.log(flask_resp);
            res.send(flask_resp.data);
        })
        .catch(error => {
            console.error(error)
        });
    });
}