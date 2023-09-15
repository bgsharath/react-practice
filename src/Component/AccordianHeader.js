import React from "react";
import AccordianBody from "./AccordianBody";

function AccordianHeader({userData,showHeader,setShowHeader,showHeaderIdx,setShowHeaderIdx}) {
  const header = ["address", "company"];
  const handleClick = (index)=>{
    if(index === showHeaderIdx){
      setShowHeader(!showHeader)
    }else{
      setShowHeader(true)
      setShowHeaderIdx(index)
    }
  }
  return (
    <div>
      {header.map((item,index) => (
        <>
          <div onClick={()=>handleClick(index)} className="m-2 p-2 bg-slate-200 cursor-pointer">{item}</div>
          {showHeaderIdx===index && showHeader && <AccordianBody userData={userData} headerName={item}/>}
        </>
      ))}
    </div>
  );
}

export default AccordianHeader;
