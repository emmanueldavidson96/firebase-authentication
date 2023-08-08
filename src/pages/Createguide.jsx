import React, {useState} from 'react';
import {collection,addDoc} from "firebase/firestore";
import { database_application, auth_user } from '../../firebase';

export default function Createguide() {
  const [title, setTitle] = useState('');
  const [guide, setGuide] = useState('');
  
  const handleSubmit = async () => {
    const collectionRef = collection(database_application, 'Guide');
    await addDoc(collectionRef, {
      title: title,
      guide: guide,
      author: auth_user.currentUser.uid
    })

  }
  return (
    <div className='flex flex-col mx-auto w-1/2 bg-slate-100 h-auto mt-32 rounded-3xl justify-center px-10 py-10 gap-5 shadow-lg'>
        <h2 className='text-5xl text-gray-700 font-md '>Create Guide</h2>
        <div className='flex flex-col gap-5'>
          <input type='text' 
            placeholder='Guide Title...' 
            className="py-4 font-bold px-4 border-b-2 border-b-orange-700 focus:outline-none"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}  
          />
          <textarea type='text' 
            placeholder='Guide text...' 
            className="h-40 py-4 px-4 border-b-2 border-b-orange-700 focus:outline-none"
            value={guide}
            onChange={(e)=>{setGuide(e.target.value)}}
          />
          <button onClick={handleSubmit} type='submit' className='bg-yellow-400 text-white uppercase py-4 hover:bg-yellow-500'>Submit Guide</button>
        </div>
    </div>
  )
}
