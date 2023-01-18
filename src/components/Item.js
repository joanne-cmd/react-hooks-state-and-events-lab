import React,{useState} from "react";

function Item({ name, category }) {
  const[buy ,setBuy]=useState(false)
  function handleClick (){
      setBuy((buy)=> !buy)
  }
  const color = buy? "purple": "yellow"
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add"  style={{background:color}} onClick={handleClick}>{buy? "Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
