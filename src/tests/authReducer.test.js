import { renderHook } from '@testing-library/react';
import { useContext } from 'react';
import { authReducer, authState } from '../auth/context/authReducer';
import { AuthContext } from '../auth/context/AuthContext';
import { types } from '../auth/types/types';


//#region 
/*
    debe retornar el estado por defecto
    debe de (login) llamar el login autenticar y establecer el user
    debe de (logout) borrar el name del usuario y logged en false
*/
//#endregion

describe('authReducer tests', () => {
    
    test('must return a default state', () => {
        const state = authReducer({logged: false} , {});
        expect( state ).toStrictEqual({logged: false});
    });


    test('debe de (login) llamar el login autenticar y establecer el user', () => {
        const action = {
            type: types.login,
            payload: {
                logged: true,
                name: 'Gus'
            }
        };

        const state = authReducer({logged: false}, action);

        expect( state ).toEqual({
            logged: true,
            user: action.payload
        })
    });

    test('debe de (logout) borrar el name del usuario y logged en false', () => {
        const action = {
            type: types.logout,
        };

        const state = authReducer({logged: true, user: {name: 'Gus'}}, action);

        expect( state ).toEqual({
            logged: false,
            user: null
        });
    });
})