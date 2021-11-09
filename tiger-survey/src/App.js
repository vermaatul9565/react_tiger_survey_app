import './App.css';
import {useState} from 'react';
import CreateSurvey from './components/createSurvey';

function App() {
  const [create, setcreate] = useState(false);
  const [take, settake] = useState(false);
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Survey Tiger</h1>
      </header>
      { !create && !take && <div> 
        <div id="createSurvey" className="surveytype" onClick={()=>{setcreate(true);}}>Create Survey</div>
        <div d="takeSurvey" className="surveytype" onClick={()=>{settake(true);}}>Take Survey</div>
      </div>}
      { create && <CreateSurvey />}
      { take && <takeSurvey />}
      {/* <Option/> */}
    </div>
  );
}

export default App;
