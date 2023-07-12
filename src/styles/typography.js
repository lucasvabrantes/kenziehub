import styled, { css } from "styled-components";

export const TitleStyles = css`
    color: var(--gray-0);
    line-height: 1.6;
    font-weight: 700;

    ${({ fontSize }) => {
        switch (fontSize) {
            case "lg":
                return css`
                    font-size: 1.125rem;
                `;
            case "md":
                return css`
                    font-size: 1rem;
                `;
        }
    }}
`;

export const StyledTitleOne = styled.h1`
    ${TitleStyles}
`;
export const StyledTitleTwo = styled.h2`
    ${TitleStyles}
`;
export const StyledTitleThree = styled.h3`
    ${TitleStyles}
`;

export const StyledParagraph = styled.p`
    color: var(--gray-0);
    line-height: 1.6;
    font-size: 0.75rem;

    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
`;
