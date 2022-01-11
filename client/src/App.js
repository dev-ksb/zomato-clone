import "./App.css";
import HomeLayoutHoc from "./HOC/Home.Hoc";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <HomeLayoutHoc component={HomePage} path="/" />
      <HomeLayoutHoc component={HomePage} path="/:type" />
    </>
  );
}

export default App;
