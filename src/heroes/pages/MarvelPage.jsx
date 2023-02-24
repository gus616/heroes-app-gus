import { HeroList } from '../components/HeroList';

export const MarvelPage = () => {

    return (
        <>
            <h1 className="animate__animated animate__slideInDown mt-3 mb-4">Marvel Page</h1>
           <ul className="animate__animated animate__pulse">
              <HeroList publisher='Marvel Comics' />
           </ul>
      
         
        </>
    )
};