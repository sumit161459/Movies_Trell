import express from 'express';
import mongoose from 'mongoose';

import MovieSchema from '../models/movie.js';
const router = express.Router();

// const searchMovies=(query,movieList)=>{
//     const filteredMovies=[];
//     let queryText=query.toLowerCase();
//     movieList.map(movie=>{
//         let movieText=movie.toLowerCase();
//         if(movieText.length<queryText) return;
//         for(let i=0;i<queryText.length;i++){
//             if()
//         }
//     })
// }

export const getMovie = async (req, res) => {
    console.log('yes');
    const searchQuery=req.query;
    console.log(searchQuery);
    try {
        const movies = await MovieSchema.find(searchQuery);
        console.log(movies);
        res.json({ data: movies });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}


export const createMovie = async (req, res) => {
    const movie = req.body;

    const newMovieSchema = new MovieSchema(movie);

    try {
        await newMovieSchema.save();

        res.status(201).json(newMovieSchema);
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message });
    }
}

export const updateMovie=async(req,res)=>{
    const movie=req.body;
    console.log(movie);
    try{
        const response= await MovieSchema.find({name:movie['name']});
        console.log(response);
        res.json({data:movie})
    }catch(error){
        console.log(error);
    }
}

export default router;