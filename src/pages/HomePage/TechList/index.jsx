import { useContext } from "react";
import { StyledTechList } from "./style";
import { TechContext } from "../../../providers/TechContext";
import { TechCard } from "./TechCard/index";

export const TechList = () => {
    const { techList } = useContext(TechContext);

    return (
        <StyledTechList>
            {techList?.map((tech) => (
                <TechCard key={tech.id} tech={tech} />
            ))}
        </StyledTechList>
    );
};
