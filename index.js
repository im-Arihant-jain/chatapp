const mongoose = require('mongoose');
const express = require("express")
const path = require("path");
const app = express();
const Chat = require("./models/chat.js");   // bhool bhulayiaan 2 and hence its always good to have it 
const methodOveride = require("method-override")
app.listen(8000 ,()=>{
  console.log("Server started");
})   
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs")
app.use(methodOveride("_method"))
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({ extended: true }));

main()
.then(()=>console.log("connection is successfull"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
app.get("/",(req,res)=>{
  res.send("request is send");
}) 
app.get("/chats",async (req,res) =>{
  
  let chats = await Chat.find();
  res.render("index",{chats})
  console.log(chats);
})
app.get("/chats/new",async (req,res) =>{ 
  res.render("new")
//  console.log(chats);
}) 
app.post("/chats", (req,res)=>{
  let {from, msg,to}= req.body;
  let newmssg = new Chat({
    from: from,
    msg: msg,
    to:to,
    created_at: new Date()    
  })
  newmssg.save().then((res)=> console.log(res)).catch(err => console.log(err));
  res.redirect("/chats")
})    
app.get("/chats/:id/edit",async (req,res)=>{
  let {id} =req.params;
  let chat  = await Chat.findById(id);  
  
  res.render("editform",{chat})
})
 
app.put("/chats/:id",async (req,res)=>{
  let {id} =req.params; 
  let {mssg:newmssg} = req.body;            
  let chat  = await Chat.findByIdAndUpdate(id,{msg:newmssg},{runValidators: true,new: true});  
  res.redirect("/chats")
})
  









// chalo online truth and dare khelte hia 
// main()
// .then((res)=>console.log("succesfull ho gya hai"))
// .catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');
//   // 
//   email: String,   
// });
// const User = mongoose.model("User",userSchema)
// const user1 = new U20 hi rs lage the mere and hene
// }

// const userSchema = new mongoose.Schema({
//   name : String,
// age : Number,ser({
//   name:"Arihant",
//   age: 18,
//   email: "asdfjkjsjkf",
// })    // masti kro pitti krro and hence its alw
// User.findOne({age:{$gt:15}}).then((res) => console.log(res)).catch((err)=> console.log(err));
// // tricks and hence lc hards and miscellaneos
// user1.save(); 


