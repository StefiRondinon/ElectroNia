import React from "react";
import { useEffect } from "react";
import { useState } from "react";


import firebase from "../Config/firebase";



import Product from "../Components/Producto";



export default function Producto(props) {
    const [producto, setProducto] = useState();
    const [loading, setLoading] = useState(true);
    console.log(producto);

    const id = props.match.params.id;

    const obtenerProducto = async () => {
        try {
            const document = await firebase.db.doc("productos/" + id).get();
            setProducto(document.data());
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        obtenerProducto();
    }, []);

    return (
        <div className="Container d-flex justify-content-center aling-items-center">
            <div className="card w-75">
                <div className="card-body">
                    <h5 className="card-title">{producto.modelo}</h5>
                    <p className="card-text">{producto.descripcion}</p>
                    <p className="card-text">{producto.precio}</p>
                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
            </div>
        </div>
 
    );
}