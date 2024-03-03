import  express, { json }  from "express";


const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/' , (req , res)=>{

   res.send(`hello from simple server : ${req.baseUrl}`)

})


app.listen(8089, ()=>{
    console.log("App is running on port: 8089");    
})

