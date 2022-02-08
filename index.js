import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import movieRoutes from './routes/movie.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


app.use('/movie', movieRoutes);
// app.use("/user", userRouter);

const CONNECTION_URL='mongodb+srv://theatre:theatre123@cluster0.nfztn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// app.get('/',(req,res)=>{
//     res.send('hello');
// })

// app.get('/movies',(req,res)=>{
//     res.send('hi');
// })

