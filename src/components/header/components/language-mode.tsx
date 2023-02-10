import React from "react";

export enum LanguageModeEnum {
    ENGLISH = 'en',
    ESPANOL = 'es',
    PORTUGUES = 'pt'
}

interface LanguageModeContextInterface {
    mode: LanguageModeEnum;
    setMode: React.Dispatch<LanguageModeEnum>;
}

export const LanguageModeContext = React.createContext<LanguageModeContextInterface>({
    mode: null,
    setMode: () => { console.error("Language setMode not configured") }
});

export default function LanguageModeProvider({ children, initialMode }: { children: any, initialMode: LanguageModeEnum}) {
    const [mode, setMode] = React.useState<LanguageModeEnum>(initialMode);

    return (
        <LanguageModeContext.Provider value={{ mode, setMode }}>
            {children}
        </LanguageModeContext.Provider>
    )
}