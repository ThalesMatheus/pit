import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import Tags from '@/components/tags/tags'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'

import { onGroupSubmit } from '@/hooks/Group'
export default function Modal () {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState()
  const [checkFile, setCheckFile] = useState(false)
  const handlerSubmit = (data: any) => {
    onGroupSubmit(data, handleCloseModal)
  }
  const [tags, setTags] = useState([])

  const handleTagsChange = (newTags) => {
    setTags(newTags)
  }
  const handleCloseModal = () => {
    setIsOpen(false) // Close the modal by updating the state
  }

  const [selectedText, setSelectedText] = useState('')

  const handleTextChange = (event) => {
    setSelectedText(event.target.value)
  }

  const imageHandler = (e) => {
    setSelectedFile(e.target.files[0])
    setCheckFile(true)
  }
  const [selectedIndex, setSelectedIndex] = useState('tab1')
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false)
  const [isCheckboxChecked2, setIsCheckboxChecked2] = useState(false)
  const [isCheckboxChecked3, setIsCheckboxChecked3] = useState(false)
  const [isCheckboxChecked4, setIsCheckboxChecked4] = useState(false)

  const handleCheckboxChange4 = (isChecked) => {
    setIsCheckboxChecked4(isChecked)
    setValue('c77', isChecked ? "0" : "1")
  }

  const handleCheckboxChange = (isChecked) => {
    setIsCheckboxChecked(isChecked)
  }
  const handleCheckboxChange2 = (isChecked) => {
    setIsCheckboxChecked2(isChecked)
    setValue('endereco', isChecked ? '2' : '')
    if (isCheckboxChecked3) setIsCheckboxChecked3(!isChecked)
  }
  const handleCheckboxChange3 = (isChecked) => {
    setIsCheckboxChecked3(isChecked)
    setValue('endereco', isChecked ? '3' : '')
    if (isCheckboxChecked2) setIsCheckboxChecked2(!isChecked)
  }
  const handleNextTab = () => {
    setSelectedIndex((prevIndex) => {
      // Determine the next tab index based on the current index
      const currentIndex = ['tab1', 'tab2', 'tab3', 'tab4'].indexOf(prevIndex)
      const nextIndex = currentIndex + 1 >= 4 ? 0 : currentIndex + 1

      // Return the value of the next tab index
      return ['tab1', 'tab2', 'tab3', 'tab4'][nextIndex]
    })
  }

  const imagesubmission = () => {
    if (checkFile) {
      alert('File Uploaded')
      console.log(selectedFile)
    } else {
      alert('select a file')
    }
  }
  const onSubmit = (data) => {
    console.log(data)
  }

  function closeModal () {
    setIsOpen(false)
  }

  function openModal () {
    setIsOpen(true)
  }
  const TabsDemo = () => (
    <form
      className='space-y-6'
      action='#'
      method='POST'
      onSubmit={handleSubmit(handlerSubmit)}
    >
      <Tabs.Root
        className='flex w-full h-full TabsRoot'
        value={selectedIndex}
        onValueChange={setSelectedIndex}
      >
        <Tabs.List className='TabsList' aria-label='Manage your account'>
          <Tabs.Trigger className='TabsTrigger' value='tab1'>
            Account
          </Tabs.Trigger>
          <Tabs.Trigger className='TabsTrigger' value='tab2'>
            Fields
          </Tabs.Trigger>
          <Tabs.Trigger className='TabsTrigger' value='tab3'>
            Description
          </Tabs.Trigger>
          <Tabs.Trigger className='TabsTrigger' value='tab4'>
            Image
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className='TabsContent' value='tab1'>
          <p className='Text'>
            Make changes to your account here. Click save when you're done.
          </p>
          <fieldset className='Fieldset'>
            <label className='Label mb-[10px]' htmlFor='name'>
              Name
            </label>
            <input
              className='Input'
              id='name'
              placeholder='myGroup'
              {...register('nome')}
            />
          </fieldset>
          <fieldset className='Fieldset'>
            <label className='Label mb-[10px]' htmlFor='username'>
              Id própria, ou nickname
            </label>
            <input
              className='Input'
              id='username'
              placeholder='@...'
              {...register('grouplink')}
            />
          </fieldset>
          <fieldset className='Fieldset'>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <Checkbox.Root
                className='CheckboxRoot'
                checked={isCheckboxChecked4}
                onCheckedChange={handleCheckboxChange4}
                {...register('c77')}
                id='c77'
              >
                <Checkbox.Indicator className='CheckboxIndicator'>
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label className='Label mb-[10px] text-black' htmlFor='c1'>Privado</label>
            </div>
          </fieldset>
          <div
            style={{
              display: 'flex',
              marginTop: 20,
              justifyContent: 'flex-end'
            }}
          >
            <button className='Button' onClick={handleNextTab} style={{ border: '1px solid rgba(0,0,0, 0.4)', cursor: 'pointer' }}>Next Tab</button>
          </div>
        </Tabs.Content>
        <Tabs.Content className='TabsContent' value='tab2'>
          <p className='Text'>
            Alguns dados para a criação do grupo
          </p>
          <fieldset className='Fieldset'>
            <label className='Label mb-[10px]' htmlFor='database'>
              CNPJ
            </label>
            <input
              className={`Input ${isCheckboxChecked ? 'Input--disabled' : ''}`}
              id='cnpj'
              {...register('cnpj')}
              disabled={isCheckboxChecked}
            />
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <Checkbox.Root
                className='CheckboxRoot'
                checked={isCheckboxChecked}
                onCheckedChange={handleCheckboxChange}
                id='c1'
              >
                <Checkbox.Indicator className='CheckboxIndicator'>
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label className='Label mb-[10px] text-black' htmlFor='c1'>Sem uso do CPNJ</label>
            </div>
          </fieldset>
          <fieldset className='Fieldset'>
            <label className='Label mb-[10px]' htmlFor='newPassword'>
              Endereço
            </label>
            <input
              className={`Input ${(isCheckboxChecked2 || isCheckboxChecked3 ? 'Input--disabled' : '')}`} id='endereco' type='text'
              {...register('endereco')}
              disabled={isCheckboxChecked2 || isCheckboxChecked3}
            />
            <div className='justify-start items-center' style={{ display: 'flex', marginTop: '10px' }}>
              <div className='flex items-center'>

                <Checkbox.Root
                  className='CheckboxRoot mb-2'
                  checked={isCheckboxChecked2}
                  onCheckedChange={handleCheckboxChange2}
                  id='c1'
                >
                  <Checkbox.Indicator className='CheckboxIndicator'>
                    <CheckIcon />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <p className='mb-2 ml-2'>Usar endereço de login</p>
              </div>
              <div className='flex ml-5 mb-2'>

                <Checkbox.Root
                  className='CheckboxRoot'
                  checked={isCheckboxChecked3}
                  onCheckedChange={handleCheckboxChange3}
                  id='c1'
                >
                  <Checkbox.Indicator className='CheckboxIndicator'>
                    <CheckIcon />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <p className=' ml-2'>Sem endereço físico</p>
              </div>
            </div>
          </fieldset>
          <div
            style={{
              display: 'flex',
              marginTop: 20,
              justifyContent: 'flex-end'
            }}
          >
            <button className='Button' onClick={handleNextTab} style={{ border: '1px solid rgba(0,0,0, 0.4)', cursor: 'pointer' }}>Next Tab</button>
          </div>
        </Tabs.Content>
        <Tabs.Content className='TabsContent w-full' value='tab3'>
          <textarea
            {...register('description')}
            className='Input !h-[50vh] w-full description'
          />
          <div
            style={{
              display: 'flex',
              marginTop: 20,
              justifyContent: 'flex-end'
            }}
          >
            <input
              type='hidden'
              value={selectedText}
            />
            <button className='Button' onClick={handleNextTab} style={{ border: '1px solid rgba(0,0,0, 0.4)', cursor: 'pointer' }}>Next Tab</button>
          </div>

        </Tabs.Content>
        <Tabs.Content className='TabsContent h-[60vh]' value='tab4'>
          <div className='h-[100%] flex justify-center items-center px-2'>
            <div className='w-[320px] flex flex-col items-center justify-center gap-2'>
              <div
                className='h-[10rem] w-[10rem] cursor-pointer relative flex justify-center items-center border-2 rounded-md'
                style={{ borderRadius: '100%', overflow: checkFile ? 'hidden' : 'visible' }}
              >
                <input
                  type='file'
                  name='file'
                  onChange={imageHandler}
                  style={{
                    borderRadius: '10px'
                  }}
                  className='z-20 opacity-0 cursor-pointer h-full w-full'

                />
                <div className='absolute flex h-full w-full justify-center items-center gap-2'>
                  <div
                    className={`h-full w-full ${
                      checkFile ? 'opacity-1' : 'opacity-0'
                    }`}
                    style={{
                      backgroundImage: `url(${selectedFile ? URL.createObjectURL(selectedFile) : ''})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      objectFit: 'fill'
                    }}
                  />
                  {selectedFile && (
                    <input type='hidden' {...register('image')} value={selectedFile} />
                  )}
                  <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_RIGHT} />

                </div>
              </div>
              <div className='text-[18px] truncate'>
                {checkFile ? null : 'choose a file'}
              </div>
            </div>
          </div>
          <div className='flex justify-end items-center w-full'>
            <button className='Button green cursor-pointer' type='submit'>
              create group
            </button>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </form>
  )

  return (
    <>
      <motion.div>
        <div className='inset-0 flex items-center justify-center'>
          <button
            type='button'
            onClick={openModal}
            className='rounded-md bg-gray-400 bg-opacity-20 px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
          >
            Create Group +
          </button>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as='div' className='relative z-10' onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-black bg-opacity-25' />
            </Transition.Child>

            <div className='fixed inset-0 overflow-y-auto'>
              <div className='flex min-h-full items-center justify-center p-4 text-center'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Dialog.Panel className='w-screen h-[90vh] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                    <Dialog.Title
                      as='h3'
                      className='text-lg mt-4 font-medium leading-6 text-gray-900'
                    >
                      Create an Group
                    </Dialog.Title>
                    <div className='mt-2'>
                      <p className='text-sm text-gray-500'>
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                      </p>
                    </div>
                    <TabsDemo />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </motion.div>
    </>
  )
}
