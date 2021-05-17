const express = require('express');
const methodOverride = require('method-override');
const app = express();
const Article = require('./models/aritcles');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles');
const PORT = 5500;

app.use(methodOverride('_method'));
mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser : true,
  useUnifiedTopology : true,
  useCreateIndex : true
});

app.use(express.urlencoded({ extended : false }))
app.set('view engine', 'ejs');

app.get('/', async (req,res)=>{
  const articles = await Article.find().sort({createdAt : 'desc'});
  res.render('articles/index', { articles });
})

app.use('/articles', articleRouter);

app.listen(PORT, (req, res)=>{
  console.log(`Listening at PORT ${PORT} succesfully`);
})
