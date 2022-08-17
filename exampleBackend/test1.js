const chai = require('chai');
const require = require("supertest");
//const server = require('./index')

const {helloworld} = require('../test');
const newtest= require('../test');

helloworld= newtest.helloworld;

decribe("Test funtions", function(){
    decribe("helloworld()", function(){
it("Result should return hello world",function(){

expect(helloworld).to.equal("helloworld");

})
    })
   
})