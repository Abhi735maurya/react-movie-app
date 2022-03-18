import React, { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import axios from 'axios';
function FetchApi(props) {

    const [data, setData] = useState([]);
    const apiGet = () => {
      let moviename;
      const movieArr=["kick","kabhi","random","dangerous","enemy","love","iron","Avenger","spider","pyaar"];
      
           moviename=movieArr[Math.floor(Math.random()*movieArr.length)]
         axios.get(`https://www.omdbapi.com/?s=${moviename}&apikey=a5739f0a`)
      .then((response) => {
        setData(response.data.Search)
      })
    }
    useEffect(() => {
        apiGet();
    }, [])
    return (
        <div  className={props.name}>
        <div className="container my-3">
        <div className="row">
          {
            data.map((item) => {
              return (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
                  <div className="card">
                    <img key={item.id} src={item.Poster} class="card-img-top" alt="..." />
                    <div className="card-body">
                      <h3 key={item.id} className="card-title">{item.Year}</h3>
                      <h4 key={item.id} className="card-text">{item.Title}</h4>

                    </div>
                  </div>
                </div>
              )
            })
          }
          
        </div>
      </div>
        </div>
    )
}

export default FetchApi

