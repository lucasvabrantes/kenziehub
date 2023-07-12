import { useContext } from "react";
import { StyledTechCard } from "./style";
import { TechContext } from "../../../../providers/TechContext";

export const TechCard = ({ tech }) => {
    const { setObject, setIsEditModalOpen } = useContext(TechContext);

    const sendInformationAndOpenModal = (tech) => {
        setObject(tech);
        setIsEditModalOpen(true);
    };

    return (
        <StyledTechCard onClick={() => sendInformationAndOpenModal(tech)}>
            <p>{tech.title}</p>
            <p>{tech.status}</p>
        </StyledTechCard>
    );
};
