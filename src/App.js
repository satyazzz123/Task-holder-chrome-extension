
import './App.css';
import React, {useState} from 'react';

function App() {
  const data=[
    {
      name:"search-engines",
      url:["https://www.google.com/","https://in.search.yahoo.com/search{google:pathWildcard}?ei={inputEncoding}&fr=crmas&p=%s"]
    }
   
  ]
  const[list,setlist]=useState(data);
  const[display1,setdisplay]=useState("none")
  const show=function(){
    if(display1==="none")
    setdisplay("block")
    else{
      setdisplay("none")
    }
  }
  const hide=function(){
    setdisplay("none")
  }
  const newfield=function(){
    let x=document.getElementById("holder");
    
    let a=document.getElementById("input");
    let b=a.value;
    console.log(b);
    let c =document.createElement("button")
    c.className="button"
    let d=document.createTextNode(b);
    c.append(d);
    x.append(c)

    
  }
  const openTab=function(url){
    for(const link of url){
      window.open(link,"_blank")
    }

  }
  
  return (
    <div className="App">
     <h1 >Heloo gulu mulu</h1>
    <div style={{border:"2px solid"}} id='ask_div'> 
      <h2 onClick={show} onBlur={hide}>Add A new Section</h2>
      <input style={{display:`${display1}`}} type="text" className="input" id="input" />
      <button  onClick={newfield} style={{display:`${display1}`}} >submit</button></div>
     
     {list&& list.map((item)=>{
      return(
<div   id="holder">
<button className="button"  onClick={()=>{openTab(item.url)}}> {item.name}</button>
</div>
     )
     })}
     
    </div>
  );
}

export default App;
