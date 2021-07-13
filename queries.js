const Pool = require('pg').Pool

const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'customer-tracker',
    password: 'secret',
    port: 5432,
})

// Get all customers
const getCustomers = (request, response) => {
    pool.query('SELECT * FROM customers ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}