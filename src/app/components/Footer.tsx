import Image from "next/image"
import Logo from "../../../public/Logo.webp"
import {BsTwitter} from "react-icons/bs"
import {FaFacebookF, FaLinkedinIn} from "react-icons/fa"
import Link from "next/link"

export const Footer = () => {
    return (
      <div className="px-8 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <Image className="" src={Logo} alt="Logo" height={300} width={200} />
            <div className="mt-12 lg:max-w-sm">
              <p className="text-sm text-gray-800">
              Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
              </p>
              <div className="flex gap-8 items-center text-2xl pt-12">
              <div className="bg-gray-100 h-10 w-10 flex justify-center items-center rounded-md"><BsTwitter/></div>
              <div className="bg-gray-100 h-10 w-10 flex justify-center items-center rounded-md"><FaFacebookF/></div>
              <div className="bg-gray-100 h-10 w-10 flex justify-center items-center rounded-md"><FaLinkedinIn/></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div className="pl-16">
              <p className="font-semibold tracking-wide text-gray-800">
              Company
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    How it Works
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pl-20">
              <p className="font-semibold tracking-wide text-gray-800">
              Support
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Support Carrer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    24h Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Quick Chat
                  </Link>
                </li>
                              
              </ul>
            </div>
            <div className="pl-16">
              <p className="font-semibold tracking-wide text-gray-800">Contact</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Whatsapp
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Support 24h
                  </Link>
                </li>
                                                
              </ul>
            </div>
            
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row pl-16">
          <p className="text-sm text-gray-600">
            © Copyright 2023 Adeel Talib. All rights reserved.
          </p>
          
        </div>
      </div>
    );
  };