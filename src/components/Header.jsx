import React from 'react'
import logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth_user } from '../../firebase';
import { useNavigate } from 'react-router-dom';

export default function Header({is_auth, set_is_auth}) {
    const navigate = useNavigate()
    const handleSignOut = () => {
        signOut(auth_user).then(()=>{
            localStorage.clear()
            set_is_auth(false)
            navigate('/login')
        })
    }
  return (
    <nav className='w-full h-16 bg-gray-100'>
        <div className='h-full flex items-center justify-around'>
            <Link to='/' className='h-full'>
                <img className='h-full' src={logo} alt="this is the logo"/>            
            </Link>                
            
            <ul className='flex gap-2 h-full items-center'>
                { is_auth ?
                    <>
                        <li className='px-5 h-full items-center flex hover:bg-gray-300'>
                            <Link to="/account">
                                <p className='text-gray-400'>Account</p>                    
                            </Link>
                        </li>
                        
                        <li className='px-5 h-full items-center flex hover:bg-gray-300' onClick={handleSignOut}>
                            <Link to='/'>
                                <p className='text-gray-400'>Logout</p>
                            </Link>
                        </li>
                        <li className='px-5 h-full items-center flex hover:bg-gray-300'>
                            <Link to='/createguide'>
                                <p className='text-gray-400'>Create Guide</p>
                            </Link>
                        </li>
                    </>
                    :                
                    <>
                        <li className='px-5 h-full items-center flex hover:bg-gray-300'>
                            <Link to='/login'>
                                <p className='text-gray-400'>Login</p>
                            </Link>
                        </li>
                        <li className='px-5 h-full items-center flex hover:bg-gray-300'>
                            <Link to='/signup'>
                                <p className='text-gray-400'>Sign up</p>
                            </Link>
                        </li>                
                    </>
                }
            </ul>
        </div>
    </nav>
  )
}
