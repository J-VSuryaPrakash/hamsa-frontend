import React from 'react'
import { useNavigate } from 'react-router-dom'

function Pricing() {
  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate("/contact")
  }

  return (
    <>
      <div className="bg-yellow-300 w-full min-h-screen">
        <div className="flex flex-col items-center justify-center px-4 py-8">
          
          {/* Heading */}
          <div className="mt-4 text-center px-2">
            <h3 className="font-bold font-mono text-[12px] sm:text-3xl">
              Sip Smart: Flexible Pricing Options to Fit Every Occasion!
            </h3>
          </div>

          {/* Pricing Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
            
            {/* Basic Package */}
            <div className="border p-6 rounded-2xl shadow-sm text-center border-orange-900 bg-amber-900">
              <h3 className="text-lg sm:text-xl font-semibold text-white">Basic Package</h3>
              <p className="text-gray-300 mt-2 text-sm sm:text-base">Perfect for small parties and casual get-togethers.</p>
              <p className="text-2xl sm:text-3xl font-bold mt-4 text-gray-200">$99</p>
              <button
                onClick={handleRedirect}
                className="mt-4 px-4 py-2 bg-amber-950 border border-amber-700 rounded-md text-white font-semibold w-full hover:cursor-pointer hover:border-amber-400"
              >
                Order Now!
              </button>
              <ul className="text-white mt-4 space-y-2 text-left list-disc pl-5 text-sm sm:text-base">
                <li>Up to 50 guests</li>
                <li>5 types of beers & soft drinks</li>
                <li>Basic snacks (chips, pretzels, etc.)</li>
                <li>Standard delivery & setup</li>
              </ul>
            </div>

            {/* Party Pro */}
            <div className="border border-amber-900 p-6 rounded-2xl shadow-md text-center relative bg-amber-900">
              <span className="absolute top-4 right-4 bg-amber-950 text-white px-3 py-1 text-xs rounded-full">Most popular</span>
              <h3 className="text-lg sm:text-xl font-semibold text-white">Party Pro</h3>
              <p className="text-gray-300 mt-2 text-sm sm:text-base">Designed for parties that demand a full bar experience.</p>
              <p className="text-2xl sm:text-3xl font-bold mt-4 text-gray-200">$199</p>
              <button
                onClick={handleRedirect}
                className="mt-4 px-4 py-2 bg-amber-950 border border-amber-700 text-white rounded-md font-semibold w-full hover:cursor-pointer hover:border-amber-400"
              >
                Order Now!
              </button>
              <ul className="text-white mt-4 space-y-2 text-left list-disc pl-5 text-sm sm:text-base">
                <li>Up to 150 guests</li>
                <li>Premium beers & cocktails</li>
                <li>Customized beverage menu</li>
                <li>Fast delivery & setup</li>
                <li>Party staff available</li>
              </ul>
            </div>

            {/* Custom Order */}
            <div className="border p-6 rounded-2xl shadow-sm text-center bg-amber-900">
              <h3 className="text-lg sm:text-xl font-semibold text-white">Custom Order</h3>
              <p className="text-gray-300 mt-2 text-sm sm:text-base">
                Looking for something unique? <br /> We’ve got you covered!
              </p>
              <button
                onClick={handleRedirect}
                className="mt-8 px-4 py-2 bg-amber-950 border border-amber-700 rounded-md text-white font-semibold w-full hover:cursor-pointer hover:border-amber-400"
              >
                Contact Now!
              </button>
              <ul className="text-white mt-4 space-y-2 text-left list-disc pl-5 text-sm sm:text-base">
                <li>Custom drink selection</li>
                <li>Unlimited guest capacity options</li>
                <li>Special event themes</li>
                <li>VIP & premium drink services</li>
                <li>Dedicated event planner</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing
