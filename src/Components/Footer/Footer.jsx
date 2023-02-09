import React from 'react'
import FooterCol from './Footer-col'

const Footer = () => {
    return (
        <div className=' bg-black text-white pt-16 pb-4 text-center'>
            <div className=' max-w-[1240px] mx-auto px-4 grid grid-cols-2 lg:grid-cols-5 gap-y-4'>
                <FooterCol />
                <FooterCol />
                <FooterCol />
                <FooterCol />
                <FooterCol />
            </div>
            <div className="text-white mt-8 text-lg pointer-events-none">
                Copyright © 2023 <a href="https://takeshy.works" className='text-green pointer-events-auto' target={'_blank'} rel="noreferrer noopener">Takeshy</a>. All rights reserved.
            </div>
        </div>
    )
}

export default Footer