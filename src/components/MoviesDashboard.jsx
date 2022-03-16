import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const MoviesDashboard = () => {
  
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const getAllMovies = () =>
  {
     axios({

      method: 'get',
      url: "https://movie-fake-server.herokuapp.com/data"
     })
     .then((res) => setData(res.data))
      
    .catch((err) => console.log(err)) 

  }
  useEffect(() => {
   
    getAllMovies()

  }, []);


//    filter by genre 
const handleFilter = (e)=>{
    // dispach filterby genre action to the store
    
}
  return (
    <>
      <h2>Movies</h2>
      <select  onChange={handleFilter}>
        
          
            <option>Comedy</option>
            <option>Drama</option>
            <option>Children</option>
            <option>Documentry</option>
            <option>Thriller</option>

          
      </select>
      <div className = "movies-list" style={{marginTop: 20}}>
       {data.map((item) =>
       {
         return <Link key={item.id} to={`/movies/${item.id}`}>
              <img src={item.image_url}/>
              <h2> Name: {item.movie_name}</h2>
              <h3>Genre: {item.genre}</h3>
              <p>rating: {item.rating}</p>
              <p>Release date: {item.release_date}</p>
         </Link>
       })}
      </div>
    </>
  );
};
