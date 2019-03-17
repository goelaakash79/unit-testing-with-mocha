const assert = require('chai').assert;
// const sayHello = require('../index').sayHello;
// const addNumbers = require('../index').addNumbers;
const app = require('../index');

// global results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);

describe('App', () => {
   describe('sayHello()', () => {
      it('sayHello should return hello', () => {
         assert.equal(sayHelloResult, 'hello');
      });

      it('sayHello should return type string', () => {
         assert.typeOf(sayHelloResult, 'string');
      });
   });

   describe('addNumbers()', () => {
      it('addNumbers should be above 5', () => {
         // let result = app.addNumbers(5,5);
         assert.isAbove(addNumbersResult, 5);
      });

      it('addNumbers should return type number', () => {
         assert.typeOf(addNumbersResult, 'number');
      });
   });

});
