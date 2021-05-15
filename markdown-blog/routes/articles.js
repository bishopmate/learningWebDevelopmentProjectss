const express = require('express')
const router = express.Router();
const Article = require('../models/aritcles');

router.get('/new', (req, res)=>{
  res.render('articles/new', { article : new Article() });
});

router.get('/edit/:id', async (req, res)=>{
  const article = await Article.findById(req.params.id);
  res.render('articles/edit'
  , { article : article });
})

router.get('/:slug', async (req, res) => {
  const article = await Article.findOne({ slug : req.params.slug });
  if(article == null) res.redirect('/');
  res.render('articles/show', { article });
})

router.post('/', async (req, res, next)=>{
  req.article = new Article();
  next();
}, saveArticleAndRedirect('new'))

router.delete('/:id', async (req, res) =>{
  await Article.findByIdAndDelete(req.params.id);
  res.redirect('/');
})

router.put('/:id', async(req, res, next)=>{
  req.article = await Article.findById(req.params.id);
  next();
}, saveArticleAndRedirect('edit'))

function saveArticleAndRedirect(path){
  return async (req, res) => {
    console.log(req.body);
    let article = req.article;
    article.title = req.body.title; 
    article.content = req.body.content;
    article.markdown = req.body.markdown;  
    try{
      article = await article.save();
      res.redirect(`/articles/${article.slug}`)  
    }catch(e){
      console.log(e);
      res.render(`articles/${path}`, { article });
    }
  }
}
module.exports = router;