import { useState } from "react";
import Question from "./questions";
const CreateSurvey = () => {
    const [quesType, setQuesType] = useState(false);
    const [selected, setselected] = useState(false);
    const [QuesArr, setQuesArr] = useState([0]);

    function addMoreQues(){
        setQuesArr([...QuesArr,1]);
        setselected(true);
    }
    function handleChange({target}){
        setQuesType(target.value);
        QuesArr.pop();
        setQuesArr([...QuesArr, target.value]);
        setselected(true);
    }
    console.log(quesType);
    return ( 
        <div className='container'>
        {    
            QuesArr.map( (qt)=>{
            return <div className="createSurvey">
                    <select onChange={handleChange} className='select'>
                        <option value="" disabled selected >Select Question Type </option>
                        <option value="multi" >Multi-select</option>
                        <option value="single">Single select</option>
                    </select> 
                    { selected && <Question quesType={qt} addMoreQues={addMoreQues}/> }
                    {/* {setselected(false)} */} 
                </div>
            })
        }
        </div>
    );
}

export default CreateSurvey;