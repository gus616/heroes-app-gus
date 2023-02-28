import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { SearchPage } from '../../../heroes/pages/SearchPage';
const mockedUseNavigate = jest.fn();

 
describe('<SearchPage /> tests', () => {
    beforeEach(() => jest.clearAllMocks());
   
    
    test('must show with default values', () => {

       const { container } = render(<MemoryRouter>          
                <SearchPage />        
        </MemoryRouter>);

        expect( container ).toMatchSnapshot();
    });


    test('must show Batman after input and clicking search button', () => {
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {value: 'batman'}});

        const btn = screen.getByRole('button');
        fireEvent.click(btn);

        const img = screen.getByRole('img');
        

        expect( img.src ).toBe('http://localhost/assets/heroes/dc-batman.jpg');

    });

    test('must show an error if hero not found', () => {
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {value: 'sdfnksdfnk'}});

        const btn = screen.getByRole('button');
        fireEvent.click(btn);
        //screen.debug();
    
       expect( screen.getByLabelText("no-results").innerHTML.includes("There is no results with")).toBeTruthy();

    });

/* 
    test('must call navigate to new page with superman value using input and calling submit', () => {   

        //arrange

        
       
           
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );

        //act
        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {value: 'superman'}});



        const form = screen.getByRole('form');
        fireEvent.submit(form);

        screen.debug();

   

        //assert
        expect(mockedUseNavigate).toHaveBeenCalled();
        //expect(mockedUseNavigate).toHaveBeenCalledWith('/search?q=superman', {"replace": true});
     
    }); */


   
});