import axios from "axios";
import React, { useEffect, useState } from "react";
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
      <a target="_blank" href="https://github.com/lukaneek/clientServer">Link To This Applications Repository</a>
    </>

  )
}
export default App;
