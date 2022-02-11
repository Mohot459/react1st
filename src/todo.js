import React, { useState } from 'react';

const Todolist = () => {
    const[num, setNum] = useState(0);
    const increase = () =>{
        setNum(num+1);
    };
    const decrease = () =>{
        if(num > 0){
        setNum(num-1);
        }else{
            alert('Sorry zero limit reached');
            setNum(0);

        }
    };
    return(
        <>
        <div className='main_div'>
               <div className='center_div'>
                    <h1> {num} </h1>
                    <div className='btn'>
                       <button onClick={increase} className='incream'>increament</button>
                       <button onClick={decrease} className='decream'>decreament</button>
                    </div>
               </div>
           </div>
        </>
           
    )
}

export default Todolist;