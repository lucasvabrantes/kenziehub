import styled from "styled-components";

export const StyledFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--gray-4);
    width: 100vw;
    height: 100vh;
    align-items: center;
    gap: 1rem;
    overflow-x: hidden;

    header {
        margin-top: 2rem;
        div {
            max-width: 370px;
        }
    }
`;

export const StyledFormContainer = styled.div`
    width: 100%;
    max-width: 23.125rem;
    padding: 1.5rem 1.375rem;
    height: fit-content;
    border-radius: 4px;

    background-color: var(--gray-3);

    div:first-child {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        gap: 2rem;
        margin: 1rem 0rem;

        h1 {
            text-align: center;
        }

        p {
            font-size: 0.75rem;
            color: var(--gray-1);
            text-align: center;
        }
    }

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

        select {
            background-color: var(--gray-2);
            width: 100%;
            font-size: 1rem;
            padding: 0 1rem;
            border: none;
            border-radius: 4px;
            color: var(--gray-1);
            font-weight: 400;
            height: 3rem;
        }
    }
`;
