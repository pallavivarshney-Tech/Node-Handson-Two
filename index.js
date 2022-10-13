const express=require('express')
const App=express();
App.get('/',(req,res)=>{
    res.send("This is Handson Second")
})
App.get('/about',(req,res)=>{
    res.send("hii everyone")
})
App.get('/Contact',(res,req)=>{
    res.send("we are learning node")
})
App.listen('4000',(req,res)=>{
    console.log("connect");
})
