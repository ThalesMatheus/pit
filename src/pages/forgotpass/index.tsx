import { useForm } from 'react-hook-form'
import { onSubmit } from '@/hooks/CallAxios'
import { onForgotpass } from '@/hooks/forgotpass'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function Example () {
  const { register, handleSubmit } = useForm()

  return (
    <>
      {/*
          This example requires updating your template:

          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
       <div className='flex w-[100%] justify-center items-center h-[100vh]' >
        <div className=' w-[33%] flex justify-center' style={{ overflow: 'hidden', marginTop: '0%', backdropFilter: 'blur(4px)', backgroundColor: 'rgba(255,255,255,0.4)', borderRadius: '2px' }}>
          <div className='flex rounded-xl border min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
              <img
                className='mx-auto h-10 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt='Your Company'
              />
              <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                ForgotPass
              </h2>
            </div>

            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
              <form className='space-y-6' action='#' onSubmit={handleSubmit(onForgotpass)}>
                <div>
                  <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900' />
                  <div className='mt-2 flex'>
                      <input
                        id='email'
                        {...register('email')}
                        type='email'
                        autoComplete='email'
                        required
                        className='block mr-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        placeholder='email'
                      />
                    </div>
                    <div className='flex mt-4 items-center justify-center'>

                    <button
                    type='submit'
                    className='flex text-center btn max-h-[1%] p-0 w-[80%] -translate-y-1 hover:translate-y-0'
                    >
                    Sign Up
                  </button>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_RIGHT} />

      </div>
    </>
  )
}
