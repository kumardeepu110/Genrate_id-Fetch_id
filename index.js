const express = require('express')
const app = express()

app.use(express.json())

app.post('/', (req,res)=>{
    res.send('welcome to the server')
})

function GenrateId(){
    return id++
}

let arr = []
let id = 1


app.post('/user', (req,res)=>{
    let name = req.body.name
    let email = req.body.email

    user = {
        id:GenrateId(),
        name:name,
        email:email
    }
    arr.push(user)
    console.log(arr);
    res.send({
        success:true,
        status:200,
        message:"User added",
        Data:{user}
    })
})

app.get('/user', (req,res)=>{
    arr.filter((ele)=>{
        if(ele.id == req.body.id){
            res.send({
                success:true,
                status:200,
                message:"Id found",
                id:GenrateId(),
                Data:{user}
            })
        }
        else{
            res.send({
                success:false,
                status:400,
                message:"Id not found"
            })
        }
    })
})

app.listen(5000, (err)=>{
    if(err){
        console.log("errr"+err);
    }
    else{
        console.log("server connected");
    }
})
