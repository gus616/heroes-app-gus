import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';

const initialState = {
    logged: false,
    user: null
}

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user: user,
    }
};

export const AuthProvider = ({ children }) => {

   const [authState, dispatch] = useReducer(authReducer, initialState, init );

   const onLogin = ( name = '' ) => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABCD',
                name: name,
            }
        };

        localStorage.setItem('user', JSON.stringify(action.payload));

        dispatch(action);
   };

   const onLogout = () => {
        const action = {
            type: types.logout,
        }

        localStorage.removeItem('user');

        dispatch(action);
   };

    return (
        <AuthContext.Provider value={{ ...authState, login: onLogin, logout: onLogout}}>
            { children }
        </AuthContext.Provider>
    );
};