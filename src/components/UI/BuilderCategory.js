import React from 'react'

const BuilderCategory = ({ category }) => {
    return (
        <div className='w-full h-20 shadow-lg flex items-center justify-between px-10 rounded-md border-2 mb-3'>
            <h2 className="text-2xl">{category.name}</h2>
            <div>
                <button className="btn btn-primary btn-sm">Select</button>
            </div>
        </div>
    )
}

export default BuilderCategory