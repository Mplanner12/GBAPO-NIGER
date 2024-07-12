import DefaultLayout from '@/layout/DefaultLayout';
import { useAuth } from '../utils/AuthContext';
import { useForm } from 'react-hook-form';

export const AddTerminal = () => {
  const { AddNewTerminal } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  function onSubmit(data: any) {
    console.log(data);
    AddNewTerminal(data);
    reset();
  }

  return (
    <DefaultLayout>
      <div className="w-full md:w-[43rem] mx-auto md:px-[3.5rem] py-12 bg-white border-0 text-black">
        <div className="flex-col justify-between items-center">
          {/* <div className="flex justify-center p-[1rem]">
    <img src="/logo.png" alt="" width={30} />
       </div> */}
          <h1 className="text-center text-2xl font-bold mb-[5rem] font-lato">
            ADD TERMINAL
          </h1>
        </div>
        <form id="form" noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="relative z-0 w-full mb-1">
            <input
              {...register('serialNumber', {
                required: 'Serial number is required',
              })}
              type="number"
              name="serialNumber"
              placeholder="Enter Serial number"
              className="p-[1rem] block w-full mt-0 bg-transparent border-2 h-[3.5rem] focus:outline-none focus:ring-0 focus:border-black border-basecolor"
            />
            {errors.serialNumber && (
              <p className="text-sm text-red-600 hidden" id="error">
                {`${errors.serialNumber.message}`}
              </p>
            )}
            <label
              htmlFor="serialNumber"
              className="relative duration-300 -top-[5.25rem] -z-1 origin-0 text-gray-500"
            >
              Serial number
            </label>
          </div>
          <div className="relative mt-[3rem] -top-2  z-0 w-full mb-1">
            <input
              {...register('imei', {
                required: 'Imei number is required',
              })}
              type="number"
              name="imei"
              placeholder="Enter IMEI"
              className="p-[1rem] block w-full mt-0 bg-transparent border-2 h-[3.5rem] focus:outline-none focus:ring-0 focus:border-black border-basecolor"
            />
            {errors.imei && (
              <p className="text-red-500 -mb-3">{`${errors.imei.message}`}</p>
            )}
            <label
              htmlFor="imei"
              className="relative duration-300 -top-[5.25rem] -z-1 origin-0 text-gray-500"
            >
              IMEI
            </label>
          </div>
          <div className="relative mt-[3rem] -top-2  z-0 w-full mb-1">
            <input
              {...register('branchId', {
                required: 'branchId is required',
              })}
              type="text"
              name="branchId"
              placeholder="Enter Branch ID"
              className="p-[1rem] block w-full mt-0 bg-transparent border-2 h-[3.5rem] focus:outline-none focus:ring-0 focus:border-black border-basecolor"
            />
            {errors.branchId && (
              <p className="text-red-500 -mb-3">{`${errors.branchId.message}`}</p>
            )}
            <label
              htmlFor="branchId"
              className="relative duration-300 -top-[5.25rem] -z-1 origin-0 text-gray-500"
            >
              Branch ID
            </label>
          </div>

          <div className="flex justify-center mt-2 relative -top-[3rem]">
            <input
              disabled={isSubmitting}
              id="button"
              type="submit"
              value={isSubmitting ? 'Adding branch...' : 'Add Branch'}
              className="mb-[6.5rem] mt-[4.25rem] w-full font-semibold px-6 py-3 text-md transition-all duration-150 ease-linear shadow outline-none bg-basecolor  hover:bg-black text-black hover:text-white hover:shadow-lg focus:outline-none"
            />
          </div>
        </form>
      </div>
    </DefaultLayout>
    // <DefaultLayout>
    //   <div className="w-full md:w-[43rem] mx-auto px-[1rem] md:px-[3.5rem] py-12 bg-white border-0 text-black">
    //     <div className="flex-col justify-between items-center">
    //       {/* <div className="flex justify-center p-[1rem]">
    //       <img src="/logo.png" alt="" width={30} />
    //       </div> */}
    //       <h1 className="text-center text-2xl font-bold mb-[5rem] font-lato">
    //         ADD TERMINAL
    //       </h1>
    //     </div>
    //     <form id="form" noValidate onSubmit={handleSubmit(onSubmit)}>
    //       <div className="relative mt-[3rem] -top-2  z-0 w-full mb-1">
    //         <input
    //           {...register('serialNumber', {
    //             required: 'Serial number is required',
    //           })}
    //           type="number"
    //           name="serialNumber"
    //           placeholder="Enter Serial number"
    //           className="p-[1rem] block w-full mt-0 bg-transparent border-2 h-[3.5rem] focus:outline-none focus:ring-0 focus:border-black border-basecolor"
    //         />
    //         {errors.serialNo && (
    //           <p className="text-sm text-red-600 hidden" id="error">
    //             {`${errors.serialNo.message}`}
    //           </p>
    //         )}
    //         <label
    //           htmlFor="serialNumber"
    //           className="relative duration-300 -top-[5.25rem] -z-1 origin-0 text-gray-500"
    //         >
    //           Serial number
    //         </label>
    //       </div>
    //       <div className="relative mt-[3rem] -top-2  z-0 w-full mb-1">
    //         <input
    //           {...register('imei', {
    //             required: 'Imei number is required',
    //           })}
    //           type="number"
    //           name="imei"
    //           placeholder="Enter IMEI"
    //           className="p-[1rem] block w-full mt-0 bg-transparent border-2 h-[3.5rem] focus:outline-none focus:ring-0 focus:border-black border-basecolor"
    //         />
    //         {errors.imei && (
    //           <p className="text-red-500 -mb-3">{`${errors.imei.message}`}</p>
    //         )}
    //         <label
    //           htmlFor="imei"
    //           className="relative duration-300 -top-[5.25rem] -z-1 origin-0 text-gray-500"
    //         >
    //           IMEI
    //         </label>
    //       </div>
    //       <div className="relative mt-[3rem] -top-2  z-0 w-full mb-1">
    //         <input
    //           {...register('branch', {
    //             required: 'Branch ID is required',
    //           })}
    //           type="string"
    //           name="branchId"
    //           placeholder="Enter Branch ID"
    //           className="p-[1rem] block w-full mt-0 bg-transparent border-2 h-[3.5rem] focus:outline-none focus:ring-0 focus:border-black border-basecolor"
    //         />
    //         {errors.branchId && (
    //           <p className="text-red-500 -mb-3">
    //             {' '}
    //             {`${errors.branchId.message}`}
    //           </p>
    //         )}
    //         <label
    //           htmlFor="branchId"
    //           className="relative duration-300 -top-[5.25rem] -z-1 origin-0 text-gray-500"
    //         >
    //           Branch ID
    //         </label>
    //       </div>

    //       <div className="flex justify-center mt-2 relative -top-[3rem]">
    //         <input
    //           disabled={isSubmitting}
    //           id="button"
    //           type="submit"
    //           value={isSubmitting ? 'Adding Terminal...' : 'Add Terminal'}
    //           className="mb-[6.5rem] mt-[4.25rem] w-full font-semibold px-6 py-3 text-md transition-all duration-150 ease-linear shadow outline-none bg-basecolor  hover:bg-black text-black hover:text-white hover:shadow-lg focus:outline-none"
    //         />
    //       </div>
    //     </form>
    //   </div>
    // </DefaultLayout>
  );
};
