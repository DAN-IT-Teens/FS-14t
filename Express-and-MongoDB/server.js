const express = require("express");
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin@cluster0.lpbqzyj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")


app.get('/', (req ,res) => {
    res.send("Hello world!");
});

app.post('/register', (req, res) => {
    const userSchema = new mongoose.Schema({
        name: String,
        password: String,
        city: String
    })
    const User = mongoose.model('User', userSchema);

    const newUser = new User(req.body);

    newUser.save()
        .then(() => {
            console.log(req.body);
            console.log(newUser);
            res.status(201).send(newUser);
        })
        .catch((error) => {
            res.status(400).send(error);
        })

})

app.listen(4500, function () {
    console.log('Server is running on http://localhost:4500');
})