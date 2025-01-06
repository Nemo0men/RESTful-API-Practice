// const express = require('express');
// const app = express();
const app = require('express')();
const PORT = 8080;

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

// app.use(express.json());

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'tshirt',
        size: 'large',
    })
});

// app.get('/family', (req, res) => {
//     res.status(200).send({
//         name: 'Han Lim',
//         age: 50,
//         gender: 'female',
//         email: 'hanlim@fake.com',
//     })
// });

// app.get('/family/father', (req, res) => {
//     res.status(200).send({
//         name: 'Hyung Kim',
//         age: 53,
//         gender: 'male',
//         email: 'hyungkim@fake.com',
//     })
// });

// app.get('/family/brother', (req, res) => {
//     res.status(200).send({
//         name: 'Nathan Kim',
//         age: 17,
//         gender: 'male',
//         email: 'nathankim@fake.com',
//     })
// });

// app.post('/family/:id', (req, res) => {
//     const { id } = req.params;
//     const { name, age, gender, email } = req.body;
//     if (!name || !age || !gender || !email) {
//         res.status(400).send({
//             message: 'Name, age, gender, and email are required',
//         });
//     }
//     res.status(200).send({
//         id,
//         name,
//         age,
//         gender,
//         email,
//     })
// });

