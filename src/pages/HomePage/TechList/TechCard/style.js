import styled from "styled-components";

export const StyledTechCard = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3.0625rem;
    padding: 1rem;
    background-color: var(--gray-4);
    border-radius: 4px;
    transition: 0.4s;
    cursor: pointer;

    &:hover {
        background-color: var(--gray-2);
    }

    p:first-child {
        font-size: 0.875rem;
        color: var(--white);
        font-weight: 700;
    }

    p:last-child {
        font-size: 0.75rem;
        color: var(--gray-1);
        font-weight: 400;
    }
`;
