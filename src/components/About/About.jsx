import React from "react";
import sunset from "../../assets/Sunset.jpg"
import drinks from "../../assets/drinks.jpg"
import celebration from "../../assets/celebration.jpg"
import { useNavigate } from 'react-router-dom'

function About(){

    const navigate = useNavigate();

    const handleRedirect = ()=>{
        navigate("/pricing");
    };

    return(<>
        <div className="bg-yellow-300 w-full min-h-screen font-sans">

            <div className="flex justify-center">
                <h1 className="ml-2 text-[12px] sm:text-2xl mt-18"> Welcome to <span className="font-bold">HAMSA</span> where every sip is a celebration and every bottle tells a story! </h1>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center w-full min-h-screen p-4">
                <div className="lg:ml-2 w-full lg:w-1/2 flex justify-center">
                    <img 
                    className="w-full lg:w-[600px] rounded-xl h-[50vh] object-cover shadow-lg" 
                    src={sunset} 
                    alt="Sunset" 
                    />
                </div>
                <div className="flex flex-col justify-center text-lg leading-relaxed max-w-lg p-6 lg:p-0">
                    <p className="mb-4">
                    We’re not just about delivering beverages, we’re about crafting unforgettable experiences that make your parties pop, your gatherings glow, and your nights sparkle with joy!
                    </p>    
                    <p className="mb-4">
                    As the sun sets and laughter fills the air, make sure your drinks are just as great as the company. 
                    </p>
                    <p>
                    Whether it's a backyard BBQ, a birthday party, or a cozy gathering, we have a wide selection of craft beers, refreshing ales, and delicious beverages. 
                    Find the perfect drink for every occasion!
                    </p>
                </div>
            </div>        
            <div className="flex flex-col lg:flex-row justify-center items-center w-full min-h-screen p-4">

                <div className="lg:ml-2 w-full lg:w-1/2 flex justify-center">   
                    <img
                        className="w-full lg:w-[600px] rounded-xl h-[50vh] object-cover shadow-lg"  
                        src={drinks} 
                        alt="Drinks" 
                    />
                </div>
                <div className="flex flex-col justify-center text-lg leading-relaxed max-w-lg p-6 lg:p-0">    
                    <p className="mb-4">
                        At Hamsa, we believe that good vibes deserve great drinks. 
                    </p>
                    <p>
                        That’s why we’ve curated a dizzying array of flavors that will tickle your taste buds and leave you craving more. 
                    </p>            
                </div>

            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center w-full min-h-screen p-4">

                <div className="lg:ml-2 w-full lg:w-1/2 flex justify-center">
                    <img 
                        className="w-full lg:w-[600px] rounded-xl h-[50vh] object-cover shadow-lg" 
                        src={celebration} 
                        alt="Celebration" 
                    />
                </div>
                <div className="flex flex-col justify-center text-lg leading-relaxed max-w-lg p-6 lg:p-0">
                    <p className="mb-4">
                    We are not just about drinks, we are about the moments that matter. 
                    </p>
                    <p className="mb-4">
                    Every gathering is a chance to make lasting memories.
                    </p> 
                    <p>
                    Our goal is to make ordering easy just a few clicks, and you’ll have everything you need for an unforgettable celebration!
                    </p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-full min-h-[40vh] px-4 py-10 text-center font-medium text-base sm:text-[16px]">
                {/* Paragraph 1 */}
                <p className="w-full sm:w-7xl mb-4">
                    So go ahead, dive into our world of flavor and fun! Let us be your trusted partner in partying – because with <span className="font-semibold">Hamsa</span>, every event is a chance to toast to life’s little joys.
                </p>

                {/* Paragraph 2 */}
                <p className="w-full sm:w-7xl">
                    Cheers to unforgettable nights and endless laughter!
                </p>

                {/* Button */}
                <button
                    onClick={handleRedirect}
                    className="mt-8 sm:mt-10 mb-12 border border-amber-900 px-4 py-2 rounded-2xl bg-amber-900 text-white hover:bg-amber-700 hover:border-amber-950 hover:cursor-pointer"
                >
                    Celebrate Now!
                </button>
            </div>
        </div>
    </>
)
}

export default About;