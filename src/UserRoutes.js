import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

const PrivatesRoute = lazy(() => import('./shared/components/PrivatesRoute'));
const PublicRoute = lazy(()=> import ('./shared/components/PublicRoutes'))

const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const Loader = lazy(() => import('./shared/components/Loader'));




const UserRoutes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>   
                <Route element={<PublicRoute />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>
                
                <Route element={<PrivatesRoute />}>
                    <Route path="/contacts" element={<ContactsPage />} />
                </Route>
                
                <Route path='/goit-react-hw-08-phonebook' element={<RegisterPage />} />
                
                <Route path='*' element={<NotFoundPage />}/>
            </Routes>
        </Suspense>
    )
}
export default UserRoutes;