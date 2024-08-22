import React, { useState } from 'react';
import About from './About';
import { useDispatch } from 'react-redux';
import { userLoginInfo } from './Slices/userSlice';


const App = () => {
let dispatch = useDispatch();
 let [name, setName]= useState('')

 let handleSubmit=()=>{
  dispatch(userLoginInfo(name))
 }

  return (
   <div>
     <div className='bg-blue-200 w-[500px] flex mx-auto  justify-center items-center rounded-b-md'>
      <input onChange={(e)=>setName(e.target.value)} className='border border-red-500 rounded-md py-2 px-12 ml-6 my-10' type='text'></input>
      <button onClick={handleSubmit} className='bg-green-500 rounded-lg py-2 px-8 ml-6 text-white font-mono font-bold'>Submit</button>
     
    </div>
     <About/>
   </div>
  );
};

export default App;