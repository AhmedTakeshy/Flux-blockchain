import React from 'react'

const Subscribe = () => {
    return (
        <div className='w-full bg-subs text-white py-16 px-4 text-center bg-cover bg-center bg-fixed'>
            <h1 className='pointer-events-none'>Join Our Flux Community</h1>
            <div className='my-4'>
                <input type="email" placeholder='Enter your email' className='rounded-full  p-4 mr-4' />
                <button className='rounded-full'>Sign Up</button>
            </div>
            <div className='flex justify-center items-center py-2'>
                <input type="checkbox" className='mr-2' />
                <p className=' pointer-events-none'>Yes, I agree to receive email communications from Flux.</p>
            </div>
        </div>
    )
}

export default Subscribe