import React from 'react'
import Word from './Word'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className=" border-t-2 ">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col justify-between items-center sm:flex-row">
        <Link href='/Login' className=" text-gray-900  text-sm text-center sm:text-left">© 2025 <span className='text-prime'>Fashion Mane</span> || Login
        </Link>
        {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className=" text-gray-900 " >
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3  text-gray-900 ">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3  text-gray-900 ">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3  text-gray-900 ">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span> */}
        <span className=' flex items-center gap-4 '>
          <span className='text-prime2  text-sm'> Disigned by </span>
          <span className='flex items-center  text-sm'>

            <Word tags={[{ name: "Umair Zakria", href: "https://www.linkedin.com/in/umair-zakria-67477b33a/" },
            { name: "Maryam Fatima", href: "https://www.linkedin.com/in/maryam-fatima-rajput-91538925a/" },]} />
          </span>

        </span>
      </div>
    </div>
  )
}

export default Footer
