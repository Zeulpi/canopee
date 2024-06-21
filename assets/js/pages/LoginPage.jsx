import React, { Fragment, useState } from "react";
import axios from "axios";


export default function LoginPage (props) {

    const [credentials, setCredentials] = useState({
        username :"",
        password : ""
    });

    const handleChange = (event) =>{
        const value = event.currentTarget.value;
        const name = event.currentTarget.name;

        setCredentials({...credentials, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            axios.post("http://localhost:8000/api/login_check", credentials)
            .then(response => console.log(response))
        } catch (error) {
            console.log(error.response);
        }
        console.log(credentials);
    }

    return (
        <Fragment>
            <h1>Connection</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group py-2">
                    <label htmlFor="username">Adresse email</label>
                    <input
                    value={credentials.username}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Adresse mail de connection"
                    name="username"
                    id="username"/>
                </div>
                <div className="form-group py-2">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                    value={credentials.password}
                    onChange={handleChange}
                    type="password"
                    className="form-control"
                    placeholder="Mot de passe"
                    name="password"
                    id="password"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success">Connection</button>
                </div>
            </form>
        </Fragment>
    );
}