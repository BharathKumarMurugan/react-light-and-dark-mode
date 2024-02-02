import { createContext, useContext, useState, useEffect } from "react";

const ModeContext = createContext();
export const useMode = () => {
    return useContext(ModeContext);
};

export const ModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleMode = () => {
        setIsDarkMode((isDarkMode) => !isDarkMode);
    };
    const mode = isDarkMode ? "dark" : "light";
    useEffect(()=> {
        document.documentElement.setAttribute("data-mode", mode);
    }, [isDarkMode])
    return (
        <ModeContext.Provider value={{ mode, toggleMode }}>
            {children}
        </ModeContext.Provider>
    );
}