import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { Messege, AddAdminIcon, AddClassesIcon, AddStudentsIcon, SupportIcon, UpIcon } from '../../assets/images/Icons';
import Button from '../../components/Button';
import CustomModal from '../../components/CustomModal';

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='w-full h-screen flex'>
      <div className='w-[250px]'><Sidebar /></div>
      <div className='flex flex-col w-full relative'>
        <div className='h-[95px] bg-[#FCFAFA] w-full flex'>
          <div className='flex flex-col relative text-[16px] w-[536px] font-normal kumbh ml-[127px]'>
            <h3 className='mt-[44px]'>Learn how to launch faster</h3>
            <h3 className='absolute pt-[60px]'>Watch our webinar for tips from our experts and get a limited time offer.</h3>
          </div>
          <div className='mt-[40px] ml-[291px]'><Messege /></div>
          <Button
            extraStyle='py-[10px] h-[40px] !w-[120px] mt-[34px] ml-[48px]'
            title='Log out'
            onClick={handleLogoutClick}
          />
        </div>
        <h2 className='ml-[127px] pt-[53px] text-[36px] kumbh text-[#4F4F4F] font-semibold'>Welcome to your dashboard, Udemy school</h2>
        <h3 className='ml-[232px] text-[24px] mt-[23px] kumbh font-semibold'>Uyo/school/@teachable.com</h3>
        <div className='w-[550px] flex ml-[216px] mt-[74px] gap-[20px]'>
          <AddAdminIcon />
          <div>
            <p className='kumbh text-[24px] font-medium'>Add other admins</p>
            <p className='kumbh text-[14px] font-normal'>Create rich course content and coaching products for your students.
              When you give them a pricing plan, they’ll appear on your site!</p>
          </div>
        </div>
        <div className='w-[550px] flex ml-[216px] mt-[51px] gap-[20px]'>
          <AddClassesIcon />
          <div>
            <p className='kumbh text-[24px] font-medium'>Add classes</p>
            <p className='kumbh text-[14px] font-normal'>Create rich course content and coaching products for your students.
              When you give them a pricing plan, they’ll appear on your site!</p>
          </div>
        </div>
        <div className='w-[550px] flex ml-[216px] mt-[37px] gap-[20px]'>
          <AddStudentsIcon />
          <div>
            <p className='kumbh text-[24px] font-medium'>Add students</p>
            <p className='kumbh text-[14px] font-normal'>Create rich course content and coaching products for your students.
              When you give them a pricing plan, they’ll appear on your site!</p>
          </div>
        </div>
        <button className='absolute bottom-[164px] text-white flex items-center justify-center right-[120px] py-[22px] w-[181px] rounded-[35px] bg-[#152259] gap-[8px]'>
          <SupportIcon />Support<span className='ml-[30px]'><UpIcon /></span>
        </button>
        
        {isModalOpen && (
          <CustomModal
            title="Chiqishni tasdiqlang"
            message="Haqiqatan ham tizimdan chiqmoqchimisiz?"
            onConfirm={handleConfirmLogout}
            onCancel={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
