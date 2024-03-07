import express, { request, response } from 'express';
import { PORT, mongodbURL } from './config.js';
import mongoose from 'mongoose';
import bookRoute from './routes/booksRoutes.js';
import cors from 'cors';
const app = express();


app.use(express.json());

//Middleware for handling CORS policy
// option 1 Allow all origin with default pf cors(*)
app.use(cors());


//option 2 : Allow custom origins

// app.use(cors(
//     {
//         origin:'http://localhost:3000',
//         methods:['GET','POST','PUT', 'DELETE'],
//         allowedHeaders:['Content-Type']
//     }
// ));

app.get('/', (request, response) => {
    // console.log(request);
    return response.status(234).send('Welcome to MERN Stack Tutorial');

});



app.use('/books',bookRoute);



mongoose.connect(mongodbURL)
    .then(() => {
        console.log('App database se connected h bhai');
        app.listen(PORT, () => {
            console.log(` port ${PORT} per sunaai bhi de riya h`);
        });

    })
    .catch((error) => {
        console.log(error);
    });