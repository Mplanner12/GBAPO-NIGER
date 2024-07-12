import DefaultLayout from '@/layout/DefaultLayout';
import { useAuth } from '../utils/AuthContext';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const UpdateFarmer = () => {
  const { updateUser, fetchWithAuth } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  async function onSubmit(data: any) {
    updateUser(data);
    console.log(data);
    reset();
  }

  const [loading, setLoading] = useState(false);
  const [bvn, setBvn] = useState('');
  const [nin, setNin] = useState('');
  const [firstname, setFirstName] = useState('');
  const [middlename, setMiddleName] = useState('');
  const [lastname, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [captured, setCaptured] = useState('');
  const [mapped, setMapped] = useState('');
  const [clusterHead, setClusterHead] = useState('');

  const [data, setData] = useState('');

  const { userNIN } = useParams();

  console.log(userNIN);
  async function fetchUser() {
    try {
      const response = await fetchWithAuth(
        `https://endpoint.kadunaelectrictms.com:8282/api/farmers/${userNIN}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const rawdata = await response.json();
      setData(rawdata.data);
      console.log(rawdata);
      // setUserId(rawdata.data.id);
      setFirstName(rawdata.data.firstname);
      setMiddleName(rawdata.data.middlename);
      setLastName(rawdata.data.lastname);
      setPhone(rawdata.data.phone);
      setBvn(rawdata.data.bvn);
      setNin(rawdata.data.nin);
      setCaptured(rawdata.data.captured);
      setMapped(rawdata.data.mapped);
      setClusterHead(rawdata.data.clusterHead);
      console.log(data);
    } catch (error) {
      // setError('An error occurred. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (userNIN) {
      fetchUser();
    } else {
      // Handle the case where NIN is undefined
      console.error('NIN is undefined. Unable to fetch user.');
      // You might want to display an error message to the user
    }
  }, [userNIN]);

  return (
    <>
      <DefaultLayout>
        <div className="flex flex-col justify-center md:w-[32rem] h-fit mx-auto px-[1.5rem] md:px-[2.5rem] text-black py-12 bg-white border-0">
          <div className="flex-col justify-between items-center">
            <h1 className="text-center text-2xl text-black font-bold mb-[3.5rem] font-lato">
              UPDATE FARMER INFO
            </h1>
          </div>

          <form
            id="form"
            noValidate
            className="flex flex-col justify-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full md:px-[1.5rem]">
              <div className="relative z-0 w-full mt-6 mb-1">
                <input
                  {...register('firstname', {
                    required: 'First Name is required',
                  })}
                  value={firstname}
                  type="text"
                  name="firstname"
                  placeholder="Adams"
                  required
                  className="p-[1rem] w-full block  mt-0 bg-transparent border-2 h-[2.5rem] focus:outline-none focus:ring-0 focus:border-black border-emerald-600"
                />
                {errors.firstname && (
                  <p className="text-red-500 text-sm">{`${errors.firstname.message}`}</p>
                )}
                <label
                  htmlFor="firstname"
                  className="relative duration-300 -top-[4.35rem] -z-1 origin-0 text-gray-500"
                >
                  First Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-[1.25rem] mt-6">
                <input
                  {...register('middlename', {
                    required: 'Middle Name is required',
                  })}
                  value={middlename}
                  type="text"
                  name="middlename"
                  placeholder="Hassan"
                  required
                  className="p-[1rem] w-full block mt-0 bg-transparent border-2 h-[2.5rem] focus:outline-none focus:ring-0 focus:border-black border-emerald-600"
                />
                {errors.middlename && (
                  <p className="text-red-500 text-sm">{`${errors.middlename.message}`}</p>
                )}
                <label
                  htmlFor="middlename"
                  className="relative duration-300 -top-[4.35rem] -z-1 origin-0 text-gray-500"
                >
                  Middle Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-1">
                <input
                  {...register('lastname', {
                    required: 'Last Name is required',
                  })}
                  value={lastname}
                  type="text"
                  name="lastname"
                  placeholder="Taiwo"
                  className="p-[1rem] w-full block mt-0 bg-transparent border-2 h-[2.5rem] focus:outline-none focus:ring-0 focus:border-black border-emerald-600"
                />
                {errors.lastname && (
                  <p className="text-red-500 text-sm">{`${errors.lastname.message}`}</p>
                )}
                <label
                  htmlFor="lastname"
                  className="relative duration-300 -top-[4.35rem] -z-1 origin-0 text-gray-500"
                >
                  Last Name
                </label>
              </div>
              <div className="relative z-0 w-full mt-6 mb-1">
                <input
                  {...register('nin', {
                    required: 'NIN is required',
                  })}
                  value={nin}
                  type="text"
                  name="nin"
                  placeholder="Adams"
                  required
                  className="p-[1rem] w-full block  mt-0 bg-transparent border-2 h-[2.5rem] focus:outline-none focus:ring-0 focus:border-black border-emerald-600"
                />
                {errors.nin && (
                  <p className="text-red-500 text-sm">{`${errors.nin.message}`}</p>
                )}
                <label
                  htmlFor="nin"
                  className="relative duration-300 -top-[4.35rem] -z-1 origin-0 text-gray-500"
                >
                  NIN
                </label>
              </div>
              <div className="relative z-0 w-full mt-6 mb-1">
                <input
                  {...register('bvn', {
                    required: 'BVN is required',
                  })}
                  value={bvn}
                  type="text"
                  name="bvn"
                  placeholder="93747647484"
                  required
                  className="p-[1rem] w-full block  mt-0 bg-transparent border-2 h-[2.5rem] focus:outline-none focus:ring-0 focus:border-black border-emerald-600"
                />
                {errors.bvn && (
                  <p className="text-red-500 text-sm">{`${errors.bvn.message}`}</p>
                )}
                <label
                  htmlFor="bvn"
                  className="relative duration-300 -top-[4.35rem] -z-1 origin-0 text-gray-500"
                >
                  BVN
                </label>
              </div>
              <div className="relative mt-[2.25rem] -top-2  z-0 w-full mb-1">
                <input
                  {...register('phone', {
                    required: 'Phone Number is required',
                  })}
                  value={phone}
                  type="number"
                  name="phone"
                  placeholder="09030445778"
                  required
                  className="p-[1rem] w-full block mt-0 bg-transparent border-2 h-[2.5rem] focus:outline-none focus:ring-0 focus:border-black border-emerald-600"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{`${errors.phone.message}`}</p>
                )}
                <label
                  htmlFor="phone"
                  className="relative duration-300 -top-[4.35rem] -z-1 origin-0 text-gray-500"
                >
                  Phone Number
                </label>
              </div>
              <div className="relative mt-[2.25rem] -top-[1.5rem]  z-0 w-full mb-1">
                <select
                  {...register('captured', {
                    required: 'Captred status is required',
                  })}
                  value={captured}
                  name="captured"
                  className="block appearance-none w-full h-[2.5rem] border-emerald-600 border-2 hover:border-gray-500 px-4 py-2 pr-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value={''} disabled hidden>
                    Choose here
                  </option>
                  <option>true</option>
                  <option>false</option>
                </select>
                {errors.captured && (
                  <p className="text-red-500 text-sm">{`${errors.captured.message}`}</p>
                )}
                <label
                  htmlFor="captured"
                  className="relative duration-300 -top-[4.35rem] -z-1 origin-0 text-gray-500"
                >
                  Captured
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
              </div>
              <div className="relative mt-[1.25rem] -top-[1.5rem]  z-0 w-full mb-1">
                <select
                  {...register('mapped', {
                    required: 'Mapped status is required',
                  })}
                  value={mapped}
                  name="mapped"
                  className="block appearance-none w-full h-[2.5rem] border-emerald-600 border-2 hover:border-gray-500 px-4 py-2 pr-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value={''} disabled hidden>
                    Choose here
                  </option>
                  <option>true</option>
                  <option>false</option>
                </select>
                {errors.mapped && (
                  <p className="text-red-500 text-sm">{`${errors.mapped.message}`}</p>
                )}
                <label
                  htmlFor="mapped"
                  className="relative duration-300 -top-[4.35rem] -z-1 origin-0 text-gray-500"
                >
                  Mapped
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
              </div>
            </div>
            <div className="w-full md:px-[1.5rem] -mt-[1.5rem]">
              <div className="relative z-0 w-full mt-6">
                <input
                  {...register('clusterHead', {
                    required: 'Cluster Head is required',
                  })}
                  value={clusterHead}
                  type="text"
                  name="clusterHead"
                  placeholder="binko"
                  required
                  className="p-[1rem] w-full block mt-0 bg-transparent border-2 h-[2.5rem] focus:outline-none focus:ring-0 focus:border-black border-emerald-600"
                />
                {errors.clusterHead && (
                  <p className="text-red-500 text-sm">{`${errors.clusterHead.message}`}</p>
                )}
                <label
                  htmlFor="clusterHead"
                  className="relative duration-300 -top-[4.35rem] -z-1 origin-0 text-gray-500"
                >
                  cluster Head
                </label>
              </div>
            </div>
            <div className="flex justify-center relative -top-[3rem]">
              <input
                id="button"
                type="submit"
                value={isSubmitting ? 'Updating...' : 'Update'}
                className="mb-[6.5rem] mt-[4.25rem] w-full md:w-[90%] font-semibold px-6 py-3 text-md transition-all duration-150 ease-linear shadow outline-none bg-emerald-600  hover:bg-black text-black hover:text-white hover:shadow-lg focus:outline-none"
              />
            </div>
          </form>
        </div>
      </DefaultLayout>
    </>
  );
};
