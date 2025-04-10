import React from "react";
import logo from '../../assets/logo.png'
import party from '../../assets/party.jpg';
import contact from '../../assets/contact.png';
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/pricing");
  };

  return (
    <>
      <div className="bg-yellow-300 w-full">
        {/* Main Content */}

        <div className="flex flex-col justify-center items-center w-full min-h-screen">
        <div className="flex flex-col sm:flex-row justify-start items-center w-full mb-8 sm:mb-16 px-4">
          <h1 className="text-3xl sm:text-8xl font-[Delius] ml-0 sm:ml-40 text-center sm:text-left">
            Raise a Glass
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row justify-end items-center w-full mb-12 sm:mb-24 px-4">
          <h1 className="text-lg sm:text-7xl font-[Delius] mr-0 sm:mr-40 text-center sm:text-right">
            We’ll Handle the Rest!
          </h1>
        </div>

          <div className="flex justify-center items-center w-full mt-12 mb-6">
            <h2 className="text-xs sm:text-3xl font-[Prompt]">
              Quench Your Thirst for Fun: Order Now and Celebrate!
            </h2>
          </div>
        </div>

        {/* Home */}

        <div className="flex flex-col sm:flex-row justify-center items-center w-full min-h-screen px-4 py-8">
        <div className="w-full sm:w-auto mb-8 sm:mb-0 sm:ml-20">
          <img
            src={logo}
            alt=""
            className="w-full sm:w-7xl h-[50vh] sm:h-[80vh] rounded-xl shadow-2xl shadow-[4px_4px_10px_rgba(123, 51, 6, 1)] object-cover"
          />
        </div>
        <div className="w-full sm:w-auto flex justify-center items-center sm:ml-3 sm:mr-4 px-2">
          <h3 className="text-center sm:text-left text-xl sm:text-2xl font-sans font-medium leading-relaxed">
            Welcome to <span className="font-serif font-bold">HAMSA!</span>
            <br />
            <span>Your every sip is a celebration,</span> and every bottle tells a story!
            <br />
            We’re not just about delivering beverages, we’re about crafting unforgettable
            experiences that make your parties pop, your gatherings glow, and your nights
            sparkle with joy!
          </h3>
        </div>
      </div>


        {/* Pricing */}

        <div className="flex flex-col sm:flex-row justify-center items-center w-full min-h-screen px-4 py-8">
          <div className="w-full sm:w-auto mb-6 sm:mb-0 sm:ml-24">
            <img
              src={party}
              alt="pricing"
              className="w-full sm:w-7xl h-[40vh] sm:h-[50vh] rounded-xl shadow-[4px_4px_10px_rgba(123,51,6,1)] object-cover"
            />
          </div>
          <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
            <div className="px-2 sm:ml-5 sm:mr-24 text-center sm:text-left text-base sm:text-xl font-semibold font-mono">
              <h3 className="text-xl sm:text-2xl font-sans font-medium leading-relaxed">
                From intimate gatherings to epic celebrations, we’ve got pricing that works for everyone.
                Choose from our curated packages or create your own custom order – because no two parties are the same!
              </h3>
            </div>
            <div className="mt-6 sm:mt-10 sm:ml-8 sm:mr-36">
              <button
                onClick={handleRedirect}
                className="w-32 sm:w-36 border border-amber-800 text-white bg-amber-900 font-medium px-3 py-2 rounded-2xl hover:cursor-pointer hover:bg-amber-700 hover:border-amber-950"
              >
                Order Now!
              </button>
            </div>
          </div>
        </div>


        {/* Contact Us */}

        <div className="flex flex-col sm:flex-row justify-evenly items-center w-full min-h-screen px-4 py-8">
          <div className="w-full sm:w-auto mb-6 sm:mb-0 sm:ml-24 sm:mr-3">
            <img
              src={contact}
              alt=""
              className="w-full sm:w-4xl h-[40vh] sm:h-[50vh] object-cover rounded-xl shadow-[4px_4px_10px_rgba(123,51,6,1)]"
            />
          </div>
          <div className="w-full sm:w-7xl flex justify-center items-center sm:ml-2 sm:mr-24 text-center sm:text-left text-base sm:text-xl font-semibold font-mono">
            <h3 className="text-xl sm:text-2xl font-sans font-medium leading-relaxed px-2">
              At <span className="font-bold">Hamsa</span>, we believe that every party deserves the perfect
              beverages. Whether you’re looking to order one of our fantastic party packs
              or want to create a custom order tailored to your unique celebration, we’re
              here to assist you every step of the way!
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
