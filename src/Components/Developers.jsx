import React from 'react'
import terminal from "../assets/terminal.png"

const Developers = () => {
    return (
        <div className='w-full bg-black text-white text-center'>
            <div className='max-w-[1240px] mx-auto py-16 px-4 flex flex-col lg:flex-row items-center justify-between'>
                <div className='text-left pointer-events-none'>
                    <h1>Superpowers for DEFI developers.</h1>
                    <p>Checkout the <span className="text-green">documentation</span>, the <span className="text-green">quick start</span>  or a guide below to
                        <br />integrate your project with thousands of tokens and billions of
                        liquidity.</p>
                </div>

                <div className='py-16 px-8'>
                    <img className=' max-w-md shadow-lg shadow-cyan-500/50' src={terminal} alt="terminal" />
                </div>
            </div>
        </div>
    )
}

export default Developers