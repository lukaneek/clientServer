import axios from "axios";
import React, { useEffect, useState } from "react";
const App = () => {

  const [body, setBody] = useState("");

  useEffect(() => {
    axios.get("http://172.31.2.131:80", { 
    })
    .then((res) => {
        console.log(res)
        setBody(res.data)
    })
    .catch((err) => {
        console.log(err);
    })
},[]);


  return (
    <>
    <h1>{body}</h1>
    </>

  )
}
export default App;