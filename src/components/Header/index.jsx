import { StyledHeader } from "./style";
import Logo from "../../assets/Logo.svg";
import { StyledLink } from "../../styles/buttons";

export const Header = ({ to, buttonText }) => {
    return (
        <StyledHeader>
            <div>
                <img src={Logo} alt="Logo na cor rosa escrita Kenzie Hub" />
                <StyledLink to={to} buttoncolor="darkGray" buttonsize="sm">
                    {buttonText}
                </StyledLink>
            </div>
        </StyledHeader>
    );
};
