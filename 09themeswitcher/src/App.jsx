import { useEffect } from 'react'
import { useState } from 'react'
import { ThemeProvider } from './Context/theme'
import ThemeBtn from './components/Themebtn'
import Cards from './components/Cards'
import './App.css'

function App() {
  const [count, setCount] = useState("")
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => {
    setThemeMode("dark")
  }

  const lightTheme = () => {
    setThemeMode("light")
  }

  //actual change in theme
  useEffect(() => {
    
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
  <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>

      <div className="flex flex-wrap min-h-screen items-center">
                      <div className="w-full">
                          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                             <ThemeBtn />
                          </div>

                          <div className="w-full max-w-sm mx-auto">
                            <Cards />
                          </div>
                      </div>
      </div>
   </ThemeProvider>
  )
}

export default App
