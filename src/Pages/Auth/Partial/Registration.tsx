import React, { useState } from 'react'
import { callPostApi } from '../../../asset/axios/axiosApi';
import { useNavigate } from 'react-router-dom';
import TextField from '../../../Component/TextField';

function Registration() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    company_name: '',
    company_contact: '',
    company_email: '',
    company_userId: '',
    password: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const registrater: any = await callPostApi('/user/create', formData);

    if (registrater?.status) {
      navigate('/')
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Register Your Company</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="company_name" className="block text-gray-700 font-bold mb-2">Company Name</label>
            <TextField
              id="company_name"
              name="company_name"
              type="text"
              value={formData.company_name}
              handleOnChange={handleChange}
              required={true}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="company_contact" className="block text-gray-700 font-bold mb-2">Company Contact</label>
            <TextField
              id="company_contact"
              name="company_contact"
              type="text"
              value={formData.company_contact}
              handleOnChange={handleChange}
              required={true}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="company_email" className="block text-gray-700 font-bold mb-2">Company Email</label>
            <TextField
              id="company_email"
              name="company_email"
              type="text"
              value={formData.company_email}
              handleOnChange={handleChange}
              required={true}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="company_userId" className="block text-gray-700 font-bold mb-2">Company User ID</label>
            <TextField
              id="company_userId"
              name="company_userId"
              type="text"
              value={formData.company_userId}
              handleOnChange={handleChange}
              required={true}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <TextField
              id="password"
              name="password"
              type="password"
              value={formData.password}
              handleOnChange={handleChange}
              required={true}
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Registration