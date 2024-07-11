const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');
const jwt_token = "l/kgvjkgcfmhtvyklmctelkjfdy6i976riopr32";
app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin@cluster0.lpbqzyj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    city: String
})
const User = mongoose.model('User', userSchema);

app.get('/', (req ,res) => {
    res.send("Hello world!");
});

app.post('/register', async (req, res) => {
    const { name, password, city } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            password: hashedPassword,
            city
        });
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send(error);
    }
})

app.post('/login', async (req, res) => {
    const { name, password } = req.body;

    try {
        const user = await User.findOne({name});
        if(!user) {
            return res.status(400).json({
                error: "Invalid username or password!"
            })
        }
        const isCorrectPassword = await bcrypt.compare(password, user.password);
        if(!isCorrectPassword) {
            return res.status(400).json({
                error: "Invalid username or password!"
            })
        }

        const token = jwt.sign({ userId: user._id }, jwt_token, { expiresIn: "5h" })
        res.json({ token });

    } catch (error) {
        res.status(500).json({ error: "Server error. Please view logs!" })
    }
})

function checkToken(req, res, next) {
    const token = req.header('Authorization').replace('Bearer ', '');

    if(!token) {
        return res.status(401).json({
            error: "No token!"
        })
    }

    try {
        const decoded = jwt.verify(token, jwt_token);
        console.log(decoded.userId);
        next();
    } catch (error) {
        res.status(401).json({
            error: 'Token is not valid.'
        });
    }
}

app.get("/private", checkToken, (req, res) => {
    res.json('Welcome to private endpoint!');
})

app.listen(4500, function () {
    console.log('Server is running on http://localhost:4500');
})