const express = require('express');
const messages = require('./messages');
const bodyParser = require('body-parser')

const port = 3000;

const app = express();
app.use(bodyParser.json());

app.get('/messages', (req, res)=>{
    res.json(messages);
})


app.get("/messages/:id", (req,res)=>{
    var a = messages.find(f=> f.id == req.params.id);
    res.json(a);
})

app.post("/messages", (req,res)=>{
    console.log(req.body)
    const {username, message} = req.body;

    const ids= messages.map(f=>f.id);
    const message_post = {id : Math.max(...ids)+1,username, message};
    const messages_new = messages.concat(message_post)
    res.json(messages_new)
    FileSystem.writeFile( v)

})

app.listen(port, () => console.log("listening"));
