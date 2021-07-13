const Pool = require('pg').Pool

const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'customer_tracker',
    password: 'secret',
    port: 5432,
})

// Get all customers
const getCustomers = (request, response) => {

    // Get customers by city
    if (typeof request.query !== 'undefined' && request.query) {
        const city = request.query.city
            pool.query('SELECT * FROM "customers" WHERE city=$1',[city], (error, results) => {
                if (error) {
                    throw error
                }
                response.status(200).json(results.rows)
            })
    } else {
        // get all customers
        pool.query('SELECT * FROM "customers" ORDER BY id ASC', (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    }
}

// get a customers row by id
const getCustomersByID = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM "customers" WHERE id=$1',[id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// Create a new customer in the database
const createCustomer = (request, response) => {
    const { first_name, last_name, email, address, city, state, zip} = request.body

    pool.query('INSERT INTO "customers" (first_name, last_name, email, address, city, state, zip) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [first_name, last_name, email, address, city, state, zip], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).json(results.rows)
    })
}

// get a customer by a city
const getCustomerByCity = (request, response) => {
    const city = request.query.city
    const getCustomersByID = (request, response) => {
        const id = parseInt(request.params.id)
        pool.query('SELECT * FROM "customers" WHERE city=$1',[city], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    }
}

module.exports = {
    getCustomers,
    getCustomersByID,
    createCustomer
}