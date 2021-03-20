'use strict';

const express = require('express');

const PORT = 80;
const HOST = '0.0.0.0';

var sub = require('./subtract');

const app = express();
app.get('/', (req,res) => {
    var x = 0;
    var y = 0;

    var output = {
        'error': false,
        'string': '',
        'answer': 0
    };

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(!req.query.x || !req.query.y){
        output.error = true;
    }
    else {
        x = req.query.x;
        y = req.query.y;
    }

    var answer = sub.subtract(x,y);

    output.string = x + '-' + y + '=' + answer;
    output.answer = answer;
    if (output.error==false) {
        res.status(200).end(JSON.stringify(output));
    } else {
        res.status(400).end(JSON.stringify(output));
    }
    
});

app.listen(PORT, HOST);
