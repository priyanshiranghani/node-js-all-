const AgeCheck = (req,res,next)=>{
    let age=req.query.age;

    if(age>=18){
        return next();
    }else{
        return res.redirect('/')
    }
}


module.exports={
    AgeCheck,
}