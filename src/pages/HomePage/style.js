import styled from "styled-components";

export const StyledHomePage = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--gray-4);
    display: flex;
    flex-direction: column;

    header {
        /* position: fixed; */
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 72px;
        background-color: var(--gray-4);

        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            max-width: 800px;
            padding: 0 1rem;
        }
    }

    .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 800px;
        padding: 0 1rem;
        margin: 0 auto;
        gap: 2rem;

        p:first-child {
            color: var(--gray-0);
            font-size: 1.125rem;
            font-weight: 700;
            margin-top: 3rem;
        }

        p:last-child {
            color: #fff;
            font-size: 1rem;
            font-weight: 400;
        }
    }
`;

export const StyledMainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 118px;
    border-top: var(--gray-3) solid 1px;
    border-bottom: var(--gray-3) solid 1px;

    div:first-child {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 800px;
        padding: 0 1rem;

        p {
            color: var(--gray-1);
        }
    }
`;

export const StyledTechSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;

    .contentHeader {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;

        button {
            background: transparent;
        }
    }

    .techListContainer {
        border-radius: 4px;
        padding: 1rem 1.5rem;
        margin-top: 1rem;
        background: var(--gray-3);

        .emptyMessage {
            text-align: center;
            font-size: 1rem;
            color: var(--white);
        }
    }
`;
