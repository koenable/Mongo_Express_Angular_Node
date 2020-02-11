const express = require('express');
const router = express.Router();

// get all latest news
router.get('/', (req,res,next) =>{
    res.status(200).json({
        message : 'A collection of all participating teams.'
    });
});

// Get specific soccer team
router.get('/:newsId', (req, res, next) =>{
    const id = req.params.newsId;
    if (id !== null) {
        res.status(200).json({
            message: "ID received. Getting Specific Soccer Team",
            id: id
        });
    } else {
        res.status(200).json({
            message: "Failed to get requested soccer team.",
            id:id
        });
    }   
});


// Patch/Update specific soccer team
router.patch('/:newsId', (req, res, next) =>{
    const id = req.params.newsId;
    res.status(200).json({
        message:"Updated specific soccer team newid",
        id:id
    });
});


// Delete specific soccer team
router.delete('/:newsId', (req, res, next) =>{
    const id = req.params.newsId;
        res.status(200).json({
            message: "Soccer team deleted",
            id:id
        });
});



// post latest news
// router.post('/:newsId',(req, res, next) =>{

//     res.status(200).json({
//         message: "Posting New Latest News",
//         id:id
//     });
// });




module.exports = router;

