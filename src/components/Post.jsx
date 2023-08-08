import React, {useState} from 'react'

export default function Post({title, text}) {
    const [hidden, sethidden] = useState(true)
    const handleReveal = () => {
        sethidden(!hidden)
    }
  return (
    <div className='bg-white rounded-lg overflow-hidden shadow-md'>
        <h3 className='bg-slate-400 p-4 cursor-pointer' onClick={handleReveal}>{title}</h3>
        <p className={`p-4 ${hidden ? 'hidden':'block'}`}>
            {text}
        </p>
    </div>
  )
}
