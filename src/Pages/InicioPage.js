import React from "react";

import { useState } from "react";
import { useEffect } from "react";

import firebase from "../Config/firebase";

import Producto from "../Components/Producto";


export default function Home() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(productos);

    const obtenerProductos = () => {
        firebase.db.collection("productos").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProductos(docs);
            setLoading(false);
        });
        console.log(productos);
    };

    useEffect(() => {
        obtenerProductos();
    }, []);

    return (
        <div className="container">
            <div className="card-group">
                {productos.map((item) => (
                <Producto data={item} id={{ ...productos }} />
                ))}
            </div>
        </div>

    );
}





