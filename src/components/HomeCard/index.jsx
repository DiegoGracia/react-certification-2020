import React from 'react'



export default function HomeCard({title,description,img}) {
    return (

        <div className='my-1 px-1 py-1 w-full md:2-1/2 lg:my-4 lg:px-4 lg:w-1/3'>
            <div className="bg-white rounded overflow-hidden shadow-md">
                <img src={img} alt="imagen" className='block h-auto w-full overflow-hidden text-justify'/>
                <h1 className='text-lg font-bold overflow-hidden h-30'>{description}</h1>
                <p className='pt-10 h-24 no-underline hover:underline text-gray-800 text-opacity-80 overflow-hidden text-justify'>{title}</p>            
            </div>
        </div>    
    );
}
