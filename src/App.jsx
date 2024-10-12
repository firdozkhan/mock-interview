import React from 'react'
import InterviewForm from './Components/InterviewForm'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import QuestionsPage from './Pages/QuestionsPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/interviewForm" element={<InterviewForm />} />
      <Route path="/interviewQuestions" element={<QuestionsPage />} />
    </Routes>
  )
}

export default App
