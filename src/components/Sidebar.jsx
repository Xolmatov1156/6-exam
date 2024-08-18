import React from 'react'
import {Logo, DashboardIcon, StudentsIcon, BillingIcon, SettingsandProfileIcon, ExamsIcon, FeaturesIcon, TeachersIcon} from '../assets/images/Icons'
import { Link, NavLink } from 'react-router-dom'

function Sidebar() {
    document.title = "Dashboard"
  return (
    <div className='w-[250px] h-screen bg-[#152259]'>
        <div className='h-[170px] border-b-[1px] border-[#BDBDBD]'>
        <div className='pt-[26px] mx-auto w-[65px] scale-110'><Link to={'/'}><Logo/></Link>
        </div>
        <p className='text-white text-center mt-[22px] kumbh font-semibold text-[16px]'>Udemy Inter. school</p>
        </div>
        <div className='flex flex-col space-y-[8px] mx-auto w-[192px] mt-[16px]'>
        <NavLink to={'/'} className={'text-white w-[192px] py-[12px] px-[16px] kumbh rounded-[4px] flex items-center gap-[16px]'}><DashboardIcon/> Dashboard</NavLink>
        <NavLink to={'/teachers'} className={'text-white w-[192px] py-[12px] px-[16px] kumbh rounded-[4px] flex items-center gap-[16px]'}><TeachersIcon/> Teachers</NavLink>
        <NavLink to={'/students'} className={'text-white w-[192px] py-[12px] px-[16px] kumbh rounded-[4px] flex items-center gap-[16px]'}><StudentsIcon/>Students</NavLink>
        <NavLink to={'/billing'} className={'text-white w-[192px] py-[12px] px-[16px] kumbh rounded-[4px] flex items-center gap-[16px]'}><BillingIcon/> Billing</NavLink>
        <NavLink to={'/settings'} className={'text-white text-[14px] w-[192px] py-[12px] kumbh px-[16px] rounded-[4px] flex items-center gap-[16px]'}><SettingsandProfileIcon/> Settings and profile</NavLink>
        <NavLink to={'/exams'} className={'text-white w-[192px] py-[12px] px-[16px] kumbh rounded-[4px] flex items-center gap-[16px]'}><ExamsIcon/> Exams</NavLink>
        <div><NavLink to={'/features'} className={'text-white w-[192px] py-[12px] kumbh px-[16px] mt-[114px] rounded-[4px] flex items-center gap-[16px]'}><FeaturesIcon/> Features <span className='text-[12px] kumbh mt-[3px] bg-[#B9D7F1] rounded-lg font-semibold text-black px-2'>New</span></NavLink></div>
        </div>
    </div>
  )
}

export default Sidebar
