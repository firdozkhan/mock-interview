import React, { useEffect, useState } from 'react';
import { chatSession } from "../../Utils/GeminiModel";
import InterviewPage from '../Components/InterviewPage';

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
    const prompt = `Generate 5 interview questions and answers for a ${interviewInfo.typeOfInterview} interview, focusing on ${interviewInfo.topic}, with a difficulty level of ${interviewInfo.levelOfDifficulty}. 
Provide the output in the following JSON format:
{
  "questions": [
    {
      "question": "Question text here",
      "answer": "Answer text here"
    },
    ...
  ]
}
Do not include any text before or after the JSON.`
    // const questionList = await chatSession.sendMessage(prompt);
    console.log(questionList)
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
      <InterviewPage />
    </div>
  )
}

export default QuestionsPage;