import {useContext, createContext } from "react"

//Here we create a themeContext and set up the initial state.
export const themeContext = createContext({
    themeMode: "Light",
    darkTheme: () => {},
    lightTheme: () => {},
})

//Here we create a ThemeProvider component that will be used to wrap our app and provide the themeContext to its children.
export const ThemeProvider = themeContext.Provider

//Here we create a useTheme custom hook 
export default function useTheme(){
    // inside this custom hook we basically export the themeContext
    return useContext(themeContext)
}