import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

export default function Weatherapp(){
    let [weather,setWeather]=useState({
        city:"Delhi",
        temp:"25.05",
        tempMin:"25.05",
        tempMax:"25.05",
        humidity:74,
        feels_like:"24.82",           
        weather:"fog",
    })
    function changeweather(info){
        setWeather(info); 
    }
    return(
        <>
            <SearchBox changeweather={changeweather}></SearchBox>
            
            <InfoBox info={weather}></InfoBox>
        </>
    )
}