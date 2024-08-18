

"use client";
import React from 'react';
import { Accordion } from "flowbite-react";

export function Acco() {
  return (
    <div className=' flex justify-center mt-20  m-auto mb-4 border-light'>
    <Accordion className='ms-70 mt-4 w-90  self-center text-black' style={{width:'1000px'}}>
        <h1 className='text-center font-bold text-2xl ml-5 mb-4 mt-4'>FAQ's</h1>
      <Accordion.Panel className='border-black focus:ring-transparent  '>
        <Accordion.Title className='text-black text-sm  hover:bg-light focus:ring-transparent '>What is Petify?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-black text-sm">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
          <p className="text-black text-sm">
            Check out this guide to learn how to&nbsp;
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              get started&nbsp;
            </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className='border-black focus:ring-transparent'>
        <Accordion.Title className='text-black text-sm  hover:bg-light focus:ring-transparent '>How does Petify work?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-black text-sm">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p className="text-black text-sm">
            Check out the
            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
              Figma design system
            </a>
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className='border-black focus:ring-transparent'>
        <Accordion.Title className='text-black text-sm  hover:bg-light focus:ring-transparent '>How do I create an account on Petify?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-black text-sm">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-black text-sm">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-black text-sm">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className='border-black focus:ring-transparent' >
        <Accordion.Title className='text-black text-sm  hover:bg-light focus:ring-transparent '>What types of consultations are available?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-black text-sm">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
          <p className="text-black text-sm">
            Check out this guide to learn how to&nbsp;
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              get started&nbsp;
            </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </div>
  );
}
