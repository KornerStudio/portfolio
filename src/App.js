import HomePage from "./pages/home";
import { ThemeProvider } from "@mui/material";
import theme from './theme'
import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
