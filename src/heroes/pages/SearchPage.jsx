import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components/HeroCard';
import queryString from 'query-string';
import { getHeroByName } from '../helpers/';
export const SearchPage = () => {

    const { searchText, onInputChange, onResetForm } = useForm({searchText: '', });

    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);

    const heroes = getHeroByName(q);

    const onSearchHandler = (e) => {
        e.preventDefault(); 

       if( searchText.trim().length <= 1 ) return;

       navigate(`?q=${searchText.toLowerCase().trim()}`);   
       
       onResetForm();
    };    

    return(
        <>
            <h1> Search </h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr/>
                    <form onSubmit={onSearchHandler} aria-label="form">
                        <input
                            type="text"
                            placeholder="search a hero"
                            className="form-control"
                            name="searchText"
                            value = { searchText }
                            onChange = { onInputChange }
                            autoComplete="off"/>

                        <button 
                            className="btn btn-dark mt-3 mb-3"
                            > Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>

                    {
                        (q === '' && 
                            <div className="alert alert-primary">
                                Search a Hero
                            </div>) 
                    }

                    {
                        (q !== ''  &&  heroes.length <= 0  && 
                            <div className="alert alert-danger" aria-label="no-results">
                                There is no results with <b>{q}</b>.
                            </div>)
                    }                    
       
                   {
                        heroes.map((hero) => (<HeroCard key={hero.id} {...hero} />))
                   }
                </div>
            </div>
        </>
    )
};