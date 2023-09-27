const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyparser.json());
app.use(cors());

const userData = [
    {
        email: 'bur123',
        password: "1234"
    },  
    {
        email: 'bur1234',
        password: "12345"
    },
    {
        email: 'bur12345',
        password: "123456"
    }
]

app.post("/login", (req, res) => {
    const newName = userData.find(user => user.email === req.body.email && user.password === req.body.password)

    if (newName) {
        res.send({
            success: true,
            errer: false

        })
    } else {
        res.send({
            success: false,
            errer: true
        }
        );
    }
}
)
 app.listen(3001,()=>{
    console.log('started');
 })
