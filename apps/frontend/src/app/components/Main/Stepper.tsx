import React from 'react'
import Layout from '../Layouts/Layout'
const listContent = [
    {
        id:1,
        title:"Choose an Image",
        desc:"Upload or select a base image that will act as the foundation for your artwork. This could be a photo, a sketch, or even a blank canvas."
    },
    {
        id:2,
        title:"Choose a Style",
        desc:"Pick a style that inspires you — abstract, geometric, cyberpunk, watercolor, or any creative effect. The style defines how your image will be transformed."
    },
    {
        id:3,
        title:"Generate Artwork",
        desc:"Click “Generate” and let the system do the magic. Your chosen image and style are combined through the generative engine to create a unique piece of art."
    }
]
const Stepper = () => {
  return (
    <div>
        <Layout>
            <div className='flex flex-col gap-10'>
                <div className='text-center flex flex-col gap-2'>
                    <h4 className='text-2xl md:text-4xl lg:text-5xl font-semibold'>How can you gen art</h4>
                    <p className='text-sm md:text-lg text-[#808080] max-w-4xl mx-auto'>Generative art is artwork created with the help of algorithms, randomness, and rules instead of being drawn completely by hand. Instead of making one fixed piece, the artist designs a system that can produce endless unique variations. Each output is one of a kind, shaped by both logic and chance.</p>
                </div>
                <div className='flex justify-center items-center gap-2.5 flex-wrap'>
                    {listContent.map((item,index:number)=>(
                        <div className='border p-4 rounded-2xl flex flex-col gap-3'>
                            <div className='flex items-center gap-2.5'>
                                <div className='size-[60px] bg-[#F6BE2B] flex items-center justify-center text-2xl font-semibold rounded-xl'>{item.id}</div>
                                <h6 className='text-xl font-semibold'>{item.title}</h6>
                            </div>
                            <p className='text-[#808080] max-w-sm'>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default Stepper