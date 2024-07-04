const fs = require('fs'); // file system
const express = require('express');
const app = express();

function createFile(fileName, text) {
    fs.writeFile(fileName, text, (err) => {
        if(err) {
            console.error(err);
            return;
        }
        console.log('Файл створено успішно!');
        console.log(`Назва файлу: ${fileName}. Зміст: ${text}`);
    })
}

function readFile(fileName) {
    fs.readFile(fileName, 'utf-8', (err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        console.log(`Назва файлу: ${fileName}. Зміст файлу: ${data}`);

    })
}

app.get('/', function (req, res) {
    res.send('Hello!');
})

app.get('/home', function (req, res) {
    fs.readFile('temp.txt', 'utf-8', (err, data) => {
        if(err) {
            console.error(err);
            return;
        }

        res.send(data);
    })
})

app.listen(3000);

// readFile('temp.txt');
// createFile('temp.txt', "Hello NODE.JS!!!");

