import styled from "styled-components";

export const StyledModalOverlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;
    background-color: rgba(18, 18, 20, 0.5);
`;

export const StyledModalBox = styled.div`
    width: 100%;
    max-width: 370px;
    margin: 10px;
    height: 342px;
    background-color: var(--gray-3);
    border-radius: 4px;

    .modalHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--gray-2);
        border-radius: 4px 4px 0px 0px;
        height: 3.125rem;
        padding: 12px 20px;

        span {
            font-size: 0.875rem;
            color: var(--gray-0);
            font-weight: 700;
        }

        button {
            background: transparent;
        }
    }

    .modalContent {
        background-color: var(--gray-3);
        padding: 12px 20px;

        form {
            label {
                font-size: 0.75rem;
                color: var(--gray-0);
                font-weight: 400;
            }

            p {
                color: var(--toastify-color-error);
                font-size: 0.75rem;
            }
            input {
                border: 1px solid var(--gray-0);
                color: var(--gray-0);
                font-size: 1rem;
                background-color: var(--gray-2);
                height: 3rem;
                padding: 1rem;
                border-radius: 4px;

                &::placeholder {
                    color: var(--gray-1);
                }

                &:focus {
                    outline: none;
                }
            }

            select {
                border: 1px solid var(--gray-0);
                color: var(--gray-0);
                font-size: 1rem;
                background-color: var(--gray-2);
                height: 3rem;
                padding: 0rem 1rem;
                border-radius: 4px;

                &:focus {
                    outline: none;
                }
            }
        }
    }
`;
