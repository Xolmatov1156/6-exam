import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { TailSpin } from 'react-loader-spinner';

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Register";
  }, []);

  function handleRegisterForm(e) {
    e.preventDefault();

    const data = {
      email: e.target.email.value.trim().toLowerCase(),
      newLogin: e.target.login.value.trim().toLowerCase(),
      newPassword: e.target.password.value.trim().toLowerCase(),
    };

    setLoading(true);

    setTimeout(() => {
      window.localStorage.setItem('isRegistered', JSON.stringify(data));
      setLoading(false);
      navigate('/');
    }, 1500);
  }

  return (
    <div className='w-full h-[100vh] flex justify-center items-center bg-[#FCFAFA]'>
      <form onSubmit={handleRegisterForm} autoComplete='off'>
        <h1 className='kumbh font-semibold text-[36px] text-[#4F4F4F] text-center'>
          Welcome, Sign up
        </h1>
        <div className='w-[512px] h-[494px] mt-[53px] bg-[#FFFFFF]'>
          <h3 className='text-[#667085] pt-[72px] mx-auto inter font-medium text-[16px] w-[238px] text-center'>
            It is our great pleasure to have you on board!
          </h3>
          <div className='flex flex-col pt-[14px] w-[248px] mt-[34px] mx-auto'>
            <Input isRequired={true} placeholder={'Enter your Email'} type={'email'} name={'email'} extraStyle={'border-[1px] border-[#A7A7A7] '} />
            <Input isRequired={true} placeholder={'Create your Login'} type={'text'} name={'login'} extraStyle={'border-[1px] pt-[14px] border-[#A7A7A7] mt-[14px]'} />
            <Input isRequired={true} placeholder={'Create your Password'} type={'password'} name={'password'} extraStyle={'border-[1px] pt-[14px] border-[#A7A7A7] mt-[14px]'} />
            <Button
              title={loading ? <TailSpin visible={true} height="20" width="20" color="white" ariaLabel="tail-spin-loading" /> : "Sign up"}
              type={"submit"}
              extraStyle={'mt-[34px] flex justify-center items-center'}
              disabled={loading}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
