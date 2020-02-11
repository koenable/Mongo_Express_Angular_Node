const express = require('express');
const router = express.Router();

// get all latest news
router.get('/', (req,res,next) =>{
    res.status(200).json({
        message : 'Getting Latest News and staff'
    });
});

// Get specific latest newss
router.get('/:ID', (req, res, next) =>{
    const id = req.params.ID;
    if (id !== null) {
        res.status(200).json({
            message: "ID received. Getting Specific News based on ID",
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
router.patch('/:ID', (req, res, next) =>{
    const id = req.params.ID;
    res.status(200).json({
        message:"Updated specific newid",
        id:id
    });
});


// Delete specific latest news post
router.delete('/:ID', (req, res, next) =>{
    const id = req.params.ID;
        res.status(200).json({
            message: "News post deleted",
            id:id
        });
});



// Create a new latest news post
router.post('/',(req, res, next) =>{
    res.status(201).json({
        message: "A new News post has been created",
    });
});




module.exports = router;

