import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    let HOT_URL="https://media.istockphoto.com/id/2163514261/photo/boy-drinking-water-from-a-bottle-on-a-sunny-hot-day.jpg?s=1024x1024&w=is&k=20&c=NH9bVizCOGEfAcfszsOJog7DvgoM6z2srm_EpsU_V2s="
    let COLD_URL="https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let RAINY_URL="https://images.unsplash.com/photo-1505440484611-23c171ad6e96?q=80&w=1454&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return(
        <>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAINY_URL:info.temp>15?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent style={{border:"0.5px solid grey"}}>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          <span style={{padding:"0px 0px 0px 5px"}}>
          {info.humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
          </span>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feels_like}&deg;C</p>
         <p>Temperature={info.temp}&deg;C</p>
         <p>Min Temp={info.tempMin}&deg;C</p>
         <p>Max Temp={info.tempMax}&deg;C</p>
         <p>Humidity={info.humidity}</p>
        </Typography>
      </CardContent>
      
    </Card>
        </>
    )
}