import { ThemeProvider } from "react-jss";
import Home from "./pages/Home/index";
import theme from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
