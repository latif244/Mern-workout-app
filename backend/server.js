require('dotenv').config()

const express = require('express');
// const morgan = require('morgan');
const mongoose = require('mongoose');
const workoutsRoutes = require('./routes/workouts')
// const cors = require('cors')


mongoose.set('strictQuery', true)



// express app
const app = express();




// middleware
app.use(express.json())

// app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    // res.setHeader('Content-Type', 'application/json');
    next();
});

// app.use((req, res, next) => {
//     res.setHeader('Content-Type', 'application/json');
//     next();
//   });
  


// routes
app.use('/api/workouts',workoutsRoutes)

//Connect to db

mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            
        // listen for  request
            app.listen(process.env.PORT, () => {
                console.log('Connected to db and server is running on port', process.env.PORT)
            });
        })
        .catch((error) => {
            console.log(error)
        })



// app.use(morgan('dev'));

process.env