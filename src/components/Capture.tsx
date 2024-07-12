// import React from 'react'
import DefaultLayout from '@/layout/DefaultLayout';
import { TbCapture } from 'react-icons/tb';

const Capture = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col justify-center items-center gap-y-[2rem] p-[2rem]">
        <div>
          <h1 className="text-teal-600 font-semibold">
            Click on the Icon below to capture the Farmer's details
          </h1>
        </div>
        <div className="w-full h-full flex justify-center items-center p-[2rem]">
          <TbCapture
            className="cursor-pointer after:cursor-progress"
            size={400}
            color="black"
          />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Capture;
