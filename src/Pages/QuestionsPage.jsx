import React, { useEffect, useState } from 'react';
import { chatSession } from "../../Utils/GeminiModel";

const QuestionsPage = () => {
  const [questionAndAnswerList, setQuestionAndAnswerList] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const interviewInfo = localStorage.getItem("myData");
        console.log("Raw interviewInfo:", interviewInfo);

        if (!interviewInfo) {
          throw new Error("No interview data found in localStorage");
        }

        const parsedData = JSON.parse(interviewInfo);
        console.log("Parsed interviewInfo:", parsedData);

        if (!parsedData.typeOfInterview || !parsedData.topic || !parsedData.levelOfDifficulty) {
          throw new Error("Interview data is incomplete");
        }

        const questions = await getQuestions(parsedData);
        setQuestionAndAnswerList(questions);
      } catch (err) {
        console.error("Error:", err);
        setError(err.message);
      }
    };

    fetchQuestions();
  }, []);

  async function getQuestions(interviewInfo) {
    console.log("Getting questions for:", interviewInfo.typeOfInterview, interviewInfo.topic, interviewInfo.levelOfDifficulty);
    const prompt = `Give 5 questions and answer for ${interviewInfo.typeOfInterview}, on topics ${interviewInfo.topic} with difficulty level of interview set to ${interviewInfo.levelOfDifficulty}. Give it in JSON format.`;
    const questionList = await chatSession.sendMessage(prompt);
    const questionInJson = questionList.response.text().replace("```json", "").replace("```", "");
    const parsedQuestions = JSON.parse(questionInJson);
    console.log("Parsed questions:", parsedQuestions);
    return parsedQuestions;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {questionAndAnswerList ? (
        <div>
          <h2>Interview Questions</h2>
          {/* Render your questions and answers here */}
          <pre>{JSON.stringify(questionAndAnswerList, null, 2)}</pre>
        </div>
      ) : (
        <div>Loading questions...</div>
      )}
    </div>
  );
};

export default QuestionsPage;