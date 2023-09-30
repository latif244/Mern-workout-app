const express = require('express');
// const Workout = require('../models/workoutModel')
const {
  createWorkout,
   getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController')



const router = express.Router();



// this is to get all workout

router.get('/', getWorkouts)


// GET a single workout

router.get('/:id', getWorkout) 


// Post a new workout

// router.post('/', async (req, res) => {
//     const {title, reps, load} = req.body

//     try {
//         const workout = await workout.create({ title, load, reps})
//         res.status(200).json(workout)

//     } catch (error) {
//         res.status(404).json({error: error.message})

//     }

// })

// Post a new workout
router.post('/', createWorkout) 
    // const {title, reps, load} = req.body
    // try {
    //   const workout = await Workout.create({ title, load, reps})
    //   res.status(200).json(workout)
    // } catch (error) {
    //   res.status(404).json({error: error.message})
    // }
  




// DELETE  a workout

router.delete('/:id', deleteWorkout)

// UPDATE a workout

router.patch('/:id', updateWorkout)

module.exports = router;
