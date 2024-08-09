import React, { useState } from 'react'
import { validate } from '../../../components/utilityFunctions/utility';

const SignUpPage = () => {
  const [details, setDetaile] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword:""
  })
  const [error, setError] = useState({})
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validateError = validate(details);
    if (Object.keys(validateError).length === 0) {
      console.log(details)
    } else {
      console.log(error)
      setError(validateError)
    }
  }
  
  const handleOnChange = (e) => {
  const {name,value}=e.target
    setDetaile({
      ...details,
      [name]:value
    })

  }
  return (
    <div className="h-screen md:h-[490px] flex flex-col pt-12 md:mt-0 md:justify-center w-full align-middle items-center mb-10">
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-[25px] underline font-serif font-medium">SignUp</h2>
        <p className="font-thin">SignUp with your email and password</p>
      </div>
      {/* form */}
      <form className="flex flex-col w-[70%] md:w-[25%]" onSubmit={handleSubmit}>
        {/* disaplay Name */}
        <div className="flex flex-col  items-start mb-5">
          <label className="mr-[10px] text-red-900 text-left md:text-right text-[14px] md:text-[15px]">
            Display Name{" "}
          </label>
          <input
            name='displayName'
            onChange={handleOnChange}
            value={details.displayName}
            type="text"
            placeholder="input your user Display name"
            className=" p-[5px] outline-none border-black border-b h-6 md:h-7 appearance-none bg-transparent w-full"
          />
          {error.displayName && <span className='text-red-800'>{error.displayName }</span>}
        </div>
        {/* Email */}
        <div className="flex flex-col items-start mb-5">
          <label className="flex-1 mr-[10px] text-red-900 text-left md:text-right text-[14px] md:text-[15px]">
            Email{" "}
          </label>
          <input
            onChange={handleOnChange}
            name='email'
            value={details.email}
            type="email"
            placeholder="input your email address"
            className="flex-1 p-[5px] outline-none border-black border-b h-6 md:h-7 appearance-none bg-transparent w-full"
          />
           {error.email && <span className='text-red-800'>{error.email }</span>}
        </div>

        {/* password */}
        <div className="flex flex-col  items-start mb-5">
          <label className="flex-1 mr-[10px] text-red-900 text-left md:text-right text-[14px] md:text-[15px] ">
            Password
          </label>
          <input
            onChange={handleOnChange}
            value={details.password}
            name='password'
            type="password"
            placeholder="input Password"
            className="flex-1 p-[5px] outline-none border-black border-b h-6 md:h-7 appearance-none bg-transparent w-full"
          />
           {error.password && <span className='text-red-800'>{error.password}</span>}
        </div>
        {/* confirm password */}
        <div className="flex flex-col items-start ">
          <label className="flex-1 mr-[10px] text-red-900 text-left md:text-right text-[14px] md:text-[15px] ">
            Confirm Password
          </label>
          <input
            onChange={handleOnChange}
            value={details.confirmPassword}
            name='confirmPassword'
            type="password"
            placeholder="confirm your Password"
            className="flex-1 p-[5px] outline-none border-black border-b h-6 md:h-7 appearance-none bg-transparent w-full"
          />
           {/* {error.confirmPassword && <span className='text-red-800'>{error.confirmPassword}</span>} */}
        </div>

        <button
          type="submit"
          className="mt-7 bg-red-300 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpPage
