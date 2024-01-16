import React from 'react'

export default function Details (props) {
  return (
    <div>
        
        <div className= "card">
            <img className="product--image"
            src={props.url} alt=""/>
            <h2>{props.name}</h2>
            {props.weight && <p>Weight: {props.weight}</p>}
            {props.price && <p className="price">Price: {props.price}</p>}
            <p>{props.description}</p>
            <button>Add to Cart</button>
            
            </div>

        </div>
)
}
export { Details };