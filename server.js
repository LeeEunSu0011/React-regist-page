const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = process.env.port || 4000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));

app.get('/api/registers', (req, res) => {
    res.send([
        {
          'name' : "1",
          'birthday' : '1993.9.3',
          'gender' : 'man',
          'job' : 'progremer'
        },
        {
          'name' : "2",
          'birthday' : '1993.9.3',
          'gender' : 'man',
          'job' : 'progremer'
        },
        {
          'name' : "3",
          'birthday' : '1993.9.3',
          'gender' : 'man',
          'job' : 'progremer'
        }
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));