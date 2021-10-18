import React from "react";
import Select from '@mui/material/Select';
import { makeStyles } from "@mui/styles";
import { FormControl, InputLabel } from "@mui/material";

const useStyles = makeStyles({
    select: {
        width: "25%",
        margin: "auto",
        textAlign: "center",
        display: "flex",
        marginBottom: "5vh",
        backgroundColor: "black",
        color: "white",
        borderRadius: "25px",
        height: "5vh"
    },
    option: {
      backgroundColor: "black",
      color: "white"
    }
})


const CitySelection = ({ cities, selectedCity, setSelectedCity }) => {
  
  const classes = useStyles();
  const handleChange = (e) => {
    let obj = JSON.parse(e.target.value);
    setSelectedCity({ name: obj.name, plate: obj.plate });
  };
  return (
        <select
        className={classes.select}
        defaultValue={selectedCity}
        onChange={handleChange}
        >
        {cities.map((city) => (
            <option className={classes.option} key={city.plate} value={JSON.stringify(city)}>
            {city.name.charAt(0).toUpperCase() + city.name.slice(1)}
            </option>
        ))}
        </select>
  );
};

export default CitySelection;
