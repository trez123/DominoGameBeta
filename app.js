const express = require('express');
var cors = require('cors');
const { exec } = require("child_process");
const app = express();

const PORT = 3000;

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/left', function (req, res){
    console.log('left function triggered from button click');
    exec("sass scss/domino-left.scss:public/styles/domino.css", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    res.send('left function triggered successfully!');
})

app.get('/right', function (req, res){
    console.log('right unction triggered from button click');
    exec("sass scss/domino-right.scss:public/styles/domino.css", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    res.send('right unction triggered successfully!');
})
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);