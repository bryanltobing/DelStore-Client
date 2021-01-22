import React from 'react'
import { Link } from 'react-router-dom'

const LandingPageFooter = () => {
  return (
    <footer className="max-w-7xl mx-auto md:mt-8 lg:mt-12  lg:rounded-sm footer bg-indigo-600 text-white relative pt-1 border-b-2 border-blue-700 ">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <span className="font-bold  uppercase mb-2">Our offer</span>
              <span className="my-2">
                <Link
                  to="/products"
                  className="text-indigo-200 text-md hover:text-indigo-100"
                >
                  Products
                </Link>
              </span>
              <span className="my-2">
                <Link
                  to="/facility"
                  className="text-indigo-200 text-md hover:text-indigo-100"
                >
                  Facility
                </Link>
              </span>
              <span className="my-2">
                <Link
                  to="/more"
                  className="text-indigo-200 text-md hover:text-indigo-100"
                >
                  More
                </Link>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold  uppercase mt-4 md:mt-0 mb-2">
                Reach us on Social Media
              </span>
              <span className="my-2">
                <a
                  href="https://www.facebook.com/BryanExaudiTobing/"
                  className="text-indigo-200 text-md hover:text-indigo-100"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </span>
              <span className="my-2">
                <a
                  href="https://www.instagram.com/bryanltobing/"
                  className="text-indigo-200  text-md hover:text-indigo-100"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </span>
              <span className="my-2">
                <a
                  href="https://www.linkedin.com/in/bryanlumbantobing/"
                  className="text-indigo-200 text-md hover:text-indigo-100"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold  uppercase mt-4 md:mt-0 mb-2">
                Join us
              </span>
              <span className="my-2">
                <Link
                  to="/login"
                  className="text-indigo-200 text-md hover:text-indigo-100"
                >
                  Login
                </Link>
              </span>
              <span className="my-2">
                <Link
                  to="/register"
                  href="#"
                  className="text-indigo-200 text-md hover:text-indigo-100"
                >
                  Register
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm  font-bold mb-2">© 2021 by DelStore Team</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default LandingPageFooter
