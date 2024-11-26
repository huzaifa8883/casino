import React, { useState, useEffect } from 'react';
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
import {useNavigate, useParams} from "react-router-dom"

import axios from "axios"
import { Link } from 'react-router-dom';
import Alldata from './alldata';
import Alldata2 from './alldata2';

const images = [
  'https://www.bpexch.com/img/casino/casino10.jpeg',
  'https://www.bpexch.com/img/casino/casino9.jpeg',
  'https://www.bpexch.com/img/casino/casino11.jpeg',
  'https://www.bpexch.com/img/casino/casino3.jpeg',
  'https://www.bpexch.com/img/casino/casino7.jpeg',
  'https://www.bpexch.com/img/casino/casino5.jpeg',
  'https://www.bpexch.com/img/casino/casino1.jpeg',
  'https://www.bpexch.com/img/casino/casino4.jpeg',
  'https://www.bpexch.com/img/casino/casino2.jpeg',
]
const races = [
  { time: '8:10 PM', location: 'Canberra(Au)' },
  { time: '8:30 PM', location: 'Melbourne(Au)' },
  { time: '9:00 PM', location: 'Sydney(Au)' },
  { time: '9:20 PM', location: 'Brisbane(Au)' },
  { time: '9:50 PM', location: 'Adelaide(Au)' },
  { time: '10:10 PM', location: 'Perth(Au)' },
  { time: '10:30 PM', location: 'Gold Coast(Au)' },
  { time: '11:00 PM', location: 'Darwin(Au)' },
  { time: '11:30 PM', location: 'Hobart(Au)' },
  { time: '12:00 AM', location: 'Alice Springs(Au)' },
];
const Home = () => {
  const [toggledata, settoggledata] = useState(false)
  const [greyhounddata, setgreyhounddata] = useState([])
  const [horsedata, sethorsedata] = useState([])
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 6));
  const [startIndex, setStartIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0)
  const [visibleItems, setVisibleItems] = useState([]);
  const [cricketvisible, setcricketvisible] = useState(false)
  const [inplayvisible, setinplayvisible] = useState(true)
  const [index, setIndex] = useState(0);
  const [tennisvisible, settennisvisible] = useState(false)
  const [footballvisible, setfootballvisible] = useState(false)
  
const [slotgames, setslotgames] = useState([])
const [showBacking2, setShowBacking2] = useState(false);
const [showBacking, setShowBacking] = useState(false);
const [showBacking3, setShowBacking3] = useState(false);
const [showBacking4, setShowBacking4] = useState(false);
const [showBacking5, setShowBacking5] = useState(false);
const [footballdata, setfootballdata] = useState(null)

const Naviagte = useNavigate()
// 'https://sport-highlights-api.p.rapidapi.com/football/events/1022538556'
// `https://odds-api1.p.rapidapi.com/events`
useEffect(() => {
  const footballapi = async()=>{
    const response = await axios.get('https://sport-highlights-api.p.rapidapi.com/football/events',{
      // params: {
      //   tournamentId: '17',
      //   media: 'true',
    
      // },
    
      // headers: {
      //   'x-rapidapi-key': 'a35b3aee2cmshb04a1ab5eee5049p151193jsn6b79140d4e3b',
      //   'x-rapidapi-host': 'odds-api1.p.rapidapi.com'
      // }
      headers: {
        'x-rapidapi-key': '42b8d92dc0msh96f03f56cf0fdf0p12fc0ejsn8aea1251acf2',
        'x-rapidapi-host': 'sport-highlights-api.p.rapidapi.com'
      }
    
    
    })
    const data = response.data
    // const filterfootball = data.filter(event => event.sport_title === 'UEFA Nations League'&&'La Liga 2 - Spain');;
  

   
      setfootballdata(data);
      console.log(data)
   

  }
  
  footballapi()
  
}, [])






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


 

  const yekyathaTime = ["6:00", "6:05", "6:10","7","4","234","34","345","564","3773","8388"];
  const robotoThinText = ["Scotland V Australia", "England V India", "South Africa V New Zealand"];
  const colorofFirst = ["14", "14.5", "17.5","11.3","9.4","19","17","7","4.4","22.1"];
  const colorofSecond = ["210", "220", "230"];
  const colorof2First = ["15", "16", "17"];
  const colorof2Second = ["322", "332", "342"];
  const colorof3First = ["1.04", "1.05", "1.06"];
  const colorof3Second = ["210k", "215k", "220k"];
  const colorof4First = ["1.06", "1.07", "1.08"];
  const colorof4Second = ["210k", "220k", "230k"];


  const handletoggledata = ()=>{
    settoggledata(!toggledata)
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % yekyathaTime.length);
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
 const handlecricketvisble = ()=>{
  setcricketvisible(!cricketvisible)
  setinplayvisible(false); 
  settennisvisible(false)
  setfootballvisible(false)
 }
 const handleinplayvisble= ()=>{
  setinplayvisible(!inplayvisible)
  setcricketvisible(false);
  settennisvisible(false)
  setfootballvisible(false)
 }

 const handletennisvisible = ()=>{
  settennisvisible(!tennisvisible)
  setcricketvisible(false);
  setinplayvisible(false); 
  setfootballvisible(false)
 }
 const handlefootballvisble = ()=>{
  setfootballvisible(!footballvisible)
  setcricketvisible(false);
  setinplayvisible(false); 
  settennisvisible(false)
 }

 





  const itemsToShow = 5;
  const handleRightClick = () => {
    const newStartIndex = (startIndex + 1) % greyhounddata.length;
    setStartIndex(newStartIndex);
    setVisibleItems(greyhound.slice(newStartIndex, newStartIndex + itemsToShow));
  };

  const handleLeftClick = () => {
    const newStartIndex = (startIndex - 1 + greyhounddata.length) % greyhounddata.length;
    setStartIndex(newStartIndex);
    setVisibleItems(greyhounddata.slice(newStartIndex, newStartIndex + itemsToShow));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newStartIndex = (startIndex + 1) % images.length;
      setStartIndex(newStartIndex);
      setVisibleImages(images.slice(newStartIndex, newStartIndex + 6).concat(images.slice(0, Math.max(0, newStartIndex + 6 - images.length))));

    }, 4000); // 2 second interval

    return () => clearInterval(interval);
  }, [startIndex]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://horse-racing.p.rapidapi.com/results", {
          params: {date: '2024-08-22'},
         
          
          
          headers: {
            'x-rapidapi-key': 'ace40f9f65mshe6951090077b991p101a05jsn6f1dc535358b',
            'x-rapidapi-host': 'horse-racing.p.rapidapi.com'
          }
        
        
        });
        const data = response.data;

        // Unique courses ko filter karna
        const uniqueCourses = data.reduce((acc, current) => {
          if (!acc.find(item => item.course === current.course)) {
            acc.push(current);
          }
          return acc;
        }, []);
        sethorsedata(uniqueCourses);
        console.log(response.data)
      } catch (error) {
        console.log(error.message);
      }
    };
  
    fetchData();
  }, []);
  useEffect(() => {
    const fetchDat = async () => {
      try {
        const response = await axios.get("https://greyhound-racing-uk.p.rapidapi.com/racecards", {
          params: {date: '2024-08-22'},
         
          
          headers: {
        'x-rapidapi-key': 'a35b3aee2cmshb04a1ab5eee5049p151193jsn6b79140d4e3b',
    'x-rapidapi-host': 'greyhound-racing-uk.p.rapidapi.com'
          }
        
            
        });
        const data = response.data;
        setVisibleItems(response.data.slice(0, itemsToShow));

        // // Unique courses ko filter karna
        // const uniqueCourses = data.reduce((acc, current) => {
        //   if (!acc.find(item => item.course === current.course)) {
        //     acc.push(current);
        //   }
        //   return acc;
        // }, []);
        
        setgreyhounddata(data);
        console.log(response.data)
      } catch (error) {
        console.log(error.message);
      }
    };
  
    fetchDat();
  }, []);
  
  

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 ko 12 banana
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
  };
  const events = footballdata?.events ? Object.values(footballdata.events) : [];
  return (
    <>
    <div className='c overflow-x-hidden'>
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
      
        <div className='flex w-full h-[242px] space-x-2 mt-2 mx-1 overflow-hidden  '>
        
  
          {visibleImages.map((image, index) => (
            <div key={index} className='h-[242px] w-[242px] '>
              <img src={image} className='h-full w-full object-cover' alt="casino" />
          
            </div>
        
          ))}
    
        </div>
       
        <div className='flex mt-10 px-2'>
  <img src={horse2} className='h-5 w-5' />
  <span className='text-black font-semibold mx-2 fontt'>
    <h4>Horse Race</h4>
  </span>
</div> {/* Yahan div close ho gaya hai */}

<div className='flex mt-1 mx-2 space-x-5 px-2 h-12 w-[1190px] back'>
  <span className='mx-8 my-2'>
    <FontAwesomeIcon icon={faCircleChevronLeft} color='skyblue' />
  </span>
  <span className='sirf text-white mt-1 -px-10 flex flex-col font-bold'>
    <a>8:10PM</a>
    <a>Canberra(Au)</a>
  </span>
  <div className='w-[2px] bg-white'></div>

  {/* Horse Race 2 */}
  <span className='sirf text-white mt-1 -px-10 flex flex-col font-bold'>
    <a>9:30PM</a>
    <a>Melbourne(Au)</a>
  </span>
  <div className='w-[2px] bg-white'></div>

  {/* Horse Race 3 */}
  <span className='sirf text-white mt-1 -px-10 flex flex-col font-bold'>
    <a>10:00PM</a>
    <a>Sydney(As)</a>
  </span>
  <div className='w-[2px] bg-white'></div>

  {/* Horse Race 4 */}
  <span className='sirf text-white mt-1 -px-10 flex flex-col font-bold'>
    <a>11:15PM</a>
    <a>Brisbane(Au)</a>
  </span>
  <div className='w-[2px] bg-white'></div>

  {/* Horse Race 5 */}
  <span className='sirf text-white mt-1 -px-10 flex flex-col font-bold'>
    <a>12:30AM</a>
    <a>Adelaide(Au)</a>
  </span>
  <div className='w-[2px] bg-white'></div>
  <span className='sirf text-white mt-1 -px-10 flex flex-col font-bold'>
    <a>9:30AM</a>
    <a>Adelaide(Au)</a>
  </span>
  <div className='w-[2px] bg-white'></div>
  <span className='sirf text-white mt-1 -px-10 flex flex-col font-bold'>
    <a>7:30AM</a>
    <a>Adelaide(Au)</a>
  </span>
  <div className='w-[2px] bg-white'></div>
  <span className='sirf text-white mt-1 -px-10 flex flex-col font-bold'>
    <a>4:30AM</a>
    <a>Adelaide(Au)</a>
  </span>
  <div className='w-[2px] bg-white'></div>

  </div>
     
<div className='flex  mt-2 px-2'>
      <img src={greyhound2} className='h-5 w-5' />
      <span className='text-black font-semibold mx-2 fontt'>
<h4>GreyHound Race</h4>


      </span>
      </div>
      <div className='flex mt-1 mx-2 space-x-5 px-2 h-12 w-[1190px] back '  >
   
      {/* <FontAwesomeIcon icon={faChevronRight} /> */}
  <button onClick={handleLeftClick} >
    <FontAwesomeIcon icon={faCircleChevronLeft} color='skyblue'className='mx-4' />

  </button>
  <button onClick={handleRightClick} className=' absolute left-[1070px] top-[415px] '>
    <FontAwesomeIcon  className="cursor-pointer" icon={faCircleChevronRight} color='skyblue' />
    

  </button>
  <span className='sirf text-white mt-1 -px-10 flex flex-col font-bold'>
  <a>10:00AM</a>
  <a>Miami (US)</a>
  </span>
  <div className='w-[2px] bg-white'></div>

  {/* Horse Race 3 */}
  <span className='sirf text-white mt-1 -px-10 flex flex-col font-bold'>
  <a>11:15AM</a>
  <a>Orlando (US)</a>
  </span>
  <div className='w-[2px] bg-white'></div>

  {/* Horse Race 4 */}
  <span className='sirf text-white mt-1 -px-10 flex flex-col font-bold'>
    <a>11:15PM</a>
    <a>Brisbane(Au)</a>
  </span>
  <div className='w-[2px] bg-white'></div>

  {/* Horse Race 5 */}
  <span className='sirf text-white mt-1 -px-10 flex flex-col font-bold'>
  <a>12:30PM</a>
  <a>Tampa (US)</a>
  </span>
  <div className='w-[2px] bg-white'></div>
  <span className='sirf text-white mt-1 -px-10 flex flex-col font-bold'>
    <a>9:30AM</a>
    <a>Adelaide(Au)</a>
  </span>
  <div className='w-[2px] bg-white'></div>
  <span className='sirf text-white mt-1 -px-10 flex flex-col font-bold'>
  <a>3:00PM</a>
  <a>St. Petersburg (US)</a>
  </span>
  <div className='w-[2px] bg-white'></div>
  <span className='sirf text-white mt-1 -px-10 flex flex-col font-bold'>
  <a>1:45PM</a>
    <a>Jacksonville (US)</a>
  </span>
  <div className='w-[2px] bg-white'></div>
   
</div>
<div className='flex w-full h-[90px] mt-1'>
  <div className='relative text-white h-[80px] w-[80px] mx-2 flex items-center justify-center ng cursor-pointer' onClick={handleinplayvisble}>
    <div className='mb-14 ml-14 font-serif'>
      <p className='text-white'>2</p> 
    </div>
    <FontAwesomeIcon icon={faClock} className='absolute top-8' size='1x' />
    <h3 className='absolute bottom-0 font-serif fo -my-1'>Inplay</h3>
  </div>
  <div className={`relative text-white h-[80px] w-[80px] flex items-center justify-center ${cricketvisible ? 'bg-black' : 'codo'}  cursor-pointer`} onClick={handlecricketvisble}>

    <div className='mb-14 ml-14 font-serif'>
      <p className='text-white'>7</p> 
    </div>
    <img src={cricket} className='absolute top-6 h-8 w-9' />
    <h3 className='absolute bottom-0 fo -my-1 font-serif'>Cricket</h3>
  </div>
  <div className={`relative text-white h-[80px] w-[80px] mx-2  flex items-center justify-center ${tennisvisible ? 'bg-black' : 'codo'}  cursor-pointer`} onClick={handletennisvisible}>
    <div className='mb-14 ml-14 font-serif'>
      <p className='text-white'>3</p> 
    </div>
    <img src={tennis} className='absolute top-6 h-8 w-9' />
    <h3 className='absolute bottom-0 font-serif fo -my-1'>Tennis</h3>
  </div>
  <div className={`relative text-white h-[80px] w-[80px]  flex items-center justify-center ${footballvisible ? 'bg-black' : 'codo'}  cursor-pointer`} onClick={handlefootballvisble}>
    <div className='mb-14 ml-14 font-serif'>
      <p className='text-white'>{events.length}</p> 
    </div>
    <img src={football}className='absolute top-6 h-8 w-9'/>
    <h3 className='absolute bottom-0 font-serif fo -my-1'>Scoccer</h3>
  </div>
</div>

{
  footballvisible&&(
    <>
    <div className='h-10 w-full yekyatha -my-2 flex'>
        <div className='mx-2 flex'>
          <img src={football2} className='h-8 w-8 my-0' />
          <h4 className='text-black my-1 font-bold font-xs'>Football</h4>
        </div>
        <div className='flex'>
          <h6 className='text-black my-1 font-bold font-xs mx-[390px]'>Matched</h6>
        </div>
        <div className='flex'>
          <h6 className='font-xs text-black font-bold my-1 -mx-60'>1</h6>
        </div>
        <div className='flex'>
          <h6 className='font-xs text-black font-bold my-1 -mx-20'>X</h6>
        </div>
        <div className='flex'>
          <h6 className='font-xs text-black font-bold mx-24 my-1'>2</h6>
        </div>
      </div>
   {
   events.map((foot, index) => (
    <div key={index} className='daga w-full h-auto flex items-center border-b-[1px] border-gray-300'>
      <div className='yekyatha h-14 w-14 mx-1 font-xs px-2 py-1 font-seri  text-[15px]'>
        <h6>Today</h6>
        <h6 className='-mx-2 whitespace-nowrap'>{formatTime(foot.startTime)}</h6>
      </div>
      <div className='mx-2 roboto-thin text-[14px] font-semibold'>
        <h2 className='whitespace-nowrap w-[130px]'>{`${foot.participant1} V ${foot.participant2}`}</h2>
      </div>
      <div className='mx-64 flex items-center'>
        <img src={dbm} className='h-21 w-11'/>
        <h6 className='ml-1 font-semibold w-[100px]'>553,225</h6>
      </div>
      <div className='h-[60px] w-[80px] colorof -mx-52'>
        <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>1.84</h6>
        <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>167</h6>
      </div>
      <div className='h-[60px] w-[80px] colorof2 mx-[212px]'>
        <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>5.40</h6>
        <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>6214</h6>
      </div>
      <div className='faa h-[55px] w-[90px] translate-y-[2px] -mx-28'></div>
      <div className='h-[60px] w-[80px] colorof mx-[124px]'>
        <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>1.75</h6>
        <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>210k</h6>
      </div>
      <div className='h-[60px] w-[80px] colorof2 -mx-[120px]'>
        <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>7.23</h6>
        <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>650k</h6>
      </div>
      <FontAwesomeIcon icon={faCircleInfo} className='mx-[135px] h-5' />
    </div>
  ))

}

    </>
  )
}
{tennisvisible&&(
  <>
  
  <div className='h-10 w-full yekyatha -my-2 flex'>
        <div className='mx-2 flex'>
          <img src={tennis} className='h-8 w-8 my-0 ' />
          <h4 className='text-black my-1 font-bold font-xs mx-2'>Tennis</h4>
        </div>
        <div className='flex'>
          <h6 className='text-black my-1 font-bold font-xs mx-[390px]'>Matched</h6>
        </div>
        <div className='flex'>
          <h6 className='font-xs text-black font-bold my-1 -mx-60'>1</h6>
        </div>
        <div className='flex'>
          <h6 className='font-xs text-black font-bold my-1 -mx-20'>X</h6>
        </div>
        <div className='flex'>
          <h6 className='font-xs text-black font-bold mx-24 my-1'>2</h6>
        </div>
      </div>
     

<div className='daga w-full h-auto flex items-center border-b-[1px] border-gray-300'>
  <div className='yekyatha h-14 w-14 mx-1 font-xs px-2 py-1 font-serif text-[15px]'>
    <h6>Today</h6>
    <h6 className='mx-1'>10:30</h6>
  </div>
  <div className='mx-2 roboto-thin text-[15px]'>
    <h2 className='whitespace-nowrap w-[130px]'>Ja Draper v De Minaur</h2>
  </div>
  <div className='mx-64 flex items-center '>
    <img src={dbm} className='h-21 w-11'/>
    <h6 className='ml-1 font-semibold w-[100px] '>6,587,239</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof -mx-52'>
    <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>1.88</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>3668</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof2 mx-[212px] '>
    <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>2.40</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>4214</h6>
  </div>
  <div className='faa h-[55px] w-[90px] translate-y-[2px] -mx-28'></div>
  <div className=' h-[60px] w-[80px] colorof mx-[124px]'>
    <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>1.75</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>410k</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof2 -mx-[120px]'>
    <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>7.23</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>650k</h6>
  </div>
  <FontAwesomeIcon icon={faCircleInfo} className='mx-[135px] h-5'  />
</div>
<div className='daga w-full h-auto flex items-center border-b-[1px] border-gray-300'>
  <div className='yekyatha h-14 w-14 mx-1 font-xs px-2 py-1 font-serif text-[15px]'>
    <h6>Today</h6>
    <h6 className='mx-1'>12:00</h6>
  </div>
  <div className='mx-2 roboto-thin text-[15px]'>
    <h2 className='whitespace-nowrap w-[130px]'>Iga Swiatek v J Pegula</h2>
  </div>
  <div className='mx-64 flex items-center'>
    <img src={dbm} className='h-21 w-11'/>
    <h6 className='ml-1 font-semibold w-[100px] '>5,432,123</h6>
  </div>
  <div className='h-[60px] w-[80px] colorof -mx-52'>
    <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>2.05</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>2890</h6>
  </div>
  <div className='h-[60px] w-[80px] colorof2 mx-[212px]'>
    <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>1.75</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>3456</h6>
  </div>
  <div className='faa h-[55px] w-[90px] translate-y-[2px] -mx-28'></div>
  <div className='h-[60px] w-[80px] colorof mx-[124px]'>
    <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>1.65</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>500k</h6>
  </div>
  <div className='h-[60px] w-[80px] colorof2 -mx-[120px]'>
    <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>5.00</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>600k</h6>
  </div>
  <FontAwesomeIcon icon={faCircleInfo} className='mx-[135px] h-5'/>
</div>

<div className='daga w-full h-auto flex items-center border-b-[1px] border-gray-300'>
  <div className='yekyatha h-14 w-14 mx-1 font-xs px-2 py-1 font-serif text-[15px]'>
    <h6>Today</h6>
    <h6 className='mx-1'>15:00</h6>
  </div>
  <div className='mx-2 roboto-thin text-[15px]'>
    <h2 className='whitespace-nowrap w-[130px]'>Sinner v Medvedev</h2>
  </div>
  <div className='mx-64 flex items-center'>
    <img src={dbm} className='h-21 w-11'/>
    <h6 className='ml-1 font-semibold w-[100px] '>7,123,456</h6>
  </div>
  <div className='h-[60px] w-[80px] colorof -mx-52'>
    <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>3.10</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>4567</h6>
  </div>
  <div className='h-[60px] w-[80px] colorof2 mx-[212px]'>
    <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>1.60</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>3567</h6>
  </div>
  <div className='faa h-[55px] w-[90px] translate-y-[2px] -mx-28'></div>
  <div className='h-[60px] w-[80px] colorof mx-[124px]'>
    <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>2.00</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>700k</h6>
  </div>
  <div className='h-[60px] w-[80px] colorof2 -mx-[120px]'>
    <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>6.50</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>800k</h6>
  </div>
  <FontAwesomeIcon icon={faCircleInfo} className='mx-[135px] h-5'/>
</div>
  
  </>
)}

{cricketvisible && (
  <>
        <div className='h-10 w-full yekyatha -my-2 flex'>
        <div className='mx-2 flex'>
          <img src={cricket2} className='h-8 w-8 my-0' />
          <h4 className='text-black my-1 font-bold font-xs'>Cricket</h4>
        </div>
        <div className='flex'>
          <h6 className='text-black my-1 font-bold font-xs mx-[390px]'>Matched</h6>
        </div>
        <div className='flex'>
          <h6 className='font-xs text-black font-bold my-1 -mx-60'>1</h6>
        </div>
        <div className='flex'>
          <h6 className='font-xs text-black font-bold my-1 -mx-20'>X</h6>
        </div>
        <div className='flex'>
          <h6 className='font-xs text-black font-bold mx-24 my-1'>2</h6>
        </div>
      </div>
      <div className='daga w-full h-auto flex items-center border-b-[1px] border-gray-300'>
  <div className='yekyatha h-14 w-14 mx-1 font-xs px-2 py-1 font-serif text-[15px]'>
    <h6>Today</h6>
    <h6 className='mx-1'>5:30</h6>
  </div>
  <div className='mx-2 roboto-thin text-[15px]'>
    <h2 className='whitespace-nowrap w-[130px]'>Northamptonshire v Somerset</h2>
  </div>
  <div className='mx-64 flex items-center '>
    <img src={dbm} className='h-21 w-11'/>
    <h6 className='ml-1 font-semibold w-[100px] '>4,587,239</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof -mx-52'>
    <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>17.88</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>328</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof2 mx-[212px] '>
    <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>23.40</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>421</h6>
  </div>
  <div className='faa h-[55px] w-[90px] translate-y-[2px] -mx-28'></div>
  <div className=' h-[60px] w-[80px] colorof mx-[124px]'>
    <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>1.15</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>110k</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof2 -mx-[120px]'>
    <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>1.23</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>250k</h6>
  </div>
  <FontAwesomeIcon icon={faCircleInfo} className='mx-[135px] h-5'  />
</div>

<div className='daga w-full h-auto flex items-center border-b-[1px] border-gray-300'>
  <div className='yekyatha h-14 w-14 mx-1 font-xs px-2 py-1 font-serif text-[15px]'>
    <h6>6-9</h6>
    <h6 className='mx-1'>7:00</h6>
  </div>
  <div className='mx-2 roboto-thin text-[15px]'>
    <h2 className='w-[130px] whitespace-nowrap'>England v Sri Lanka</h2>
  </div>
  <div className='mx-64 flex items-center '>
    <img src={dbm} className='h-21 w-11'/>
    <h6 className='ml-1 font-semibold w-[100px] '>2,764,871</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof -mx-52'>
    <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>12.45</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>190</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof2 mx-[212px] '>
    <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>18.30</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>315</h6>
  </div>
  <div className='faa h-[55px] w-[90px] translate-y-[2px] -mx-28'></div>
  <div className=' h-[60px] w-[80px] colorof mx-[124px]'>
    <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>1.08</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>95k</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof2 -mx-[120px]'>
    <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>1.18</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>225k</h6>
  </div>
  <FontAwesomeIcon icon={faCircleInfo} className='mx-[135px] h-5'  />
</div>

<div className='daga w-full h-auto flex items-center border-b-[1px] border-gray-300'>
  <div className='yekyatha h-14 w-14 mx-1 font-xs px-2 py-1 font-serif text-[15px]'>
    <h6>6-9</h6>
    <h6 className='mx-1'>6:30</h6>
  </div>
  <div className='mx-2 roboto-thin text-[15px]'>
    <h2 className='w-[130px] whitespace-nowrap'>Scotland v Australia</h2>
  </div>
  <div className='mx-64 flex items-center '>
    <img src={dbm} className='h-21 w-11'/>
    <h6 className='ml-1 font-semibold w-[100px] '>1,897,546</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof -mx-52'>
    <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>10.33</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>25</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof2 mx-[212px] '>
    <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>14.27</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>305</h6>
  </div>
  <div className='faa h-[55px] w-[90px] translate-y-[2px] -mx-28'></div>
  <div className=' h-[60px] w-[80px] colorof mx-[124px]'>
    <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>1.11</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>85k</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof2 -mx-[120px]'>
    <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>1.14</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>210k</h6>
  </div>
  <FontAwesomeIcon icon={faCircleInfo} className='mx-[135px] h-5'  />
</div>
<div className='daga w-full h-auto flex items-center border-b-[1px] border-gray-300'>
  <div className='yekyatha h-14 w-14 mx-1 font-xs px-2 py-1 font-serif text-[15px]'>
    <h6>10-14</h6>
    <h6 className='mx-1'>8:15</h6>
  </div>
  <div className='mx-2 roboto-thin text-[15px]'>
    <h2 className='w-[130px] whitespace-nowrap'>Ireland Women v England Women</h2>
  </div>
  <div className='mx-64 flex items-center '>
    <img src={dbm} className='h-21 w-11'/>
    <h6 className='ml-1 font-semibold w-[100px] '>2,345,678</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof -mx-52'>
    <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>11.45</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>150</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof2 mx-[212px] '>
    <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>17.00</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>320</h6>
  </div>
  <div className='faa h-[55px] w-[90px] translate-y-[2px] -mx-28'></div>
  <div className=' h-[60px] w-[80px] colorof mx-[124px]'>
    <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>1.25</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>105k</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof2 -mx-[120px]'>
    <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>1.30</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>250k</h6>
  </div>
  <FontAwesomeIcon icon={faCircleInfo} className='mx-[135px] h-5'  />
</div>
<div className='daga w-full h-auto flex items-center border-b-[1px] border-gray-300'>
  <div className='yekyatha h-14 w-14 mx-1 font-xs px-2 py-1 font-serif text-[15px]'>
    <h6>5-9</h6>
    <h6 className='mx-1'>7:00</h6>
  </div>
  <div className='mx-2 roboto-thin text-[15px]'>
    <h2 className='w-[130px] whitespace-nowrap'>Warwickshire v Gloucestershire</h2>
  </div>
  <div className='mx-64 flex items-center '>
    <img src={dbm} className='h-21 w-11'/>
    <h6 className='ml-1 font-semibold w-[100px] '>1,234,567</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof -mx-52'>
    <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>12.15</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>175</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof2 mx-[212px] '>
    <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>18.45</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>290</h6>
  </div>
  <div className='faa h-[55px] w-[90px] translate-y-[2px] -mx-28'></div>
  <div className=' h-[60px] w-[80px] colorof mx-[124px]'>
    <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>1.20</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>95k</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof2 -mx-[120px]'>
    <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>1.22</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>220k</h6>
  </div>
  <FontAwesomeIcon icon={faCircleInfo} className='mx-[135px] h-5'  />
</div>

<div className='daga w-full h-auto flex items-center border-b-[1px] border-gray-300'>
  <div className='yekyatha h-14 w-14 mx-1 font-xs px-2 py-1 font-serif text-[15px]'>
    <h6>7-12</h6>
    <h6 className='mx-1'>9:00</h6>
  </div>
  <div className='mx-2 roboto-thin text-[15px]'>
    <h2 className='w-[130px] whitespace-nowrap'>Kitts and Nevis Patriots v Barbados Royals</h2>
  </div>
  <div className='mx-64 flex items-center '>
    <img src={dbm} className='h-21 w-11'/>
    <h6 className='ml-1 font-semibold w-[100px] '>3,456,789</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof -mx-52'>
    <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>10.00</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>200</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof2 mx-[212px] '>
    <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>16.30</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>315</h6>
  </div>
  <div className='faa h-[55px] w-[90px] translate-y-[2px] -mx-28'></div>
  <div className=' h-[60px] w-[80px] colorof mx-[124px]'>
    <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>1.15</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>120k</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof2 -mx-[120px]'>
    <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>1.28</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>230k</h6>
  </div>
  <FontAwesomeIcon icon={faCircleInfo} className='mx-[135px] h-5'  />
</div>

<div className='daga w-full h-auto flex items-center border-b-[1px] border-gray-300'>
  <div className='yekyatha h-14 w-14 mx-1 font-xs px-2 py-1 font-serif text-[15px]'>
    <h6>12-15</h6>
    <h6 className='mx-1'>8:45</h6>
  </div>
  <div className='mx-2 roboto-thin text-[15px]'>
    <h2 className='w-[130px] whitespace-nowrap'>Afghanistan v New Zealand</h2>
  </div>
  <div className='mx-64 flex items-center '>
    <img src={dbm} className='h-21 w-11'/>
    <h6 className='ml-1 font-semibold w-[100px] '>2,678,543</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof -mx-52'>
    <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>13.00</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>190</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof2 mx-[212px] '>
    <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>19.00</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>330</h6>
  </div>
  <div className='faa h-[55px] w-[90px] translate-y-[2px] -mx-28'></div>
  <div className=' h-[60px] w-[80px] colorof mx-[124px]'>
    <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>1.22</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>110k</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof2 -mx-[120px]'>
    <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>1.29</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>240k</h6>
  </div>
  <FontAwesomeIcon icon={faCircleInfo} className='mx-[135px] h-5'  />
</div>




 

</>
)}
  <>

    {inplayvisible && (
      <>
        <div className='h-10 w-full yekyatha -my-2 flex '>
          <div className='mx-2 flex'>
            <img src={cricket2} className='h-8 w-8 my-0' />
            <h4 className='text-black my-1 font-bold font-xs'>Cricket</h4>
          </div>
          <div className='flex'>
            <h6 className='text-black my-1 font-bold font-xs mx-[390px]'>Matched</h6>
          </div>
          <div className='flex'>
            <h6 className='font-xs text-black font-bold my-1 -mx-60'>1</h6>
          </div>
          <div className='flex'>
            <h6 className='font-xs text-black font-bold my-1 -mx-20'>x</h6>
          </div>
          <div className='flex'>
            <h6 className='font-xs text-black font-bold mx-10 my-1'>2</h6>
          </div>
        </div>

        
        
        <div className='h-10 w-full yekyatha flex my-3'>
          <div className='mx-2 flex'>
            <img src={football2} className='h-8 w-8 my-0' />
            <h4 className='text-black my-1 font-bold font-xs'>Football</h4>
          </div>
          <div className='flex'>
            <h6 className='text-black my-1 font-bold font-xs mx-96'>Matched</h6>
          </div>
          <div className='flex'>
            <h6 className='font-xs text-black font-bold my-1 -mx-[236px]'>1</h6>
          </div>
          <div className='flex'>
            <h6 className='font-xs text-black font-bold my-1 -mx-[75px]'>x</h6>
          </div>
          <div className='flex'>
            <h6 className='font-xs text-black font-bold mx-11 my-1'>2</h6>
          </div>
        </div>
        {/* {footballdata.map((foot)=>(
  
<div key={foot.eventId} className='daga w-full h-auto flex items-center border-b-[1px] border-gray-300'>

<div className='yekyatha h-14 w-14 mx-1 font-xs px-2 py-1 font-serif text-[15px]  '>
  <h6>Today</h6>
  <h6 className='-mx-2 whitespace-nowrap '>{formatTime(foot.time)}</h6>
</div>
<div className='mx-2 roboto-thin text-[15px]'>
  <Link to={`/alldata/${foot.eventId}`}>
  <h2 className='whitespace-nowrap w-[130px] cursor-pointer' >{`${foot.participant1
}V${foot.participant2
}`}</h2>
  </Link>
</div>
<div className='mx-64 flex items-center '>
  <img src={dbm} className='h-21 w-11'/>
  <h6 className='ml-1 font-semibold w-[100px] '>553,225</h6>
</div>
<div className=' h-[60px] w-[80px] colorof -mx-52'>
  <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>1.84</h6>
  <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>167</h6>
</div>
<div className=' h-[60px] w-[80px] colorof2 mx-[212px] '>
  <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>5.40</h6>
  <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>6214</h6>
</div>
<div className='faa h-[55px] w-[90px] translate-y-[2px] -mx-28'></div>
<div className=' h-[60px] w-[80px] colorof mx-[124px]'>
  <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>1.75</h6>
  <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>210k</h6>
</div>
<div className=' h-[60px] w-[80px] colorof2 -mx-[120px]'>
  <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>7.23</h6>
  <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>650k</h6>
</div>
<FontAwesomeIcon icon={faCircleInfo} className='mx-[135px] h-5'  />
</div>
        ))} */}

        <div className='h-10 w-full yekyatha -my-0 flex'>
          <div className='mx-2 flex'>
            <img src={tennis} className='h-8 w-8 my-0 mx-1' />
            <h4 className='text-black my-1 font-bold font-xs'>Tennis</h4>
          </div>
          <div className='flex'>
            <h6 className='text-black my-1 font-bold font-xs mx-[390px]'>Matched</h6>
          </div>
          <div className='flex'>
            <h6 className='font-xs text-black font-bold my-1 -mx-60'>1</h6>
          </div>
          <div className='flex'>
            <h6 className='font-xs text-black font-bold my-1 -mx-20'>x</h6>
          </div>
          <div className='flex'>
            <h6 className='font-xs text-black font-bold mx-10 my-1'>2</h6>
          </div>
         

        </div>
        <div className='daga w-full h-auto flex items-center border-b-[1px] border-gray-300'>
  <div className='yekyatha h-14 w-14 mx-1 font-xs px-2 py-1 font-serif text-[15px]'>
    <h6>Today</h6>
    <h6 className='mx-1'>10:30</h6>
  </div>
  <div className='mx-2 roboto-thin text-[15px]'>
    <h2 className='whitespace-nowrap w-[130px]'>Ja Draper v De Minaur</h2>
  </div>
  <div className='mx-64 flex items-center '>
    <img src={dbm} className='h-21 w-11'/>
    <h6 className='ml-1 font-semibold w-[100px] '>6,587,239</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof -mx-52'>
    <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>1.88</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>3668</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof2 mx-[212px] '>
    <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>2.40</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>4214</h6>
  </div>
  <div className='faa h-[55px] w-[90px] translate-y-[2px] -mx-28'></div>
  <div className=' h-[60px] w-[80px] colorof mx-[124px]'>
    <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>1.75</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>410k</h6>
  </div>
  <div className=' h-[60px] w-[80px] colorof2 -mx-[120px]'>
    <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>7.23</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>650k</h6>
  </div>
  <FontAwesomeIcon icon={faCircleInfo} className='mx-[135px] h-5'  />
</div>
<div className='daga w-full h-auto flex items-center border-b-[1px] border-gray-300'>
  <div className='yekyatha h-14 w-14 mx-1 font-xs px-2 py-1 font-serif text-[15px]'>
    <h6>Today</h6>
    <h6 className='mx-1'>12:00</h6>
  </div>
  <div className='mx-2 roboto-thin text-[15px]'>
    <h2 className='whitespace-nowrap w-[130px]'>Iga Swiatek v J Pegula</h2>
  </div>
  <div className='mx-64 flex items-center'>
    <img src={dbm} className='h-21 w-11'/>
    <h6 className='ml-1 font-semibold w-[100px] '>5,432,123</h6>
  </div>
  <div className='h-[60px] w-[80px] colorof -mx-52'>
    <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>2.05</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>2890</h6>
  </div>
  <div className='h-[60px] w-[80px] colorof2 mx-[212px]'>
    <h6 className='font-bold text-[19px] px-6 py-1 font-sans'>1.75</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>3456</h6>
  </div>
  <div className='faa h-[55px] w-[90px] translate-y-[2px] -mx-28'></div>
  <div className='h-[60px] w-[80px] colorof mx-[124px]'>
    <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>1.65</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>500k</h6>
  </div>
  <div className='h-[60px] w-[80px] colorof2 -mx-[120px]'>
    <h6 className='font-bold text-[19px] px-5 py-1 font-sans'>5.00</h6>
    <h6 className='px-6 translate-y-[-3px] text-[15px] font-semibold'>600k</h6>
  </div>
  <FontAwesomeIcon icon={faCircleInfo} className='mx-[135px] h-5'/>
</div>


      </>
    )}
  </>




      </div>
      
    
     
      </div>
      
    </>
  );
};

export default Home;