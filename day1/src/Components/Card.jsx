import React from 'react'

function Card() {
  return (
    <div className='w-full h-screen bg-zinc-500'>
        <div className= 'bg-zinc-200 absolute left-1/2 top-1/2 h-38 w-55 -translate-x-[50%] -translate-y-[50%] rounded-t-md' >
        <div className='bg-zinc-500 rounded-t-md overflow-hidden'>
            <img className=' h-38 w-full' src="https://images.unsplash.com/photo-1606607291535-b0adfbf7424f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         
        </div>
          <div className='text-center font-bold bg-zinc-100 h-35 rounded-b-md' >Sudhanshu kumar
            <p className=' mt-3  font-light  '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium sapiente quas </p>
          </div>
        </div>

        

    </div>
    
    
  )
}

export default Card;