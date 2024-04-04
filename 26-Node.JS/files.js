const fs = require('fs');

fs.writeFile('./26-Node.JS/info/contentNew.txt', 'Це новий контент для нашого створеного файлу!', function (error) {
    if(error) {
        console.error(error);
        return;
    }

    console.log('Файл успішно створено!');
})

fs.readFile('./26-Node.JS/info/contentNew.txt', 'utf8', function (error, value) {
    if(error) {
        console.error(error);
        return;
    }

    console.log(value);
})