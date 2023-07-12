import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./styles/globalAndReset";

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <RoutesMain />
            <ToastContainer
                autoClose={3000}
                position="top-right"
                theme="dark"
            />
        </>
    );
};
