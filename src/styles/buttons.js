import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const ButtonStyles = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 4px;
    color: var(--gray-0);
    transition: 0.4s;
    margin-top: 0.5rem;

    ${({ buttoncolor }) => {
        switch (buttoncolor) {
            case "pink":
                return css`
                    background-color: var(--color-primary);
                    &:hover {
                        background-color: var(--color-primary-hover);
                    }
                `;
            case "lightGray":
                return css`
                    background-color: var(--gray-1);
                `;
            case "darkGray":
                return css`
                    background-color: var(--gray-3);
                `;
            case "red":
                return css`
                    background-color: var(--color-primary-negative);
                `;
        }
    }}

    ${({ buttonsize }) => {
        switch (buttonsize) {
            case "sm":
                return css`
                    font-size: 0.75rem;
                    padding: 0 1rem;
                    height: 2.5rem;
                    font-weight: 600;
                `;
            default:
                return css`
                    font-size: 1rem;
                    padding: 0 1.375rem;
                    height: 3rem;
                    font-weight: 500;
                `;
        }
    }};
`;

export const StyledButton = styled.button`
    ${ButtonStyles}
`;

export const StyledLink = styled(Link)`
    ${ButtonStyles};
`;
