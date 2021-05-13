const express = require('express');
const ThingSpeak= require('thingspeakclient'); //install thingspeakclient using the command npm i thingspeakclient go to npmpjs.com to get more info over thingspeakclient module
const app = express();
var client = new ThingSpeak();

app.use(express.json()); //Using this can render javascript object from res.send 

var fieldData;
client.getLastEntryInFieldFeed(12397, 1, (err, resp)=>{
    if(!err){
        fieldData = resp;
    }
});
// We can use the above function to get the last entry in the field of the public channel 
// Use JSON Viewer PRO extension in chrome to see the json in browser
app.get('/', (req, res) => {
    res.send(fieldData); 
});








const port=3000;
app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`);
});