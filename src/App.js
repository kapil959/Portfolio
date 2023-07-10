import { useEffect, useState } from "react";
import { IconButton, Container, Button } from "@mui/material";
import {
  useAppDispatch,
  fetchData,
  getApiLoaded,
  useAppSelector,
} from "./store";
import ResponsiveAppBar from "./navigationBar/ResponsiveAppBar";
import HeroSection from "./heroSection/HeroSection";
import About from "./about/About";
import "./styles.scss";
import WorkEx from "./workex/workex";
import ThingsBuilt from "./thingsBuilt/ThingsBuilt";
import { ContactMe } from "./contact/contactMe";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import CssBaseline from '@mui/material/CssBaseline';

const App = () => {
  const dispatch = useAppDispatch();
  const [mode, setMode] = useState("light");
  const [mobileView, setMobileView] = useState(false);
  const isApiLoaded = useAppSelector(getApiLoaded);
  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });
  useEffect(() => {
    dispatch(fetchData());
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setMobileView(true)
        : setMobileView(false);
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);
  return (
    isApiLoaded && (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <ResponsiveAppBar
          setMode={setMode}
          mode={mode}
          mobileView={mobileView}
        />
        <div className={` ${mode} App`}>
          <Container maxWidth="xl">
            <HeroSection />
            <About />
            <WorkEx mobileView={mobileView} />
            <ThingsBuilt />
            <ContactMe />
          </Container>
        </div>
      </ThemeProvider>
    )
  );
};
export default App;
