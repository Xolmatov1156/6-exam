import React, { useContext, useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Context } from '../../context/Context';
import { Link } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { toast, Toaster } from "react-hot-toast";

function Login() {
  document.title = "Login";
  const { setToken } = useContext(Context);
  const [error, setError] = useState({ login: false, password: false });
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const { loginValue, passwordValue } = e.target.elements;

    const isRegistered = JSON.parse(window.localStorage.getItem("isRegistered")) || {};

    const isLoginValid = 
      loginValue.value.trim().toLowerCase() === isRegistered.newLogin?.trim().toLowerCase() || 
      loginValue.value.trim().toLowerCase() === "nurillo";

    const isPasswordValid = 
      passwordValue.value.trim().toLowerCase() === isRegistered.newPassword?.trim().toLowerCase() || 
      passwordValue.value.trim().toLowerCase() === "123";

    setError({
      login: !isLoginValid && toast.error("Incorrect login!"),
      password: !isPasswordValid && toast.error("Incorrect password!"),
    });

    if (isLoginValid && isPasswordValid) {
      setLoading(true);
      toast.success('Welcome!')
      setTimeout(() => {
        setToken("login"); 
        setLoading(false);
      }, 1500);
    }
  }

  return (
    <div className='w-full h-[100vh] flex justify-center items-center bg-[#FCFAFA]'>
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit} autoComplete='off'>
        <h1 className='kumbh font-semibold text-[36px] text-[#4F4F4F]'>
          Welcome, Log into your account
        </h1>
        <div className='w-[512px] h-[382px] mt-[53px] bg-[#FFFFFF]'>
          <h3 className='text-[#667085] pt-[72px] mx-auto inter font-medium text-[16px] w-[238px] text-center'>
            It is our great pleasure to have you on board!
          </h3>
          <div className='flex flex-col pt-[14px] w-[248px] space-y-[14px] mx-auto'>
            <Input
              isRequired={true}
              placeholder={'Enter your Login'}
              type={'text'}
              name={'loginValue'}
              extraStyle={`border-[1px] border-[#A7A7A7] ${error.login ? "!border-red-600 !border" : ""}`}
            />
            <Input
              isRequired={true}
              placeholder={'Enter Password'}
              type={'password'}
              name={'passwordValue'}
              extraStyle={`border-[1px] pt-[14px] border-[#A7A7A7] ${error.password ? "!border-red-600 !border" : ""}`}
            />
            <Button 
              type="submit"
              disabled={loading} 
              extraStyle="flex justify-center items-center"
              title={
                loading ? (
                  <TailSpin
                    visible={true}
                    height="20"
                    width="20"
                    color="white"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                ) : (
                  "Login"
                )
              }
            />
            <Link className='text-sky-600 text-center' to={'/register'}>Sign Up</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
