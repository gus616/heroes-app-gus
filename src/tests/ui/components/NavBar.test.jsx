import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../auth/context";
import { NavBar } from "../../../ui/components/NavBar"; 

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('<NavBar /> tests', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Gus'
        },
        logout: jest.fn()
    };

    beforeEach(() => jest.clearAllMocks());



    test('must show person name in navbar', () => {
        
        render(
        <MemoryRouter>
               <AuthContext.Provider value={contextValue}>
                <NavBar/>
            </AuthContext.Provider>   
        </MemoryRouter>     
       );

       expect( screen.getByText('Gus') ).toBeTruthy();

    });

    test('logout must call navigate', () => {
        render(
            <MemoryRouter>
                   <AuthContext.Provider value={contextValue}>
                    <NavBar/>
                </AuthContext.Provider>   
            </MemoryRouter>     
           );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);

        expect( contextValue.logout ).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});

    });
});