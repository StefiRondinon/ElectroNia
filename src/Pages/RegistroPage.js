import React, { useState } from "react"
import firebase from "../Config/firebase"
import bootstap from 'bootstrap';


function RegistroPage(){
    const [form,setForm] = useState({nombre:'',apellido:'',email:'',password:''})
    const handleSubmit = async (event)=>{
        console.log("handleSubmit",form)
        alert("Se ha registrado correctamente. Inicie sesión")
        event.preventDefault()
        try{
            const responseUser = await firebase.autenticacion.createUserWithEmailAndPassword(form.email,form.password)
            console.log("User",responseUser)
            const document = await firebase.db.collection("usuarios")
            .add({
                nombre:form.nombre,
                apellido:form.apellido,
                userId:responseUser.user.uid
            })
            console.log("document",document)
        }catch(e){
            console.log("Error",e)
            alert(e.message)
            if(e.code=="auth/weak-password"){
                alert("El password debe tener al menos 6 caracteres")
            }
        }
        
        
        
    }
    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
        console.log("handleChange",name,value)
        setForm({...form,[name]:value})
        
    }



    return(
        <div className="container col-lg-8">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputName1" className="form-label">Nombre</label>
                    <input type="text" name="nombre" className="form-control" id="exampleInputName1" value={form.nombre} onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label for="exampleInputLastname1" className="form-label">Apellido</label>
                    <input type="text" name="apellido" className="form-control" id="exampleInputLastname1" value={form.apellido} onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={form.email} onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" value={form.password} onChange={handleChange}></input>
                </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default RegistroPage;