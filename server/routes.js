const express = require('express');
const config = require('./config');
const request = require('request');

exports = module.exports = function(app) {
 
    app.get('/hello', function (req, resp) {
        /* request("http://localhost:5000/test", function(error, response, body) {
            console.error('error:', error); // Print the error
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the data received
            res.send({"test": response}); //Display the response on the website
        }) */

        /* fetch('http://localhost:5000/test').then(function (response) {
            return response.json();
        }).then(function (text) {
            console.log('GET response:');
            console.log(text.greeting); 
        }); */

        resp.send({"Rep": "Express Works !"})

    })

}