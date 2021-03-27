process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
var expect  = require('chai').expect;

chai.use(chaiHttp);


it('should return 200', (done) => {
chai.request(server)
  .get('/?x=4&y=2')
  .end((err, res) => {
    res.should.have.status(200);
    done();
});
});


it('should return 200, answer = 86', (done) => {
  chai.request(server)
    .get('/?x=88&y=2')
    .end((err, res) => {
      res.should.have.status(200);
      expect(res).to.be.json;
      res.body.should.have.property('answer').eql(86);
      done();
  });
  });

it('should return 400 - incorrect y params', (done) => {
    chai.request(server)
      .get('/?x=4')
      .end((err, res) => {
        res.should.have.status(400);
        done();
    });
    });

    it('should return 400 - incorrect x params', (done) => {
        chai.request(server)
          .get('/?y=4')
          .end((err, res) => {
            res.should.have.status(400);
            done();
        });
        });

        it('should return 400 - incorrect str params', (done) => {
            chai.request(server)
              .get('/?x=j&y=p')
              .end((err, res) => {
                res.should.have.status(400);
                done();
            });
            });       

            it('should return 400 - no query', (done) => {
                chai.request(server)
                  .get('/')
                  .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
                });