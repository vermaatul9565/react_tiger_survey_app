import { useState } from 'react';
import Option from './options';
const Question = ({quesType, addMoreQues}) => {
    const [optionArr, setoptionArr] = useState([1]);

    let disableAdd = false;
    let disableRemove = true;

    const addCallback = (addOrRemove)=>{
        if(addOrRemove === 'add'){
            setoptionArr( [...optionArr, 1] );
        }else{
            optionArr.pop();
            setoptionArr( [...optionArr] );
        }
    }
    if( optionArr.length > 1){
        disableRemove = false;
    }
    if(optionArr.length === 4){
        disableAdd = true;
    }
    function handleAddMoreQues(){
        addMoreQues();
    }

    return ( 
        <div className='questions'> 
            <div >
                <input  type='text' placeholder='Question'></input> 
                <h6 >Options</h6>
                { quesType ==='single' &&
                    <div className='single'>
                        {   optionArr.map( () =>{
                            return <Option addCallback={ addCallback } disableAdd={disableAdd} disableRemove={disableRemove} />
                            })
                        }
                        {   optionArr.length === 4 &&
                            <div className='publish'>
                                <button onClick={handleAddMoreQues}>Add more questions</button>
                                <button >Publish</button>
                            </div>
                        }
                        {
                            optionArr.length === 1 
                        }
                    </div>
                    }
                    
                    { quesType ==='multi' &&
                    <div className='multi'>
                        {   optionArr.map( () =>{
                            return <Option addCallback={ addCallback } disableAdd={disableAdd} disableRemove={disableRemove} />
                            })
                        }
                        {   optionArr.length === 4 &&
                            <div className='publish'>
                                <button onClick={handleAddMoreQues}>Add more questions</button>
                                <button >Publish</button>
                            </div>
                        }
                        {
                            optionArr.length === 1 
                        }
                    </div>
                    }
            </div>
        </div>
     );
}
 
export default Question;