import './App.css';
import Home from './Pages/Home';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import Snowfall from 'react-snowfall';
import Weather from "./components/images/weather.svg";
import BlackCat from "./components/images/black-cat.png"


const useStyles = makeStyles({
    app: {
      maxWidth: "1000px",
      margin: "auto",
      marginTop: "10vh",
      height: "100vh"
    },
    header: {
      paddingBottom: "10vh"
    },
    footer: {
      paddingTop: "20vh",
      fontSize: "25px",
      textAlign: "center",
      fontWeight: "600"
    },
    cat: {
      height: "20px",
    }
})

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Snowfall />
      <Typography className={classes.header} variant="h3" textAlign="center" color="#00d4ff">How's The Weather?<img alt="" src={Weather}/></Typography>
      <Home />
      <p className={classes.footer} textAlign="center" color="#121247">Made By <a href="https://github.com/Anicasia">Anicasia</a> <img className={classes.cat} alt="Anicasia" src={BlackCat} />
      </p>
    </div>
  );
}

export default App;


