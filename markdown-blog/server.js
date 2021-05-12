const express = require('express')
const app = express();
const PORT = 5500;
app.set('view engine', 'ejs');


app.get('/', (req,res)=>{
  res.render('index');
})

app.listen(PORT, (req, res)=>{
  console.log(`Listening at PORT ${PORT} succesfully`);
})
