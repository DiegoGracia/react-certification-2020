import React from 'react'
import HomeCard from '../HomeCard/index';


export default function HomeCards({panico}) {
    console.log({panico})
    return (
        <div className='container my-12 mx-auto px-4 md:px-12'>
            <div className='flex flex-wrap -mx-1 lg:-mx-4S'>
                {panico.items.filter((HomeCard2 => (!HomeCard2.id.channelId))).map((HomeCard2) => (
                    <HomeCard
                    title={HomeCard2.snippet.title}
                    description={HomeCard2.snippet.description}
                    img={HomeCard2.snippet.thumbnails.medium.url}
                    key={HomeCard2.snippet.title}
                    />
                ))}
                
            </div>
        </div>
    )
}

