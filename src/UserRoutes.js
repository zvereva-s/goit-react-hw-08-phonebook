import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import PublicRoute from './shared/components/PublicRoutes/PublicRoutes.jsx';
import PrivatesRoute from './shared/components/PrivatesRoute/PrivatesRoute.jsx';
import Loader from './shared/components/Loader'

const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));




const UserRoutes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>   
                <Route element={<PublicRoute />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path='/goit-react-hw-08-phonebook' element={<RegisterPage />} />
                </Route>
                
                <Route element={<PrivatesRoute />}>
                    <Route path="/contacts" element={<ContactsPage />} />
                </Route>
                
                
                <Route path='*' element={<NotFoundPage />}/>
            </Routes>
        </Suspense>
    )
}
export default UserRoutes;