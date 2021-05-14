const express = require('express')
const app = express();
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles');
const PORT = 5500;

mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser : true,
  useUnifiedTopology : true
});

app.use(express.urlencoded({ extended : false }))
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
  const articles = [
    {
      title : "Test Article",
      createdAt : new Date().toLocaleDateString(),
      content : 'Test Content'
    },
    {
      title : "Test Article 2",
      createdAt : new Date().toLocaleDateString(),
      content : 'Test Content'
    },
  ]
  res.render('articles/index', { articles });
})

app.use('/articles', articleRouter);

app.listen(PORT, (req, res)=>{
  console.log(`Listening at PORT ${PORT} succesfully`);
})
