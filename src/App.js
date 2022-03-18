import axios from 'axios';
import { dodgerblue } from 'color-name';
import React, { useState } from 'react'
import './App.css'
import FetchApi from './FetchApi';


function App() {

  const [text, setText] = useState("")
  const [movie, setMovie] = useState([])
  const [clas,setClass] =useState("")
  
  const changeText = (event) => {
    setText(event.target.value);
  }

  const getMovie = (e) => {
    e.preventDefault();
    setClass('disapear')
    axios.get(`https://www.omdbapi.com/?s=${text}&apikey=a5739f0a`)
      .then((response) => {
        setMovie(response.data.Search)
      }).catch(err=>{
        document.body.style.backgroundColor="white";
        document.body.style.fontSize="50px";
        document.body.style.textAlign="center";
        document.body.style.marginTop="100px";
        document.body.innerHTML="Movie Not Found !";
      
      })
  }
  
  
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
            <form className="d-flex" onSubmit={getMovie}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={text} onChange={changeText} />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      
      <FetchApi name={clas}/>
      <div className="container my-3">
        <div className="row">
          {
            movie.map((value, index) => {
              return (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
                  <div className="card">
                    <img src={value.Poster} class="card-img-top" alt="..." />
                    <div className="card-body">
                      <h3 key={value.id} className="card-title">{value.Year}</h3>
                      <h4 key={value.id} className="card-text">{value.Title}</h4>

                    </div>
                  </div>
                </div>
              )
            })
          }
          
        </div>
      </div>


      
    </>
  )



}

export default App
