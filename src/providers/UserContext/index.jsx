import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const currentPath = window.location.pathname;

    useEffect(() => {
        const id = localStorage.getItem("@USERID");
        const token = localStorage.getItem("@USERTOKEN");

        const loadUser = async () => {
            try {
                setLoading(true);
                const { data } = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUser(data);
                navigate(currentPath);
            } catch (error) {
                localStorage.removeItem("@USERID");
                localStorage.removeItem("@USERTOKEN");
            } finally {
                setLoading(false);
            }
        };

        if (id && token) {
            loadUser();
        }
    }, []);

    const registerUser = async (formData) => {
        try {
            await api.post("/users", formData);
            toast.success("Cadastro efetuado com sucesso");
            setTimeout(() => {
                navigate("/");
            }, 3000);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const handleLogin = async (formData) => {
        try {
            setLoading(true);
            const { data } = await api.post("/sessions", formData);
            toast.success("Login efetuado com sucesso");
            setUser(data.user);
            localStorage.setItem("@USERID", data.user.id);
            localStorage.setItem("@USERTOKEN", data.token);

            navigate("/home");
        } catch (error) {
            return toast.error(
                "Opa, algo deu errado, verifique seu login e senha estão corretos"
            );
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        toast.success(
            "Logout efetuado com sucesso! Aguarde o redirecionamento da página"
        );
        localStorage.removeItem("@USERID");
        localStorage.removeItem("@USERTOKEN");

        setTimeout(() => {
            setUser(null);
            navigate("/");
        }, 2500);
    };

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                loading,
                setLoading,
                handleLogout,
                handleLogin,
                registerUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
