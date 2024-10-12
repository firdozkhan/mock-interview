import React, { useEffect, useState } from 'react'
import {chatSession} from "../../Utils/GeminiModel"
const QuestionsPage = () => {
    useEffect(()=>{                                                                                                                                        const result = localStorage.getItem("myData");                                                       
    
        const questionAndAnswerList=getQuestions(result);
    },[]);
    async function getQuestions(result) {
        const questionList = await chatSession.sendMessage("jobRole: "+ result.jobRole +", jobDescription: "+result.jobDescription+", yearsOfExperience: "+result.yearsOfExperience+". Give 5 question and answer for this detail in JSON format.");
        const questionInJson=questionList.response.text().replace("```json","").replace("```","");
        console.log(questionInJson)
        return questionInJson;
        
    }
  return (
    <div>
        {//result ? <div>{result}</div>:<div>Result still pending</div>
        }
    </div>
  )
}

export default QuestionsPage
