import DefaultLayout from '@/layout/DefaultLayout';

export const AddStock = () => {
  return (
    <DefaultLayout>
      <div className="md:w-[43rem] mx-auto px-[1rem] md:px-[3.5rem] py-12 bg-white border-0 text-black">
        <div className="flex-col justify-between items-center">
          {/* <div className="flex justify-center p-[1rem]">
            <img src="/logo.png" alt="" width={30} />
          </div> */}
          <h1 className="text-center text-2xl font-bold mb-[6rem] font-lato">
            ADD STOCK
          </h1>
        </div>
        <form id="form" noValidate>
          <div className="relative z-0 w-full mb-1">
            <input
              type="text"
              name="itemID"
              placeholder="Enter Item ID"
              required
              className="p-[1rem] block w-full mt-0 bg-transparent border-2 h-[3.5rem] focus:outline-none focus:ring-0 focus:border-black border-basecolor"
            />
            <label
              htmlFor="itemID"
              className="relative duration-300 -top-[5.35rem] -z-1 origin-0 text-gray-500"
            >
              Item ID
            </label>
            <span className="text-sm text-red-600 hidden" id="error">
              Item ID is required
            </span>
          </div>
          <div className="relative mt-[3rem] -top-2  z-0 w-full mb-1">
            <input
              type="number"
              name="quantity"
              placeholder="Enter quantity"
              required
              className="p-[1rem] block w-full mt-0 bg-transparent border-2 h-[3.5rem] focus:outline-none focus:ring-0 focus:border-black border-basecolor"
            />
            <label
              htmlFor="quantity"
              className="relative duration-300 -top-[5.35rem] -z-1 origin-0 text-gray-500"
            >
              Quantity
            </label>
            <span className="text-sm text-red-600 hidden" id="error">
              Branch Address is required
            </span>
          </div>

          <button
            id="button"
            type="button"
            className="mb-[0.5rem] md:mb-[2.5rem] mt-[1rem] md:mt-[2rem] w-full font-semibold px-6 py-3 text-md transition-all duration-150 ease-linear shadow outline-none bg-basecolor hover:bg-black hover:text-white hover:shadow-lg focus:outline-none"
          >
            Add Stock
          </button>
        </form>
      </div>
    </DefaultLayout>
  );
};
