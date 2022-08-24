import Header from "./Header";
import React from "react";
import { Route, Routes} from "react-router-dom";
import Param from "./Params";
import Main from "./Main";


function App() {
  return (
     <Routes>
       <Route path="/" element={<Header/>}>
          <Route path="home" element={<Main/>}></Route>
          <Route path="home/:id" element={<Param/>}></Route>
       </Route> 
     </Routes>
  )
}

export default App;
