// import { useState } from "react";
import React from "react";
const Option = ( { addCallback, disableAdd, disableRemove } ) => { 
    const addOption = (addOrRemove)=>{
        addCallback(addOrRemove);
    }

    return ( 
        <div className='options'>
            <span id='option'>
                <input  type='text' placeholder='Type your option'></input>
                <button  disabled = {disableAdd} onClick={()=>{addOption('add')}} > + </button>
                <button  disabled = {disableRemove} onClick={()=>{addOption('remove')} } > - </button> 
            </span>
        </div>
     );
}
 
export default Option;