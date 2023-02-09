import React from 'react'

const Project = (props) => {
    return (
        <div className="flex flex-col border border-cyan-500 shadow-lg shadow-cyan-600/50 rounded-2xl text-left py-12 px-8 pointer-events-none">
            <div><div className="bg-green rounded-full p-2 inline-flex">
                {props.icon}
            </div></div>
            <h3 className="text-xl font-bold py-4">{props.header}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default Project

