import { Helmet } from "react-helmet";
import Root from "./index.page";
import { CSSReset } from "../src/components/css-reset";
import LanguageModeProvider, { LanguageModeEnum } from "../src/components/header/components/language-mode";
import { ThemeProvider } from "styled-components";

function ProviderWrapper(props) {
    return (
        <LanguageModeProvider initialMode={LanguageModeEnum.ENGLISH}>
            {props.children}
        </LanguageModeProvider>
    )
}

export default function _App(props) {

    return (
        <ProviderWrapper>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
                <link href="https://fonts.googleapis.com/css2?family=Inter&family=Noto+Serif&display=swap" rel="stylesheet" />
            </Helmet>
            <ThemeProvider theme={{}}>
                <CSSReset />
                <Root {...props} />
            </ThemeProvider>
        </ProviderWrapper>
    )
};