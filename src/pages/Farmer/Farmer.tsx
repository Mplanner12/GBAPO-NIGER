// import React from 'react'
import { useAuth } from '../utils/AuthContext';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { FcRadarPlot } from 'react-icons/fc';

export const Farmer = () => {
  const { fetchWithAuth } = useAuth();

  const [loading, setLoading] = useState(false);
  const [bvn, setBvn] = useState('');
  const [nin, setNin] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [captured, setCaptured] = useState('');
  const [mapped, setMapped] = useState('');
  const [clusterHead, setClusterHead] = useState('');

  const [data, setData] = useState<any>({});

  const { userNIN } = useParams();

  // console.log(userNIN);
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
      // console.log(rawdata);
      // setUserId(rawdata.data.id);
      setName(rawdata.data.name);
      setPhone(rawdata.data.phone);
      setBvn(rawdata.data.bvn);
      setNin(rawdata.data.nin);
      setCaptured(rawdata.data.captured);
      setMapped(rawdata.data.mapped);
      setClusterHead(rawdata.data.clusterHead);
      // console.log(data?.mapped);
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
      console.error('NIN is undefined. Unable to fetch user.');
    }
  }, [userNIN]);

  useEffect(() => {
    console.log('Mapped State:', mapped);
    console.log('Captured State:', captured);
    setCaptured(data.captured);
    setMapped(data.mapped);
  }, [mapped, captured]);

  return (
    <div className="w-full h-full bg-whiten overflow-hidden shadow rounded-lg border">
      <div className=" bg-slate-50 shadow-md w-full h-full px-4 py-5 sm:px-6 flex flex-col md:flex-row-reverse justify-center items-center">
        <div className="cursor-pointer w-full h-full flex justify-center items-center">
          <FaRegUserCircle size={100} color="grey" />
        </div>
        {/* <img src="" /> */}
        <div className="w-full flex flex-col justify-center items-center">
          <h3 className="w-full text-center text-2xl md:text-3xl font-bold leading-6 text-emerald-700">
            Farmer Details
          </h3>
          {/* <p className="w-full text-center mt-1 max-w-2xl text-sm text-black">
            Information about the Farmer.
          </p> */}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="px-[0.75rem] pr-[3rem] md:px-[3rem] py-5 sm:p-0 flex-1">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 border-b-2 md:border-b-0 border-gray-200 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-semibold text-black">Full name</dt>
              <dd className="mt-1 text-sm text-black sm:mt-0 sm:col-span-2 flex justify-between items-center">
                {name}
              </dd>
            </div>
            {/* <div className="py-3 border-b-2 border-gray-200 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-semibold text-black">
              {}Email address
            </dt>
            <dd className="mt-1 text-sm text-black sm:mt-0 sm:col-span-2">
              {} johndoe@example.com
            </dd>
          </div> */}
            <div className="py-3 border-b-2 border-gray-200 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-semibold text-black">Phone Number</dt>
              <dd className="mt-1 text-sm text-black sm:mt-0 sm:col-span-2">
                {phone}
              </dd>
            </div>
            <div className="py-3 border-b-2 border-gray-200 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-semibold text-black">Cluster Head</dt>
              <dd className="mt-1 text-sm text-black sm:mt-0 sm:col-span-2">
                {clusterHead !== (undefined || null || '')
                  ? clusterHead
                  : 'N/A'}
              </dd>
            </div>
            <div className="py-3 border-b-2 border-gray-200 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-semibold text-black">NIN</dt>
              <dd className="mt-1 text-sm text-black sm:mt-0 sm:col-span-2">
                {nin}
              </dd>
            </div>
            <div className="py-3 border-b-2 border-gray-200 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-semibold text-black">BVN</dt>
              <dd className="mt-1 text-sm text-black sm:mt-0 sm:col-span-2">
                {bvn}
              </dd>
            </div>
            {/* <div className="py-3 border-b-2 border-gray-200 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-semibold text-black">MAPPED</dt>
              <dd className="mt-1 text-sm text-black sm:mt-0 sm:col-span-2">
                {mapped}
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-semibold text-black">CAPTURED</dt>
              <dd className="mt-1 text-sm text-black sm:mt-0 sm:col-span-2">
                {captured}
              </dd>
            </div> */}
          </dl>
        </div>
        <div className="w-fit h-fit px-[1.5rem] md:px-[8rem] flex flex-col justify-start items-center">
          <h1 className="text-2xl py-[1.5rem] -mt-[1rem] font-semibold text-emerald-700 ">
            Plot
          </h1>
          <iframe
            src="/jante/index.html"
            width="600"
            height="400"
            title="Example"
            className="bg-red-900"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Farmer;
