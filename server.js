let express = require('express');
let app = express();
let port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));

app.get('/', (req,res)=>{
    res.render('index.html');
});

app.get('/addTwoNumbers',(req,res)=>{
    //let payLoad = {}
    let statusCode = 200;
    let sucessMesssage = 'successful';
    let num1 = req.query.num1; 
    let num2 = req.query.num2; 
    let result = parseInt(num1) + parseInt(num2); 

    res.json({
        message:sucessMesssage, 
        code: statusCode, 
        data: result
    });
});

app.listen(port, () => {
    console.log('server started');
});