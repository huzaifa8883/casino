import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faSortDown,faTimes,faBars, faFutbol, faStar, faStarOfDavid, faEarthAmericas, faYinYang, faBold, faC, faClipboard, faFileSignature,faCircleChevronLeft,faClock,faCircleChevronRight,faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import football2 from "../assets/football2.svg";
import tennis from "../assets/tennis.svg";
import football from "../assets/football.svg";
import cricket from "../assets/cricket.svg";
import horse from "../assets/horse.svg";
import horse2 from "../assets/horse2.svg";
import axios from 'axios';
import greyhound from "../assets/greyhound.svg";
// import { Link } from 'react-router-dom';
import greyhound2 from "../assets/greyhound2.svg";
import cricket2 from "../assets/cricket2.svg";
import dbm from "../assets/DBM.svg"
import teen from "../assets/teen.webp"
import { useState } from 'react';
import scoccer34 from "../assets/soceer34.svg"
import clock from "../assets/clock.svg"
import time from "../assets/time.png"
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';


const Alldata = () => {
  const [showBacking2, setShowBacking2] = useState(false);
const [showBacking, setShowBacking] = useState(false);
const [showBacking3, setShowBacking3] = useState(false);
const [showBacking4, setShowBacking4] = useState(false);
const [toggle, settoggle] = useState(false)

const [showBacking5, setShowBacking5] = useState(false);
const [alldataoffootball, setalldataoffootball] = useState(null)
const [selectedTab, setSelectedTab] = useState("betRecords"); // Default state to show the initial content

const {id} = useParams()
console.log("id",id)



  const handleToggle = () => {
    setShowBacking(prev => !prev);

  setShowBacking3(false)
    setShowBacking2(false)
    setShowBacking4(false)
    setShowBacking5(false)
  };
  const handleToggle2 = () => {
    setShowBacking2(prev => !prev);
    setShowBacking(false)
   
    setShowBacking3(false)
    setShowBacking4(false)
    setShowBacking5(false)
  };
  const togglingbars = ()=>{
    settoggle((prev) => !prev);
  
  }
  const handleToggle3 = () => {
    setShowBacking3(prev => !prev);
    setShowBacking(false)
    setShowBacking2(false)
    setShowBacking4(false)
    setShowBacking5(false)
  };
  const handleToggle4 = () => {
    setShowBacking4(prev => !prev);
    
    setShowBacking(false)
    setShowBacking2(false)
    setShowBacking3(false)
    setShowBacking5(false)
  };
  const handleToggle5 = () => {
    setShowBacking5(prev => !prev);
    setShowBacking(false)
  
    setShowBacking2(false)
    setShowBacking4(false)
    setShowBacking3(false)
  };
  useEffect(() => {
    const footballapi = async()=>{
      const response = await axios.get( `https://odds.p.rapidapi.com/v4/sports/upcoming/odds/${id}`,{
        params: {
          regions: 'us',
          oddsFormat: 'decimal',
          markets: 'h2h,spreads',
          dateFormat: 'iso'
        },
        headers: {
          'x-rapidapi-key': '1dfe71a0d0msh8227b831ac1d2d0p11eab9jsn29d73fad8d01',
          'x-rapidapi-host': 'odds.p.rapidapi.com'
        }
      
      
      })
      const data = response.data
      // const filterfootball = data.filter(event => event.sport_title === 'UEFA Nations League'&&'La Liga 2 - Spain');;
  
      console.log(data)
      setalldataoffootball(data)
  
    }
    
    footballapi()
  
}, [id])
  return (
    <>
    {/* <div className='c overflow-x-hidden'> */}
      <div className='grid grid-cols-[1fr_auto] h-auto gap-4'>
         <div className= {`h-full   ${toggle ? 'block' : 'hidden'} md:block z-50  w-44 gop px-4 fixed `}>
               <span className="change text-2xl font-bold flex items-center">
             <h1 className="mt-2 mx-4">BPEXCH</h1>
             <FontAwesomeIcon
               icon={faTimes}
               onClick={togglingbars}
               className="cursor-pointer text-white text-xl mx-2"
             />
           </span>
       
                 <hr className='my-6 border-gray-500' />
                 <div className='py- text-white best space-y-2'>
                   <span className='flex items-center space-x-2 cursor-pointer'>
                     <img src={football} className='h-8 w-8' />
                     <h3 onClick={handleToggle} className='text-[14px] cursor-pointer'>Soccer</h3>
                   </span>
                   <span className='flex items-center space-x-2 cursor-pointer'>
                     <img src={tennis} className='h-8 w-8' />
                     <h3 onClick={handleToggle2} className='text-[14px] cursor-pointer'>Tennis</h3>
                   </span>
                   <span className='flex items-center space-x-2 cursor-pointer'>
                     <img src={cricket} className='h-8 w-8' />
                     <h3 className='text-[14px] cursor-pointer' onClick={handleToggle3}>Cricket</h3>
                   </span>
                   <span className='flex items-center space-x-2 cursor-pointer'>
                     <img src={horse} className='h-8 w-8' />
                     <h3 className='text-[14px] cursor-pointer' onClick={handleToggle4}>Horse Race</h3>
                   </span>
                   <span className='flex items-center space-x-2 cursor-pointer'>
                     <img src={greyhound} className='h-8 w-8' />
                     <h3 className='text-[14px] cursor-pointer' onClick={handleToggle5}>Greyhound</h3>
                   </span>
                   <span className='flex items-center space-x-2'>
                     <FontAwesomeIcon icon={faStar} className='rotate-forever mt-2 h-5 w-5' />
                     <h3 className='text-[14px] mt-2 whitespace-nowrap'>RoyalStar Casino</h3>
                   </span>
                   <span className='flex items-center space-x-2'>
                     <FontAwesomeIcon icon={faStarOfDavid} className='rotate-pause mt-3 h-5 w-5' />
                     <h3 className='text-[14px] mt-3'>Star Casino</h3>
                   </span>
                   <span className='flex items-center space-x-2'>
                     <FontAwesomeIcon icon={faEarthAmericas} className='rotate-pause mt-3 h-5 w-5' />
                     <h3 className='text-[14px] mt-3'>World Casino</h3>
                   </span>
                   <span className='flex items-center space-x-2'>
                     <FontAwesomeIcon icon={faYinYang} className='mt-3 flip-inverse h-5 w-5' />
                     <h3 className='text-[14px] mt-3'>Royal Casino</h3>
                   </span>
                   <span className='flex items-center space-x-3'>
                     <FontAwesomeIcon icon={faBold} className='mt-3 flip-inverse h-5 w-5' />
                     <h3 className='text-[14px] mt-3'>BetFairGames</h3>
                   </span>
                   <span className='flex items-center space-x-3'>
                     <img src={teen} className='h-8 w-8 mt-3 -mx-2 flip-inverse' />
                     <h3 className='text-[14px] mt-1 whitespace-nowrap'>TeenPatti Studio</h3>
                   </span>
                   <hr className='border-gray-500 ' />
                   <span className='flex items-center space-x-3 mb-2'>
                     <FontAwesomeIcon icon={faC} className='mt-2 h-5 w-5' />
                     <h3 className='text-[14px] mt-2 whitespace-nowrap'>Current Position</h3>
                   </span>
                   <span className='flex items-center space-x-3 mb-2'>
                     <img src={football} className='h-8 w-8 -mx-1 mt-2' />
                     <h3 className='text-[14px] mt-2 whitespace-nowrap'>All Sports</h3>
                   </span>
                   <span className='flex items-center space-x-3 mb-2'>
                     <FontAwesomeIcon icon={faClipboard} className='mt-2 h-5 w-5'/>
                     <h3 className='text-[14px] mt-2 whitespace-nowrap'>Results</h3>
                   </span>
                   <span className='flex items-center space-x-3 mb-2'>
                     <FontAwesomeIcon icon={faFileSignature} className='mt-2 h-5 w-5'/>
                     <h3 className='text-[14px] mt-2 whitespace-nowrap'>Market Rules</h3>
                   </span>
                   <span className='flex items-center space-x-3 mb-2'>
                     <FontAwesomeIcon icon={faFileSignature} className='mt-2 h-5 w-5' />
                     <h3 className='text-[14px] mt-2 whitespace-nowrap'>Terms & Conditions</h3>
                   </span>
                 </div>
                
               </div>
           
                <div className={`absolute   my-1 z-50 backing ${showBacking ? 'show mx-32' : ''}`}  >
               
             
                   <div className='h-[1000px] w-60  z-50 '>
                     <div className='mx-0 my-4 text-[13px] font-bold text-white font-sans '>
                       <div className='h-10 w-60 hover:bg-red-700 px-4 py-2'>
                       <h5 className=' cursor-pointer'>All Soccer</h5>
                       </div>
                       <hr className='my-8  h-1 text-gray-400'></hr>
                     </div>
                     <div className='mx-0 my-0 text-[13px]  text-gray-100 font-sans font-semibold'>
                     <Link to="/alldata"><div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
       <h5>Argentina v Chille </h5>
       </div>
       </Link>
       <Link to="/alldata2">
       <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
       <h5>cuiba v juventude </h5>
       </div>
       </Link>         
                     </div>
                    </div> 
                   
                 </div>
                 <div className={`absolute   my-1 z-50 backing ${showBacking2 ? 'show mx-32' : ''}`}  >
               
             
               <div className='h-[1000px] w-60  z-50 '>
                 <div className='mx-0 my-4 text-[13px] font-bold text-white font-sans '>
                   <div className='h-10 w-60 hover:bg-red-700 px-4 py-2'>
                   <h5 className=' cursor-pointer'>All Tennis</h5>
                   </div>
                   <hr className='my-8  h-1 text-gray-400'></hr>
                 </div>
                 <div className='mx-0 my-0 text-[13px]  text-gray-100 font-sans font-semibold'>
       <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
       <h5>Sinner v Ja Draper </h5>
       </div>
       <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
       <h5>Fritz v Tiafoe </h5>
       </div>
       <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
       <h5>Jimenez Kasintseva v Todoni </h5>
       </div>
       <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
       <h5>Dar Semenistaja v Barthel </h5>
       </div>
       <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
       <h5>J Pegula v Muchova</h5>
       </div>
       <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
       <h5>E Navarro v A Sabalenka</h5>
       </div>
                   
                 </div> 
                </div> 
               
             </div>
             <div className={`absolute   my-1 z-50 backing ${showBacking3 ? 'show mx-32' : ''}`}  >
               
             
               <div className='h-[1000px] w-60  z-50 '>
                 <div className='mx-0 my-4 text-[13px] font-bold text-white font-sans '>
                   <div className='h-10 w-60 hover:bg-red-700 px-4 py-2'>
                   <h5 className=' cursor-pointer'>All Cricket</h5>
                   </div>
                   <hr className='my-8  h-1 text-gray-400'></hr>
                 </div>
                 <div className='mx-0 my-0 text-[13px]  text-gray-100 font-sans font-semibold'>
       <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
       <h5>Scotland v Australia </h5>
       </div>
       <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
       <h5>Warwickshire v Gloucestershire</h5>
       </div>
       <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
       <h5>Ireland Women v England Women </h5>
       </div>
       <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
       <h5>Ireland Women v England Women </h5>
       </div>
       <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
       <h5>St. Lucia Kings v Guyana Amazon Warriors</h5>
       </div>
       <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
       <h5>Afghanistan v New Zealand</h5>
       </div>
       <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
       <h5>	
       Namibia Women v UAE Women</h5>
       </div>
       <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
       <h5>England v Sri Lanka</h5>
       </div>
                   
                 </div>
                </div> 
               
             </div>
             <div className={`absolute my-1 z-50 backing ${showBacking5 ? 'show mx-32' : ''}`}>
         <div className='h-[700px] w-60 z-50 overflow-scroll'>
           <div className='mx-0 my-4 text-[13px] font-bold text-white font-sans'>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2'>
               <h5 className='cursor-pointer'>All Greyhound</h5>
             </div>
             <hr className='my-8 h-1 text-gray-400'></hr>
           </div>
           <div className='mx-0 my-0 text-[13px] text-gray-100 font-sans font-semibold'>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>5:54 PM Healesville (AU)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>6:15 PM Healesville (AU)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>6:30 PM Healesville (AU)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>6:46 PM Ipswich (AU)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>6:49 PM Healesville (AU)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>7:00 PM Goulburn (AU)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>7:04 PM Ipswich (AU)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>7:09 PM Healesville (AU)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>7:16 PM Goulburn (AU)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>7:19 PM Ipswich (AU)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>7:27 PM Healesville (AU)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>7:39 PM Goulburn (AU)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>7:44 PM Ipswich (AU)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>7:47 PM Healesville (AU)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>7:57 PM Goulburn (AU)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>8:04 PM Healesville (AU)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>8:07 PM Ipswich (AU)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>8:14 PM Goulburn (AU)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>8:22 PM Healesville (AU)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>8:28 PM Ipswich (AU)</h5>
             </div>
           </div>
         </div>
       </div>
       
       <div className={`absolute my-1 z-50 backing ${showBacking4 ? 'show mx-32' : ''}`}>
         <div className='h-[800px] w-60 z-50 overflow-y-scroll'>
           <div className='mx-0 my-4 text-[13px] font-bold text-white font-sans'>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2'>
               <h5 className='cursor-pointer'>All Horse</h5>
             </div>
             <hr className='my-8 h-1 text-gray-400'></hr>
           </div>
           <div className='mx-0 my-0 text-[13px] text-gray-100 font-sans font-semibold'>
             {/* Match timings aur locations */}
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>3:54 PM Hawthorne (US)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>4:07 PM Del Mar (US)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>4:10 PM Canterbury Park (US)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>4:25 PM Woodbine (US)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>4:30 PM Remington Park (US)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>4:38 PM Del Mar (US)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>4:40 PM Canterbury Park (US)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>4:55 PM Woodbine (US)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>4:59 PM Remington Park (US)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>5:08 PM Del Mar (US)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>5:10 PM Canterbury Park (US)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>5:25 PM Woodbine (US)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>5:28 PM Remington Park (US)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>5:40 PM Canterbury Park (US)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>5:57 PM Remington Park (US)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>6:10 PM Canterbury Park (US)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>6:26 PM Remington Park (US)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>6:40 PM Canterbury Park (US)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>6:55 PM Remington Park (US)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>7:24 PM Remington Park (US)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>7:30 PM Mornington (AU)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>7:35 PM Canberra (AU)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>7:50 PM Wyong (AU)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>7:53 PM Remington Park (US)</h5>
             </div>
             <div className='h-10 w-60 hover:bg-red-700 px-4 py-2 cursor-pointer'>
               <h5>8:00 PM Mornington (AU)</h5>
             </div>
           </div>
         </div>
       </div>
       
          
          
             </div>
       
       
             <div className="relative top-0 left-0 w-full z-10 md:mx-40 mx-0 ">
          
       
       
             <div className="text-white gop font-semibold text-xs sm:text-sm w-full h-[50px] flex flex-wrap items-center px-2 sm:px-4">
         {/* Bars Icon */}
         <span onClick={togglingbars} className="mx-2 md:hidden block">
           <FontAwesomeIcon icon={faBars} color="white" size="2x" className="cursor-pointer" />
         </span>
       
         {/* Close Icon */}
         <span className="mx-2  hidden md:block">
           <FontAwesomeIcon icon={faXmark} color="white" size="2x" />
         </span>
       
         {/* Dashboard Link */}
         <span className="mx-3 mb-2">
           <a className="text-[15px] font-semibold">Dashboard</a>
         </span>
       
         {/* Marquee Section */}
         <span className="marquee-container flex-1 overflow-hidden">
           <div className="marquee whitespace-nowrap">
             <p>Welcome to Exchange.-Welcome--Welcome--Welcome to Exchange-Welcome to Exchange</p>
           </div>
         </span>
       
         {/* User Info */}
         <div className="flex ml-auto relative items-center mt-2 sm:mt-0">
           <span className="text-white fonting flex items-center mx-2 sm:mx-12 relative whitespace-nowrap">
             <p className="mr-2 truncate">B: 0 | L: 0 Arshad</p>
             <FontAwesomeIcon 
               icon={faSortDown} 
               size="xs" 
               className="absolute right-0 bottom-0 transform translate-x-1 translate-y-1"
             />
           </span>
         </div>
       </div>
       
       <div className='h-8 w-[1190px] mt-1 bg-gray-500 md:mx-2 mx-0 gop flex space-x-6 px-3 py-1'>
                 <span className='labelfont text-[13px]'>
                   <h6>Credit:10,000</h6>
                 </span>
                 <span className='labelfont text-[13px]'>
                   <h6>Balance:0</h6>
                 </span>
                 <span className='labelfont text-[13px]'>
                   <h6>Liable:0</h6>
                 </span>
                 <span className='labelfont text-[13px]'>
                   <h6>Active bets:0</h6>
                 </span>
               </div>
       
       
        </div>
       
        <div className='my-2 md:mx-[165px] mx-0 h-32 w-full gop'>
          <div className='mx-4 py-5 flex items-center'>
<img src={scoccer34} className='h-8 w-8 '/>

            <img src={clock} className='h-4 w-4 mx-5 mb-4'/>
            <h5 className='text-white text-[13px] mb-5 translate-x-[-17px] font-normal'>in 8 minutes | Sep 5 5:00 pm | Winners: 1</h5>
          
          </div>
          <div className=' translate-y-[-43px] mx-16'>
            <h2 className='md:text-[22px] text-[16px] text-white font-bold font-sans '>{alldataoffootball?alldataoffootball.away_team:<p>huzaifa</p>}</h2>
          </div>
          <div className='md:translate-y-[-15px] translate-y-[-30px] mx-3 space-x-1 text-black  font-semibold' >
            <button className='h-[30px] w-[70px] change2 rounded-lg text-center'>ALL</button>
            <button className='h-[30px] w-[83px] change2 rounded-lg text-center'>Others</button>
          </div>
          
        </div>
        <div className="h-[700px] w-full cc md:mx-[180px] mx-0">
  <div className="flex items-center h-3 w-full md:w-52 mb-4">
    <img src={clock} className="h-5 w-5 mt-2" />
    <div className="h-6 w-auto gop mt-2 translate-x-[-2px] px-2 text-pretty">
      <h6 className="font-semibold whitespace-nowrap text-[14px] text-white">
        Match Odds (MaxBet: 1M)
      </h6>
    </div>
  </div>

  <div className="h-7 w-full md:w-[300px] flex items-center space-x-1 justify-center md:mx-auto  text-white text-[17px] font-semibold font-sans text-pretty mb-4">
    <div className="w-[140px] h-7 gop text-start px-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-md shadow-lg cursor-pointer">Back</div>
    <div className="w-[140px] h-7 gop text-start px-4 bg-gradient-to-r from-red-500 to-red-700 rounded-md shadow-lg cursor-pointer">Lay</div>
  </div>

  {['Argentina', 'Chilli', 'The Draw'].map((item, index) => (
    <div key={index} className="w-full h-20 my-6">
      <span>
        <h5 className="mx-2 font-semibold text-[17px] w-[100px] whitespace-nowrap text-gray-800">{item}</h5>
      </span>
      <div className="flex items-center justify-center mx-auto space-x-1 mt-4">
        {['1.87', '1.99', '8.87', '6.87', '2.99', '5.87'].map((value, i) => (
          <div key={i} className={`h-[55px] w-[70px] ${i % 2 === 0 ? 'bg-gray-100' : 'colorof'} mx-1 rounded-md shadow-md transition-transform transform hover:scale-105`}>
            <h6 className="font-bold text-[17px] px-3 py-1 font-sans">{value}</h6>
            <h6 className="px-3 translate-y-[-3px] text-[14px] font-semibold text-gray-600">2.9M</h6>
          </div>
        ))}
      </div>
    </div>
  ))}

  <hr className="h-1 w-full bg-gray-300 my-4" />

  <div className="flex items-center h-3 w-full md:w-52 mb-4">
    <img src={clock} className="h-5 w-5 mt-2" />
    <div className="h-6 w-auto gop mt-2 translate-x-[-2px] px-2 text-pretty">
      <h6 className="font-semibold whitespace-nowrap text-[14px] text-white">
        Over/Under 0.5 Goals (MaxBet: 250K)
      </h6>
    </div>
  </div>

  <div className="h-7 w-full md:w-[300px] flex items-center space-x-1 justify-center md:mx-auto  text-white text-[17px] font-semibold font-sans text-pretty mb-4">
    <div className="w-[140px] h-7 gop text-start px-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-md shadow-lg cursor-pointer">Back</div>
    <div className="w-[140px] h-7 gop text-start px-4 bg-gradient-to-r from-red-500 to-red-700 rounded-md shadow-lg cursor-pointer">Lay</div>
  </div>

  <div className="w-full h-20 my-6">
    <span>
      <h5 className="mx-2 font-semibold text-[17px] w-[100px] whitespace-nowrap text-gray-800">Under 0.5 Goals</h5>
    </span>
    <div className="flex items-center justify-center mx-auto space-x-1 mt-4">
      {['9.09', '11.9', '8.87', '6.57', '2.99', '3.87'].map((value, i) => (
        <div key={i} className={`h-[55px] w-[70px] ${i % 2 === 0 ? 'bg-gray-100' : 'colorof'} mx-1 rounded-md shadow-md transition-transform transform hover:scale-105`}>
          <h6 className="font-bold text-[17px] px-3 py-1 font-sans">{value}</h6>
          <h6 className="px-3 translate-y-[-3px] text-[14px] font-semibold text-gray-600">9.9k</h6>
        </div>
      ))}
    </div>
  </div>
  <hr className="h-1 w-full bg-gray-300 my-20" />
</div>
{/* <hr className="h-1 w-full bg-gray-300 my-4" /> */}
{/* New Component below */}
<div className="h-[700px] cc w-full lg:w-[1170px] md:mx-44 mx-0">
      {/* Tab Buttons */}
      <div className="flex items-center w-full space-x-4 mx-auto mb-4 justify-center">
      <div
          onClick={() => setSelectedTab("betRecords")}
          className={`h-8 w-[200px] md:w-[220px] ${
            selectedTab === "betRecords" ? "bg-blue-700 text-white" : "bg-gray-500 text-black"
          } rounded px-6 py-1 text-[17px] font-semibold whitespace-nowrap cursor-pointer`}
        >
          Bet Records
        </div>
        <div
          onClick={() => setSelectedTab("tv")}
          className={`h-8 w-[200px] md:w-[220px] ${
            selectedTab === "tv" ? "bg-blue-700 text-white" : "bg-gray-500 text-black"
          } rounded px-6 py-1 text-[17px] font-semibold cursor-pointer`}
        >
          TV
        </div>
      
      </div>

{/* TV Component (shown when "TV" is clicked) */}
{selectedTab === "tv" && (
  <div className="mt-4">
    <h3 className="text-gray-900 font-serif text-center text-xl mb-4">Live Match</h3>
    <div className="flex justify-center">
      {/* If you want to embed a video from iStock using an iframe */}
      <iframe
        width="600"
        height="400"
        src="https://cdn.pixabay.com/video/2024/03/22/205193-926528071_large.mp4"
        title="Live Match Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* If you have a direct video URL and want to use a video tag */}
      {/* Uncomment the following block if the above iframe is not required */}
      {/* 
      <video width="600" height="400" controls>
        <source
          src="https://your-direct-video-url.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> 
      */}
    </div>
  </div>
)}




      {/* Bet Records Component (shown when "Bet Records" is clicked) */}
      {selectedTab === "betRecords" && (
        <div className="mt-4">
       <h5 className="text-gray-900 font-semibold px-4">Open Bets (0)</h5>



          <div className="yekyatha w-full h-8 flex items-center justify-between px-4 mb-2 font-bold text-[16px] text-black bg-white rounded-lg">
            <h6>Runner</h6>
            <h6>Price</h6>
            <h6>Size</h6>
          </div>

          <h5 className="text-gray-900 font-semibold px-4 mt-4">Matched Bets (0)</h5>
          <div className="yekyatha w-full h-8 flex items-center justify-between px-4 mb-2 font-bold text-[16px] text-black bg-white rounded-lg">
            <h6>Runner</h6>
            <h6>Price</h6>
            <h6>Size</h6>
          </div>
        </div>
      )}
    </div>





       
    </>
      )
}


export default Alldata