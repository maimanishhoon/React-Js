import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const[numberAllowed , setNumberAllowed] = useState(false);
  const[charAllowed, setCharAllowed] = useState(false);
  const[password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const copypasstoclip = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.focus(); // Focus the input
      passwordRef.current.setSelectionRange(0, password.length); // Select the content
      window.navigator.clipboard.writeText(password) // Copy to clipboard
      .then(() => {
        alert("Password copied!")
      })
      .catch((err) => {
        console.error('Failed to copy: ', err)
      })
    }
  }, [password]);
  

  const passwordGenerator = useCallback( () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) { str += "0123456789"};
    if(charAllowed) { str += "!@#$%^&*-_+=[]{}~`" };

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);// here we use += so that the value while concatinate otherwise it will show only one character
      
    }

    setPassword(pass, passwordGenerator, passwordGenerator, passwordGenerator)
  }, [length, numberAllowed, charAllowed,  setPassword]);
  // we use useEffect to run the passwordgenerator and in the array box we give that effecter that will leads to the change simple if the (length and numberallow etc ) change so our 'passwordGenerator ' will run again!
  useEffect(() => {passwordGenerator()},[length, charAllowed, numberAllowed, passwordGenerator])

  return (
    <>
     <h1 className='text-3xl text-gray-500 drop-shadow-md font-bold items-center '>This is Password Generator</h1>
     <div className='mt-4  border-2 border-slate-300 rounded-lg  h-auto py-10 px-4 shadow-xl hover:shadow-2xl hover:duration-300 '>
      <div className=''>
        <input type="text"
         value={password}
          readOnly 
          placeholder='password'
          ref={passwordRef} 
           className='border-2 border-gray-400 rounded-l-md w-96 text-xl' id=""  />
        <button 
        onClick={copypasstoclip}
        className='text-xl border-2 border-gray-400 rounded-r-md bg-blue-500 text-white'
        >Copy </button>
      </div>
      <div>
         {/* length  */}
        <div className='flex justify-center flex-row gap-3 mt-5 '>
          <input
           type="range"
            min={8} max={20} 
            value={length} 
            id='len'
            onChange={(e) => {setLength(e.target.value)  }} />
          <label for="len"className='font-bold text-lg' > Lenght :{length}</label>
          {/* Number  */}
          <input id='num' 
          className=''
           type="checkbox" 
           defaultChecked={numberAllowed} 
           onClick={(e) => {setNumberAllowed((prev) => !prev)}}/>
          <label for='num'className='text-lg font-bold'  >Number </label>
          {/* char  */}
          <input 
          className='' 
          id='char'
           type="checkbox"
            defaultChecked={charAllowed}
            onClick={(e) => {setCharAllowed((prev) => !prev)}}
            />
          <label for='char'className='text-lg font-bold'  >Charactors </label>
        </div>
      
    
      </div>
     </div>
    </>
  )
}

export default App
