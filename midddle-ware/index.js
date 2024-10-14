const express= require('express');

const port= 8999;

const app=express();

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    return res.render('index');
})

app.get('/con',AgeCheck,(req,res)=>{
    return res.render('contact');
})

app.get('/product',(req,res)=>{
    return res.render('product');
})

app.use(AgeCheck);

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server is running :-${port}`);
    
})