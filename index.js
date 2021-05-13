const express = require('express');
const ThingSpeak= require('thingspeakclient');
const app = express();
var client = new ThingSpeak();

app.use(express.json());

var fieldData;
client.getLastEntryInFieldFeed(12397, 1, (err, resp)=>{
    if(!err){
        fieldData = resp;
    }
});

app.get('/', (req, res) => {
    res.send(fieldData); 
});








const port=3000;
app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`);
});