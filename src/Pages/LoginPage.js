import React, { useState } from "react"
import firebase from "../Config/firebase"
// importamos history
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import bootstrap from 'bootstrap';


function LoginPage() {

    const history = useHistory();
    const irHome = () => {
        history.push("/panel");
    }


    const [form, setForm] = useState({ email: '', password: '' })
    const handleSubmit = async (event) => {
        console.log("handleSubmit", form)
        event.preventDefault()
        try {
            const responseUser = await firebase.autenticacion.signInWithEmailAndPassword(form.email, form.password)
            console.log(responseUser);
            irHome();
        } catch (e) {
            console.log("Error", e)
            alert(e.message)
            if (e.code == "auth/weak-password") {
                alert("El password debe tener al menos 6 caracteres")
            }
        }



    }
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        console.log("handleChange", name, value)
        setForm({ ...form, [name]: value })
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={form.email} onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password"  className="form-control" id="exampleInputPassword1" value={form.password} onChange={handleChange}></input>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default LoginPage;