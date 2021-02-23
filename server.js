'use strict';

const express = require('express');
const details = require('./middleware/details.js');
const app = express();

app.get('/test', (req,res)=>{
  console.log('custom mw req pieces', req.details)
  res.json({msg: 'test success'});
})
function start(port){
  app.listen(port, () => {
    console.log(`Listening on PORT ${port}`);
  })
}

// app is an object with a reference to express for its methods
module.exports ={
  app: app,
  start: start
}