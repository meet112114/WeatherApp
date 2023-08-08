import React, { useEffect, useState } from 'react'
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
import WbTwilightOutlinedIcon from '@mui/icons-material/WbTwilightOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import ThermostatIcon from '@mui/icons-material/Thermostat';




const Weathercard = ({tempInfo }) => {


    const [weatherState , setWeatherState] = useState("");
    const { temp,
        humidity, 
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset, } = tempInfo;

         const [tempcolor , setTempColor] = useState("white");
         console.log(temp)
     
         useEffect(() => {
            if(temp >30 ){
                    setTempColor("red");
            }
            else if(temp <= 30 && temp > 20) {
                    setTempColor("orange");
            }
            else if(temp <= 20 && temp > 10) {
                setTempColor("aqua");
            }
            else{
                setTempColor("gray")
            }
        }, [temp])

        useEffect(() => {
            if(weathermood){
                switch (weathermood) {
                    case "Clouds": 
                    setWeatherState(<FilterDramaIcon sx={{ fontSize: 150 , color: "gray" }}/>);
                    
                    
                        break;
                    case "Haze": 
                    setWeatherState(<WaterOutlinedIcon sx={{ fontSize: 150 , color: "white" }}/>);
                        break;
                    case "CLEAR": 
                    setWeatherState(<WbSunnyOutlinedIcon sx={{ fontSize: 150 , color: "orange" }}/>);
                        break;
                         
                    case "Thunderstorm": 
                    setWeatherState(<ThunderstormOutlinedIcon sx={{ fontSize: 150 , color: "blue" }}/>);
                            break;
                        
                    default:
                        setWeatherState(<WbSunnyOutlinedIcon sx={{ fontSize: 150 , color: "orange" }}/>);
                        break;
                }
            }
        }, [weathermood])

        let sec =sunset;
        let date = new Date(sec*1000);
        let timestr = `${date.getHours()}:${date.getMinutes()}`
  return (
    <>

        <article className='widget'>
            <div className='mainleft'>
             <div className='mainleft-up'>
             <div className='weatherIcon'>
                 {weatherState}
              </div>
             </div>
              <div className='description'>
                    <div className='weatherCondition'>{weathermood}</div>
                    <div className='place'>{name},{country}</div>
              </div>
            </div>
            <div className='mainright'>
              <div className='mainright-up'>
                <div className='temperature'>
                   
                <ThermostatIcon sx={{ fontSize: 60 , color: tempcolor , marginRight:"10px" }} />
                        <span className='temp'>{temp}&deg;</span>
                </div>
                <div className='date'>{ new Date().toLocaleString() }</div>
                </div> 

              <div className='mainright-down'>

              
              
                    <div className='two-sided-section'>
                        <p><WbTwilightOutlinedIcon sx={{ fontSize: 30 , color: "orange" }} /></p>
                        <p className='extra-info-leftside'>{timestr} PM <br />Sunset</p>
                    </div>
                    <div className='two-sided-section'>
                        <p><WaterDropOutlinedIcon sx={{ fontSize: 30 , color: "aqua" }}/></p>
                        <p className='extra-info-leftside'>{humidity}<br />Humidity</p>
                    </div>
                    <div className='two-sided-section'>
                        <p><CloudOutlinedIcon sx={{ fontSize: 30 , color: "gray" }}/></p>
                        <p className='extra-info-leftside'>{pressure}<br />Pressure</p>
                    </div>
                    
                    <div className='two-sided-section'>
                        <p><AirOutlinedIcon sx={{ fontSize: 30 , color: "gray" }} /></p>
                        <p className='extra-info-leftside'>{speed}<br />Speed</p>
                    </div>
                
                
                
           
              </div> 
            </div>
        </article>



        
    </>
  )
}

export default Weathercard