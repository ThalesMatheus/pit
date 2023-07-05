import { useForm } from 'react-hook-form'
import { onSubmit } from '@/hooks/CallAxios'
import { onRegister } from '@/hooks/Register'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';

const TabsDemo = () => (
  <Tabs.Root className="TabsRoot" defaultValue="tab1">
    <Tabs.List className="TabsList" aria-label="Manage your account">
      <Tabs.Trigger className="TabsTrigger" value="tab1">
        Account
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="tab2">
        Password
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className="TabsContent" value="tab1">
      <p className="Text">Make changes to your account here. Click save when you're done.</p>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="name">
          Name
        </label>
        <input className="Input" id="name" defaultValue="Pedro Duarte" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Username
        </label>
        <input className="Input" id="username" defaultValue="@peduarte" />
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Button green">Save changes</button>
      </div>
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="tab2">
      <p className="Text">Change your password here. After saving, you'll be logged out.</p>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="currentPassword">
          Current password
        </label>
        <input className="Input" id="currentPassword" type="password" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="newPassword">
          New password
        </label>
        <input className="Input" id="newPassword" type="password" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="confirmPassword">
          Confirm password
        </label>
        <input className="Input" id="confirmPassword" type="password" />
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Button green">Change password</button>
      </div>
    </Tabs.Content>
  </Tabs.Root>
);

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
      <div className='flex w-[100%] justify-center items-center h-[100vh]' style={{ backgroundImage: 'url(https://images4.alphacoders.com/115/115708.jpg)', filter: '(10px)' }}>
        <div className=' w-[33%] flex justify-center' style={{ overflow: 'hidden', marginTop: '0%', backdropFilter: 'blur(4px)', backgroundColor: 'rgba(255,255,255,0.4)', borderRadius: '2px' }}>
          <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
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
               <TabsDemo />
              </form>
            </div>
          </div>
        </div>
        <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_RIGHT} />

      </div>
    </>
  )
}
