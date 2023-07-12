import {
    StyledHomePage,
    StyledMainContainer,
    StyledTechSection,
} from "./style";
import Logo from "../../assets/Logo.svg";
import { StyledButton } from "../../styles/buttons";
import {
    StyledParagraph,
    StyledTitleOne,
    StyledTitleTwo,
} from "../../styles/typography";
import { TechList } from "./TechList";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { TechContext } from "../../providers/TechContext";
import { ModalTechRegister } from "../../components/Modals/ModalTechRegister";
import PlusButton from "../../assets/plusButton.svg";
import { ModalTechEdit } from "../../components/Modals/ModalTechEdit";

export const HomePage = () => {
    const { handleLogout, user } = useContext(UserContext);
    const { isRegModalOpen, setIsRegModalOpen, isEditModalOpen, techList } =
        useContext(TechContext);
    return (
        <StyledHomePage>
            {isRegModalOpen ? <ModalTechRegister /> : null}
            {isEditModalOpen ? <ModalTechEdit /> : null}
            <header>
                <div>
                    <img src={Logo} alt="Logo na cor rosa escrita Kenzie Hub" />
                    <StyledButton
                        buttoncolor="darkGray"
                        buttonsize="sm"
                        onClick={handleLogout}
                    >
                        Sair
                    </StyledButton>
                </div>
            </header>
            <StyledMainContainer>
                <div>
                    <StyledTitleOne fontSize="lg">
                        Olá, {user.name}
                    </StyledTitleOne>
                    <StyledParagraph>{user.course_module}</StyledParagraph>
                </div>
            </StyledMainContainer>
            <StyledTechSection>
                <div className="contentHeader">
                    <StyledTitleTwo fontSize="md">Tecnologias</StyledTitleTwo>
                    <button onClick={() => setIsRegModalOpen(true)}>
                        <img
                            src={PlusButton}
                            alt="Botão para adicionar tecnologias"
                        />
                    </button>
                </div>
                <div className="techListContainer">
                    {techList?.length > 0 ? (
                        <TechList />
                    ) : (
                        <p className="emptyMessage">
                            Parece que você não cadastrou nenhuma tecnologia
                            ainda
                        </p>
                    )}
                </div>
            </StyledTechSection>
        </StyledHomePage>
    );
};
