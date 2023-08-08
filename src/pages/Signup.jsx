import React, {useState} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth_user } from '../../firebase';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth_user, email, password, name)
            .then((user_details)=>{
                const user = user_details.user
                console.log(user);
                navigate('/login')
            })
            .catch((err)=>{
                console.log(err)
            })
    }

  return (
    <div className='flex flex-col mx-auto w-1/2 bg-slate-100 h-auto mt-32 rounded-3xl justify-center px-10 py-10 gap-5 shadow-lg'>
        <h2 className='text-5xl text-gray-700 font-md '>Sign up</h2>
        <div className='flex flex-col gap-5'>
            <form >
                <input 
                    type='text' 
                    className='bg-slate-100 w-full text-gray-500 h-20 border-b-orange-700 border-b-2 focus:outline-none focus:shadow-md p-5 ' 
                    placeholder='fullname...'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <input 
                    type='text' 
                    className='bg-slate-100 w-full text-gray-500 h-20 border-b-orange-700 border-b-2 focus:outline-none focus:shadow-md p-5 ' 
                    placeholder='person@gmail.com'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                    type='password' 
                    placeholder='password...' 
                    className=' w-full h-20 bg-slate-100 text-gray-500 border-b-orange-700 border-b-2 focus:outline-none focus:shadow-md p-5'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />
                <button 
                    className='py-4 px-10 bg-yellow-400 uppercase text-white mt-4 rounded-md shadow-md hover:bg-yellow-500' 
                    type='submit'
                    onClick={handleSubmit}
                    >Signup</button>
            </form>
        </div>

    </div>
  )
}
