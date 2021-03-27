process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);


it('should return 200', (done) => {
chai.request(server)
  .get('/?x=4&y=2')
  .end((err, res) => {
    res.should.have.status(200);
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