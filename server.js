const express = require('express')
const app = express()
const PORT = 8000;
const { faker } =  require('@faker-js/faker');

const userObj = {
  password: faker.internet.password(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.number(),
  lastname: faker.name.lastName(),
  firstName: faker.name.firstName(),
  chemicalElement: faker.science.chemicalElement()
}

const companyObj = {
  
}


const createUser = () => {
  return userObj
}

console.log(createUser())
