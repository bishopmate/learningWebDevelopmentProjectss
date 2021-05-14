const express = require('express')
const router = express.Router();
const Article = require('../models/aritcles');

router.get('/new', (req, res)=>{
  res.render('articles/new', { article : new Article() });
});

router.get('/:id', async (req, res) => {
  const article = await Article.findById(req.params.id);
  if(article == null) res.redirect('/');
  res.render('articles/show', { article });
})

router.post('/', async (req, res)=>{
  console.log(req.body);
  let article = new Article({
    title : req.body.title,
    content : req.body.content,
    markdown : req.body.markdown,  
  })
  try{
    article = await article.save();
    res.redirect(`/articles/${article.id}`)  
  }catch(e){
    console.log(e);
    res.render('articles/new', { article });
  }
})

module.exports = router;