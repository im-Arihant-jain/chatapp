const Chat = require("./models/chat.js");
const mongoose = require('mongoose');
main()
.then(()=>console.log("connection is successfull"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

    
}
let chats = [
    {
        from: "arihant",
        to: "harman",
        msg: "hi harman",
        created_at: new Date()
    },
    {
        from: "harman",
        to: "arihant",
        msg: "hey arihant",
        created_at: new Date()
    },
    {
        from: "alice",
        to: "bob",
        msg: "Hello Bob!",
        created_at: new Date()
    },
    {
        from: "bob",
        to: "alice",
        msg: "Hi Alice, how are you?",
        created_at: new Date()
    },
    {
        from: "charlie",
        to: "david",
        msg: "Hey David, long time no see!",
        created_at: new Date()
    }
];  // chad jaa bhai bas mai aa rha hu 
Chat.insertMany(chats);