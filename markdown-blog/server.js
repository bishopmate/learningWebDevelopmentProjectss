const express = require('express')
const app = express();
const articleRouter = require('./routes/articles');
const PORT = 5500;

app.set('view engine', 'ejs');
app.use('/articles', articleRouter);

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

app.listen(PORT, (req, res)=>{
  console.log(`Listening at PORT ${PORT} succesfully`);
})
