'use strict';

const express = require('express');

const PORT = 80;
const HOST = '127.0.0.1';

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

    if(!req.query){
        output.error = true;
        output.string = 'No arguments recieved - Bad Request'
        res.status(400).end(JSON.stringify(output));
        return;
    }

    if(!req.query.x || !req.query.y){
        output.error = true;
        output.string = 'Invalid parameters - Bad Request'
        res.status(400).end(JSON.stringify(output));
        return;
    }
    else {
        if(parseInt(req.query.x)&&parseInt(req.query.y)){
            x = req.query.x;
            y = req.query.y;
        }
        else{
            output.error = true;
            output.string = 'Invalid parameters for calculation: params are not valid integers';
            res.status(400).end(JSON.stringify(output));
            return;
        }
    }

    var answer = sub.subtract(x,y);

    output.string = x + '-' + y + '=' + answer;
    output.answer = answer;
    if (output.error==false) {
        res.status(200).end(JSON.stringify(output));
        return;
    } else {
        res.status(400).end(JSON.stringify(output));
        return;
    }
    
});

app.listen(PORT, HOST);

module.exports = app; // for testing