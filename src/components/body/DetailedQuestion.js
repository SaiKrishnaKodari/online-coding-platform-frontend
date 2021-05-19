import React, { useEffect,useState } from 'react'
import { domain } from "../../Shared";
import "./DetailedQuestion.css"
import { DifficultyLevel } from "./DifficultyLevelBox";
import { orange, red } from '@material-ui/core/colors';
import  Editor  from "./editor/Editor";
import DisplayResult from "../displayResult/DisplayResult";

export function DetailedQuestion(){


    const [question, setquestion] = useState({})
    const [testcases, settestcases] = useState([])
    const [output, setoutput] = useState("")
    const [combined_result, setcombined_result] = useState([])
    const [toShow, settoShow] = useState("input")
    document.title="doCode | solve problem" 
    
    const handleShownInputOutputButtonClick = (name)=>{
        settoShow(name)
     }

    
    const  fetchQuestionAndItsTestCases=() => 
        {
            fetch(url)
            .then(resp => resp.json())
            .catch(err =>alert('err'))
            .then(data => {
                var testcases =[];
                var i=0;
                for (i = 0; i < data.length; i++) {
                    if (i>0){
                        testcases.push(data[i])
                    }
                }
                settestcases(testcases)
                return setquestion(data[0])
                } )
        }

    function getIdFromUrl(){
        const pk=window.location.pathname.substr(9,)
        return pk
    }
    const pk = getIdFromUrl()
    var url =`${domain}api/problem/title/${pk}`

    useEffect(()=>{
        fetchQuestionAndItsTestCases()
        
    },[])
    var output_div =document.getElementById("output_box") 
    return (
        
        <div>
            <div className ="DetailedQuestion">
                <div className="row">
                    <div className ="question_description col-12 col-lg-5">
                    <div className="question_title  row">
                            <div className="row col-8" style={{marginLeft:"5px"}}>
                                <h2>{question.fields && question.fields.title}</h2>
                                
                            </div>
                            <div className="row col-2"> </div>

                            <div className="row col">
                                
                                { question.fields && showDifficultyLevel(question.fields.difficulty)}
                            </div>
                            </div>
                        
                        {question.fields && <p>{question.fields.statement}</p>}
                        {question.fields && <p> Difficulty : {question.fields.difficulty}</p>}
                        {question.fields && <p> Constraints : {question.fields.constraints}</p>}
                        {question.fields && <p> Points : {question.fields.points}</p>}
                        <p>loremaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaloremaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaloremaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                        
                            
                            
                        {/* test cases */}
                        {testcases.length==0 && <p style={{color:"red"}}> No testcases for this question click <a href="#"> here </a> to contribute</p>}
                        {testcases.map((tc,ind)=>
                        <div>
                            <code>
                            <h4>Sample testcase {ind+1}</h4>
                            <p>Input: {tc.fields.input}</p>
                            <p>Output : {tc.fields.output}</p>
                            <hr/>
                            </code>
                        </div>)}
                    </div>
                    <div className ="code_editor col-12 col-lg-7">
                         {/* code editor here */}
                         <Editor question ={question} setoutput ={setoutput}
                          testcases={testcases}
                          setcombined_result ={setcombined_result}
                           output_div={output_div} />
                    </div>
                </div>
                
                
                <div className="row input_output_boxes_actions">

<div className="btn-group" role="group" aria-label="Basic example">
    <button type="button" onClick={()=>settoShow("input")}   className={toShow=="input"?" btn btn-primary btn-sm ":"btn btn-outline-primary btn-sm"}>Show Input</button>&nbsp;
    <button type="button" onClick={()=>settoShow("output")}  className={toShow=="output"?" btn btn-primary btn-sm ":"btn btn-outline-primary btn-sm"}>Show Output</button>
</div>

</div>
<div className="row">
<div className ={toShow!="input"?"d-none":""+ "input_box col-12 col-lg-5"}> 
    type input here
</div>
<div  id="output_box" className ={ toShow!="output"?"d-none":""+ "output_box  col-12 col-lg-7"}>
    {/* {output_div.innerHTML=""} */}
    
    {combined_result.length<=0?"Output will be shown here":""}
    <table  border="1px">
        <thead className={combined_result.length<=0? "d-none":""}>
            <th> sample Input </th>
            <th> Expected output  </th>
            <th> Actual output  </th>
            <th> Result  </th>
        </thead>
        <tbody>
        {combined_result.map(res=>DisplayResult(res))}
        </tbody>
    </table>
</div>
</div>

</div>
</div>
)
}
const showDifficultyLevel=(level)=>{
return <p  className={level+"D"}>
{level}
</p>
}