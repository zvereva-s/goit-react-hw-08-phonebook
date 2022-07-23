import { Navigate, Outlet } from "react-router-dom";
import useAuth from "shared/hooks/useAuth";

function PrivatesRoute() {
    const isLogin = useAuth();

    if (!isLogin) {
        return <Navigate to='/login' />
    }
    return <Outlet />
}

export default PrivatesRoute;