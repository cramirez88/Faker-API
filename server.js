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
  id: faker.datatype.uuid(),
  name: faker.name.fullName(),
  address: {
    street: faker.address.street(),
    city: faker.address.cityName(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
    country: faker.address.country()
  }
}


const createUser = () => {
  return userObj
}

const createCompany = () => {
  return companyObj
}

app.get('/api/users/new', (req, res) => {
  res.send(createUser())
})

app.get('/api/companies/new', (req, res) => {
  res.send(createCompany())
})

app.get('/api/user/company' ,(req,res) => {
  res.json({
    user: createUser(),
    company: createCompany()
  })
})


app.listen(PORT, console.log(`I am listening on PORT: ${PORT}`))
