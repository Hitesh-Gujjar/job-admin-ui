import React, { useState } from "react";
import { callPostApi } from "../../../asset/axios/axiosApi";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "../../../Comman/Comman";
import { getFormField } from "../../../Utils/dynamicForm";

const CreateJob: React.FC = () => {
  const navigate = useNavigate();
  const user = getLocalStorage();

  const [formData, setFormData] = useState<any>({
    userId: user.data._id,
    company_name: "",
    designation: "",
    job_title: "",
    email: "",
    contact_no: "",
    gender: "",
    isActive: false,
    industry_type: "",
    role: "",
    description_company: "",
    key_skill: "",
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const createJob = await callPostApi('user/job/create', formData);

    if (createJob.status) {
      navigate("/job-list");
    }
  };

  const CreateCompanyForm = [
    {
      filedType: 1,
      label: "Job Title",
      id: "job-title",
      placeholder: "Job Title",
      name: "job_title",
      type: "text"
    },
    {
      filedType: 1,
      label: "Designation",
      id: "designation",
      placeholder: "Designation",
      name: "designation",
      type: "text"
    },
    {
      filedType: 1,
      label: "Experience",
      id: "Experience",
      placeholder: "Experience",
      name: "experience",
      type: "number"
    },
    {
      filedType: 1,
      label: "Company Name",
      name: "company_name",
      id: "company-name",
      placeholder: "Company Name",
      type: "text"
    },
    {
      filedType: 1,
      label: "Email",
      id: "email",
      placeholder: "Email",
      name: "email",
      type: "email"
    },
    {
      filedType: 1,
      label: "Contact No",
      id: "contact-no",
      placeholder: "Contact No",
      name: "contact_no",
      type: "text"
    },
    {
      filedType: 1,
      label: "Industry Type",
      id: "industry-type",
      placeholder: "Industry Type",
      name: "industry_type",
      type: "text"
    },
    {
      filedType: 1,
      label: "Role",
      id: "role",
      placeholder: "Role",
      name: "role",
      type: "text"
    },
    {
      filedType: 3,
      type: "selector",
      label: "Gender",
      name: "gender",
      id: "gender",
      placeholder: "Select Gender",
      option: [
        { label: 'Male', value: 1 },
        { label: 'Female', value: 1 },
        { label: 'Other', value: 1 },
      ]
    },
    {
      filedType: 2,
      label: "Description Company",
      name: "description_company",
      id: "description_company",
      placeholder: "Description Company",
      type: "textarea",
    },
    {
      filedType: 2,
      type: "textarea",
      label: "Key Skill",
      name: "key_skill",
      id: "Key Skill",
      placeholder: "Key Skill",
    },
  ]


  console.log("formData", formData)
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">

            {
              CreateCompanyForm.map((formField) => (
                <div className="" key={formField?.name}>
                  <label
                    htmlFor={formField?.id}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    {formField?.label}
                  </label>
                  {getFormField(formField, formData[formField?.name], handleChange)}
                </div>
              ))
            }
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-gray-700">Is Active</span>
            </label>
          </div>

          <div className="mb-4 text-center">
            <button
              type="submit"
              className="w-40 px-3 py-2 bg-blue-500 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>

  );
};

export default CreateJob;
