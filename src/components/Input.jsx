import React from 'react'

function Input({type, placeholder, name, extraStyle, ref, isRequired, onChange}) {
  return (
    <input className={`${extraStyle} w-[248px] p-[13px] outline-none text-[14px] rounded-[4px]`} type={type} ref={ref} onChange={onChange}  required={isRequired} placeholder={placeholder} name={name} />
  )
}

export default Input