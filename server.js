const server=require("express")
const app=server()
require("dotenv").config()




const port = process.env.port || 3000


app.set("view engine","ejs")
app.set("views","views")

app.get("/",(req,res,next)=>{
  res.render("index.ejs")
})


app.listen(port,()=>{
  console.log("server is on",port)
})
