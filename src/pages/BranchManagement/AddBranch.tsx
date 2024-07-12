import DefaultLayout from '@/layout/DefaultLayout';
import { useAuth } from '../utils/AuthContext';
import { useForm } from 'react-hook-form';

export const AddBranch = () => {
  const { AddNewBranch } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  function onSubmit(data: any) {
    console.log(data);
    AddNewBranch(data);
    reset();
  }

  return (
    <DefaultLayout>
      <div className="w-full md:w-[43rem] mx-auto md:px-[3.5rem] py-12 bg-white border-0 text-black">
        <div className="flex-col justify-between items-center">
          {/* <div className="flex justify-center p-[1rem]">
            <img src="/logo.png" alt="" width={30} />
          </div> */}
          <h1 className="text-center text-2xl font-bold mb-[4.5rem] font-lato">
            ADD BRANCH
          </h1>
        </div>
        <form id="form" noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="relative z-0 w-full mb-1">
            <input
              {...register('name', { required: 'Name is required' })}
              type="text"
              name="name"
              placeholder="Enter Branch Name"
              className="p-[1rem] block w-full mt-0 bg-transparent border-2 h-[3rem] focus:outline-none focus:ring-0 focus:border-black border-basecolor"
            />
            {errors.name && (
              <p className="text-red-500">{`${errors.name.message}`}</p>
            )}
            {!errors.name && (
              <label
                htmlFor="Branch name"
                className="relative duration-300 -top-[4.85rem] -z-1 origin-0 text-gray-500"
              >
                Branch Name
              </label>
            )}
          </div>
          <div className="relative mt-[3rem] -top-2  z-0 w-full mb-1">
            <input
              {...register('address', { required: 'Address is required' })}
              type="text"
              name="address"
              placeholder="Enter Branch Address"
              className="p-[1rem] block w-full mt-0 bg-transparent border-2 h-[3rem] focus:outline-none focus:ring-0 focus:border-black border-basecolor"
            />
            {errors.address && (
              <p className="text-red-500">{`${errors.address.message}`}</p>
            )}
            {!errors.address && (
              <label
                htmlFor="Branch ID"
                className="relative duration-300 -top-[4.85rem] -z-1 origin-0 text-gray-500"
              >
                Branch Address
              </label>
            )}
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
  );
};
