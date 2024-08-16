import React from 'react'

import HTML from '../assets/html-png.png';
import CSS from '../assets/css-png.png';
import Reactjs from '../assets/react-png.png';
import Nodejs from '../assets/node js-png.png';
import JWT from '../assets/jwt-png.png';
import Javascript from '../assets/javascript-png.jpg';
import Mongodb from '../assets/mongodb-png.jpg';
import Github from '../assets/github-png.jpg';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/*Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-4'>// These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
                <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
                <img className='w-20 mx-auto' src={Reactjs} alt="React js icon" />
                <p className='my-4'>REACT JS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
                <img className='w-20 mx-auto' src={Nodejs} alt="Node js icon" />
                <p className='my-4'>NODE JS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
                <img className='w-20 mx-auto' src={Javascript} alt="Javascript icon" />
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
                <img className='w-20 mx-auto' src={JWT} alt="JWT icon" />
                <p className='my-4'>JWT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
                <img className='w-20 mx-auto' src={Mongodb} alt="Mongodb icon" />
                <p className='my-4'>MONGODB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
                <img className='w-20 mx-auto' src={Github} alt="Github icon" />
                <p className='my-4'>GITHUB</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Skills