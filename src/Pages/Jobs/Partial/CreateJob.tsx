import React, { useState } from "react";
import { callPostApi } from "../../../asset/axios/axiosApi";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "../../../Comman/Comman";

const CreateJob: React.FC = () => {
  const navigate = useNavigate();
  const user = getLocalStorage();
  console.log("user", user);
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

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <form onSubmit={handleSubmit}>
            {[
              { label: "Company Name", name: "company_name", type: "text" },
              { label: "Designation", name: "designation", type: "text" },
              { label: "Job Title", name: "job_title", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Contact No", name: "contact_no", type: "text" },
              { label: "Industry Type", name: "industry_type", type: "text" },
              { label: "Role", name: "role", type: "text" },
              {
                label: "Description Company",
                name: "description_company",
                type: "textarea",
              },
              { label: "Key Skill", name: "key_skill", type: "text" },
            ].map(({ label, name, type }) => (
              <div key={name} className="mb-4">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                >{label}</label>
                {type === "textarea" ? (
                  <textarea
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                ) : (
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                )}
              </div>
            ))}
            <div className="mb-4">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
              >Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
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
            <div className="mb-4">
              <button
                type="submit"
                className="w-full px-3 py-2 bg-blue-500 text-white rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>

  );
};

export default CreateJob;
