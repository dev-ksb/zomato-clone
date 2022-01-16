import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";

import HomeLayoutHoc from "./HOC/Home.Hoc";
import RestaurantLayoutHoc from "./HOC/Restaurant.hoc";

function App() {
  return (
    <>
      <HomeLayoutHoc component={HomePage} path="/:type" />
      <RestaurantLayoutHoc path="/restaurant/:id" component={RestaurantPage} />
    </>
  );
}

export default App;
