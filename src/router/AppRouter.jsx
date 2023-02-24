import {Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages';
import { NavBar } from '../ui/components/NavBar';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return(
        <>
            <NavBar />            
            <Routes>                 
                <Route path="login" element={
                    <PublicRoute>
                        <LoginPage/>
                    </PublicRoute>}/>
                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes/>
                    </PrivateRoute>} />
            </Routes>
        </>
    )
};