const express = require('express');

const port=9090;

const app = express();

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    return res.render('index',{
        title:"gandi prinsy",
        pageneme:"hello",
        users:[

            {
                id:"1",
                name:"bansi"
            },
            {
                id:"2",
                name:"bansi"
            },
            {
                id:"3",
                name:"bansi"
            },
        ]
    })
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server is running : ${port}`);
    
})
