import React from "react";
import { Link } from "react-router-dom";


export default function Product(props) {
  console.log(props);

  const { modelo, precio, descripcion, imagen, id} = props.data;

  return (
    <div  className="card" style="width: 18rem;">
        <div className="card-body">
        <h5 className="card-title">{modelo}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="card-text">{precio}</p>
        <Link to={"/producto/"+id} className="card-product-button col-12 p-2" aria-current="page">Ver detalle</Link>

        </div>
    </div>

  );
}