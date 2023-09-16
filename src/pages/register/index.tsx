import { useForm } from 'react-hook-form'
import { onSubmit } from '@/hooks/CallAxios'
import { onRegister } from '@/hooks/Register'
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
        <div className=' w-[33%] flex justify-center  h-[100%]' style={{ overflow: 'hidden', marginTop: '0%', backdropFilter: 'blur(4px)', backgroundColor: 'rgba(255,255,255,0.4)', borderRadius: '2px' }}>
          <div className='flex rounded-xl border min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
              <img
                className='mx-auto h-10 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt='Your Company'
              />
              <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                Create your account here!
              </h2>
            </div>

            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
              <form className='space-y-6' action='#' onSubmit={handleSubmit(onRegister)}>
                <div>
                  <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900' />
                  <div className='mt-2 flex'>
                    <input
                      id='email'
                      {...register('email')}
                      type='email'
                      autoComplete='email'
                      required
                      className='block text-center mr-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-300 sm:text-sm sm:leading-1'
                      placeholder='email'
                    />
                    <input
                      id='nick'
                      {...register('nick')}
                      type='password'
                      autoComplete='nick'
                      required
                      className='block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-300 sm:text-sm sm:leading-1'
                      placeholder='nick'
                    />
                  </div>
                </div>

                <div>
                  <div className='flex items-center justify-between' />
                  <div className='mt-2 flex'>
                    <input
                      id='name'
                      {...register('nome')}
                      type='name'
                      autoComplete='name'
                      required
                      className='block w-full text-center mr-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-300 sm:text-sm sm:leading-1'
                      placeholder='nome'
                    />
                    <input
                      id='last_name'
                      {...register('sobrenome')}
                      type='ln'
                      autoComplete='ln'
                      required
                      className='block w-full m2 text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-300 sm:text-sm sm:leading-1'
                      placeholder='sobrenome'
                    />
                  </div>
                </div>

                <div>
                  <div className='flex items-center justify-between' />
                  <div className='mt-2 flex'>
                    <input
                      id='addr'
                      {...register('endereco')}
                      type='addr'
                      autoComplete='addr'
                      required
                      className='block w-full text-center mr-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-300 sm:text-sm sm:leading-1'
                      placeholder='endereço'
                    />
                    <input
                      id='phone'
                      {...register('telefone')}
                      type='phone'
                      autoComplete='phone'
                      required
                      className='block w-full text-center m2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-300 sm:text-sm sm:leading-1'
                      placeholder='celular'
                    />
                  </div>
                </div>

                <div>
                  <div className='flex items-center justify-between' />
                  <div className='mt-2 flex'>
                    <input
                      id='password'
                      {...register('senha')}
                      type='password'
                      autoComplete='current-password'
                      required
                      className='block w-full text-center mr-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-300 sm:text-sm sm:leading-1'
                      placeholder='senha'
                    />
                  </div>
                </div>
                <div className='flex justify-center items-center'>
                  <button
                    type='submit'
                    className='flex text-center btn max-h-[1%] p-0 w-[80%] -translate-y-1 hover:translate-y-0'
                  >
                    Sign Up
                  </button>
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
