import styled from "styled-components";

export const StyledFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--gray-4);
    width: 100vw;
    height: 100vh;
    align-items: center;
    gap: 1rem;
    padding-top: 7rem;

    figure {
        img {
            width: 144px;
            height: 20px;
            margin-bottom: 2rem;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 23.125rem;
        height: 502px;
    }
`;

export const StyledContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 1rem;

    background-color: var(--gray-3);
    border-radius: 4px;
    padding: 42px 22px;
    gap: 1rem;

    form {
        label {
            color: var(--gray-0);
            font-size: 0.75rem;
            font-weight: 400;
        }
        input {
            background-color: var(--gray-2);
            width: 100%;
            font-size: 1rem;
            border: none;
            padding: 1rem;
            border-radius: 4px;
            color: var(--gray-0);
            height: 3rem;

            ::placeholder {
                color: var(--gray-1);
            }

            :focus {
                border: var(--gray-0);
            }
        }

        p {
            color: var(--toastify-color-error);
            font-size: 0.75rem;
        }

        span {
            color: var(--gray-1);
            font-size: 0.75rem;
            text-align: center;
            font-weight: 600;
            margin: 1rem 0;
        }

        a:last-child {
            margin-top: 0;
        }
    }
`;

export const StyledPasswordField = styled.div`
    width: 100%;
    max-height: 2.35rem;

    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    position: relative;

    &:focus-within {
        border-color: var(--color-gray-0);
    }

    label {
        align-self: flex-start;
    }

    input {
        width: 100%;
    }

    p {
        align-self: flex-start;
    }

    img {
        cursor: pointer;
        position: absolute;
        top: 30px;
        right: 16px;
    }
`;
