import React, { Fragment, useState } from "react";
import authAPI from "../services/authAPI";


export default function LoginPage (props) {

    const [credentials, setCredentials] = useState({
        username :"",
        password : ""
    });

    const [error, setError] = useState("");

    const handleChange = ({currentTarget}) =>{
        const {value, name} = currentTarget;
        setCredentials({...credentials, [name]: value});
    }

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await authAPI.authenticate(credentials);
        } catch (error) {
            setError("Aucun compte avec cet email ou mot de passe incorrect.")
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
                    className={"form-control" + (error && " is-invalid")}
                    placeholder="Adresse mail de connection"
                    name="username"
                    id="username"/>
                    {error && <p className="invalid-feedback">
                        {error}
                    </p>}
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