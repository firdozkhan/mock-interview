import React,{useState} from 'react'
const questionsData = [
    { question: "What is your name?", answer: "" },
    { question: "Why are you applying for this role?", answer: "" },
    { question: "What are your strengths?", answer: "" },
    { question: "Tell us about a challenging project you worked on.", answer: "" },
    { question: "Where do you see yourself in 5 years?", answer: "" }
  ];
function InterviewPage() {
    const [questions, setQuestions] = useState(questionsData);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState("");
  
    // Handle next question
    const handleNextQuestion = () => {
      if (currentQuestionIndex < questions.length - 1) {
        const updatedQuestions = [...questions];
        updatedQuestions[currentQuestionIndex].answer = userAnswer; // Save the answer
        setQuestions(updatedQuestions);
        setUserAnswer(""); // Reset answer
        setCurrentQuestionIndex(currentQuestionIndex + 1); // Go to next question
      } else {
        alert("Interview completed!"); // Handle interview completion
      }
    };
  
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-6">AI Mock Interview</h1>
  
          {/* Question Box */}
          <div className="text-lg mb-4">
            <p className="font-semibold">Question {currentQuestionIndex + 1}:</p>
            <p className="italic">{questions[currentQuestionIndex].question}</p>
          </div>
  
          {/* Video Recording Box */}
          <div className="mb-6 flex flex-col items-center">
            <div className="w-64 h-48 bg-gray-300 border border-gray-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-700">Video Recording Box</span>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Start/Stop Recording
            </button>
          </div>
  
          {/* Answer Input */}
          <div className="mb-4">
            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Your answer..."
              className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            ></textarea>
          </div>
  
          {/* Next Question Button */}
          <div className="flex justify-center">
            <button
              onClick={handleNextQuestion}
              className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600"
            >
              {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Interview"}
            </button>
          </div>
        </div>
      </div>
    );
};

export default InterviewPage
