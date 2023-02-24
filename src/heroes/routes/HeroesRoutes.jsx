import { Routes, Route, Navigate } from "react-router-dom";
import { MarvelPage, DcPage, SearchPage, HeroPage } from "../pages";
export const HeroesRoutes = () => {
    return (
        <>
            <div className="container">    
                    <Routes> 
                        <Route path="marvel" element={<MarvelPage/>}></Route>
                        <Route path="dc" element={<DcPage/>}></Route>

                        <Route path="search" element={<SearchPage/>} />
                        <Route path="hero/:id" element={<HeroPage/>} />

                        <Route path="/" element={<Navigate to="/marvel" replace/>}></Route>
                    </Routes>              
            </div>           
        </>
    );
};