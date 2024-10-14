const express=require('express');

const port = 9090;

const app = express();

const db = require('./config/db');

app.set('view engine','ejs');

app.use(express.urlencoded());

const user = require('./models/UserModel')

app.get('/',(req,res)=>{
    return res.render('add')
})
app.get('/view',(req,res)=>{
    return res.render('view')
})


const userModel= require('./models/UserModel')

app.post('/insertRecord',(req,res)=>{
    const {name,email,password,gender,hobby,city,phone}= req.body;

    userModel.create({
        name:name,
        email:email,
        password:password,
        gender:gender,
        hobby:hobby,
        city:city,
        phone:phone,

    }).then((data,err)=>{
        if(err){
            console.log(err);
            return false;

        }
        console.log(`recorde add`);
        return res.redirect('/add');
    })
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server is running:- ${port}`);
    
})