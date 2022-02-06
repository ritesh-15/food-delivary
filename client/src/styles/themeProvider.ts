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
    primary: "hsl(27, 97%, 54%)",
    secondary: "#229941",
    primaryHover: "hsl(27, 97%, 45%)",
    secondaryHover: "hsl(151, 62%, 35%)",
    text: "hsl(151, 0%, 0%)",
    bg: "#fff",
    pure: "#fff",
    textLight: "hsl(0,0%,50%)",
    red: "hsl(360, 100%, 53%)",
    disabled: "hsl(0, 0%, 80%)",
  },
};
