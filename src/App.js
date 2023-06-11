import './App.css';
import DarkMode from "./Components/DarkMode";
import BarChart from "./BarChart";
import Header from "./Components/Header";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {useEffect, useState} from "react";
import AppBar from "./Components/AppBar";


function App() {
    const [age, setAge] = useState('');


    const handleChange = (event) => {
        setAge(event.target.value);
    };

  return (

    <div className="App">
        <AppBar/>
      <header className="App-header">
<div style={{display:'flex',justifyContent:'space-around'}}>
    <div style={{fontWeight:800}}>SELECT CHART
        <FormControl style={{width:'100%',marginTop:'12%'}} sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Charts</InputLabel>
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={age}
                onChange={handleChange}
                autoWidth
                label="Charts"
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Bar Chart</MenuItem>
                <MenuItem value={21}>Line Chart</MenuItem>

            </Select>
        </FormControl>

    </div>



</div>
          <BarChart data={age}/>
      </header>
    </div>

  );
}

export default App;
