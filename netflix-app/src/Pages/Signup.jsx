import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, signUp } = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventdefault()
        try {
            await signUp(email, password)
            navigate('/')
        } catch(error){
            console.log(error)
        }
    }

  return (
        <div className='w-full h-screen'>
            <img className='hidden sm:block absolute w-full h-screen object-cover'
                src='https://assets.nflxext.com/ffe/siteui/vlv3/e89c9679-2f5f-491d-924c-c58924a8ee4b/f4344d2d-3209-4741-b48e-35587bdeba9a/NG-en-20221121-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
                alt='/'
            />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'>Sign Up</h1>
                            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='p-3 my-2 bg-gray-700' 
                                    type='email' placeholder='Email' autoComplete='email'
                                />
                                <input
                                    onChange={(e) => setPassword(e.target.value)} 
                                    className='p-3 my-2 bg-gray-700' 
                                    type='password' placeholder='Password' autoComplete='current-password'
                                />
                                <button onSubmit={handleSubmit} className='bg-red-600 py-3 my-6 rounded'>Sign Up</button>
                                <div className='flex justify-between text-gray-500'>
                                    <p><input className='mr-2' type='checkbox' />Remember me</p>
                                    <p>Need help?</p>
                                </div>
                                <p className='py-8'>
                                    <span className='text-gray-500'>Already subscribed to Marvflix?</span>{' '}
                                    <Link to='/login'>Sign In</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default Signup;