import React from 'react'
import Header from '../components/Header'

const Pricing = () => {
  return (
    <>
    <Header />
    <div className='flex flex-col h-auto w-auto'>
    <div className=" w-full p-8 bg-green-400 flex flex-col justify-center justify-items-center text-center" >
        <h1 className='text-3xl font-semibold'>Pricing Page</h1>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Molestias, maxime asperiores magnam numquam dolores nostrum
            aliquid ipsa. Maxime doloribus tempore dolore minus 
            quibusdam dolor alias ratione. 
            Eveniet a aperiam repellat
            Maxime doloribus tempore dolore minus 
            quibusdam dolor alias ratione. 
            Eveniet a aperiam repellat
        </p>
        
    </div>


    <div class="w-full p-4 flex justify-center justify-items-center ">

        <p className='p-10  w-2/4 '><h1 className='font-semibold text-xl' style={{ maxHeight: 'calc(100vh - 320px)', overflow: 'auto' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Molestias, maxime asperiores magnam.</h1> 
            <br/>Maxime doloribus tempore dolore minus 
            quibusdam dolor alias ratione. 
            <ol><li>Eveniet a aperiam repellat
            Maxime doloribus</li> tempore dolore minus 
            quibusdam dolor alias ratione. 
            <li>Eveniet a aperiam repellatLorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Molestias, maxime asperiores magnam numquam dolores nostrum
            aliquid ipsa.</li> <br/>Maxime doloribus tempore dolore minus 
            quibusdam dolor alias ratione. 
            Eveniet a aperiam repellat
            Maxime doloribus tempore dolore minus 
            quibusdam dolor alias ratione.</ol> 
            </p>

            <div className='w-2/4 p-12' style={{ maxHeight: 'calc(100vh - 320px)', overflow: 'auto' }}>
<img className="object-cover w-full h-full" alt="Your Image" src='https://images.unsplash.com/photo-1706845014074-99f4c765d3ee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
</div>

    </div>
</div>
</>
  )
}

export default Pricing