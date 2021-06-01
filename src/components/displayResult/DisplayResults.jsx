import React from 'react'
import { domain } from "../../Shared";
import "./displaystyle.css"

var url =`${domain}api/problem/title/`
function handleClick(res,setselected_tc) {
    console.log(res)
    setselected_tc(res)

  }
export default function DisplayResults(res,ind,setselected_tc){
    if(res.actual_output.message =="ArgumentMissingError: source is needed!"){
        return  <>
        <tr>
            <td> {res.input}</td>
            <td> {res.expected_output}</td>
            <td style={{color:"red",fontWeight:"larger"}} > PLEASE TYPE CODE </td>
            <td> NA </td>
        </tr>
        </>

    }

    if(res.actual_output.run_status.status=="RE"){
        return  <>
        <tr>
        <td> {res.input}</td>
            <td> {res.expected_output}</td>
            <td style={{color:"red",fontWeight:"larger"}}> Got Runtime ERROR</td>
            <td> NA </td>

        </tr>
        </>
        
    }

    if(res.actual_output.run_status.status=="CE"){
        return  <>
        <tr>
            <td> {res.input}</td>
            <td> {res.expected_output}</td>
            <td style={{color:"red",fontWeight:"larger"}}> Got compile time ERROR</td>
            <td> NA </td>
        </tr>
        </>
        
    }
    return <>
        <ul>
           <li onClick={handleClick(res,setselected_tc)} className ="list-group-item question-title">Test Case{ind+1}</li>
        </ul>
    </> 

}

function verdict(a,b){
    if (a.trim()==b.trim()){
        return <p  className="PASSED">PASSED</p>
    }
    return <p className="FAILED">FAILED</p>
}