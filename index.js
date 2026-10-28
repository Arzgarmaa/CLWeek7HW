let express = require('express');
let app = express();

// app.get('/', (req,res)=> {
//    res.send('this is the main page');
//    console.log('Homepage route was reached');
// })
app.use(express.json());

let ideaTracker = [];


app.post('/ideaLog', (req, res)=> {
    // console.log(req.body);
    let currentDate = Date();
    let obj = {
        date: currentDate, 
        idea: req.body.ideaDesc
    }
    ideaTracker.push(obj);
    console.log(ideaTracker)
    res.json({task:"success"});
})

app.use('/', express.static('public'));

app.listen(5500, ()=> {
    console.log("listening at localhost 5500")
}) 

app.get('/getidea',(req,res)=> {
    let obj ={data: ideaTracker};
    res.json(obj);
})

//end baigaa neg ym post req sonsoh hergtei 
// routo to get the info ??