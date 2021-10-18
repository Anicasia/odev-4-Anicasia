import sunny from "./images/sunny.svg";
import night from "./images/night.svg";
import cloudy from "./images/cloudy.svg";
import cloud from "./images/cloud.svg";
import cloudssunny from "./images/cloudssunny.svg";
import rains from "./images/rains.svg";
import rain from "./images/rain.svg";
import rainyday from "./images/rainyday.svg";
import snowy from "./images/snowy.svg";

const getIcon = (icon) => {
    if (icon === "01d") {
      return sunny;
    } else if (icon === "01n") {
      return night;
    } else if (icon === "02d") {
      return cloudy;
    } else if (icon === "02n") {
      return cloudy;
    } else if (icon === "03d" || icon === "03n") {
      return cloud;
    } else if (icon === "04d" || icon === "04n") {
      return rains;
    } else if (icon === "09d" || icon === "09n") {
      return rain;
    } else if (icon === "10d" || icon === "10n") {
      return rain;
    } else if (icon === "11d" || icon === "11n") {
      return rainyday;
    } else if (icon === "13d" || icon === "13n") {
      return snowy;
    } else if (icon === "50d" || icon === "50n") {
      return cloudssunny;
    }
  };
  
  export default getIcon;