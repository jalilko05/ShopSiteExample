import { useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import "./Header.css"



 function Main() {

  const [data, setData] = useState([])


  useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/photos`)
  .then(response => response.json())
  .then(result => setData(result))
  },[data])

  return (
    <div className='info'>
      {
        data.slice(0, 5).map((item)=>{
          return(
            <div key={item.id}>

              <Link to={`/home/${item.id}`}>
                 <div className='cont'>
                 <img className='image' src={item.url} alt="" />
                  <h3> {item.title.slice(0, 20)}</h3>
                  <div className='btn'>
                  <h3>{item.id}</h3>
                  </div>
                 </div>
              </Link>
            
            </div>
          )
        })
      }


    </div>
  )
}

export default Main
