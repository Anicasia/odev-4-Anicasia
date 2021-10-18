import React from "react";
import { useQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../graphql/Queries";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Divider } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Loading from "./images/loading.svg";
import getIcon from "./WeatherIcon";

const useStyles = makeStyles({
    card: {
        maxWidth: "50%",
        margin: "auto",
        textAlign: "center",
        backgroundColor: "black",
        borderRadius: "35px !important",
        border: "2px solid white"
    },
    loading: {
        margin: "auto",
        display: "flex"
    },
    cardcontent: {
        backgroundColor: "black",
        color: "white"
    },
    divider: {
        borderColor: "white !important",
    }
})

const WeatherBox = ({ selectedCity }) => {

  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_WEATHER_QUERY, {
    variables: { name: selectedCity.name },
  });

  if (loading) return <img className={classes.loading} src={Loading} alt="loading" />
  if (error) return <h1>There was an error.</h1>

  const { name, country, weather } = data.getCityByName;
  const kelvinToCelsius = (temperature) => (temperature - 273.15).toFixed(2);

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardcontent}>
        <p>
            <img alt="" src={getIcon(data.getCityByName.weather.summary.icon)} />
        </p>
        <p className={classes.temperature}>
          {kelvinToCelsius(weather.temperature.actual)} °C
        </p>
        <p className={classes.cityName}>
          {name.replace(" Province", "")}, {country}
        </p>
        <p className={classes.description}>
          {weather.summary.description.charAt(0).toUpperCase() +
            weather.summary.description.slice(1)}
        </p>
        <Divider className={classes.divider} />
        <p>Humidity {weather.clouds.humidity}%</p>
        <p>Wind {weather.wind.speed} km/s</p>
      </CardContent>
    </Card>
  );
};

export default WeatherBox;
