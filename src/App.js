import React,{useState,useEffect} from 'react';
import axios from 'axios';

const App = () => {

  useEffect(() => {
    const updateMovieList= async ()=>{
      const response=await axios.patch('http://localhost:5000/movie',{name:'wdwdwd'});
      console.log(response);
    }
    updateMovieList();
  }, []);
  

  const [searchMovie,setSearchMovie]=useState('');
  const [movieData,setMovieData]=useState({});

  const setSearchMovieHandler=(e)=>{
    console.log('yes');
    setSearchMovie(e.target.value);
  }

  const serachMovieHandler=async()=>{
    const params={
      name:searchMovie
    }
    const response=await axios.get('http://localhost:5000/movie',{params});
    console.log(response);
  }

  const setMovieDataHandler=(e,key)=>{
    const newMovieData={...movieData};
    newMovieData[key]=e.target.value;
    setMovieData(newMovieData);
  }

  const addMovie=async()=>{
    const response=await axios.post('http://localhost:5000/movie',movieData);
    console.log(response.data);
  }

  return <>
  <div style={{display:'flex',marginTop:'100px',alignItems:'center',justifyContent:'center'}}>
    <input onChange={(e)=>setSearchMovieHandler(e)}></input>
    <button onClick={serachMovieHandler}>Search Movie</button></div>
    <div style={{marginTop:'10px',display:'flex',alignContent:'center',justifyContent:'center'}}>
      <input placeholder='movieName' onChange={(e)=>setMovieDataHandler(e,'name')}></input>
    </div >
    <div style={{marginTop:'10px',display:'flex',alignContent:'center',justifyContent:'center'}}>
      <input placeholder='description' onChange={(e)=>setMovieDataHandler(e,'description')}></input>
    </div>
    <div style={{marginTop:'10px',display:'flex',alignContent:'center',justifyContent:'center'}}>
      <input placeholder='director' onChange={(e)=>setMovieDataHandler(e,'director')}></input>
    </div>
    <div style={{marginTop:'10px',display:'flex',alignContent:'center',justifyContent:'center'}}>
      <input placeholder='duration' type="number" onChange={(e)=>setMovieDataHandler(e,'duration')}></input>
    </div>
    <div style={{marginTop:'10px',display:'flex',alignContent:'center',justifyContent:'center'}}>
    <button onClick={addMovie}> Add Movie</button></div>
  </>
};

export default App;
