import React, { useEffect,useState } from 'react'
import { domain } from "../../Shared";
import "./DetailedQuestion.css"
import { DifficultyLevel } from "./DifficultyLevelBox";
import { orange, red } from '@material-ui/core/colors';
import  Editor  from "./editor/Editor";
import DisplayResult from "../displayResult/DisplayResult";
import DisplayResults from "../displayResult/DisplayResults";
import Login from "../login/login";

function handleClick(e){

}
export function DetailedQuestion(){


    const [question, setquestion] = useState({})
    const [testcases, settestcases] = useState([])
    const [output, setoutput] = useState("")
    const [combined_result, setcombined_result] = useState([])
    const [toShow, settoShow] = useState("input")
    const [pr_output , setpr_output]=useState([])
    const [solution,setsolution]=useState([])
    const [selected_tc,setselected_tc]=useState({})
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
            {/* <Login/> */}
            <div className ="DetailedQuestion">
                <div className="row row-cols-2">
                    
                    <div className ="question_description col-12 col-lg-5">
                    <div className="question_title  row">
                            <div className="row col-10" style={{marginLeft:"5px"}}>
                                <h4>{question.fields && question.fields.title}</h4>
                            </div>
                            {/* <div className="row col-2"> </div> */}

                            <div className="row col">
                                <div className='row col-3'>
                                { question.fields && showDifficultyLevel(question.fields.difficulty)}</div>
                            
                            </div>
                            </div>
                            <div className='row row-cols-2'>
                            <div className="row col-10"></div>
                            <div className='row col-2'></div>
                            <div className="row col">
                                <div className='row col-3'>
                                <a href={url} onClick={e=>handleClick(e)}>Author</a></div>
                            
                            </div>
                            </div>
                            <hr></hr>
                        
                        {question.fields && <p>{question.fields.statement}</p>}
                        {question.fields && <p> Difficulty : {question.fields.difficulty}</p>}
                        {question.fields && <p> Constraints : {question.fields.constraints}</p>}
                        {question.fields && <p> Points : {question.fields.points}</p>}
                        {/* <p>loremaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaloremaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaloremaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p> */}
                        
                            <hr></hr>
                            
                        {/* test cases */}
                        {testcases.length==0 && <p style={{color:"blue"}}> No testcases for this question click <a href="#"> here </a> to contribute</p>}
                        {testcases.map((tc,ind)=>
                        <div>
                            <code>
                            <h5>Sample testcase {ind+1}</h5>
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
                           output_div={output_div} settoShow={settoShow} 
                           setpr_output ={setpr_output}/>
                    </div>
                </div>
                
                
                <div className="row input_output_boxes_actions">

<div className="btn-group" role="group" aria-label="Basic example">
    <button type="button" onClick={()=>settoShow("input")}   className={toShow=="input"?" btn btn-primary btn-sm ":"btn btn-outline-primary btn-sm"}>Show Input</button>&nbsp;
    <button type="button" onClick={()=>settoShow("output")}  className={toShow=="output"?" btn btn-primary btn-sm ":"btn btn-outline-primary btn-sm"}>Show Output</button>
</div>

</div>

<div className="row">
    <div className ={toShow!="input"?"d-none":""+ "input_box col-12 col-lg-7"}> 
    type input here
    </div>
    <div  id="output_box" className ={ toShow!="output"?"d-none":""+ "output_box  col-12 col-lg-7"}>
    {/* {output_div.innerHTML=""} */}
    
    {combined_result.length<=0?"Output will be shown here":""}
    {/* <table  border="1px">
        <thead className={combined_result.length<=0? "d-none":""}>
            <th> sample Input </th>
            <th> Expected output  </th>
            <th> Actual output  </th>
            <th> Result  </th>
        </thead>
        <tbody>
        {pr_output.length >=1 ?show_submit_result(pr_output): combined_result.map(res=>DisplayResult(res))}
        </tbody>
    </table> */}
    <div class='row'>
    <div className='col-12 col-lg-5'>
        {pr_output.length >=1 ?show_submit_result(pr_output): combined_result.map((res,ind)=>DisplayResults(res,ind))}</div>
    <div className="solutions col-12 col-lg-5" id='solution_div'> Click On TestCase For Detailed Description
    <div id="tc_ip">Test Case INPUT :</div>
    <div id='tc_op'>Test Case Expected OUTPUT :</div>
    <div id="tc_acop">Test Case Actal OUTPUT :</div></div>
    </div>
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
const show_submit_output = (item,index) =>{
     
    return <tr>
        <td>{index+1}</td>
        <td>{item.status}</td>
    </tr>

}
const show_submit_result=(pr_output) =>{
return <>
   <table border ="1px solid black">
       <thead>
           <th>Test Case</th>
           <th>Status</th>
       </thead>
       <tbody>
           {pr_output.map((item,index)=>show_submit_output(item,index))}
       </tbody>
      
   </table>
</>

}

