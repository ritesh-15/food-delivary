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
  };
}

export const lightTheme: Theme = {
  colors: {
    primary: "hsl(199, 79%, 32%)",
    secondary: "hsl(150, 87%, 43%)",
    primaryHover: "hsl(24, 94%, 45%)",
    secondaryHover: "hsl(151, 62%, 35%)",
    text: "hsl(151, 0%, 0%)",
    bg: "#fff",
    pure: "#fff",
    textLight: "hsl(0,0%,50%)",
    red: "hsl(360, 100%, 53%)",
  },
};
