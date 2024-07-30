// import axios from "./utils/axios"
// import { useEffect } from "react";
import Allroutes from "./components/Allroutes";
import "./components/App.scss"


function App() {

  // useEffect(()=>{
  //   const fetchApi = async()=>{
  //     const res = await axios.get(`/api/chat`);
  //     console.log(res);
  //   }
  //   fetchApi();
  // },[])

  return (
    <>

      <Allroutes />
   
    </>
   
  );
}

export default App;
