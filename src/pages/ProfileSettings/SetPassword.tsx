import DefaultLayout from '@/layout/DefaultLayout';

export const SetPassword = () => {
  return (
    <DefaultLayout>
      <div className="w-full md:w-[43rem] mx-auto md:px-[3.5rem] py-12 bg-white border-0 text-black">
        <div className="flex-col justify-between items-center">
          {/* <div className="flex justify-center p-[1rem]">
            <img src="/logo.png" alt="" width={30} />
          </div> */}
          <h1 className="text-center text-2xl font-bold mb-[5rem] font-lato">
            SET PASSWORD
          </h1>
        </div>
        <form id="form" noValidate>
          <div className="relative mt-[3rem] -top-2  z-0 w-full mb-1">
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              required
              className="p-[1rem] block w-full mt-0 bg-transparent border-2 h-[3.5rem] focus:outline-none focus:ring-0 focus:border-black border-basecolor"
            />
            <label
              htmlFor="password"
              className="relative duration-300 -top-[5rem] -z-1 origin-0 text-gray-500"
            >
              Password
            </label>
            <span className="text-sm text-red-600 hidden" id="error">
              Password is required
            </span>
          </div>

          <button
            id="button"
            type="button"
            className="mb-[6.5rem] mt-[3.25rem] relative -top-4 w-full h-[3.5rem] font-semibold px-6 py-3 text-md transition-all duration-150 ease-linear shadow outline-none bg-basecolor hover:text-white hover:bg-black hover:shadow-lg focus:outline-none"
          >
            Set Password
          </button>
        </form>
      </div>
    </DefaultLayout>
  );
};
