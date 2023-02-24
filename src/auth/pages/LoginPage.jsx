import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";

export const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const onLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        login('Gus');

        navigate( lastPath, {
            replace: true
        });

    }
    return (
        <>
            <h1>Login Page</h1>
            <hr />

            <button className="btn btn-primary" onClick={onLogin}>Login</button>
        </>
    )
}