const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    const obj = {
      title : "note 1",
    description : "this is the descrition of note 1",
    time : Date.now()
    }
res.json(obj);
})

module.exports = router;