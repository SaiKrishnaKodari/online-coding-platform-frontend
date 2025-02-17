import React, { useState,useEffect } from 'react'
import {domain} from "../../Shared"
import {QuestionInHomePage  } from "./QuestionInHomePage";
import "./Body.css"
import BodySkeleton from "../loadingSkeletons/BodySkeleton"

const url =domain+'api/questions'


export  default function Body()
{
    var [questions,setQuestions] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(data =>
        {
            return setQuestions(data)
        })
        // .catch(err => alert("Error while fetching data from backend server"))
    },[])
   

    return (
        <div><h3>Solve Challenges</h3>
        <br></br>
            {questions.length ===0?<BodySkeleton/>:""}
            {console.log(questions)}
            <ul className="list-group list-group-flush question_title">
                {questions.map((qn)=> QuestionInHomePage(qn))}
            </ul>
        </div>
    )
}
