import React, {useEffect, useState} from 'react'
import Post from '../components/Post';
import { collection, getDoc, getDocs } from 'firebase/firestore';
import { database_application, auth_user } from '../../firebase';

export default function Home() {
  const [guide, setGuide] = useState([]);
  const collectionRef = collection(database_application, 'Guide');

  useEffect(()=> {
    const getGuides = async () => {
      const data = await getDocs(collectionRef)
      setGuide(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
    }
    getGuides()
  })
  
  return (
    <div className='flex flex-col mx-auto w-1/2 bg-slate-100 h-auto mt-32 rounded-3xl py-10 px-10 gap-5 shadow-lg'>
        <h2 className='text-5xl text-gray-700 font-md '>Home</h2>
        <div className='flex flex-col gap-5 w-full mt-4'>
          {
            guide.map((post) => {
              return (
                <Post title={post.title} text={post.guide}/>
              )
            })
          }
        </div>

    </div>
  )
}
