import express from 'express';

import { getMovie,createMovie,updateMovie } from '../controllers/movie.js';

const router=express.Router();

router.get('/',getMovie);
router.post('/',createMovie);
router.patch('/',updateMovie);

export default router;