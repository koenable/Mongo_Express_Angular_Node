const express = require('express');
const router = express.Router();


// router.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000'"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods:PUT,POST,GET,DELETE,OPTIONS");
//     res.header("Access-Control-Allow-Origin:*");
//     next();
//   });

router.post('/', (req, res, next) =>{
    res.status(200).json({
        message:"I work!",
    });
});

router.post('/:data', (req, res, next) =>{
    const data = req.params.data;
    res.status(200).json({
        message:"I work with data",
        data:data
    });
});



module.exports = router;