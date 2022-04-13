import React from 'react'
import './App.css'

function ShowMovie({ movie }) {


  return (
      <div className="container my-3">
        <div className="row">
          {
            movie.map((item) => {
              return (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 " key={item.imdbID}>
                  <div className="card" >
                    <img src={item.Poster} className="card-img-top" alt="..." />
                    <div className="card-body" >
                      <h3 className="card-title">{item.Year}</h3>
                      <h4 className="card-text">{item.Title}</h4>

                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
  )
}

export default ShowMovie;

