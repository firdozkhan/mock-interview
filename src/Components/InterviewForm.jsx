import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const InterviewForm = () => {
  const [formData, setFormData] = useState({
    typeOfInterview: '',
    topic: '',
    levelOfDifficulty: ''
  });

  const navigate = useNavigate();
  const handleChange = (e) => {    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    localStorage.setItem("myData",JSON.stringify(formData));
    navigate("/interviewQuestions");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Tell us more about your job interviewing</h2>
        <p className="text-gray-600 mb-6">Add Details about your job position/role, job description, and years of experience</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Type of Interview</label>
            <select
              name="typeOfInterview"
              value={formData.typeOfInterview}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            >
              <option value="" disabled>Select type of interview</option>
              <option value="Technical Interview">Technical Interview</option>
              <option value="HR Interview">HR Interview</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Tech Stack (In Short)</label>
            <textarea
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="React, NodeJS, MySQL"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Difficulty level</label>
            <select
              name="levelOfDifficulty"
              value={formData.levelOfDifficulty}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            >
              <option value="" disabled>Select years of experience</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div className="flex justify-end">
            <NavLink
              to="/"
              className="mr-2 bg-red-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Cancel
            </NavLink>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700"
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
