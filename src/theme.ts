import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const colors = {
    mainOrange: {
        500: "#F37021", // 기본
        600: "#D95E1D", // hover
        700: "#C14F1B", // dark mode
        800: "#A34219", // dark mode hover
    },

    mainBlack: {
        500: "#1F1F1F",
        600: "#3F3F3F",
        700: "#3F3F3F",
        800: "#5F5F5F",
    },

    mainWhite: {
        500: "#FFFFFF",
        600: "#EFEFEF",
        700: "#1F1F1F",
        800: "#3F3F3F",
    }
};

const fonts = {
    body: "pretendard, sans-serif",
    heading: "pretendard, sans-serif",
};

const theme = extendTheme({
    colors,
    fonts,
    semanticTokens: {
        colors: {
            mainOrange: {
                default: "mainOrange.500",
                _dark: "mainOrange.700",
            },
            mainBlack: {
                default: "mainBlack.500",
                _dark: "mainBlack.700",
            },
            mainWhite: {
                default: "mainWhite.500",
                _dark: "mainWhite.700",
            }
        },
    },
});

export default theme