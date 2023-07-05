import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
export default function Modal() {
  let [isOpen, setIsOpen] = useState(true);
  const [selectedFile, setSelectedFile] = useState();
  const [checkFile, setCheckFile] = useState(false);

  const imageHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setCheckFile(true);
  };
  const [selectedIndex, setSelectedIndex] = useState("tab1");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (isChecked) => {
    setIsCheckboxChecked(isChecked);
  };
  const handleNextTab = () => {
    setSelectedIndex((prevIndex) => {
      // Determine the next tab index based on the current index
      const currentIndex = ["tab1", "tab2", "tab3"].indexOf(prevIndex);
      const nextIndex = currentIndex + 1 >= 3 ? 0 : currentIndex + 1;

      // Return the value of the next tab index
      return ["tab1", "tab2", "tab3"][nextIndex];
    });
  };

  const imagesubmission = () => {
    if (checkFile) {
      alert("File Uploaded");
      console.log(selectedFile);
    } else {
      alert("select a file");
    }
  };

  const { register, handleSubmit } = useForm();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const TabsDemo = () => (
    <form
      className="space-y-6"
      action="#"
      method="POST"
      onSubmit={handleSubmit}
    >
      <Tabs.Root
        className="flex w-full h-full TabsRoot"
        value={selectedIndex}
        onValueChange={setSelectedIndex}
      >
        <Tabs.List className="TabsList" aria-label="Manage your account">
          <Tabs.Trigger className="TabsTrigger" value="tab1">
            Account
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab2">
            Password
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab3">
            Description
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent" value="tab1">
          <p className="Text">
            Make changes to your account here. Click save when you're done.
          </p>
          <fieldset className="Fieldset">
            <label className="Label mb-[10px]" htmlFor="name">
              Name
            </label>
            <input
              className="Input"
              id="name"
              defaultValue="myGroup"
              {...register("group name")}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label mb-[10px]" htmlFor="username">
              Username
            </label>
            <input
              className="Input"
              id="username"
              defaultValue="@"
              {...register("group link")}
            />
          </fieldset>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "flex-end",
            }}
          >
            <button onClick={handleNextTab}>Next Tab</button>
          </div>
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tab2">
          <p className="Text">
            Change your password here. After saving, you'll be logged out.
          </p>
          <fieldset className="Fieldset">
            <label className="Label mb-[10px]" htmlFor="database">
              Current password
            </label>
            <input
              className={`Input ${isCheckboxChecked ? 'Input--disabled' : ''}`}
              id="email"
              {...register("email")}
              disabled={isCheckboxChecked}
            />
            <div style={{ display: "flex", alignItems: "center", marginTop: '10px' }}>
              <Checkbox.Root
                className="CheckboxRoot"
                checked={isCheckboxChecked}
                onCheckedChange={handleCheckboxChange}
                id="c1"
              >
                <Checkbox.Indicator className="CheckboxIndicator">
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label className="Label mb-[10px] text-black" htmlFor="c1">Use current email</label>
            </div>
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label mb-[10px]" htmlFor="newPassword">
              New password
            </label>
            <input className="Input" id="newPassword" type="password" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label mb-[10px]" htmlFor="confirmPassword">
              Confirm password
            </label>
            <input className="Input" id="confirmPassword" type="password" />
          </fieldset>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "flex-end",
            }}
          >
            <button onClick={handleNextTab}>Next Tab</button>
          </div>
        </Tabs.Content>
        <Tabs.Content className="TabsContent h-[60vh]" value="tab3">
          <div className="h-[100%] flex justify-center items-center px-2">
            <div className="w-[320px] flex flex-col items-center justify-center gap-2">
              <div
                className="h-[10rem] w-[10rem] cursor-pointer relative flex justify-center items-center border-2 rounded-md"
                style={{ borderRadius: "100%" }}
              >
                <input
                  type="file"
                  name="file"
                  onChange={imageHandler}
                  style={{
                    borderRadius: "10px",
                  }}
                  className="z-20 opacity-0 cursor-pointer h-full w-full"
                />
                <div className="absolute flex justify-center items-center gap-2">
                  <img
                    className={`h-full w-full  rounded-full ${
                      checkFile ? "opacity-1" : "opacity-0"
                    }`}
                    src={
                      selectedFile ? URL.createObjectURL(selectedFile) : null
                    }
                  />
                </div>
              </div>
              <div className="text-[18px] truncate">
                {checkFile ? null : "choose a file"}
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center w-full">
            <button className="Button green" type="submit">
              create group
            </button>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </form>
  );

  return (
    <>
      <motion.div>
        <div className="fixed inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Open dialog
          </button>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-screen h-[90vh] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg mt-4 font-medium leading-6 text-gray-900"
                    >
                      Create an Group
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
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
  );
}
