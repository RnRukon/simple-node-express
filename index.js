const express = require('express');
const cors = require('cors')
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('wow , I am Excited to learning node')
});

const users = [
    { id: 1, name: "Rukon", email: "rukon.js@gmail.com" },
    { id: 2, name: "uddin", email: "rukon.js@gmail.com" },
    { id: 3, name: "Rukon", email: "rukon.js@gmail.com" },
    { id: 4, name: "Rukon", email: "rukon.js@gmail.com" },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users)
    }

})
//app.method------
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
    // console.log(req.params.id)
})
const fruits = ['banana', 'appal', 'anaros', 'komola'];
app.get('/fruits', (req, res) => {
    res.send(fruits)
})
app.listen(port, () => {
    console.log('Listening to prot', port)
})
