import React from 'react';

function CustomModal({ title, message, onConfirm, onCancel }) {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-6 rounded-md w-[400px]'>
        <h2 className='text-xl font-semibold mb-4'>{title}</h2>
        <p className='text-sm text-gray-600 mb-6'>{message}</p>
        <div className='flex justify-end gap-4'>
          <button
            className='bg-gray-200 px-4 py-2 rounded-md'
            onClick={onCancel}
          >
            Bekor Qilish
          </button>
          <button
            className='bg-red-500 text-white px-4 py-2 rounded-md'
            onClick={onConfirm}
          >
            Tasdiqlash
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomModal;
