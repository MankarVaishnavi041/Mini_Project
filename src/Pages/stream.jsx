import React from 'react';
import  '../Assets/nmbg.jpg';

//import  icons
import { PiLetterCircleVFill } from "react-icons/pi";
import { PiLetterCirclePFill } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";
import { MdSend } from "react-icons/md";
        
function Stream () {
return ( 
 
 
        <>
        <div className='bg-orange-900 h-60 w-4/5 mt-24 rounded-lg'>
            
            <h1 className='font-semibold text-5xl text-cyan-50 pt-32 pl-8'>Network Management Lab </h1>
            <h4 className='text-slate-50 font-semibold font-2xl pl-8 pt-2 text-3xl'>(ODD 2024-25)</h4>

        </div>
        <div className=' h-40 w-64 mr-auto ml-40 mt-6 rounded-lg border-2 border-grey-800'>
            <h1 className='font-semibold pt-5 pl-5'>Upcoming</h1>
            <h1 className='pl-5 pt-6'>Woohoo, no work due soon!</h1>
            <h1 className='pl-44 pt-7'>View all</h1>
        </div>

        <div className=' h-20 w-3/5 ml-72 -mt-40 rounded-lg shadow-md border-2 border-grey-800'>
            <PiLetterCircleVFill  className='h-12 w-12 mt-4 ml-4 text-lime-800 '/>
           <h1 className='-mt-10 ml-20 text-slate-500 '>Announce something to your class</h1>
               
        </div>
        

        <div className=' h-auto w-3/5 ml-72 mt-6 rounded-lg  border-2 border-grey-800'>
            <PiLetterCirclePFill className='h-12 w-12 mt-4 ml-4 text-blue-800' />
            <CiMenuKebab className=' h-6 w-6  ml-auto mr-4 -mt-4' />
            <h1 className='-mt-12 pl-20 font-semibold'>Pranita Jadhav<h1 className=' font-medium text-slate-500 text-sm'>Dec 6</h1></h1>
            <h1 className='pl-10 pt-2'>All students are informed to come for examination on time with complete file.Network Management Practical Examination scheduled as follows:</h1>
            <h1 className='pt-10 pl-10 font-semibold'>A batch: 10/12/2024- Tuesday -Time: 2.30PM To 5.30PM<h1>B Batch: 11/12/2024 Wednesday- Time: 2.30PM To 5.30PM</h1></h1>
            <div className='  h-20  mt-10 rounded-b-lg border-t-2 border-black-300'>
                <PiLetterCircleVFill  className='h-12 w-12 mt-4 ml-4 text-lime-800'/>
                <div className='h-10  -mt-11 ml-20 mr-20 rounded-full border-2 border-black-300'>
                    <h1 className='ml-4 mt-1 text-slate-500'>Add class comment...</h1>
                </div>
                <MdSend className='h-6 w-6 ml-auto mr-8 -mt-8 text-slate-500' />
            </div>
        </div> 

        <div className=' h-80 w-3/5 ml-72 mt-6 rounded-lg border-2 border-black-300'>
            <PiLetterCirclePFill className='h-12 w-12 mt-4 ml-4 text-blue-800 ' />
            <CiMenuKebab className=' h-6 w-6  ml-auto mr-4 -mt-4' />
            <h1 className='-mt-11 pl-20 font-semibold'>Pranita Jadhav<h1 className=' font-medium text-slate-500 text-sm'>Nov 27</h1></h1>
            <h1 className='pl-10 pt-2'>All B batch students are informed to complete 07 practicals with index sheet... Submit your completed files tomorrow for checking...</h1>
            <h1 className='pt-8 pl-10 '>Bcz on Friday freshers party is there<h1>Next week on Wednesday I will be arrange NM submission.</h1></h1>
            <div className=' h-16  mt-10 rounded-b-lg border-t-2 border-black-300'>
                <PiLetterCircleVFill  className='h-12 w-12 mt-4 ml-4 text-lime-800'/>
                <div className='h-10  -mt-12 ml-20 mr-20 rounded-full border-2 border-black-300'>
                    <h1 className='ml-4 mt-1 text-slate-500'>Add class comment...</h1>
                </div> 
                <MdSend className='h-6 w-6 ml-auto mr-8 -mt-8 text-slate-500' />
            </div>
        </div>

        <div className=' max-h-200px w-3/5 ml-72 mt-6 rounded-lg border-2 border-black-300'>
             <PiLetterCirclePFill className='h-12 w-12 mt-4 ml-4 text-blue-800' /> 
             <CiMenuKebab className=' h-6 w-6  ml-auto mr-4 -mt-4' /> 
            <h1 className='-mt-11 pl-20 font-semibold'>Pranita Jadhav<h1 className=' font-medium text-slate-500 text-sm'>Oct 4 (Edited Oct 4)</h1></h1>
            <h1 className='pl-10 pt-2'>Practical 3: </h1>
            <h1 className='pt-8 pl-10 '>Install and configure SNMP MIB browser. </h1>
            <h1  className='pt-5 pl-10'>a) qtmib b) snmpB c) OpManager MIB browser</h1>
            <h1 className='pl-10 pt-10 underline'><a  href='https://www.youtube.com/watch?v=D1tPx6Auuhs'>https://www.youtube.com/watch?v=D1tPx6Auuhs</a></h1>
            <h1 className='pt-8 pl-10'>How SNMP Work for Network Monitoring Explained In Hindi with Very basic</h1>
            <h1 className='pt-5 pl-10 underline'> <a href='https://www.youtube.com/watch?v=LsbvNpTjN24'>https://www.youtube.com/watch?v=LsbvNpTjN24 </a>How To Install or Configure SNMP For Windows</h1>
            <h1 className='pl-10 underline' > <a href='https://www.youtube.com/watch?v=F1avg6qR9Zs'>https://www.youtube.com/watch?v=F1avg6qR9Zs </a> How to Install or configure SNMP on windows</h1>
            <h1 className='pl-10 underline'> <a href='https://www.youtube.com/watch?v=tFML_308Xyk'>https://www.youtube.com/watch?v=tFML_308Xyk </a>How to Install and Configure SNMP on Windows 10 ?</h1>
            <div className=' h-20  mt-32 rounded-b-lg border-t-2 border-black-300'>
                <PiLetterCircleVFill  className='h-12 w-12 mt-4 ml-4 text-lime-800'/>
                 <div className='h-10  -mt-11 ml-20 mr-20 rounded-full border-2 border-black-300'>
                    <h1 className='ml-4 mt-1 text-slate-500'>Add class comment...</h1>
                </div>
                 <MdSend className='h-6 w-6 ml-auto mr-8 -mt-8 text-slate-500' />
             </div>
        </div>

        <div className=' max-h-100px w-3/5 ml-72 mt-6 rounded-lg border-2 border-black-300'>
            <PiLetterCirclePFill className='h-12 w-12 mt-4 ml-4 text-blue-800' />
            <CiMenuKebab className=' h-6 w-6  ml-auto mr-4 -mt-4' />
            <h1 className='-mt-11 pl-20 font-semibold'>Pranita Jadhav<h1 className=' font-medium text-slate-500 text-sm'>Sep 27 (Edited Sep 27)</h1></h1>
            <h1 className='pl-10 pt-2 underline'><a href='https://www.comparitech.com/net-admin/network-monitoring-tools/'>https://www.comparitech.com/net-admin/network-monitoring-tools/</a>        Study Material </h1>
            <h1 className='pt-8 pl-10 underline'><a href='https://www.youtube.com/watch?v=Ip7TZOrx9Q4&list=PL3kU5Bv_o-yijyfuisXnc1nBQMUKo0yhR'>https://www.youtube.com/watch?v=Ip7TZOrx9Q4&list=PL3kU5Bv_o-yijyfuisXnc1nBQMUKo0yhR</a></h1>
            <h1  className='pt-5 pl-10'>Windows Network Monitor: Intro & Simple Uses
            </h1>
            <h1 className='pl-10 pt-10 underline'><a  href='https://www.youtube.com/watch?v=D1tPx6Auuhs'>https://www.youtube.com/watch?v=D1tPx6Auuhs</a></h1>
            <h1 className='pt-8 pl-10'>How SNMP Work for Network Monitoring Explained In Hindi with Very basic</h1>
             <h1 className='pt-5 pl-10'>Workshop on Network Management and Monitoring Tools - Part 1 <h1 className='underline'><a href='https://www.youtube.com/watch?v=ZxbNQ4-Y3Vc'>https://www.youtube.com/watch?v=ZxbNQ4-Y3Vc</a></h1></h1>
             <h1 className='pt-5 pl-10'>Workshop on Network Management and Monitoring Tools - Part 2<h1 className='underline'><a href='https://www.youtube.com/watch?v=1ALt4idEARA&t=17s'>https://www.youtube.com/watch?v=1ALt4idEARA&t=17s</a></h1></h1>
        
            <div className='   h-20  mt-32 rounded-b-lg border-t-2 border-black-400 '> 
                <PiLetterCircleVFill  className='h-12 w-12 mt-4 ml-4 text-lime-800'/>
                <div className=' h-10 rounded-full -mt-11 ml-20 mr-20  justify-center items-center border-2 border-black-300'>
                    <h1 className='ml-4 mt-1 text-slate-500'>Add class comment...</h1>
                </div>
                <MdSend className='h-6 w-6 ml-auto mr-8 -mt-8 text-slate-500' />
            </div>
        </div>
        
        
        </>
    );
}

export default Stream;

