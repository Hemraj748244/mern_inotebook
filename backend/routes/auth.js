const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    const obj = {
        username : "Hemraj",
        password : "**********"
    }
res.json(obj);
})

module.exports = router;