import { useState } from 'react'




function App() {
  const [color , setcolor] = useState("white")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
      <div className='fixed bottom-8 w-full flex justify-center px-20'>
        <div className='flex gap-9'style={{backgroundColor : setcolor}} >
          <button onClick={ () =>{ backgroundColor = setcolor("red")}} className='border-2 border-red-300 rounded-md text-lg px-2 bg-red-300' >red</button>  
          <button onClick={ () =>{ backgroundColor = setcolor("lime")}}  className='border-2 border-lime-300 rounded-md text-lg px-2 bg-lime-300'>Lime</button>  
          <button onClick={ () =>{ backgroundColor = setcolor("blue")}}  className='border-2 border-blue-300 rounded-md text-lg px-2 bg-blue-300'>Blue</button>  
          <button onClick={ () =>{ backgroundColor = setcolor("purple")}}  className='border-2 border-purple-300 rounded-md text-lg px-2 bg-purple-300'>Purple</button>  
          <button onClick={ () =>{ backgroundColor = setcolor("orange")}}  className='border-2 border-orange-300 rounded-md text-lg px-2 bg-orange-300'>Orange</button>  
          <button onClick={ () =>{ backgroundColor = setcolor("pink")}}  className='border-2 border-pink-300 rounded-md text-lg px-2 bg-pink-300'>Pink</button> 
          <button onClick={() =>{backgroundColor: setcolor("white")}} className='border-2 rounded-md text-lg px-2 border-black'>Reset</button> 
        </div>
      </div>
    </div>
  )
}

export default App
