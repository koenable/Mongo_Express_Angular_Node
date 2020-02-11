const express = require('express');
const router = express.Router();

// get all latest fixture
router.get('/', (req,res,next) =>{
    res.status(200).json({
        message : 'A view of the whole fixture.'
    });
});

// Get specif match fixture
router.get('/:ID', (req, res, next) =>{
    const id = req.params.ID;
        res.status(200).json({
            message: "Returning results of chosen fixture",
            id: id
        })  
});


// Patch/Update exiting match fixture
router.patch('/:ID', (req, res, next) =>{
    const id = req.params.ID;
    res.status(200).json({
        message:"Updated specific Mactch Fixture",
        id:id
    });
});


// Delete specific match fixture
router.delete('/:ID', (req, res, next) =>{
    const id = req.params.ID;
        res.status(200).json({
            message: "Match Fixture has been deleted",
            id:id
        });
});



// Create a new match fixtur
router.post('/',(req, res, next) =>{
    res.status(201).json({
        message: "A new VS match has been added to the fixture table",
    });
});





module.exports = router;

