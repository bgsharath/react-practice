import React from "react";
import data from "../mock/restroMenu.json"
import AccordianBodyRestro from "./AccordianBodyRestro";

function AccordianHeaderRestro({userData,showHeader,setShowHeader,showHeaderIdx,setShowHeaderIdx}) {
  const header = data.map((item)=>item.title);
  const handleClick = (index)=>{
    if(index === showHeaderIdx){
      setShowHeader(!showHeader)
    }else{
      setShowHeader(true)
      setShowHeaderIdx(index)
    }
  }
  return (
    <div className="text-center">
      {data.map((item,index) => (
        <>
          <div onClick={()=>handleClick(index)} className="m-2 p-2 bg-slate-200 cursor-pointer">{item.title}</div>
          {showHeaderIdx===index && showHeader && <AccordianBodyRestro key={item.title} userData={item.itemCards}/>}
        </>
      ))}
    </div>
  );
}

export default AccordianHeaderRestro;
