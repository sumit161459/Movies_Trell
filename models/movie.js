
import mongoose from 'mongoose';

const movieSchema=mongoose.Schema({
    name:String,
    description:String,
    director:String,
    duration:Number,
    addMovie:[{
        timing: Date,
        price: Number,
        tickets: Number
    }]
})

var MovieSchema=mongoose.model('MovieSchema',movieSchema);

export default MovieSchema;
