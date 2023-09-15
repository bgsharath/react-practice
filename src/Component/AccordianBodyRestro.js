import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../store/cartSlice";

function AccordianBodyRestro({ userData }) {
  const dispatch = useDispatch();
  if (userData === null | []) {
    return (<p>Loading ...</p>)
  }
  
  const handleAddCart = (item) =>{
    dispatch(addCart(item));
  }
  
  return (
    <div>
      {userData.map((item) => (
        <div className="m-2 p-2">
          <div>{item.card.info.name}-{item.card.info.price/100}Rs</div>
          <div>{item.card.info.description}</div>
          <button onClick={()=>handleAddCart(item)} className="bg-slate-500 px-2 rounded-lg text-white">Add</button>
        </div>
      ))}
    </div>
  );
}

export default AccordianBodyRestro;
