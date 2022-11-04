import React from "react";
import Spaces from "./Profile/PSpace";
import Contact from "./component/contact";
import {Routes,Route, BrowserRouter} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>

<Routes> 
  <Route path="/" exact element ={<Spaces />} />
  <Route path = "/contact" exact element ={<Contact/>}/>
</Routes>
</BrowserRouter>
   

    </>
  );
}

export default App;
