import React, { useEffect, useState } from 'react'
import "./style.css";
import Weathercard from './weathercard';

const rainImg = new URL("./rain.gif", import.meta.url);
const cloudImg = new URL("./clouds.gif", import.meta.url);
const hazeImg = new URL("./haze.gif", import.meta.url);
const sunnyImg = new URL("./sunny.gif", import.meta.url);
const thunderstromImg = new URL("./thunderstrom.gif", import.meta.url);

const Temp = () => {

    const [currentImg , setCurrentImg] = useState();

    const [searchValue , setSearchValue] = useState("mumbai");
    const [ tempInfo , setTempInfo] = useState({});

    
      
  

    const getWeatherInfo = async() => {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=202880210d806ed78d356656d9e5dba7`;

            const res = await fetch(url);
            const data = await res.json();
            const backImg = data.weather[0].main;
            
            if(backImg){
              switch (backImg) {
                  case "Clouds": 
                  setCurrentImg(cloudImg);
                  break;
                  case "Rain":
                    setCurrentImg(rainImg);
                    break;
                  case "Haze": 
                  setCurrentImg(hazeImg);
                      break;
                  case "Clear": 
                  setCurrentImg(sunnyImg);
                      break;
                       
                  case "Thunderstorm": 
                  setCurrentImg(thunderstromImg);
                          break;
                      
                  default:
                    setCurrentImg(cloudImg);
                      break;
              }}

            const { temp,humidity , pressure } = data.main;
            const { main:weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country , sunset } = data.sys;

            const myNewWeatherInfo = {
                temp,
                humidity, 
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
                
            };
            setTempInfo( myNewWeatherInfo);
            

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
      getWeatherInfo(); 
    }, [])
    


  return (
    <>
    

     <div className='mainbody' style={{
        backgroundImage: `url(${currentImg})`,
        backgroundSize: "cover"
     }}>

     <div className='wrap'>
        <div className='search'>
            <input type="search" placeholder='Search...' 
            autoFocus id="search" className='searchTerm' 
            value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
            <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
        </div>
      </div>

        <Weathercard tempInfo={tempInfo} setCurrentImg={setCurrentImg}/>
     </div>
        

    </>
  )
}

export default Temp