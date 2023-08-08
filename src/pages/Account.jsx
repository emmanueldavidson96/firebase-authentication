import React, { useState } from 'react'

export default function Account() {
    const [hidden, sethidden] = useState(true)
    const handleReveal = () => {
        sethidden(!hidden)
    }
  return (
    <div className='w-3/4 mx-auto px-5 py-5 bg-slate-100 h-auto mt-20 rounded-3xl shadow-lg '>
        <h2 className='text-5xl text-gray-700 font-md'>Account</h2>
        <div className='flex flex-col gap-5 w-full mt-4'>
            <div className='bg-white rounded-lg overflow-hidden shadow-md'>
                <h3 className='bg-slate-400 p-4 cursor-pointer' onClick={handleReveal}>Guide title</h3>
                <p className={`p-4 ${hidden ? 'hidden':'block'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aspernatur architecto aperiam non quos illum at accusamus et, 
                    repellat officiis maiores porro doloremque quod, 
                    autem quas, aliquid accusantium possimus illo sequi.
                </p>
            </div>
            <div className='bg-white rounded-lg overflow-hidden shadow-md'>
                <h3 className='bg-slate-400 p-4 cursor-pointer' onClick={handleReveal}>Guide title</h3>
                <p className={`p-4 ${hidden ? 'hidden':'block'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aspernatur architecto aperiam non quos illum at accusamus et, 
                    repellat officiis maiores porro doloremque quod, 
                    autem quas, aliquid accusantium possimus illo sequi.
                </p>
            </div>
            <div className='bg-white rounded-lg overflow-hidden shadow-md'>
                <h3 className='bg-slate-400 p-4 cursor-pointer' onClick={handleReveal}>Guide title</h3>
                <p className={`p-4 ${hidden ? 'hidden':'block'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aspernatur architecto aperiam non quos illum at accusamus et, 
                    repellat officiis maiores porro doloremque quod, 
                    autem quas, aliquid accusantium possimus illo sequi.
                </p>
            </div>
            <div className='bg-white rounded-lg overflow-hidden shadow-md'>
                <h3 className='bg-slate-400 p-4 cursor-pointer' onClick={handleReveal}>Guide title</h3>
                <p className={`p-4 ${hidden ? 'hidden':'block'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aspernatur architecto aperiam non quos illum at accusamus et, 
                    repellat officiis maiores porro doloremque quod, 
                    autem quas, aliquid accusantium possimus illo sequi.
                </p>
            </div>         
        </div>
        
    </div>
  )
}
