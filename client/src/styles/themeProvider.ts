export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    text: string;
    primaryHover: string;
    secondaryHover: string;
    bg: string;
    pure: string;
    textLight: string;
    red: string;
    disabled: string;
  };
}

export const lightTheme: Theme = {
  colors: {
    primary: "hsl(349, 79%, 54%)",
    secondary: "hsl(150, 87%, 43%)",
    primaryHover: "hsl(349, 79%, 40%)",
    secondaryHover: "hsl(151, 62%, 35%)",
    text: "hsl(151, 0%, 0%)",
    bg: "#fff",
    pure: "#fff",
    textLight: "hsl(0,0%,50%)",
    red: "hsl(360, 100%, 53%)",
    disabled: "hsl(0, 0%, 80%)",
  },
};
