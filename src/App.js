import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import ShowMovie from './ShowMovie';


function App() {

  const [text, setText] = useState("")
  const [movie, setMovie] = useState([])
  const [response,setResponse] =useState("True")

  const changeText = (event) => {
    setText(event.target.value);
  }

  const getMovie = (e) => {
    e.preventDefault();
     axios.get(`https://www.omdbapi.com/?s=${text}&apikey=a5739f0a`)
     .then((res)=>{

      if(res.data.Response==="True")
       {
        setMovie(res.data.Search)
        setResponse(res.data.Response)
       }else{
         setResponse(res.data.Response)
       }
        

     })
       
      }
  
  
  
   useEffect(()=>{
       const movieData=async()=>{
        let moviename;
        const movieArr=["kick","kabhi","dhamaal","ishq","enemy","dil","iron","Avenger","spider","pyaar"];
        
             moviename=movieArr[Math.floor(Math.random()*movieArr.length)]
        let res=await axios.get(`https://www.omdbapi.com/?s=${moviename}&apikey=a5739f0a`)
        setMovie(res.data.Search)
       }
       movieData()
    
   },[])
  
  return (

    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid mx-4">
          <h2 className="navbar-brand" >Movie App</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="./App.js">Home</a>
              </li>
            </ul>
            <form className="d-flex" onSubmit={getMovie} >
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={text} onChange={changeText} />
              <button className="btn btn-outline-success"  type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    {
   response==="True" ? <ShowMovie movie={movie}/>:<h1 className="text-center my-5" >Movie Not Found !</h1>
    }
      
         
    </>
  )

}

export default App;
