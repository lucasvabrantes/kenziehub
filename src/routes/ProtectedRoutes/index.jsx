import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/index";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
    const { user } = useContext(UserContext);

    return user ? <Outlet /> : <Navigate to="/" />;
};
