import axios from "axios";
import React, { useEffect, useState } from "react";
import AboutThisApp from "../components/AboutThisApp";
const App = () => {

  const [body, setBody] = useState("");

  useEffect(() => {
    axios.get("https://lukavujasin.xyz/exampleapis/", { 
    })
    .then((res) => {
        console.log(res);
        setBody(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
},[]);


  return (
    <>
      <h1>{body}</h1>
      <p/>
      <AboutThisApp/>
    </>

  )
}
export default App;
