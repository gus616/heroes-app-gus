import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context";

export const PublicRoute = ({ children }) => {
    const { logged } = useContext(AuthContext);
    if(logged) {
        return <Navigate to={'/marvel'}/>
    }

    return(
        <div>
            { children }
        </div>
    );
};