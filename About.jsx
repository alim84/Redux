import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {

    let data = useSelector((state)=>state.userInfo.value);

    return (
        <div>
               <h1 className='bg-blue-200 w-[500px] flex mx-auto font-extrabold  justify-center items-center rounded-b-md mt-10'>User Name : {data}</h1>
               
        </div>
    );
};

export default About;