

import { useState } from 'react'
import './App.css'

function App() {
 const [color,Setcolor]=useState("olive")

  return (
    <>
     <div className='w-full h-screen duration-200'   style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-10 shadow-lg bg-white px-3 px-2'>
          <button className='outline-none px-4 py-1 text-white rounded-full text-white'
          style={{backgroundColor:"red"}} onClick={()=>Setcolor("red")}>red</button>
          <button className='outline-none px-4 py-1 text-white rounded-full text-white'
            style={{backgroundColor:"green"}} onClick={()=>Setcolor("green")}>green</button>
          <button className='outline-none px-4 py-1 text-white rounded-full text-white'
             style={{backgroundColor:"blue"}} onClick={()=>Setcolor("blue")}>blue</button>
          <button className='outline-none px-4 py-1 text-white rounded-full text-white'
             style={{backgroundColor:"olive"}} onClick={()=>Setcolor("olive")}>olive</button>
               <button className='outline-none px-4 py-1 text-white rounded-full text-white'
             style={{backgroundColor:"grey"}} onClick={()=>Setcolor("grey")}>grey</button>
             <button className='outline-none px-4 py-1 text-white rounded-full text-white'
             style={{backgroundColor:"pink"}} onClick={()=>Setcolor("pink")}>pink</button>
             <button className='outline-none px-4 py-1 text-white rounded-full text-white'
             style={{backgroundColor:"black"}} onClick={()=>Setcolor("black")}>black</button>
             <button className='outline-none px-4 py-1 text-white rounded-full text-white'
             style={{backgroundColor:"#FFBE98"}} onClick={()=>Setcolor("#FFBE98")}>Peach Fuzz</button>
          <button className='outline-none px-4 py-1 text-white rounded-full text-white'
             style={{backgroundColor:"    #2E5283"}} onClick={()=>Setcolor("    #2E5283")}>Peach Fuzz</button>
         








        </div>
      </div>
    
     </div>

    </>  )
}

export default App
