import { StyledForm } from "./style";
export const Form = ({ children, submitfunction }) => {
    return <StyledForm onSubmit={submitfunction}>{children}</StyledForm>;
};
