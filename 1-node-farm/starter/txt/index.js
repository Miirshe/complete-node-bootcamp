const fs = require('fs');
const path = require('path');

//blocking or asynchronise

// const values = fs.readFileSync(path.join(__dirname, '.', 'input.txt'));

// const inputText = fs.writeFileSync(path.join(__dirname, '.', 'append.txt'), values);
// console.log(`written ${inputText}`);

// non-blocking fs module 

fs.readFile(path.join(__dirname, '.', 'input.txt'), (err, data) => {
    console.log(`data is : ${data}`);
    fs.writeFile(path.join(__dirname, '.', 'append.txt'), data, (err, data2) => {
        if (!err) {
            console.log(`data is written by that file${path.join(__dirname, '.', 'append.txt')}`);
        } else {
            console.log('file not found');
        }
    })

})