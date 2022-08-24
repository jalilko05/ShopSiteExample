import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Param = () =>{
    const { id }  = useParams()
    const navigate  = useNavigate()
    const [data, setData]  = useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(response => response.json())
        .then(result => setData(result))
    },[])

  

    return(

        <div>
            <button onClick={()=>navigate(-1)}>Back</button>
            <img src={data?.url} alt={data.title} />
            <h1>{data?.title}</h1>  
        </div>
    )
}



export default Param