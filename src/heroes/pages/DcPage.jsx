import { HeroList } from "../components/HeroList";

export const DcPage = () => {
    return (
        <>
            <h1 className="animate__animated animate__slideInDown mt-3 mb-4">DC Page</h1>
            <ul className="animate__animated animate__pulse">
                <HeroList publisher="DC Comics"/>
            </ul>
            
        </>
    )
};