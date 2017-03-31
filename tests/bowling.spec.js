/*jshint esversion: 6 */
const chai = require('chai');
const expect = chai.expect;

const bowling = require('../bowling.js');

describe('Bowling function', () => {

  it('should be function', () => {
    expect(bowling).to.be.a('function');
  });

});

describe('Data entered', () => {

  it('the argument should be an array', () => {
    expect(bowling.bind(null,"a")).to.throw("Pass an array !!!");
    expect(bowling.bind(null,6,8,"test")).to.throw("Pass an array !!!");
    expect(bowling.bind(null,true)).to.throw("Pass an array !!!");
  });

  it('should have a length of 10', () => {
    expect(bowling.bind(null,[4,3,2])).to.throw("Array should contain 10 elements");
    expect(bowling.bind(null,[{knock1:4,knock2:5},{knock1:6,knock2:5},{knock1:8,knock2:1},{knock1:2,knock2:3}])).to.throw("Array should contain 10 elements");
  });

  it('Only objects should be included in the array', () => {
    expect(bowling.bind(null,[{knock1:4,knock2:5},{knock1:6,knock2:5},{knock1:8,knock2:1},{knock1:2,knock2:3},{knock1:4,knock2:5},{knock1:6,knock2:5},{knock1:8,knock2:1},{knock1:2,knock2:3},{knock1:8,knock2:1},2])).to.throw("Only objects in the array");
  });

});

describe('Scoring accurately', () => {

  it('without spares or strikes', () => {
   expect(bowling([{knock1:4,knock2:5},{knock1:4,knock2:5},
                  {knock1:4,knock2:5},{knock1:4,knock2:5},
                  {knock1:4,knock2:5},{knock1:4,knock2:5},
                  {knock1:4,knock2:5},{knock1:4,knock2:5},
                  {knock1:4,knock2:5},{knock1:4,knock2:5}]))
                  .to.be.equal(90);
  });

  it('with a spare', () => {
   expect(bowling([{knock1:0,knock2:10},{knock1:4,knock2:5},
                  {knock1:4,knock2:5},{knock1:4,knock2:5},
                  {knock1:4,knock2:5},{knock1:4,knock2:5},
                  {knock1:4,knock2:5},{knock1:4,knock2:5},
                  {knock1:4,knock2:5},{knock1:4,knock2:5}]))
                  .to.be.equal(95);
  });

  it('with a strike', () => {
   expect(bowling([{knock1:10,knock2:0},{knock1:4,knock2:5},
                  {knock1:4,knock2:5},{knock1:4,knock2:5},
                  {knock1:4,knock2:5},{knock1:4,knock2:5},
                  {knock1:4,knock2:5},{knock1:4,knock2:5},
                  {knock1:4,knock2:5},{knock1:4,knock2:5}]))
                  .to.be.equal(100);
  });


  it('with a mix of spares and strikes', () => {
   expect(bowling([{knock1:10,knock2:0},{knock1:4,knock2:5},
                  {knock1:4,knock2:5},{knock1:4,knock2:5},
                  {knock1:4,knock2:5},{knock1:2,knock2:8},
                  {knock1:4,knock2:5},{knock1:4,knock2:5},
                  {knock1:0,knock2:10},{knock1:4,knock2:5}]))
                  .to.be.equal(110);
  });

});

describe('Working with spares and strikes on the 10th frame', () => {

  it('with spare on 10th frame', () => {
    expect(bowling([{knock1:4,knock2:5},{knock1:4,knock2:5},
                  {knock1:4,knock2:5},{knock1:4,knock2:5},
                  {knock1:4,knock2:5},{knock1:4,knock2:5},
                  {knock1:4,knock2:5},{knock1:4,knock2:5},
                  {knock1:4,knock2:5},{knock1:4,knock2:6,knock3:7}]))
                  .to.be.equal(98);
  });

  it('with strike on 10th frame', () => {
    expect(bowling([{knock1:4,knock2:5},{knock1:4,knock2:5},
                  {knock1:4,knock2:5},{knock1:4,knock2:5},
                  {knock1:4,knock2:5},{knock1:4,knock2:5},
                  {knock1:4,knock2:5},{knock1:4,knock2:5},
                  {knock1:4,knock2:5},{knock1:10,knock2:3,knock3: 5}]))
                  .to.be.equal(99);
  });

});
