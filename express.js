const express = require('express')
const app = express();
const port = 4020 ;

app.get('/',(req,res)=>{
    res.send('hello world!')
})



app.listen(port , ()=>{
    console.log(`server listening to port at ${port}`);
})
