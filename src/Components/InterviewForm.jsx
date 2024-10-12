import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const InterviewForm = () => {
  const [formData, setFormData] = useState({
    jobRole: '',
    jobDescription: '',
    yearsOfExperience: ''
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log(formData.jobRole,formData.jobDescription,formData.yearsOfExperience);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    localStorage.setItem("myData",JSON.stringify(formData));
    navigate("/interviewQuestions");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Tell us more about your job interviewing</h2>
        <p className="text-gray-600 mb-6">Add Details about your job position/role, job description, and years of experience</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Job Role/Job Position</label>
            <input
              type="text"
              name="jobRole"
              value={formData.jobRole}
              onChange={handleChange}
              placeholder="Full Stack Developer"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Job Description/ Tech Stack (In Short)</label>
            <textarea
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              placeholder="React, NodeJS, MySQL"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Years of experience</label>
            <select
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            >
              <option value="" disabled>Select years of experience</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10+">10+</option>
            </select>
          </div>

          <div className="flex justify-end">
            <NavLink
              to="/"
              className="mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </NavLink>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Start Interview
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InterviewForm;
