// const calculate = require('calculate');
const { includes } = require('methods');
const express = require('express');
const app = express();

app.use(express.static('./public'));
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');

app.get('/',loadGoalIndex);
app.post('/dateChange',updateDate);

function loadGoalIndex(req,res){
    res.render('./goalIndex.ejs');
}

function updateDate(req,res){
    console.log('Somethings wrong');
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    console.log(res.body);
    res.render('./goalIndex.ejs');
}

app.listen(3002, ()=>{console.log('Up on 3002')});