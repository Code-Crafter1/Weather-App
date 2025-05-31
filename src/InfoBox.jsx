import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const HOT_URL =
    "https://media.istockphoto.com/id/1538307070/photo/barcelona-beach-panorama.webp?a=1&s=612x612&w=0&k=20&c=EDt4QwADSNO2RDK6bexpO8tc7ReML8uW5JNj5htQ5_U=";
  const COLD_URL =
    "https://images.unsplash.com/photo-1425100599170-85ec4f00a6ee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL =
    "https://plus.unsplash.com/premium_photo-1683133919325-ad12ae96a8aa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFpbnklMjB3ZWF0aGVyJTIwYSUyMHBlcnNvbiUyMHdpdGglMjB1bWJyZWxsYXxlbnwwfHwwfHx8MA%3D%3D";
  // let info = {
  //   city: "Delhi",
  //   feelslike: 24.84,
  //   temp: 25.05,
  //   tempMin: 25.05,
  //   tempMax: 25.05,
  //   humidity: 47,
  //   weather: "haze",
  // };
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 70
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <span>{info.city}</span>
             <span> {info.humidity > 70 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
              </span>
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature={info.temp}&deg;C</p>
              <p>Humidity={info.humidity}</p>
              <p>Min Temp={info.tempMin}&deg;C</p>
              <p>Max Temp={info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like={info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
