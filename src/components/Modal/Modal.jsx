import React from "react";

function Modal({closeModal}){
    return(
        <>
            <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-95 flex justify-center items-center z-10">
                <div className="flex flex-col justify-center items-center bg-amber-300 px-12 py-16 rounded-xl">
                    
                    <div className="">
                        <h3 className="text-black text-2xl">Thank you for reaching out.</h3>
                        <h3 className="text-black text-2xl"> Our team will get in touch with you shortly.</h3>
                    </div>

                    <div className="mt-8 mb-6">
                        <h3 className="text-[80px]">🍻</h3>
                    </div>

                    <div>
                        <button 
                            className="border border-amber-600 bg-amber-950 text-white px-4 py-2 rounded-lg hover:cursor-pointer hover:border-amber-950 hover:bg-amber-700"
                            onClick={()=>{closeModal(false)}}
                        >
                            Cheers!
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Modal;