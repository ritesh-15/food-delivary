import { createGlobalStyle } from "styled-components";
import { Theme } from "./themeProvider";

interface GlobalProps {
  theme: Theme;
}

export const GlobalStyle = createGlobalStyle<GlobalProps>`
   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;800&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 1rem;
        font-weight: 400;  
        
    }

    html,body{
        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.colors.text};
        background: ${({ theme }) => theme.colors.bg};
        overflow-x: hidden;
    }

    a{
        text-decoration: none;
        color: inherit;
        font-family: inherit;
    }


    ul,li{
        list-style: none;
    }
    
    input,textarea,button{
        font-family: inherit;
        color: inherit;
    }

`;
