import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import NonAuthenticatedLayout from '../../layout/NonAuthenticatedLayout';
import toast, { Toaster } from 'react-hot-toast';

export const WelcomeBack = () => {
  const notify2 = () =>
    toast("You're not Logged in, Please Enter your details to Log in");
  const loginForm = useRef<HTMLFormElement>(null);
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
    const username = loginForm.current?.username.value as string;
    const password = loginForm.current?.password.value as string;

    const userInfo = { username, password };
    handleLogin(userInfo);
    setLoading(false);
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState('');

  return (
    <NonAuthenticatedLayout>
      <div className="w-full h-full bg-no-repeat bg-cover bg-whiten p-[5rem] flex flex-col md:flex-row justify-between md:justify-end text-black px-[1rem] md:px-[7rem]">
        <Toaster />
        <div className="h-full flex flex-col justify-center mx-auto my-auto relative md:-left-[8rem] -top-[0.25rem]">
          <div>
            <img
              src="/GBAPO Logo.png"
              alt=""
              className="hidden md:block w-[318px] h-[317px] relative top-[1rem]"
            />
          </div>
          <h1 className="hidden md:block top-[2.5rem] font-bold text-5xl text-center relative">
            GBAPO NIGER
          </h1>
          <div className="flex justify-center">
            <img
              src="/GBAPO Logo.png"
              alt=""
              className="md:hidden relative top-[5rem] z-20 mb-[0.95rem] w-[3.85rem]"
            />
          </div>
        </div>
        <div className="bg-white md:h-fit p-[2rem] relative top-[0.25rem] md:pb-0 sm:p-12 md:px-[1.75rem]">
          <div className="md:w-[428px] mx-auto py-1 pb-[2.25rem] bg-inherit border-0">
            <h1 className="text-center text-2xl md:text-[2rem] font-[700] mt-[1.25rem] mb-[4rem] font-lato">
              WELCOME BACK!
            </h1>
            <form id="form" noValidate ref={loginForm} onSubmit={handleSubmit}>
              <div className="relative z-0 w-full -mb-[0.75rem]">
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="abusalmah20@gmail.com"
                  required
                  className="p-[1rem] font-[400] block w-full mt-0 bg-transparent border-2 h-[3.25rem] focus:outline-none focus:ring-0 focus:border-black border-emerald-700"
                />
                <label
                  htmlFor="name"
                  className="relative duration-300 font-[400] -top-[5.15rem] -z-1 origin-0 text-gray-500"
                >
                  Username
                </label>
                <span className="text-sm text-red-600 hidden" id="error">
                  Name is required
                </span>
              </div>
              <div className="relative mt-[3rem] -top-2 z-0 w-full -mb-[0.75rem]">
                <input
                  type="password"
                  name="password"
                  value={password}
                  minLength={5}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  className="p-[1rem] block w-full font-[400] mt-0 bg-transparent border-2 h-[3.25rem] focus:outline-none focus:ring-0 focus:border-black border-emerald-700"
                />
                <label
                  htmlFor="name"
                  className="relative duration-300 font-[400] -top-[5.15rem] -z-1 origin-0 text-gray-500"
                >
                  Password
                </label>
                <span className="text-sm text-red-600 hidden" id="error">
                  Name is required
                </span>
              </div>
              <div className="flex pl-[1rem] justify-start gap-x-[0.85rem] md:gap-x-[1.5rem] w-full">
                <a href="">
                  <p className="font-[400] text-sm md:text-base relative top-0 md:top-[1rem] mb-[1.5rem] md:mb-[2.5rem]">
                    Dont have an account?
                    <br />
                    <span className="text-emerald-700 font-bold">Sign up</span>
                  </p>
                </a>
                <a href="">
                  <p className="flex justify-end font-[400] text-sm md:text-base relative top-0 md:top-[1rem] mb-[1.5rem] md:mb-[2.5rem]">
                    Forgot password ?
                  </p>
                </a>
              </div>

              <div className="mb-5">
                <input
                  disabled={loading}
                  type="submit"
                  value={`${loading ? 'Loading...' : 'Login'}`}
                  className="h-[3.5rem] font-[700] disabled:bg-slate-800 disabled:text-slate-400 disabled:cursor-not-allowed hover:bg-black text-white hover:text-slate-700 mb-[5.5rem] md:-mb-[2rem] w-full px-6 py-3 text-md transition-all duration-150 ease-linear shadow outline-none bg-emerald-700 hover:shadow-lg focus:outline-none"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </NonAuthenticatedLayout>
  );
};

// {
//     "password": "12345",
//     "email": "jante.adebowale@gmail.com"
// }
