import React, { useState } from "react";
import { callPostApi } from "../../../asset/axios/axiosApi";
import { useNavigate } from "react-router-dom";
import TextField from "../../../Component/TextField";
import { error } from "console";

function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    company_name: "",
    company_contact: "",
    company_email: "",
    password: "",
  });
  const [fieldErrors, setFieldErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFieldErrors({})
  };

  const isValidData = () => {
    let errors: any = {};
    if (!formData.company_name.trim()) {
      errors["company_name"] = "Company name is required";
    }

    if (!formData.company_email.trim()) {
      errors["company_email"] = "Company Email is required";
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const isEmail = emailRegex.test(formData.company_email);
      if (!isEmail) {
        errors["company_email"] = "Kindly enter valid company email";
      }
    }

    if (!formData.company_contact.trim()) {
      errors["company_contact"] = "Company Email is required";
    } else {
      const contextNumberRegex = /^\d{1,15}$/;
      const isValidContext = contextNumberRegex.test(formData.company_contact);
      if (!isValidContext) {
        errors["company_contact"] = "Kindly enter valid contect number";
      }
    }

    if (!formData.password.trim()) {
      errors["password"] = "Password is required";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const isError = isValidData();
    if (isError) {
      const registrater: any = await callPostApi("/user/create", formData);

      if (registrater?.data?.status) {
        navigate("/sign-in");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Register Your Company</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="company_name"
              className="block text-gray-700 font-bold mb-2"
            >
              Company Name
            </label>
            <TextField
              id="company_name"
              name="company_name"
              type="text"
              value={formData.company_name}
              handleOnChange={handleChange}
              required={true}
            />
            {fieldErrors.company_name && (<p className="pb-0 text-red-600">{fieldErrors?.company_name}</p>)}
          </div>
          <div className="mb-4">
            <label
              htmlFor="company_contact"
              className="block text-gray-700 font-bold mb-2"
            >
              Company Contact
            </label>
            <TextField
              id="company_contact"
              name="company_contact"
              type="text"
              value={formData.company_contact}
              handleOnChange={handleChange}
              required={true}
            />
            {fieldErrors.company_contact && (<p className="pb-0 text-red-600">{fieldErrors?.company_contact}</p>)}
          </div>
          <div className="mb-4">
            <label
              htmlFor="company_email"
              className="block text-gray-700 font-bold mb-2"
            >
              Company Email
            </label>
            <TextField
              id="company_email"
              name="company_email"
              type="text"
              value={formData.company_email}
              handleOnChange={handleChange}
              required={true}
            />
            {fieldErrors.company_email && (<p className="pb-0 text-red-600">{fieldErrors?.company_email}</p>)}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <TextField
              id="password"
              name="password"
              type="password"
              value={formData.password}
              handleOnChange={handleChange}
              required={true}
            />
            {fieldErrors.password && (<p className="pb-0 text-red-600">{fieldErrors?.password}</p>)}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
