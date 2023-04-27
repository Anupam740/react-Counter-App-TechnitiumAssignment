import React,{useState} from "react";
import "./style.css";

export default function App()

 {
  const [data,setData]=useState(0)
  
  const handleButtonInc =()=>{
    setData(data+1)
  
    console.log("clicked")
  }
  {
    const handleButtonDec =()=>{
      if(data>0){
      setData(data-1)
      console.log("clicked")
  }}
  return (
    <div className="inc">
      <h1>{data}</h1>
      <button onClick={handleButtonInc} name="Click"> Click + </button>
      <button onClick={handleButtonDec} name="Click"> Click - </button>
    </div>
  );
}}