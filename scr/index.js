const express = require('express');
const app = express();
const morgan = require('morgan');

app.set(`port`,process.env.PORT || 3000);
app.set('json spaces',2);

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.get('/api/v1',(req,res)=>{
    res.send([{"Name": "Pepito Perez", "password":"1299999"},{"Name": "Diego Arias", "password":"123654"},{"Name": "Anguie Garcia", "password":"123000"},{"Name": "Gloria Caceres", "password":"123456"}]);
});

app.listen(app.get(`port`),()=>{
    console.log(`Server on port ${app.get(`port`)}`);
});