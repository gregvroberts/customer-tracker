//
// // ################################################################
// // FileName: ./app.js
// // Size: 105
// // Authors: Gregory Roberts
// // Created On: 07/13/21
// // Last Modified On: 07/13/21
// // Copy Rights: HEB, LP.
// // Description: app.js is our API entry point.
// // ################################################################
//
// // Version 0.2.0 Team Rad. Last Update - 07-13-2021
// // V0.0.1 - Gregory Roberts - Created 07-13-2021 Init commit
// // V0.1.0 - Gregory Roberts - Added 07-13-2021 - Added the POST:/customer endpoint
// // V0.2.0 - Gregory Roberts - Added 07-13-2021 - Added the GET:/customers endpoint
//
//
// // This makes it easy to create routes and logic connected to each route
// const express = require("express");
//
// const app = express();
// const bodyparser = require("body-parser");
//
// const port = process.env.PORT || 3200;
//
// // Our middleware
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extend: false }));
//
// // Method: POST
// // Endpoint: /customers
// // Description: Creates a customer. Responds with 200 status if good. 401 if bad.
// app.post("/customer", (req, res) => {
//     const customer = req.body;
//
//     // Make sure the values are defined in the client's request body
//     if (customer.first_name && customer.last_name && customer.email && customer.address && customer.city && custome.state && customer.zip) {
//         customers.push({
//             ...customer,
//             // Set the id
//             id: `${customers.length + 1}`
//         });
//
//         res.status(200).json({
//             message: "Customer created successfully"
//         });
//     } else {
//         // If not every value was defined...
//         res.status(401).json({
//             message: "Invalid customer creation"
//         });
//     }
// });
//
// // Method: GET
// // Endpoint: /customers
// // Description: Gets all the customer data and responds with a 200 status
// app.get("/customers", (req, res) => {
//    res.status(200).send(customers);
// });
//
// // function GetCustomersByCity(city) {
// //     let custs = [];
// //     foreach (let c in customers)
// //         if (c.city === city) {
// //             custs += c;
// //         }
// //         return custs
// // }
//
// // This is similar to listen and serve. It runs our API.
// app.listen(port, () => {
//     console.log(`running on port ${port}`);
// })
//
// // Holds all the customers that come into our API from the client.
// const customers = [];