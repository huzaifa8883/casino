import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faSortDown, faFutbol, faStar,faBars, faStarOfDavid, faEarthAmericas, faYinYang, faBold, faC, faClipboard, faFileSignature,faCircleChevronLeft,faClock,faCircleChevronRight,faCircleInfo, faCross, faTimes } from '@fortawesome/free-solid-svg-icons';
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
import { useRef } from 'react';
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
  const [scoceerdata, setscoceerdata] = useState([])
  const [cricketdata, setcricketdata] = useState([])
   const [Tennisdata, setTennisdata] = useState([])
  const [horsedata, sethorsedata] = useState([])
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 6));
  const [startIndex, setStartIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0)
  const [visibleItems, setVisibleItems] = useState([]);
  const [cricketvisible, setcricketvisible] = useState(false)
  const [inplayvisible, setinplayvisible] = useState(true)
  const [index, setIndex] = useState(0);
  const [oddsData, setOddsData] = useState({
    bookmakers: {
      draftkings: { odds1: "1.50" },
      ladbrokes: { odds2: "2.00" },
      bet365: { odds3: "3.00" },
      pinnacle: { odds4: "4.00" }
    }
  });
  const [stats, setStats] = useState({
    stat1: { value: 1.84, count: 167 },
    stat2: { value: 5.40, count: 6214 },
    stat3: { value: 1.75, count: 210000 },
    stat4: { value: 7.23, count: 650000 },
  });




  const [tennisvisible, settennisvisible] = useState(false)
  const [footballvisible, setfootballvisible] = useState(false)
  
const [slotgames, setslotgames] = useState([])
const [showBacking2, setShowBacking2] = useState(false);
const [toggle, settoggle] = useState(false)
const [showBacking, setShowBacking] = useState(false);
const [showBacking3, setShowBacking3] = useState(false);
const [showBacking4, setShowBacking4] = useState(false);
const [showBacking5, setShowBacking5] = useState(false);
const [footballdata, setfootballdata] = useState(null)
const scrollContainer = useRef(null);
const scrollContainer2 = useRef(null);


const generateRandomOdds = () => {
  return {
    bookmakers: {
      draftkings: { odds1: (Math.random() * (2.5 - 1) + 1).toFixed(2) },
      ladbrokes: { odds2: (Math.random() * (3 - 1) + 1).toFixed(2) },
      bet365: { odds3: (Math.random() * (3.5 - 1.2) + 1.2).toFixed(2) },
      pinnacle: { odds4: (Math.random() * (4 - 1.5) + 1.5).toFixed(2) }
    }
  };
};

useEffect(() => {
  const interval = setInterval(() => {
    setOddsData(generateRandomOdds());
  }, Math.random() * (5000 - 3000) + 3000); // Random time between 3-5 seconds

  return () => clearInterval(interval); // Clean up interval on component unmount
}, []);
useEffect(() => {
  const intervalId = setInterval(() => {
    // Randomizing the values for demonstration, you can replace with actual logic
    setStats((prevStats) => ({
      stat1: { value: (Math.random() * 10).toFixed(2), count: Math.floor(Math.random() * 1000) },
      stat2: { value: (Math.random() * 10).toFixed(2), count: Math.floor(Math.random() * 10000) },
      stat3: { value: (Math.random() * 10).toFixed(2), count: Math.floor(Math.random() * 100000) },
      stat4: { value: (Math.random() * 10).toFixed(2), count: Math.floor(Math.random() * 1000000) },
    }));
  }, 4000); // 4 seconds

  // Cleanup the interval on component unmount
  return () => clearInterval(intervalId);
}, []);

const handleScroll = (direction) => {
  if (direction === 'left') {
    scrollContainer.current.scrollLeft -= 100; // Adjust the value as needed
  } else if (direction === 'right') {
    scrollContainer.current.scrollLeft += 100; // Adjust the value as needed
  }
};


const handleScroll2 = (direction) => {
  if (direction === 'left') {
    scrollContainer2.current.scrollLeft -= 100; // Adjust the value as needed
  } else if (direction === 'right') {
    scrollContainer2.current.scrollLeft += 100; // Adjust the value as needed
  }
};

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





const togglingbars = ()=>{
  settoggle((prev) => !prev);

}
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
  
  const formatEventTime = (dateString, timeString) => {
    // Check if timeString is a Unix timestamp (number)
    let time = timeString;
    if (typeof time === 'number') {
      // Convert Unix timestamp to Date object
      const timestamp = new Date(time * 1000); // Convert from seconds to milliseconds
      time = timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}); // Format the time as HH:MM AM/PM
    } else if (typeof time !== 'string') {
      console.error("Invalid time format:", time);
      return ""; // Return empty string if the time is invalid
    }
  
    const eventDate = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
  
    // Format the event date to check if it's today or tomorrow
    const isToday = eventDate.toDateString() === today.toDateString();
    const isTomorrow = eventDate.toDateString() === tomorrow.toDateString();
  
    // Split the time into hours and minutes
    const timeParts = time.split(':');
    const hour = parseInt(timeParts[0]);
    const minute = timeParts[1];
    // const suffix = hour >= 12 ? 'PM' : 'AM';
    const formattedTime = `${(hour % 12) || 12}:${minute}`;
  
    // Return the formatted date and time based on the condition
    if (isToday) {
      return `Today ${formattedTime}`;
    } else if (isTomorrow) {
      return `Tomorrow ${formattedTime}`;
    } else {
      return `${eventDate.toLocaleDateString()} ${formattedTime}`;
    }
  };
  
  
  
  
  

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

  useEffect(() => {
    const fetchscocerdata = async () => {
      const options = {
        method: 'GET',
        url: 'https://odds-api1.p.rapidapi.com/events',
        params: {
          tournamentId: '17',
          media: 'false',
        },
        headers: {
          'x-rapidapi-key': '68a0f6ee5emsh0ef68a20c1c00f6p1aa6f1jsn1cdab568dceb',
          'x-rapidapi-host': 'odds-api1.p.rapidapi.com'
        }
      
      };
  
      try {
        const response = await axios.request(options);
        console.log("Fetched Events:", response.data.events);
  
        // Convert the events object into an array
        const eventsArray = Object.values(response.data.events);
        
        setscoceerdata(eventsArray); // Set the fetched data
      } catch (err) {
        console.error('Error fetching data:', err);
        setscoceerdata([]); // Fallback if error occurs
      }
    };
  
    fetchscocerdata();
  }, []);
  
  
  // Debugging the scoceerdata state
  useEffect(() => {
    console.log("Current scoceerdata state:", scoceerdata); // Log scoceerdata state whenever it updates
  }, [scoceerdata]);
  

  //  const fetchOddsData = async () => {
  //   const options = {
  //     method: "GET",
  //     url: "https://odds-api1.p.rapidapi.com/odds",
  //     params: {
  //       eventId: "id1000001750850429", // Example eventId, replace with dynamic data if necessary
  //       bookmakers: "bet365,pinnacle,draftkings,betsson,ladbrokes",
  //       oddsFormat: "decimal",
  //       raw: "false",
  //     },
  //     headers: {
  //       "x-rapidapi-key": "1dfe71a0d0msh8227b831ac1d2d0p11eab9jsn29d73fad8d01", // Add your API key here
  //       "x-rapidapi-host": "odds-api1.p.rapidapi.com",
  //     },
  //   };

  //   try {
  //     const response = await axios.request(options);
  //     console.log(response.data); // Log the data to see the structure
  //     setOddsData(response.data); // Save the odds data to state
  //   } catch (error) {
  //     console.error("Error fetching odds:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchOddsData(); // Fetch odds data when component mounts
  // }, []);
useEffect(() => {
const fetchcricketdata = async()=>{
  const options = {
    method: 'GET',
    url: 'https://1xbet-api.p.rapidapi.com/matches',
     params: {
    sport_id: '66',
    league_id: '1119627',
    mode: 'line',
    lng: 'en'
  },
  headers: {
    'x-rapidapi-key': '68a0f6ee5emsh0ef68a20c1c00f6p1aa6f1jsn1cdab568dceb',
    'x-rapidapi-host': '1xbet-api.p.rapidapi.com'
  }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data.data);
    setcricketdata(response.data.data)
  } catch (error) {
    console.error(error);
  }
}
fetchcricketdata()
},[]);
useEffect(() => {
  const fetchcricketdata = async()=>{
    const options = {
      method: 'GET',
      url: 'https://1xbet-api.p.rapidapi.com/matches',
       params: {
      sport_id: '4',
      league_id: '294910',
      mode: 'line',
      lng: 'en'
    },
    headers: {
      'x-rapidapi-key': '68a0f6ee5emsh0ef68a20c1c00f6p1aa6f1jsn1cdab568dceb',
      'x-rapidapi-host': '1xbet-api.p.rapidapi.com'
    }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data.data);
      setTennisdata(response.data.data)
    } catch (error) {
      console.error(error);
    }
  }
  fetchcricketdata()
  },[]);

function formatTimestamp(timestamp) {
  const date = new Date(timestamp * 1000); // Convert from Unix timestamp to JS Date object
  const now = new Date();
  
  // Check if it's today
  const isToday = date.toDateString() === now.toDateString();
  const isTomorrow = date.getDate() === now.getDate() + 1 && date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
  
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;

  if (isToday) {
    return `Today ${formattedTime}`;
  }
  if (isTomorrow) {
    return `Tomorrow ${formattedTime}`;
  }

  return date.toDateString() + ' ' + formattedTime; // If neither today nor tomorrow, show the full date
}


  return (
    <>
    <div className=' overflow-x-hidden'>
    
    <div  className={`grid grid-cols-[1fr_auto]  h-auto gap-4  `}>
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






        <div className="flex w-full h-auto mt-2 mx-1 overflow-x-hidden snap-x snap-mandatory">
  {visibleImages.map((image, index) => (
    <div key={index} className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] lg:h-[242px] lg:w-[242px] flex-shrink-0 snap-center">
      <img src={image} className="h-full w-full object-cover" alt="casino" />
    </div>
  ))}
</div>


       
<div className='flex mt-10 px-10'>
  <img src={horse2} className='h-5 w-5' />
  <span className='text-black font-semibold mx-2 fontt'>
    <h4>Horse Race</h4>
  </span>
</div>

<div className='flex mt-1 mx-2 px-2 h-12 w-full items-center relative back'>
  {/* Chevron Left */}
  <span className='my-2 cursor-pointer' onClick={() => handleScroll('left')}>
    <FontAwesomeIcon icon={faCircleChevronLeft} color='skyblue' />
  </span>

  {/* Horse Race Data (with scrolling) */}
  <div ref={scrollContainer} className='flex flex-nowrap gap-5 overflow-x-hidden scroll-smooth'>
    <span className='sirf text-white mt-1 px-2 flex flex-col font-bold items-center'>
      <a>8:10PM</a>
      <a>Canberra(Au)</a>
    </span>
    <div className='w-[2px] bg-white my-auto'></div>

    {/* Horse Race 2 */}
    <span className='sirf text-white mt-1 px-2 flex flex-col font-bold items-center'>
      <a>9:30PM</a>
      <a>Melbourne(Au)</a>
    </span>
    <div className='w-[2px] bg-white my-auto'></div>

    {/* Horse Race 3 */}
    <span className='sirf text-white mt-1 px-2 flex flex-col font-bold items-center'>
      <a>10:00PM</a>
      <a>Sydney(As)</a>
    </span>
    <div className='w-[2px] bg-white my-auto'></div>

    {/* Horse Race 4 */}
    <span className='sirf text-white mt-1 px-2 flex flex-col font-bold items-center'>
      <a>11:15PM</a>
      <a>Brisbane(Au)</a>
    </span>
    <div className='w-[2px] bg-white my-auto'></div>

    {/* Horse Race 5 */}
    <span className='sirf text-white mt-1 px-2 flex flex-col font-bold items-center'>
      <a>12:30AM</a>
      <a>Adelaide(Au)</a>
    </span>
    <div className='w-[2px] bg-white my-auto'></div>

    {/* More items */}
    <span className='sirf text-white mt-1 px-2 flex flex-col font-bold items-center'>
      <a>9:30AM</a>
      <a>Adelaide(Au)</a>
    </span>
    <div className='w-[2px] bg-white my-auto'></div>

    <span className='sirf text-white mt-1 px-2 flex flex-col font-bold items-center'>
      <a>7:30AM</a>
      <a>Adelaide(Au)</a>
    </span>
    <div className='w-[2px] bg-white my-auto'></div>

    <span className='sirf text-white mt-1 px-2 flex flex-col font-bold items-center'>
      <a>4:30AM</a>
      <a>Adelaide(Au)</a>
    </span>
    <div className='w-[2px] bg-white my-auto'></div>
  </div>

  {/* Chevron Right */}
  <span className='my-2 translate-x-[-3px] cursor-pointer md:hidden block' onClick={() => handleScroll('right')}>
    <FontAwesomeIcon icon={faCircleChevronRight} color='skyblue' />
  </span>

</div>






     
<div className='flex  mt-2 px-10'>
      <img src={greyhound2} className='h-5 w-5' />
      <span className='text-black font-semibold mx-2 fontt'>
<h4>GreyHound Race</h4>


      </span>
      </div>
      <div className='flex mt-1 mx-2 px-2 h-12 w-full items-center relative back'>
  {/* Chevron Left */}
  <span className='my-2 cursor-pointer' onClick={() => handleScroll2('left')}>
    <FontAwesomeIcon icon={faCircleChevronLeft} color='skyblue' />
  </span>

  {/* Horse Race Data (with scrolling) */}
  <div ref={scrollContainer2} className='flex flex-nowrap gap-5 overflow-x-hidden scroll-smooth'>
    <span className='sirf text-white mt-1 px-2 flex flex-col font-bold items-center'>
      <a>8:10PM</a>
      <a>Canberra(Au)</a>
    </span>
    <div className='w-[2px] bg-white my-auto'></div>

    {/* Horse Race 2 */}
    <span className='sirf text-white mt-1 px-2 flex flex-col font-bold items-center'>
      <a>9:30PM</a>
      <a>Melbourne(Au)</a>
    </span>
    <div className='w-[2px] bg-white my-auto'></div>

    {/* Horse Race 3 */}
    <span className='sirf text-white mt-1 px-2 flex flex-col font-bold items-center'>
      <a>10:00PM</a>
      <a>Sydney(As)</a>
    </span>
    <div className='w-[2px] bg-white my-auto'></div>

    {/* Horse Race 4 */}
    <span className='sirf text-white mt-1 px-2 flex flex-col font-bold items-center'>
      <a>11:15PM</a>
      <a>Brisbane(Au)</a>
    </span>
    <div className='w-[2px] bg-white my-auto'></div>

    {/* Horse Race 5 */}
    <span className='sirf text-white mt-1 px-2 flex flex-col font-bold items-center'>
      <a>12:30AM</a>
      <a>Adelaide(Au)</a>
    </span>
    <div className='w-[2px] bg-white my-auto'></div>

    {/* More items */}
    <span className='sirf text-white mt-1 px-2 flex flex-col font-bold items-center'>
      <a>9:30AM</a>
      <a>Adelaide(Au)</a>
    </span>
    <div className='w-[2px] bg-white my-auto'></div>

    <span className='sirf text-white mt-1 px-2 flex flex-col font-bold items-center'>
      <a>7:30AM</a>
      <a>Adelaide(Au)</a>
    </span>
    <div className='w-[2px] bg-white my-auto'></div>

    <span className='sirf text-white mt-1 px-2 flex flex-col font-bold items-center'>
      <a>4:30AM</a>
      <a>Adelaide(Au)</a>
    </span>
    <div className='w-[2px] bg-white my-auto'></div>
  </div>

  {/* Chevron Right */}
  <span className='my-2 translate-x-[-3px] cursor-pointer md:hidden block' onClick={() => handleScroll2('right')}>
    <FontAwesomeIcon icon={faCircleChevronRight} color='skyblue' />
  </span>

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
      <p className='text-white'>{cricketdata.length}</p> 
    </div>
    <img src={cricket} className='absolute top-6 h-8 w-9' />
    <h3 className='absolute bottom-0 fo -my-1 font-serif'>Cricket</h3>
  </div>
  <div className={`relative text-white h-[80px] w-[80px] mx-2  flex items-center justify-center ${tennisvisible ? 'bg-black' : 'codo'}  cursor-pointer`} onClick={handletennisvisible}>
    <div className='mb-14 ml-14 font-serif'>
      <p className='text-white'>{Tennisdata.length}</p> 
    </div>
    <img src={tennis} className='absolute top-6 h-8 w-9' />
    <h3 className='absolute bottom-0 font-serif fo -my-1'>Tennis</h3>
  </div>
  <div className={`relative text-white h-[80px] w-[80px]  flex items-center justify-center ${footballvisible ? 'bg-black' : 'codo'}  cursor-pointer`} onClick={handlefootballvisble}>
    <div className='mb-14 ml-14 font-serif'>
      <p className='text-white'>{scoceerdata.length}</p> 
    </div>
    <img src={football}className='absolute top-6 h-8 w-9'/>
    <h3 className='absolute bottom-0 font-serif fo -my-1'>Scoccer</h3>
  </div>
</div>


{
 footballvisible && (
  <>
    <div className="h-10 yekyatha w-full flex items-center px-2">
      {/* Left Section (Football Image and Name) */}
      <div className="flex items-center">
        <img src={cricket2} className="h-8 w-8" />
        <h4 className="text-black font-bold text-xs sm:text-sm ml-2">Football</h4>
      </div>

      {/* Middle Section (Matched Heading) */}
      <div className="flex-grow flex justify-center">
        <h6 className="text-black font-bold text-xs sm:text-sm">Matched</h6>
      </div>

      {/* Right Section (1, x, 2) */}
      <div className="flex space-x-2 sm:space-x-4">
        <h6 className="text-black font-bold text-xs sm:text-sm">1</h6>
        <h6 className="text-black font-bold text-xs sm:text-sm">X</h6>
        <h6 className="text-black font-bold text-xs sm:text-sm">2</h6>
      </div>
    </div>

    {scoceerdata.map((foot, index) => (
      <div key={index} className="daga w-full h-auto flex flex-wrap items-center border-b-[1px] border-gray-300">
        <div className="yekyatha h-14 w-full sm:w-16 mx-1 text-sm sm:text-sm px-4 py-1 font-serif">
          <h6>{formatEventTime(foot.date, foot.startTime)}</h6>
        </div>
        
        {/* Match info */}
        <div className="mx-2 roboto-thin text-[14px] font-semibold w-full sm:w-[130px] md:w-[130px]">
          <h2 className="whitespace-nowrap">{foot.participant1} V {foot.participant2}</h2>
        </div>

        {/* Image and Score */}
        <div className="mx-2 sm:mx-44 flex items-center w-full sm:w-auto justify-between sm:justify-start">
          <img src={dbm} className="h-16 w-8 sm:h-21 sm:w-11" />
          <h6 className="ml-1  font-semibold w-[100px] sm:w-[120px]">553,225</h6>
        </div>

        {/* First Stats Block */}
        <div className="h-[60px] w-[80px] colorof sm:mx-4 flex flex-col justify-center items-center">
        <h6 className="font-bold text-[19px] px-6 py-1 font-sans">{stats.stat1.value}</h6>
        <h6 className="px-6 translate-y-[-3px] text-[15px] font-semibold">{stats.stat1.count}</h6>
      </div>

      {/* Second Stats Block */}
      <div className="h-[60px] w-[80px] colorof2 sm:mx-4 flex flex-col justify-center items-center">
        <h6 className="font-bold text-[19px] px-6 py-1 font-sans">{stats.stat2.value}</h6>
        <h6 className="px-6 translate-y-[-3px] text-[15px] font-semibold">{stats.stat2.count}</h6>
      </div>

      {/* Third Stats Block */}
      <div className="h-[60px] w-[80px] colorof sm:mx-4 flex flex-col justify-center items-center">
        <h6 className="font-bold text-[19px] px-5 py-1 font-sans">{stats.stat3.value}</h6>
        <h6 className="px-6 translate-y-[-3px] text-[15px] font-semibold">{stats.stat3.count}</h6>
      </div>

      {/* Fourth Stats Block */}
      <div className="h-[60px] w-[80px] colorof2 sm:mx-4 flex flex-col justify-center items-center">
        <h6 className="font-bold text-[19px] px-5 py-1 font-sans">{stats.stat4.value}</h6>
        <h6 className="px-6 translate-y-[-3px] text-[15px] font-semibold">{stats.stat4.count}</h6>
      </div>

        {/* Info Icon */}
        <div className="sm:mx-4">
          <FontAwesomeIcon icon={faCircleInfo} className="h-5" />
        </div>
      </div>
    ))}
  </>
)

}





{tennisvisible&&(
  <>
  
  <div className="h-10 yekyatha w-full flex items-center px-2">
      {/* Left Section (Football Image and Name) */}
      <div className="flex items-center">
        <img src={cricket2} className="h-8 w-8" />
        <h4 className="text-black font-bold text-xs sm:text-sm ml-2">Tennis</h4>
      </div>

      {/* Middle Section (Matched Heading) */}
      <div className="flex-grow flex justify-center">
        <h6 className="text-black font-bold text-xs sm:text-sm">Matched</h6>
      </div>

      {/* Right Section (1, x, 2) */}
      <div className="flex space-x-2 sm:space-x-4">
        <h6 className="text-black font-bold text-xs sm:text-sm">1</h6>
        <h6 className="text-black font-bold text-xs sm:text-sm">X</h6>
        <h6 className="text-black font-bold text-xs sm:text-sm">2</h6>
      </div>
    </div>

    {Tennisdata.map((match, index) => (
      <div key={index} className="daga w-full h-auto flex flex-wrap items-center border-b-[1px] border-gray-300">
        <div className="yekyatha h-14 w-full sm:w-16 mx-1 text-sm sm:text-sm px-4 py-1 font-serif">
        <h6>{formatTimestamp(match.start_timestamp)}</h6>
        </div>
        
        {/* Match info */}
        <div className="mx-2 roboto-thin text-[14px] font-semibold w-full sm:w-[100px] md:w-[130px]">
          <h2 className="whitespace-nowrap">{match.home_team} v {match.away_team}</h2>
        </div>

        {/* Image and Score */}
        <div className="mx-2 sm:mx-52 flex items-center w-full sm:w-auto justify-between sm:justify-start">
          <img src={dbm} className="h-16 w-8 sm:h-21 sm:w-11" />
          <h6 className="ml-1  font-semibold w-[100px] sm:w-[120px]">553,225</h6>
        </div>

        {/* First Stats Block */}
        <div className="h-[60px] w-[80px] colorof sm:mx-4 flex flex-col justify-center items-center">
        <h6 className="font-bold text-[19px] px-6 py-1 font-sans">{stats.stat1.value}</h6>
        <h6 className="px-6 translate-y-[-3px] text-[15px] font-semibold">{stats.stat1.count}</h6>
      </div>

      {/* Second Stats Block */}
      <div className="h-[60px] w-[80px] colorof2 sm:mx-4 flex flex-col justify-center items-center">
        <h6 className="font-bold text-[19px] px-6 py-1 font-sans">{stats.stat2.value}</h6>
        <h6 className="px-6 translate-y-[-3px] text-[15px] font-semibold">{stats.stat2.count}</h6>
      </div>

      {/* Third Stats Block */}
      <div className="h-[60px] w-[80px] colorof sm:mx-4 flex flex-col justify-center items-center">
        <h6 className="font-bold text-[19px] px-5 py-1 font-sans">{stats.stat3.value}</h6>
        <h6 className="px-6 translate-y-[-3px] text-[15px] font-semibold">{stats.stat3.count}</h6>
      </div>

      {/* Fourth Stats Block */}
      <div className="h-[60px] w-[80px] colorof2 sm:mx-4 flex flex-col justify-center items-center">
        <h6 className="font-bold text-[19px] px-5 py-1 font-sans">{stats.stat4.value}</h6>
        <h6 className="px-6 translate-y-[-3px] text-[15px] font-semibold">{stats.stat4.count}</h6>
      </div>

        {/* Info Icon */}
        <div className="sm:mx-4">
          <FontAwesomeIcon icon={faCircleInfo} className="h-5" />
        </div>
      </div>
    ))}
  
  </>
)}

{cricketvisible && (
  <>
    {/* Cricket Match Data */}
    <div className="h-10 yekyatha w-full flex items-center px-2">
      {/* Left Section (Football Image and Name) */}
      <div className="flex items-center">
        <img src={cricket2} className="h-8 w-8" />
        <h4 className="text-black font-bold text-xs sm:text-sm ml-2">Cricket</h4>
      </div>

      {/* Middle Section (Matched Heading) */}
      <div className="flex-grow flex justify-center">
        <h6 className="text-black font-bold text-xs sm:text-sm">Matched</h6>
      </div>

      {/* Right Section (1, x, 2) */}
      <div className="flex space-x-2 sm:space-x-4">
        <h6 className="text-black font-bold text-xs sm:text-sm">1</h6>
        <h6 className="text-black font-bold text-xs sm:text-sm">X</h6>
        <h6 className="text-black font-bold text-xs sm:text-sm">2</h6>
      </div>
    </div>

    {cricketdata.map((match, index) => (
      <div key={index} className="daga w-full h-auto flex flex-wrap items-center border-b-[1px] border-gray-300">
        <div className="yekyatha h-14 w-full sm:w-16 mx-1 text-sm sm:text-sm px-4 py-1 font-serif">
        <h6>{formatTimestamp(match.start_timestamp)}</h6>
        </div>
        
        {/* Match info */}
        <div className="mx-2 roboto-thin text-[14px] font-semibold w-full sm:w-[100px] md:w-[130px]">
          <h2 className="whitespace-nowrap">{match.home_team} v {match.away_team}</h2>
        </div>

        {/* Image and Score */}
        <div className="mx-2 sm:mx-52 flex items-center w-full sm:w-auto justify-between sm:justify-start">
          <img src={dbm} className="h-16 w-8 sm:h-21 sm:w-11" />
          <h6 className="ml-1  font-semibold w-[100px] sm:w-[120px]">553,225</h6>
        </div>

        {/* First Stats Block */}
        <div className="h-[60px] w-[80px] colorof sm:mx-4 flex flex-col justify-center items-center">
        <h6 className="font-bold text-[19px] px-6 py-1 font-sans">{stats.stat1.value}</h6>
        <h6 className="px-6 translate-y-[-3px] text-[15px] font-semibold">{stats.stat1.count}</h6>
      </div>

      {/* Second Stats Block */}
      <div className="h-[60px] w-[80px] colorof2 sm:mx-4 flex flex-col justify-center items-center">
        <h6 className="font-bold text-[19px] px-6 py-1 font-sans">{stats.stat2.value}</h6>
        <h6 className="px-6 translate-y-[-3px] text-[15px] font-semibold">{stats.stat2.count}</h6>
      </div>

      {/* Third Stats Block */}
      <div className="h-[60px] w-[80px] colorof sm:mx-4 flex flex-col justify-center items-center">
        <h6 className="font-bold text-[19px] px-5 py-1 font-sans">{stats.stat3.value}</h6>
        <h6 className="px-6 translate-y-[-3px] text-[15px] font-semibold">{stats.stat3.count}</h6>
      </div>

      {/* Fourth Stats Block */}
      <div className="h-[60px] w-[80px] colorof2 sm:mx-4 flex flex-col justify-center items-center">
        <h6 className="font-bold text-[19px] px-5 py-1 font-sans">{stats.stat4.value}</h6>
        <h6 className="px-6 translate-y-[-3px] text-[15px] font-semibold">{stats.stat4.count}</h6>
      </div>

        {/* Info Icon */}
        <div className="sm:mx-4">
          <FontAwesomeIcon icon={faCircleInfo} className="h-5" />
        </div>
      </div>
    ))}
  </>
)}



  <>

    {inplayvisible && (
      <>
       <div className='h-10 yekyatha w-full flex items-center px-2'>
  {/* Left Section (Cricket Image and Name) */}
  <div className='flex items-center'>
    <img src={cricket2} className='h-8 w-8' />
    <h4 className='text-black font-bold text-xs sm:text-sm ml-2'>Cricket</h4>
  </div>

  {/* Middle Section (Matched Heading) */}
  <div className='flex-grow flex justify-center'>
    <h6 className='text-black font-bold text-xs sm:text-sm'>Matched</h6>
  </div>

  {/* Right Section (1, x, 2) */}
  <div className='flex space-x-2 sm:space-x-4'>
    <h6 className='text-black font-bold text-xs sm:text-sm'>1</h6>
    <h6 className='text-black font-bold text-xs sm:text-sm'>X</h6>
    <h6 className='text-black font-bold text-xs sm:text-sm'>2</h6>
  </div>
</div>


        
        
<div className='h-10 w-full yekyatha flex my-3 px-2'>
  {/* Left Section (Football Image and Name) */}
  <div className='flex items-center'>
    <img src={football2} className='h-8 w-8' />
    <h4 className='text-black font-bold text-xs sm:text-sm ml-2'>Football</h4>
  </div>

  {/* Middle Section (Matched Heading) */}
  <div className='flex-grow flex justify-center mt-2'>
    <h6 className='text-black font-bold text-xs sm:text-sm'>Matched</h6>
  </div>

  {/* Right Section (1, x, 2) */}
  <div className='flex space-x-2 sm:space-x-4 mt-2'>
    <h6 className='text-black font-bold text-xs sm:text-sm'>1</h6>
    <h6 className='text-black font-bold text-xs sm:text-sm'>X</h6>
    <h6 className='text-black font-bold text-xs sm:text-sm'>2</h6>
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

<div className='h-10 w-full yekyatha flex my-3 px-2'>
  {/* Left Section (Football Image and Name) */}
  <div className='flex items-center'>
    <img src={tennis} className='h-8 w-8' />
    <h4 className='text-black font-bold text-xs sm:text-sm ml-2'>Tennis</h4>
  </div>

  {/* Middle Section (Matched Heading) */}
  <div className='flex-grow flex justify-center mt-2'>
    <h6 className='text-black font-bold text-xs sm:text-sm'>Matched</h6>
  </div>

  {/* Right Section (1, x, 2) */}
  <div className='flex space-x-2 sm:space-x-4 mt-2'>
    <h6 className='text-black font-bold text-xs sm:text-sm'>1</h6>
    <h6 className='text-black font-bold text-xs sm:text-sm'>X</h6>
    <h6 className='text-black font-bold text-xs sm:text-sm'>2</h6>
  </div>
</div>

{cricketdata.map((match, index) => (
      <div key={index} className="daga w-full h-auto flex flex-wrap items-center border-b-[1px] border-gray-300">
        <div className="yekyatha h-14 w-full sm:w-16 mx-1 text-sm sm:text-sm px-4 py-1 font-serif">
        <h6>{formatTimestamp(match.start_timestamp)}</h6>
        </div>
        
        {/* Match info */}
        <div className="mx-2 roboto-thin text-[14px] font-semibold w-full sm:w-[100px] md:w-[130px]">
          <h2 className="whitespace-nowrap">{match.home_team} v {match.away_team}</h2>
        </div>

        {/* Image and Score */}
        <div className="mx-2 sm:mx-52 flex items-center w-full sm:w-auto justify-between sm:justify-start">
          <img src={dbm} className="h-16 w-8 sm:h-21 sm:w-11" />
          <h6 className="ml-1  font-semibold w-[100px] sm:w-[120px]">553,225</h6>
        </div>

        {/* First Stats Block */}
        <div className="h-[60px] w-[80px] colorof sm:mx-4 flex flex-col justify-center items-center">
        <h6 className="font-bold text-[19px] px-6 py-1 font-sans">{stats.stat1.value}</h6>
        <h6 className="px-6 translate-y-[-3px] text-[15px] font-semibold">{stats.stat1.count}</h6>
      </div>

      {/* Second Stats Block */}
      <div className="h-[60px] w-[80px] colorof2 sm:mx-4 flex flex-col justify-center items-center">
        <h6 className="font-bold text-[19px] px-6 py-1 font-sans">{stats.stat2.value}</h6>
        <h6 className="px-6 translate-y-[-3px] text-[15px] font-semibold">{stats.stat2.count}</h6>
      </div>

      {/* Third Stats Block */}
      <div className="h-[60px] w-[80px] colorof sm:mx-4 flex flex-col justify-center items-center">
        <h6 className="font-bold text-[19px] px-5 py-1 font-sans">{stats.stat3.value}</h6>
        <h6 className="px-6 translate-y-[-3px] text-[15px] font-semibold">{stats.stat3.count}</h6>
      </div>

      {/* Fourth Stats Block */}
      <div className="h-[60px] w-[80px] colorof2 sm:mx-4 flex flex-col justify-center items-center">
        <h6 className="font-bold text-[19px] px-5 py-1 font-sans">{stats.stat4.value}</h6>
        <h6 className="px-6 translate-y-[-3px] text-[15px] font-semibold">{stats.stat4.count}</h6>
      </div>

        {/* Info Icon */}
        <div className="sm:mx-4">
          <FontAwesomeIcon icon={faCircleInfo} className="h-5" />
        </div>
      </div>
    ))}



      </>
    )}
  </>




      </div>
      
    
     
      </div>
      
    </>
  );
};

export default Home;