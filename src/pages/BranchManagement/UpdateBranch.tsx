import DefaultLayout from '@/layout/DefaultLayout';
import { useAuth } from '../utils/AuthContext';
import { useForm } from 'react-hook-form';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

export const UpdateBranch = () => {
  // const id = useParams();
  // const [branchDetails, setBranchDetails] = useState();
  // const [branchID, setBranchID] = useState(id);
  // const [branchName, setBranchName] = useState();
  // const [branchAddress, setBranchAddress] = useState();
  const { UpdateBranch } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  // useEffect(() => {
  //   const fetchBranches = async () => {
  //     const response = await fetchWithAuth(
  //       'http://185.4.176.195:8989/api/branches/' + id,
  //       {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       },
  //     );
  //     const rawdata = await response.json();
  //     const data = rawdata.data;
  //     setBranchDetails(data);
  //     console.log(branchDetails);
  //   };
  // }, [id]);

  function onSubmit(data: any) {
    console.log(data);
    UpdateBranch(data);
    reset();
  }

  return (
    <DefaultLayout>
      <div className="w-full md:w-[43rem] mx-auto md:px-[3.5rem] py-12 bg-white border-0 text-black">
        <div className="flex-col justify-between items-center">
          <h1 className="text-center text-2xl font-bold mb-[3.5rem] font-lato">
            UPDATE BRANCH
          </h1>
        </div>
        <form id="form" noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="relative z-0 w-full mb-1">
            <input
              {...register('id', {
                required: 'ID is required',
              })}
              type="text"
              name="id"
              // value={branchID}
              // onChange={(e) => setBranchID(e.target.value)}
              placeholder="54678-6487-abc4-46JTF"
              className="p-[1rem] block w-full mt-0 bg-transparent border-2 h-[3.5rem] focus:outline-none focus:ring-0 focus:border-black border-basecolor"
            />
            {errors.id && (
              <p className="text-sm text-red-600 hidden" id="error">
                {`${errors.id.message}`}
              </p>
            )}
            <label
              htmlFor="id"
              className="relative duration-300 -top-[5rem] -z-1 origin-0 text-gray-500"
            >
              ID
            </label>
          </div>
          <div className="relative mt-[3rem] -top-2  z-0 w-full mb-1">
            <input
              {...register('name', {
                required: 'Name is required',
              })}
              type="text"
              name="name"
              placeholder="Kubwa"
              className="p-[1rem] block w-full mt-0 bg-transparent border-2 h-[3.5rem] focus:outline-none focus:ring-0 focus:border-black border-basecolor"
            />
            {errors.name && (
              <p className="text-red-500 -mb-3">{`${errors.name.message}`}`</p>
            )}
            <label
              htmlFor="name"
              className="relative duration-300 -top-[5rem] -z-1 origin-0 text-gray-500"
            >
              Name
            </label>
          </div>
          <div className="relative mt-[3rem] -top-2  z-0 w-full mb-1">
            <input
              {...register('address', {
                required: 'Branch Address is required',
              })}
              type="text"
              name="address"
              placeholder="kubwa"
              className="p-[1rem] block w-full mt-0 bg-transparent border-2 h-[3.5rem] focus:outline-none focus:ring-0 focus:border-black border-basecolor"
            />
            {errors.address && (
              <p className="text-red-500 -mb-3">
                {`${errors.address.message}`}`
              </p>
            )}
            <label
              htmlFor="Branch addres"
              className="relative duration-300 -top-[5rem] -z-1 origin-0 text-gray-500"
            >
              Branch Address
            </label>
          </div>

          <div className="flex justify-center mt-2 relative -top-[3rem]">
            <input
              id="button"
              type="submit"
              value={isSubmitting ? 'Updating branch...' : 'Update Branch'}
              className="mb-[6.5rem] mt-[4.25rem] w-full font-semibold px-6 py-3 text-md transition-all duration-150 ease-linear shadow outline-none bg-basecolor  hover:bg-black text-black hover:text-white hover:shadow-lg focus:outline-none"
            />
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
};
