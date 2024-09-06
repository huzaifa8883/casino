import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faSortDown, faFutbol, faStar, faStarOfDavid, faEarthAmericas, faYinYang, faBold, faC, faClipboard, faFileSignature,faCircleChevronLeft,faClock,faCircleChevronRight,faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import football2 from "../assets/football2.svg";
import tennis from "../assets/tennis.svg";
import football from "../assets/football.svg";
import cricket from "../assets/cricket.svg";
import horse from "../assets/horse.svg";
import horse2 from "../assets/horse2.svg";
import greyhound from "../assets/greyhound.svg";
import greyhound2 from "../assets/greyhound2.svg";
import cricket2 from "../assets/cricket2.svg";
import dbm from "../assets/DBM.svg"
import teen from "../assets/teen.webp"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import scoccer34 from "../assets/soceer34.svg"
import clock from "../assets/clock.svg"
import time from "../assets/time.png"

const Alldata2 = () => {
  const [showBacking2, setShowBacking2] = useState(false);
const [showBacking, setShowBacking] = useState(false);
const [showBacking3, setShowBacking3] = useState(false);
const [showBacking4, setShowBacking4] = useState(false);
const [showBacking5, setShowBacking5] = useState(false);




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
  return (
    <>
    {/* <div className='c overflow-x-hidden'> */}
      <div className='grid grid-cols-[1fr_auto] h-auto gap-4'>
        <div className='h-full w-40 gop px-4 fixed'>
          <span className='change text-2xl font-bold'>
            <h1 className='mt-2 mx-4'>BPEXCH</h1>
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
      
      <div className="relative top-0 left-0 w-full z-10 mx-40  ">
   


        <div className='text-white gop font-semibold text-xs sm:text-sm w-full h-[50px] flex items-center'>
          <span className='mx-2'><FontAwesomeIcon icon={faXmark} color='white' size='2x' /></span>
          <span className='mx-3 mb-2'>
            <a className='text-[15px] font-semibold'>Dashboard</a>
          </span>
          <span className="marquee-container">
            <div className="marquee">
              <p>Welcome to Exchange.-Welcome--Welcome--Welcome to Exchange-Welcome to Exchange</p>
            </div>
          </span>
          <div className='flex ml-auto relative'>
            <span className='text-white fonting flex items-center mx-48 relative whitespace-nowrap'>
              <p className='mr-2'>B: 0 | L: 0 Arshad</p>
              <FontAwesomeIcon 
                icon={faSortDown} 
                size='xs' 
                className='absolute right-0 bottom-0 transform translate-x-1 translate-y-1'
              />
            </span>
          </div>
        </div>
        <div className='h-8 w-[1190px] mt-1 bg-gray-500 mx-2 gop flex space-x-6 px-3 py-1'>
          <span className='labelfont'>
            <h6>Credit:10,000</h6>
          </span>
          <span className='labelfont'>
            <h6>Balance:0</h6>
          </span>
          <span className='labelfont'>
            <h6>Liable:0</h6>
          </span>
          <span className='labelfont'>
            <h6>Active bets:0</h6>
          </span>
        </div>

        </div>
       
        <div className='my-2 mx-[165px] h-32 w-[750px] gop'>
          <div className='mx-4 py-5 flex items-center'>
<img src={scoccer34} className='h-8 w-8 '/>

            <img src={clock} className='h-4 w-4 mx-5 mb-4'/>
            <h5 className='text-white text-[13px] mb-5 translate-x-[-17px] font-normal'>in 8 minutes | Sep 5 5:00 pm | Winners: 1</h5>
          
          </div>
          <div className=' translate-y-[-43px] mx-16'>
            <h2 className='text-[22px] text-white font-bold font-sans '>cuiba v juventude</h2>
          </div>
          <div className='translate-y-[-15px] mx-3 space-x-1 text-black  font-semibold' >
            <button className='h-[30px] w-[70px] change2 rounded-lg text-center'>ALL</button>
            <button className='h-[30px] w-[83px] change2 rounded-lg text-center'>Others</button>
          </div>
          
        </div>
        <div className='h-[500px] w-[750px] cc  mx-[165px]'>
          <div className='flex items-center h-3 w-52'>
            <img src={clock} className='h-5 w-5 mt-2' />
            <div className='h-6 w-44 gop mt-2 translate-x-[-2px] px-2 text-pretty'>
              <h6 className='font-semibold whitespace-nowrap text-[13px] text-white'>Match Odds (MaxBet: 1M)</h6>
             
            </div>
          
          </div>
      <div className='h-7 w-[400px]  flex items-center space-x-1 mx-96 translate-y-[-14px] text-white text-[17px] font-semibold  font-sans text-pretty  '>
            <div className='w-[174px] h-7 gop text-start px-4   '>Back</div>
            <div className='w-[171px] h-7 gop text-start px-4'>Lay</div>
          </div>
          <div className='w-full h-20px'>
            <span>
            <h5 className='mx-2 font-semibold text-[17px] w-[100px]'>cuiba</h5>
            </span>
            <div className='flex items-centre mx-96 -mt-10 '>
            <div className=' h-[55px] w-[70px] bg-gray-100 '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>1.87</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>2.9M</h6>
  </div>
  <div className=' h-[55px] w-[70px] bg-gray-100  '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>1.99</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>6.9M</h6>
  </div>
  <div className=' h-[55px] w-[70px] colorof  '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>8.87</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>9.9M</h6>
  </div>
  <div className=' h-[55px] w-[70px] colorof2 mx-1 '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>6.87</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>3.9M</h6>
  </div>
  <div className=' h-[55px] w-[70px] faa -mx-1 '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>2.99</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>8.9M</h6>
  </div>
  <div className=' h-[55px] w-[70px] faa  '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>5.87</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>6.2M</h6>
  </div>
  
  </div>
          </div>


          <div className='w-full h-20px my-4'>
            <span>
            <h5 className='mx-2 font-semibold text-[17px] w-[100px]'>juventude</h5>
            </span>
            <div className='flex items-centre mx-96 -mt-10 '>
            <div className=' h-[55px] w-[70px] bg-gray-100 '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>4.87</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>2.9M</h6>
  </div>
  <div className=' h-[55px] w-[70px] bg-gray-100  '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>5.99</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>5.9M</h6>
  </div>
  <div className=' h-[55px] w-[70px] colorof  '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>2.87</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>4.9M</h6>
  </div>
  <div className=' h-[55px] w-[70px] colorof2 mx-1 '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>4.87</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>9.9M</h6>
  </div>
  <div className=' h-[55px] w-[70px] faa -mx-1 '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>3.99</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>3.9M</h6>
  </div>
  <div className=' h-[55px] w-[70px] faa  '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>3.87</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>4.2M</h6>
  </div>
  
  </div>
          </div>
          <div className='w-full h-20px my-4'>
            <span>
            <h5 className='mx-2 font-semibold text-[17px] w-[100px]'>The Draw</h5>
            </span>
            <div className='flex items-centre mx-96 -mt-10 '>
            <div className=' h-[55px] w-[70px] bg-gray-100 '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>5</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>5.6M</h6>
  </div>
  <div className=' h-[55px] w-[70px] bg-gray-100  '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>7.93</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>8.9M</h6>
  </div>
  <div className=' h-[55px] w-[70px] colorof  '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>3.87</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>8.9M</h6>
  </div>
  <div className=' h-[55px] w-[70px] colorof2 mx-1 '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>8.87</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>2.9M</h6>
  </div>
  <div className=' h-[55px] w-[70px] faa -mx-1 '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>5.99</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>9.9M</h6>
  </div>
  <div className=' h-[55px] w-[70px] faa  '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>2.87</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>4.2M</h6>
  </div>
  
  
  </div>
  <hr className='h-1 w-full bg-gray-300 my-1'></hr>
          </div>
          <div className='flex items-center h-3 w-52'>
            <img src={clock} className='h-5 w-5 mt-2' />
            <div className='h-6 w-auto gop mt-2 translate-x-[-2px] px-2 text-pretty'>
              <h6 className='font-semibold whitespace-nowrap text-[13px] text-white'>Over/Under 0.5 Goals (MaxBet: 250K)</h6>
             
            </div>
          
          </div>
      <div className='h-7 w-[400px]  flex items-center space-x-1 mx-96 translate-y-[-14px] text-white text-[17px] font-semibold  font-sans text-pretty  '>
            <div className='w-[174px] h-7 gop text-start px-4   '>Back</div>
            <div className='w-[171px] h-7 gop text-start px-4'>Lay</div>
          </div>
          <div className='w-full h-20px'>
            <span>
            <h5 className='mx-2 font-semibold text-[17px] w-[100px] whitespace-nowrap'>Under 0.5 Goals
            </h5>
            </span>
            <div className='flex items-centre mx-96 -mt-10 '>
            <div className=' h-[55px] w-[70px] bg-gray-100 '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>9.09</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>9.9k</h6>
  </div>
  <div className=' h-[55px] w-[70px] bg-gray-100  '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>11.9</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>6.9k</h6>
  </div>
  <div className=' h-[55px] w-[70px] colorof  '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>8.87</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>9.9k</h6>
  </div>
  <div className=' h-[55px] w-[70px] colorof2 mx-1 '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>6.57</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>3.9k</h6>
  </div>
  <div className=' h-[55px] w-[70px] faa -mx-1 '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>2.99</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>8.9k</h6>
  </div>
  <div className=' h-[55px] w-[70px] faa  '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>5.87</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>6.2k</h6>
  </div>
  
  </div>
          </div>


          <div className='w-full h-20px my-4'>
            <span>
            <h5 className='mx-2 font-semibold text-[17px] w-[100px] whitespace-nowrap'>Over 0.5 Goals
            </h5>
            </span>
            <div className='flex items-centre mx-96 -mt-10 '>
            <div className=' h-[55px] w-[70px] bg-gray-100 '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>4.87</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>2.9M</h6>
  </div>
  <div className=' h-[55px] w-[70px] bg-gray-100  '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>5.99</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>5.9M</h6>
  </div>
  <div className=' h-[55px] w-[70px] colorof  '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>2.87</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>4.9M</h6>
  </div>
  <div className=' h-[55px] w-[70px] colorof2 mx-1 '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>4.87</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>9.9M</h6>
  </div>
  <div className=' h-[55px] w-[70px] faa -mx-1 '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>3.99</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>3.9M</h6>
  </div>
  <div className=' h-[55px] w-[70px] faa  '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>3.87</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>4.2M</h6>
  </div>
  
  </div>
          </div>
          <div className='flex items-center h-3 w-52'>
            <img src={clock} className='h-5 w-5 mt-2' />
            <div className='h-6 w-auto gop mt-2 translate-x-[-2px] px-2 text-pretty'>
              <h6 className='font-semibold whitespace-nowrap text-[13px] text-white'>Over/Under 0.5 Goals (MaxBet: 250K)</h6>
             
            </div>
          
          </div>
      <div className='h-7 w-[400px]  flex items-center space-x-1 mx-96 translate-y-[-14px] text-white text-[17px] font-semibold  font-sans text-pretty  '>
            <div className='w-[174px] h-7 gop text-start px-4   '>Back</div>
            <div className='w-[171px] h-7 gop text-start px-4'>Lay</div>
          </div>
          <div className='w-full h-20px'>
            <span>
            <h5 className='mx-2 font-semibold text-[17px] w-[100px] whitespace-nowrap'>Under 0.5 Goals
            </h5>
            </span>
            <div className='flex items-centre mx-96 -mt-10 '>
            <div className=' h-[55px] w-[70px] bg-gray-100 '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>9.09</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>9.9k</h6>
  </div>
  <div className=' h-[55px] w-[70px] bg-gray-100  '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>11.9</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>6.9k</h6>
  </div>
  <div className=' h-[55px] w-[70px] colorof  '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>8.87</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>9.9k</h6>
  </div>
  <div className=' h-[55px] w-[70px] colorof2 mx-1 '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>6.57</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>3.9k</h6>
  </div>
  <div className=' h-[55px] w-[70px] faa -mx-1 '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>2.99</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>8.9k</h6>
  </div>
  <div className=' h-[55px] w-[70px] faa  '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>5.87</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>6.2k</h6>
  </div>
  
  </div>
          </div>


          <div className='w-full h-20px my-4'>
            <span>
            <h5 className='mx-2 font-semibold text-[17px] w-[100px] whitespace-nowrap'>Over 1.5 Goals
            </h5>
            </span>
            <div className='flex items-centre mx-96 -mt-10 '>
            <div className=' h-[55px] w-[70px] bg-gray-100 '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>5.87</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>4.9M</h6>
  </div>
  <div className=' h-[55px] w-[70px] bg-gray-100  '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>3.99</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>6.9M</h6>
  </div>
  <div className=' h-[55px] w-[70px] colorof  '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>6.87</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>3.9M</h6>
  </div>
  <div className=' h-[55px] w-[70px] colorof2 mx-1 '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>2.87</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>2.9M</h6>
  </div>
  <div className=' h-[55px] w-[70px] faa -mx-1 '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>5.99</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>6.9M</h6>
  </div>
  <div className=' h-[55px] w-[70px] faa  '>
    <h6 className='font-bold text-[17px] px-3 py-1 font-sans'>3.87</h6>
    <h6 className='px-3 translate-y-[-3px] text-[14px] font-semibold'>.2M</h6>
  </div>
  
  </div>
  <div className='mx-[755px] bg-black -mt-[645px] h-[1000px] c'>
    <div className='flex items-center w-[500px] space-x-1 '>
      <div className='h-8 w-52 change2 text-white rounded px-24 py-2 text-[17px]'>Tv</div>
      <div className='h-8 w-52 change2 text-white rounded px-16 py-2 text-[17px] whitespace-nowrap font-sans'>Score Card</div>

    </div>
    <div className='gop w-[430px] h-7 my-3'>
      <h5 className='text-white font-sans text-semibold px-4'>Open Bets (0)</h5>
    </div>
    <div className='yekyatha w-[430px] h-8 flex items-center gap-24 -my-3  font-bold px-3 text-[16px] font-sans'> 
      <h6>Runner</h6>
      <h6>Price</h6>
      <h6>Size</h6>

    </div>
    <div className='gop w-[430px] h-7 my-3'>
      <h5 className='text-white font-sans text-semibold px-4'>Matched Bets (0)</h5>
    </div>
    <div className='yekyatha w-[430px] h-8 flex items-center gap-24 -my-3  font-bold px-3 text-[16px] font-sans'> 
      <h6>Runner</h6>
      <h6>Price</h6>
      <h6>Size</h6>

    </div>
  </div>
          </div>
        
      
        </div>
      
       
    </>
      )
}


export default Alldata2