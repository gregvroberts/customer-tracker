
const express = require("express")
const bodyParser = require('body-parser')
const logger = require('./logger/logger')

const app = express()

// For environment variables
require('dotenv').config()

const db = require('./db/queries') // db code
const port = process.env.PORT || 3070

console.log('environment::::::::::::::::', process.env.ENVIRONMENT)

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/customers', db.getCustomers)
app.get('/customers/:id', db.getCustomersByID)
app.post('/customer', db.createCustomer)

app.get("*", function(request, response) {
    logger.info("customers route")
    response.send("The app works!!!!")
})

app.listen(port, (err) => {
    if (err) {
        logger.error('Error:::::', err)
    }
    logger.info(`running server from port::::::::${port}`)
})