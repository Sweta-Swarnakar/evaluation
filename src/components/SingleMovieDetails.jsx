import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



export const SingleMovieDetails = () => {


    const {id} = useParams()
    const [data, setData] = useState([])
    console.log(id)



    useEffect(() => {
   
      axios({

      method: 'get',
      url: `https://movie-fake-server.herokuapp.com/data/${id}`
     })
     .then((res) => setData(res.data))
      
    .catch((err) => console.log(err)) 
  
    }, [id]);
   

  return (
  <div>
  
         <img src={data.image_url}/>
              <h2> Name: {data.movie_name}</h2>
              <h3>Genre: {data.genre}</h3>
              <p>rating: {data.rating}</p>
              <p>Release date: {data.release_date}</p>   
  </div>
 
  )
};
