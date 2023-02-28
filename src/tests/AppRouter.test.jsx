import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../auth/context";
import { AppRouter } from "../router/AppRouter";

describe('<AppRouter/> tests', () => {
    test('must show login if not authenticated', () => {
        const loggedContext = {
            logged: false
        }
        render( 
        <MemoryRouter initialEntries={['/marvel']}>
            <AuthContext.Provider value={loggedContext}>
                <AppRouter />           
            </AuthContext.Provider>
        </MemoryRouter>);

        //screen.debug();

       expect( screen.getByRole("heading", {level: 1}).innerHTML).toBe('Login Page');
    });


    test('must show heroes router if authenticated', () => {
        const loggedContext = {
            logged: true,
            user: {
                id: '123',
                name: 'Gus'
            }
        };

        render( 
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={loggedContext}>
                    <AppRouter />           
                </AuthContext.Provider>
            </MemoryRouter>);

        //screen.debug();

        expect( screen.getByRole("heading", {level: 1}).innerHTML ).toBe('Marvel Page');

    });
});