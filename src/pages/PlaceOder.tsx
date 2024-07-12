// import React from 'react';

import DefaultLayout from '@/layout/DefaultLayout';

export const PlaceOder = () => {
  return (
    <>
      <DefaultLayout>
        <div className="w-full md:w-[55rem] h-fit mx-auto md:px-[3.5rem] py-12 bg-white border-0 rounded-md text-black">
          <div className="flex-col justify-between items-center">
            {/* <div className="flex justify-center p-[1rem]">
              <img src="/logo.png" alt="" width={50} />
            </div> */}
            <h1 className="text-center text-2xl font-bold mb-[5rem] font-lato">
              PLACE ORDER
            </h1>
          </div>

          <form id="form" noValidate>
            <div className="flex flex-col md:flex-row justify-center ">
              <div className="w-fit px-[1.5rem]">
                <div className="relative z-0 w-full mb-1">
                  <input
                    type="number"
                    name="Phone-number"
                    placeholder="Enter phone number"
                    required
                    className="p-[1rem] block w-[23rem] mt-0 bg-transparent border-2 h-[3.5rem] focus:outline-none focus:ring-0 focus:border-black border-basecolor"
                  />
                  <label
                    htmlFor="Phone-number"
                    className="relative duration-300 -top-[5rem] -z-1 origin-0 text-gray-500"
                  >
                    Phone Number
                  </label>
                  <span className="text-sm text-red-600 hidden" id="error">
                    Phone Number is required
                  </span>
                </div>
                <div className="relative z-0 w-full mt-10">
                  <input
                    type="text"
                    name="Receipient-name"
                    placeholder="Enter Receipient Name"
                    required
                    className="p-[1rem] block w-[23rem] mt-0 bg-transparent border-2 h-[3.5rem] focus:outline-none focus:ring-0 focus:border-black border-basecolor"
                  />
                  <label
                    htmlFor="Receipient-name"
                    className="relative duration-300 -top-[5rem] -z-1 origin-0 text-gray-500"
                  >
                    Receipient Name
                  </label>
                  <span className="text-sm text-red-600 hidden" id="error">
                    Receipient Name is required
                  </span>
                </div>
                <div className="relative mt-[3rem] -top-2  z-0 w-full mb-1">
                  <input
                    type="number"
                    name="reciepient-phone"
                    placeholder="Enter Reciepient Phone Number"
                    required
                    className="p-[1rem] block w-full mt-0 bg-transparent border-2 h-[3.5rem] focus:outline-none focus:ring-0 focus:border-black border-basecolor"
                  />
                  <label
                    htmlFor="Phone Number"
                    className="relative duration-300 -top-[5rem] -z-1 origin-0 text-gray-500"
                  >
                    Reciepient Phone Number
                  </label>
                  <span className="text-sm text-red-600 hidden" id="error">
                    Reciepient Phone Number is required
                  </span>
                </div>
                <div className="relative mt-[3rem] -top-2  z-0 w-full mb-1">
                  <input
                    type="text"
                    name="reciepient-address"
                    placeholder="Enter Reciepient address"
                    required
                    className="p-[1rem] block w-full mt-0 bg-transparent border-2 h-[3.5rem] focus:outline-none focus:ring-0 focus:border-black border-basecolor"
                  />
                  <label
                    htmlFor="reciepient-address"
                    className="relative duration-300 -top-[5rem] -z-1 origin-0 text-gray-500"
                  >
                    Reciepient Address
                  </label>
                  <span className="text-sm text-red-600 hidden" id="error">
                    Reciepient Address is required
                  </span>
                </div>
                <div className="relative mt-[3rem] -top-2  z-0 w-full mb-1">
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Select size"
                    required
                    className="p-[1rem] block w-full mt-0 bg-transparent border-2 h-[3.5rem] focus:outline-none focus:ring-0 focus:border-black border-basecolor"
                  />
                  <label
                    htmlFor="quantity"
                    className="relative duration-300 -top-[5rem] -z-1 origin-0 text-gray-500"
                  >
                    Quantity
                  </label>
                  <span className="text-sm text-red-600 hidden" id="error">
                    Quantity is required
                  </span>
                </div>
              </div>
              <div className="w-fit px-[1.5rem]">
                <div className="relative z-0 w-full mb-1">
                  <input
                    type="text"
                    name="Receipient-landmark"
                    placeholder="Enter Receipient Landmark"
                    required
                    className="p-[1rem] block w-[22rem] mt-0 bg-transparent border-2 h-[3.5rem] focus:outline-none focus:ring-0 focus:border-black border-basecolor"
                  />
                  <label
                    htmlFor="Receipient-landmark"
                    className="relative duration-300 -top-[5rem] -z-1 origin-0 text-gray-500"
                  >
                    Receipient Landmark
                  </label>
                  <span className="text-sm text-red-600 hidden" id="error">
                    Receipient Landmark is required
                  </span>
                </div>
                <div className="relative mt-[3rem] -top-2 z-0 w-full mb-1">
                  <select
                    name="Delivery"
                    required
                    className="block appearance-none w-full h-[3.5rem] border border-basecolor hover:border-gray-500 px-4 py-2 pr-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option className="p-[1.5rem] border-basecolor border-2">
                      Delivery
                    </option>
                    <option>Pick up</option>
                  </select>
                  <label
                    htmlFor="Delivery"
                    className="relative duration-300 -top-[5rem] -z-1 origin-0 text-gray-500"
                  >
                    Delivery
                  </label>
                  <div className="pointer-events-none absolute -top-4 inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M14.95 7.95l-3.95 3.95l-3.95-3.95l-.7.7l4.65 4.65l4.65-4.65l-.7-.7z" />
                    </svg>
                  </div>
                  <span className="text-sm text-red-600 hidden" id="error">
                    choice is required
                  </span>
                </div>
                <div className="relative mt-[3rem] -top-2  z-0 w-full mb-1">
                  <input
                    type="text"
                    name="ItemID"
                    placeholder="Enter Item ID"
                    required
                    className="p-[1rem] block w-full mt-0 bg-transparent border-2 h-[3.5rem] focus:outline-none focus:ring-0 focus:border-black border-basecolor"
                  />
                  <label
                    htmlFor="ItemID"
                    className="relative duration-300 -top-[5rem] -z-1 origin-0 text-gray-500"
                  >
                    Item ID
                  </label>
                  <span className="text-sm text-red-600 hidden" id="error">
                    Item ID is required
                  </span>
                </div>
                <div className="relative mt-[3rem] -top-2  z-0 w-full mb-1">
                  <select
                    name="Branch"
                    required
                    className="block appearance-none w-full h-[3.5rem]  border border-basecolor hover:border-gray-500 px-4 py-2 pr-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option className="p-[1.5rem] border-basecolor border-2">
                      Select Branch
                    </option>
                    <option>Pick up</option>
                    <option>Pick up</option>
                    <option>Pick up</option>
                  </select>
                  <label
                    htmlFor="Delivery"
                    className="relative duration-300 -top-[5rem] -z-1 origin-0 text-gray-500"
                  >
                    Branch
                  </label>
                  <div className="pointer-events-none absolute -top-4 inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M14.95 7.95l-3.95 3.95l-3.95-3.95l-.7.7l4.65 4.65l4.65-4.65l-.7-.7z" />
                    </svg>
                  </div>
                  <span className="text-sm text-red-600 hidden" id="error">
                    Branch is required
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center relative -top-[3rem]">
              <button
                id="button"
                type="button"
                className="mb-[6.5rem] mt-[4.25rem] w-full md:w-[90%] h-[3.5rem] font-semibold px-6 py-3 text-md transition-all duration-150 ease-linear shadow outline-none bg-basecolor hover:bg-black hover:text-white hover:shadow-lg focus:outline-none"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </DefaultLayout>
    </>
  );
};
