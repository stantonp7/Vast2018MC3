import React from 'react';
import './App.css';
import { Navbar } from './router/navbar';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { RouterOutlet } from './router/routerOutlet';
const theme = createTheme({
	palette: {
		primary: {
			main: "#910000",
		},
		secondary: {
			main: "#f04a02",
		},
	},
});

function App () {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Navbar></Navbar>
      <RouterOutlet></RouterOutlet>
      </div>
    </ThemeProvider>
  );
}

export default App;
