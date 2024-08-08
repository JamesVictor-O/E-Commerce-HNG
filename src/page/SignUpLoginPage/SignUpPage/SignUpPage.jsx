import React from 'react'
const handleSubmit = (e) => {
    
}
const SignUpPage = () => {
  return (
    <div className="h-screen md:h-[490px] flex flex-col pt-12 md:mt-0 md:justify-center w-full align-middle items-center">
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-[25px] underline font-serif font-medium">SignUp</h2>
        <p className="font-thin">SignUp with your email and password</p>
      </div>
      <form className="flex flex-col w-[70%] md:w-[20%]">
        {/* disaplay Name */}
        <div className="flex flex-col  items-start mb-5">
          <label className="mr-[10px] text-red-900 text-left md:text-right text-[14px] md:text-[15px]">
            Display Name{" "}
          </label>
          <input
            type="text"
            placeholder="input your email address"
            className=" p-[5px] outline-none border-black border-b h-6 md:h-7 appearance-none bg-transparent w-full"
          />
        </div>
        {/* Email */}
        <div className="flex flex-col items-start mb-5">
          <label className="flex-1 mr-[10px] text-red-900 text-left md:text-right text-[14px] md:text-[15px]">
            Email{" "}
          </label>
          <input
            type="email"
            placeholder="input your email address"
            className="flex-1 p-[5px] outline-none border-black border-b h-6 md:h-7 appearance-none bg-transparent w-full"
          />
        </div>

        {/* password */}
        <div className="flex flex-col  items-start mb-5">
          <label className="flex-1 mr-[10px] text-red-900 text-left md:text-right text-[14px] md:text-[15px] ">
            Password
          </label>
          <input
            type="password"
            placeholder="input your Password"
            className="flex-1 p-[5px] outline-none border-black border-b h-6 md:h-7 appearance-none bg-transparent w-full"
          />
        </div>
        {/* confirm password */}
        <div className="flex flex-col items-start ">
          <label className="flex-1 mr-[10px] text-red-900 text-left md:text-right text-[14px] md:text-[15px] ">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="input your Password"
            className="flex-1 p-[5px] outline-none border-black border-b h-6 md:h-7 appearance-none bg-transparent w-full"
          />
        </div>

        <button
          type="submit"
          className="mt-7 bg-red-300 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignUpPage
