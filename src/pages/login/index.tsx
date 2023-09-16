import Image from 'next/image'
import wallpaper from './a.jpg'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { onSubmit } from '@/hooks/CallAxios'
import styled from 'styled-components'
import { motion } from 'framer-motion'
const Container = styled.div`
 overflow: hidden;
 height: 100vh;
`

export default function Example () {
  const { register, handleSubmit } = useForm()
  return (
    <>
      <Container>
        <motion.div
          className='flex items-center justify-center w-full h-full'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ height: '100vh' }}
        >

          <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-1/4 items-center'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
              <img
                className='mx-auto h-10 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt='Your Company'
              />
              <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900'>
                Sign in to your account
              </h2>
            </div>

            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
              <form className='space-y-6' action='#' method='POST' onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-400'>
                    Email address
                  </label>
                  <div className='mt-2'>
                    <input
                      id='email'
                      type='email'
                      autoComplete='email'
                      required
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6'
                      {...register('email')}
                    />
                  </div>
                </div>

                <div>
                  <div className='flex items-center justify-between'>
                    <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-400'>
                      Password
                    </label>
                    <div className='text-sm'>
                      <a href='forgotpass' className='font-semibold text-green-300 hover:text-green-500'>
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className='mt-2'>
                    <input
                      id='password'
                      type='password'
                      autoComplete='current-password'
                      required
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      {...register('senha')}
                    />
                  </div>
                </div>

                <div className='flex justify-center items-center'>
                  <button
                    type='submit'
                    className='flex text-center btn max-h-[1%] p-0 w-[90%] -translate-y-1 hover:translate-y-0'
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className='mt-10 text-center text-sm text-gray-500'>
                Not a member?{' '}
                <a href='/register' className='font-semibold leading-6 text-green-300 hover:text-green-500'>
                  Register Now!
                </a>
              </p>
            </div>
          </div>

          <div className='w-[70%] h-full grayscale hover:grayscale-0 max-lg:w-0 max-md:w-[%50] max-sm:w-0' style={{ transition: 'filter 0.5s' }}>
            <div
              className='w-full h-full'style={{
                backgroundImage: `url(${wallpaper.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                objectFit: 'cover'
                // backgroundRepeat:'no-repeat',
                // WebkitBackgroundSize:'100%',
                // MozBackgroundSize:'150%'
              }}
            >
              <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_RIGHT} />

            </div>
          </div>
        </motion.div>
      </Container>
    </>
  )
}
