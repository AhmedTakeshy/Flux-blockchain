import React from 'react'

const FooterCol = () => {
    return (
        <div>
            <h3 className=' text-xl font-bold underline decoration-cyan-500 decoration-4 underline-offset-8'>Products</h3>
            <ul className='flex flex-col justify-between'>
                <li>App</li>
                <li>Analytics</li>
                <li>Token Lists</li>
                <li>Flux</li>
            </ul>
        </div>
    )
}

export default FooterCol