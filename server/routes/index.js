import express from 'express';
import my from '../lib/test';
var router = express.Router();

// ..stuff below

 

/* GET home page. */

router.get('/', async (req, res, next) =>  {
  try {
    const outputVar = await my();
     console.log( outputVar );


    res.render('index', { title: 'Express' });
  }
  catch (e) {
    next(e) 
  }
});

export default router;
