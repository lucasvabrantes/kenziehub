import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    :root{
        --color-primary:#FF577F;
        --color-primary-hover:#FF427F;
        --color-primary-negative: #59323F;

        --white: #fff;
        --gray-0:#F8F9FA;
        --gray-1:#868E96;
        --gray-2:#343B41;
        --gray-3:#212529;
        --gray-4:#121214;

        --font-family:"Inter", sans-serif;

        --toastify-color-error:#E83F5B; 
        --toastify-color-success:#3FE864;
        --toastify-font-family: "Inter", sans-serif;
    }

    *{
        box-sizing:border-box;
        padding:0;
        margin:0;
    }

    body{
        font-family:var(--font-family);
        width:100vw;
        height:100vh;
    }


    ul, ol {
        list-style: none;
        padding-inline-start: 0
    }

    a{
        text-decoration: none;
    }

    button{
        display:inline-flex;
        border: none;
        cursor: pointer;
    }

    input{
        border: none;
    }
        
`;
