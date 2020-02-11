const express = require('express');
const router = express.Router();

// get all latest news
router.get('/', (req,res,next) =>{
    res.status(200).json({
        message : 'Getting Latest News and staff'
    });
});

// Get specific latest newss
router.get('/:newsId', (req, res, next) =>{
    const id = req.params.newsId;
    if (id !== null) {
        res.status(200).json({
            message: "ID received. Getting Specific News based on newsId",
            id: id
        });
    } else {
        res.status(200).json({
            message: "Paraete match failed",
            id:id
        });
    }   
});


// Patch/Update exiting latest news post
router.patch('/:newsId', (req, res, next) =>{
    const id = req.params.newsId;
    res.status(200).json({
        message:"Updated specific newid",
        id:id
    });
});


// Delete specific latest news post
router.delete('/:newsId', (req, res, next) =>{
    const id = req.params.newsId;
        res.status(200).json({
            message: "News post deleted",
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

