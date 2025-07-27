import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox({changeweather}){
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="674d4acaf99a5541c0e24553d9eae12b";
    let[city,setCity]=useState("");
    let[err,setError]=useState("");
    let changecityname=(event)=>{
        setCity(event.target.value)
    }
    let submitcity=(event)=>{
        event.preventDefault();
        console.log(city)
        setCity("")
        weatherinfo();
    }
    let weatherinfo=async()=>{
        try{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        // console.log(jsonResponse);
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feels_like:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        }
        changeweather(result);
        setError("");
    }catch(err){
        setError("No such place exists in our API");
    }
    }
    return(
        <>
        <form onSubmit={submitcity}>
        <h2>Search for the weather</h2>
        <TextField
          required
          id="outlined-required"
          label="City name"
          onChange={changecityname}
          value={city}
        />
        <br /><br />
        <Button variant="contained" type='submit'>Search</Button>
        <p>{err}</p>
        </form>
        </>
    )
}