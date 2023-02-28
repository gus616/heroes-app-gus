import { render, screen} from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../auth/context";
import { PublicRoute } from "../router/PublicRoute";
describe('<PublicRoute /> tests', () => {
    test('must show children if not authenticated', () => {
        const contextValue = {logged: false}

        render(<AuthContext.Provider value={ contextValue }>           
                 <PublicRoute>
                    <h1>Public Route</h1>
                 </PublicRoute>
        </AuthContext.Provider>);


        //screen.debug();

        expect(screen.getByText('Public Route')).toBeTruthy();

    });

    test('must navigate if authenticated', () => {
        const contextValue = {
            logged: true, 
            user: {
                name: 'Gus',
                id: '123'
        }};

        render(<AuthContext.Provider value={ contextValue }>        
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path='login' element={<PublicRoute> <h1>Public Route</h1> </PublicRoute>} />
                    <Route path='marvel' element={<h1>Marvel Page</h1>} />
                </Routes>               
            </MemoryRouter>             
        </AuthContext.Provider>);
        //screen.debug();
        expect(screen.getByText('Marvel Page')).toBeTruthy();

    });
});