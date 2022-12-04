const express = require('express')
const app = express()
const fs = require('fs');
const content = 'Some content!';

app.all('/', (req, res) => {
    console.log("Just got a request!")
    fs.writeFile('/test.txt', content, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
        res.send('Yo1!')
    });
    res.send('Yo2!')
})


app.listen(process.env.PORT || 3000)
