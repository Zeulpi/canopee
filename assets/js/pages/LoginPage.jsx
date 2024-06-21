import React, { Fragment } from "react";


const LoginPage = (props) => {
    return (
        <Fragment>
            <h1>Connection a l'app</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Adresse email</label>
                    <input type="text" className="form-control" placeholder="Adresse mail de connection" name="username" id="username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" className="form-control" placeholder="Mot de passe" name="password" id="password"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success">Connection</button>
                </div>
            </form>
        </Fragment>
    );
}
export default LoginPage;