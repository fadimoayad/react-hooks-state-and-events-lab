import React, {useState}from "react";

function Item({ name, category }) {

const [item, setItem]= useState(false)


function handleItem(){
  setItem(!item)
}
  return (
    <li className={item ? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleItem}>{item ? "Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
