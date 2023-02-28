import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../auth/context";
import { PrivateRoute } from "../router/PrivateRoute";

describe('<PrivateRoute/> tests', () => {

    test('must show children if aunthenticated', () => {

        

        const contextValue = {
            logged: true, 
            user: {
                id: '29479',
                name: 'Gus'
            }
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                     <PrivateRoute>
                        <h1>Private Page</h1>
                    </PrivateRoute>
                </MemoryRouter>               
            </AuthContext.Provider>
        );

        expect( screen.getByText('Private Page') ).toBeTruthy();                
    });

    test('must call setItem to set last visited route', () => {
        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true, 
            user: {
                id: '29479',
                name: 'Gus'
            }
        };

        

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                     <PrivateRoute>
                        <h1>Private Page</h1>
                    </PrivateRoute>
                </MemoryRouter>               
            </AuthContext.Provider>
        );

        expect( localStorage.setItem ).toHaveBeenCalled();
    });
    
});