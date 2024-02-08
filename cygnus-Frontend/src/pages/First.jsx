import React from 'react'
import Header from '../components/Header'

const First = () => {

  return (
    <>
    <Header />
    <div className='flex flex-col h-auto w-auto'>
    <div className=" w-full p-8 bg-green-400 flex flex-col justify-center justify-items-center text-center" >
        <h1 className='text-3xl font-semibold'>Home Page</h1>
        <p>
        Writing a 200-word essay allows for a concise yet impactful exploration of a topic. In such limited space, every word must be chosen thoughtfully to convey the intended message effectively. It's crucial to focus on a clear thesis or main idea and provide supporting evidence or arguments within the constraints of the word count.

{/* For example, a 200-word essay could delve into the importance of environmental conservation. It might start by highlighting the pressing issues facing our planet, such as climate change and biodiversity loss. The essay could then discuss the critical role that individuals and communities play in protecting the environment through actions like recycling, reducing energy consumption, and supporting sustainable practices. */}

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
<img className="object-cover w-full h-full" alt="Your Image" src='https://yourdolphin.com/assets/upload/AAA_2022_Assets/Sector-Pages/Education_Sector%20-%20Copy%201.jpg'/>
</div>

    </div>
</div>
</>
  )
}

export default First