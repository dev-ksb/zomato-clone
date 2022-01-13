import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeLayoutHoc from "./HOC/Home.Hoc";
import HomePage from "./pages/HomePage";
import { red } from "react-router-dom";

function App() {
  return (
    <>
      <HomeLayoutHoc component={HomePage} path="/:type" />
    </>
  );
}

export default App;
