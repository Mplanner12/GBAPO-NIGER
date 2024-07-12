import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import NonAuthenticatedLayout from '../../layout/NonAuthenticatedLayout';
import toast, { Toaster } from 'react-hot-toast';

export const SignUp = () => {
  const notify2 = () =>
    toast("You're not Logged in, Please Enter your details to Log in");
  const signUpForm = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const { user, handleLogin } = useAuth();
  useEffect(() => {
    if (user) {
      navigate('/');
      console.log(user);
    }
    navigate('/auth/welcomeBack');
    console.log('not authenticated');
    notify2();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const username = signUpForm.current?.username.value as string;
    const password = signUpForm.current?.password.value as string;

    const userInfo = { username, password };
    handleLogin(userInfo);
    setLoading(false);
  };

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  //   const [firstName, setFirstName] = useState('');
  //   const [lastName, setLastName] = useState('');
  //   const [middlename, setMiddlename] = useState('');
  //   const [bvn, setBvn] = useState('');
  //   const [nin, setNin] = useState('');
  //   const [phone, setPhone] = useState('');
  //   const [captured, setCaptured] = useState(true);
  //   const [guarantored, setGuarantored] = useState(true);
  // const [error, setError] = useState('');

  return (
    <NonAuthenticatedLayout>
      <div className="w-full h-full bg-no-repeat bg-cover bg-whiten p-[5rem] flex flex-col md:flex-row justify-between md:justify-end text-black px-[1rem] md:px-[7rem]">
        <Toaster />
        <div className="h-full flex flex-col justify-center mx-auto my-auto relative md:-left-[8rem] -top-[0.25rem]">
          <div>
            <img
              src="/GBAPO NIGER.jpg"
              alt=""
              className="hidden md:block w-[318px] h-[317px] relative top-[1rem]"
            />
          </div>
          <h1 className="hidden md:block top-[2.5rem] font-bold text-5xl text-center relative">
            GBAPO NIGER
          </h1>
          <div className="flex justify-center">
            <img
              src="/GBAPO NIGER.jpg"
              alt=""
              className="md:hidden relative top-[5rem] z-20 mb-[0.95rem] w-[3.85rem]"
            />
          </div>
        </div>
        <div className="bg-white md:h-fit p-[2rem] relative top-[0.25rem] md:pb-0 sm:p-12 md:px-[1.75rem]">
          <div className="md:w-[428px] mx-auto py-1 pb-[2.25rem] bg-inherit border-0">
            <h1 className="text-center text-2xl md:text-[2rem] font-[700] mt-[1.25rem] mb-[4rem] font-lato">
              SIGN UP!
            </h1>
            <form id="form" noValidate ref={signUpForm} onSubmit={handleSubmit}>
              <div className="relative z-0 w-full -mb-[0.75rem]">
                <input
                  type="text"
                  name="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="username"
                  required
                  className="p-[1rem] font-[400] block w-full mt-0 bg-transparent border-2 h-[3.25rem] focus:outline-none focus:ring-0 focus:border-black border-emerald-700"
                />
                <label
                  htmlFor="username"
                  className="relative duration-300 font-[400] -top-[5.15rem] -z-1 origin-0 text-gray-500"
                >
                  User Name
                </label>
                <span className="text-sm text-red-600 hidden" id="error">
                  UserName is required
                </span>
              </div>
              <div className="relative mt-[3rem] -top-2 z-0 w-full -mb-[0.75rem]">
                <input
                  type="text"
                  name="email"
                  value={email}
                  minLength={5}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  required
                  className="p-[1rem] block w-full font-[400] mt-0 bg-transparent border-2 h-[3.25rem] focus:outline-none focus:ring-0 focus:border-black border-emerald-700"
                />
                <label
                  htmlFor="email"
                  className="relative duration-300 font-[400] -top-[5.15rem] -z-1 origin-0 text-gray-500"
                >
                  Email
                </label>
                <span className="text-sm text-red-600 hidden" id="error">
                  Email is required
                </span>
              </div>
              <div className="relative mt-[3rem] -top-2 z-0 w-full -mb-[0.75rem]">
                <input
                  type="password"
                  name="password"
                  value={password}
                  minLength={5}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  required
                  className="p-[1rem] block w-full font-[400] mt-0 bg-transparent border-2 h-[3.25rem] focus:outline-none focus:ring-0 focus:border-black border-emerald-700"
                />
                <label
                  htmlFor="password"
                  className="relative duration-300 font-[400] -top-[5.15rem] -z-1 origin-0 text-gray-500"
                >
                  Password
                </label>
                <span className="text-sm text-red-600 hidden" id="error">
                  Password is required
                </span>
              </div>
              <div className="flex pl-[1rem] justify-start gap-x-[0.85rem] md:gap-x-[1.5rem] w-full">
                <a href="">
                  <p className="flex justify-start font-[400] text-base relative top-0 md:top-[1rem] mb-[1.5rem] md:mb-[2.5rem]">
                    Dont have an account? Sign up
                  </p>
                </a>
                <a href="">
                  <p className="flex justify-end font-[400] text-base relative top-0 md:top-[1rem] mb-[1.5rem] md:mb-[2.5rem]">
                    Forgot password ?
                  </p>
                </a>
              </div>

              <div className="mb-5">
                <input
                  disabled={loading}
                  type="submit"
                  value={`${loading ? 'Loading...' : 'Sign Up'}`}
                  className="h-[3.5rem] font-[700] disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed hover:bg-black hover:text-white mb-[5.5rem] md:-mb-[2rem] w-full px-6 py-3 text-md transition-all duration-150 ease-linear shadow outline-none bg-emerald-700 hover:shadow-lg focus:outline-none"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </NonAuthenticatedLayout>
  );
};

{
  /* <div className="relative z-0 w-full -mb-[0.75rem]">
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="abusalmah20@gmail.com"
                  required
                  className="p-[1rem] font-[400] block w-full mt-0 bg-transparent border-2 h-[3.25rem] focus:outline-none focus:ring-0 focus:border-black border-emerald-700"
                />
                <label
                  htmlFor="firstName"
                  className="relative duration-300 font-[400] -top-[5.15rem] -z-1 origin-0 text-gray-500"
                >
                  firstName
                </label>
                <span className="text-sm text-red-600 hidden" id="error">
                  FirstName is required
                </span>
              </div> */
}
{
  /* <div className="relative z-0 w-full -mb-[0.75rem]">
                <input
                  type="text"
                  name="middleName"
                  value={middlename}
                  onChange={(e) => setMiddlename(e.target.value)}
                  placeholder="planner"
                  required
                  className="p-[1rem] font-[400] block w-full mt-0 bg-transparent border-2 h-[3.25rem] focus:outline-none focus:ring-0 focus:border-black border-emerald-700"
                />
                <label
                  htmlFor="middlename"
                  className="relative duration-300 font-[400] -top-[5.15rem] -z-1 origin-0 text-gray-500"
                >
                  MiddleName
                </label>
                <span className="text-sm text-red-600 hidden" id="error">
                  MiddleName is required
                </span>
              </div> */
}
{
  /* <div className="relative z-0 w-full -mb-[0.75rem]">
                <input
                  type="text"
                  name="LastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="shuaibu"
                  required
                  className="p-[1rem] font-[400] block w-full mt-0 bg-transparent border-2 h-[3.25rem] focus:outline-none focus:ring-0 focus:border-black border-emerald-700"
                />
                <label
                  htmlFor="lastName"
                  className="relative duration-300 font-[400] -top-[5.15rem] -z-1 origin-0 text-gray-500"
                >
                  LastName
                </label>
                <span className="text-sm text-red-600 hidden" id="error">
                  LastName is required
                </span>
              </div> */
}
{
  /* 
              <div className="relative mt-[3rem] -top-2 z-0 w-full -mb-[0.75rem]">
                <input
                  type="text"
                  name="NIN"
                  value={nin}
                  minLength={5}
                  onChange={(e) => setNin(e.target.value)}
                  placeholder="Enter NIN"
                  required
                  className="p-[1rem] block w-full font-[400] mt-0 bg-transparent border-2 h-[3.25rem] focus:outline-none focus:ring-0 focus:border-black border-emerald-700"
                />
                <label
                  htmlFor="NIN"
                  className="relative duration-300 font-[400] -top-[5.15rem] -z-1 origin-0 text-gray-500"
                >
                  NIN
                </label>
                <span className="text-sm text-red-600 hidden" id="error">
                  NIN is required
                </span>
              </div>
              <div className="relative mt-[3rem] -top-2 z-0 w-full -mb-[0.75rem]">
                <input
                  type="number"
                  name="Bvn"
                  value={bvn}
                  minLength={5}
                  onChange={(e) => setBvn(e.target.value)}
                  placeholder="Enter Bvn"
                  required
                  className="p-[1rem] block w-full font-[400] mt-0 bg-transparent border-2 h-[3.25rem] focus:outline-none focus:ring-0 focus:border-black border-emerald-700"
                />
                <label
                  htmlFor="Bvn"
                  className="relative duration-300 font-[400] -top-[5.15rem] -z-1 origin-0 text-gray-500"
                >
                  BVN
                </label>
                <span className="text-sm text-red-600 hidden" id="error">
                  BVN is required
                </span>
              </div> */
}
