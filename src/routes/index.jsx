import { Routes, Route } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { PublicRoutes } from "./PublicRoutes";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { TechProvider } from "../providers/TechContext";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
                <Route
                    path="/home"
                    element={
                        <TechProvider>
                            <HomePage />
                        </TechProvider>
                    }
                />
            </Route>
            <Route
                path="*"
                element={<h1>Erro 404:Página não encontrada!</h1>}
            />
        </Routes>
    );
};
