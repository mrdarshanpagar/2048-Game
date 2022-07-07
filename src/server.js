const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 8000


const static_path = path.join(__dirname,'../public')
app.use(express.static(static_path))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})