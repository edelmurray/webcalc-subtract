var expect  = require('chai').expect;
var request = require('request');

it('Subtraction Test', function(done) {
    request('http://localhost:80?x=10&y=5' , function(error, response, body) {
        var output = {
            'error': false,
            'string': '10-5=5',
            'answer': 5
        };
        expect(body).to.equal(JSON.stringify(output));
        done();
    });
});
