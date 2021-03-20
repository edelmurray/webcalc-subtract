var expect  = require('chai').expect;
var request = require('request');

describe("test server request 200", function() {
  var url = "http://localhost:80/?x=2&y=2";
  it("returns status 200", function() {});
  it("returns answer 2-2=0 error false", function() {});
});

describe("test server request 400", function() {
  var url = "http://localhost:80";
  it("returns status 400", function() {});
  it("returns answer 0 error true", function() {});
});

describe("test server request 400, incorrect x param", function() {
  var url = "http://localhost:80/?y=10";
  it("returns status 400", function() {});
  it("returns answer 0 error true", function() {});
});

describe("test server request 400, incorrect y param", function() {
  var url = "http://localhost:80/?x=10";
  it("returns status 400", function() {});
  it("returns answer 0 error true", function() {});
});