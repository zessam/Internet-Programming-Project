const express = require('express')
const bp = require('body-parser')
const app = express()
const {Search , Update , AddNewData , Delete} = require('./backend')
app.use(express.json());  
app.use(bp.urlencoded({ extended: true }));
app.get('/' , (req , res)=>{
    res.send("<h1>Hello Kiddo</h1>")
})

app.get('/about' , (req , res)=>{
    res.send("<h1>About</h1>")
})
app.get('/contactus' , (req , res)=>{
    res.send("<h1>Contact Us</h1>")
})


app.post('/user/:username' , (req , res)=>{
    AddNewData(req.params.username)
    res.send(Search(req.params.username))
})




app.get('/user/:username' , (req , res)=>{
    res.send(Search(req.params.username))
})



app.delete('/user/:username' , (req , res)=>{
    res.send(Delete(req.params.username))
})




app.put('/user/:username-:newdata' , (req , res)=>{
    Update(req.params.username , req.params.newdata)
    res.send(Delete(req.params.username))
})



app.listen(8000 , ()=>{
    console.log("Listening....")
})