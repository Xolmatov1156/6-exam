import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import {Messege, UpIcon, SupportIcon, SearchIcon,} from "../../assets/images/Icons";
import Button from "../../components/Button";
import CustomModal from "../../components/CustomModal";
import Input from "../../components/Input";
import Teacher_Bg from "../../assets/images/teacher_bg.png";
import { Link } from "react-router-dom";
import Update from "../../assets/images/update.svg";
import More from "../../assets/images/more.svg";
import Delete from '../../assets/images/delete.svg'

function Teachers() {
    const tableThead = [
        { id: 1, title: "Name" },
        { id: 2, title: "Subject" },
        { id: 3, title: "Class" },
        { id: 4, title: "Email Address" },
        { id: 5, title: "Gender" },
        { id: 6, title: "Actions" },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [teachers, setTeachers] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        const savedTeachers = JSON.parse(localStorage.getItem("teachers")) || [];
        setTeachers(savedTeachers);
    }, []);

    const handleLogoutClick = () => {
        setIsModalOpen(true);
    };

    const handleConfirmLogout = () => {
        localStorage.clear();
        window.location.reload();
        location.pathname = "/";
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const filteredTeachers = teachers.filter(teacher =>
        teacher.fullName.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <div className="w-full flex">
            <div className="w-[250px]">
                <Sidebar />
            </div>
            <div className="flex flex-col w-[1061px] ml-[58px] relative">
                <div className="flex justify-end mt-[31px] items-center gap-[38px]">
                    <Messege />
                    <Button
                        extraStyle="w-[70px] bg-transparent !text-[#424242] kumbh"
                        title="Log out"
                        onClick={handleLogoutClick}
                    />
                </div>
                <div className="flex justify-between h-[41px] mt-[22px]">
                    <h2 className="text-[#4F4F4F] text-[20px] kumbh font-medium">
                        Teachers
                    </h2>
                    <Link to="/teachers/addteachers">
                        <Button
                            extraStyle="!w-[118px] kumbh"
                            title="Add Teachers"
                        />
                    </Link>
                </div>
                <label className="h-[50px] flex bg-[#FCFAFA] items-center px-[16px] mt-[28px] rounded-[8px]">
                    <SearchIcon />
                    <Input
                        isRequired={true}
                        placeholder={"Search by name, subject, class, email, or gender"}
                        type={"text"}
                        name={"searchValue"}
                        extraStyle={"bg-[#FCFAFA]"}
                        value={searchValue}
                        onChange={handleSearchChange}
                    />
                </label>

                {filteredTeachers.length > 0 ? (
                    <table className="w-full mt-[30px]">
                        <thead>
                            <tr>
                                {tableThead.map((thead) => (
                                    <th
                                        key={thead.id}
                                        className="text-left p-2 "
                                    >
                                        {thead.title}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="">
                            {filteredTeachers.map((teacher, index) => (
                                <tr
                                    key={index}
                                    className="even:bg-[#EBF6FF80] "
                                >
                                    <td className="p-2 flex gap-[8px] items-center">
                                        <img
                                            src={teacher.imgSrc}
                                            className="w-[50px] h-[50px] object-cover rounded-md"
                                        />
                                        {teacher.fullName}
                                    </td>
                                    <td className="p-2">{teacher.subject}</td>
                                    <td className="p-2">{teacher.classes}</td>
                                    <td className="p-2">{teacher.email}</td>
                                    <td className="p-2">{teacher.gender}</td>
                                    <td className="p-2 flex items-center">
                                        <button className="flex items-center gap-[5px] w-[40px] h-[40px]"><img src={Update} alt="update" width={20} height={20} /><img src={Delete} className="ml-[5px]" alt="delete" width={20} height={20} /><img src={More} alt="more" width={30} height={30} /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="mt-[30px] w-full h-[419px] relative">
                        <img src={Teacher_Bg} alt="teacher_bg" />
                        <button className="absolute bottom-[35px] text-white flex items-center justify-center right-[19px] py-[19px] w-[181px] rounded-[35px] bg-[#152259] gap-[8px]">
                            <SupportIcon />
                            Support
                            <span className="ml-[30px]">
                                <UpIcon />
                            </span>
                        </button>
                    </div>
                )}

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

export default Teachers;
