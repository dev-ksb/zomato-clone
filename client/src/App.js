import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";

import HomeLayoutHoc from "./HOC/Home.Hoc";
import RestaurantLayoutHoc from "./HOC/Restaurant.hoc";
import Overview from "./components/Restaurant/Overview";

function App() {
  return (
    <>
      <HomeLayoutHoc component={HomePage} path="/:type" />
      <RestaurantLayoutHoc path="/restaurant/:id" component={RestaurantPage} />
      <RestaurantLayoutHoc
        path="/restaurant/:id/overview"
        component={Overview}
      />
      <RestaurantLayoutHoc
        path="/restaurant/:id/order-online"
        component={RestaurantPage}
      />
      <RestaurantLayoutHoc
        path="/restaurant/:id/reviews"
        component={RestaurantPage}
      />
      <RestaurantLayoutHoc
        path="/restaurant/:id/photos"
        component={RestaurantPage}
      />
      <RestaurantLayoutHoc
        path="/restaurant/:id/menu"
        component={RestaurantPage}
      />
    </>
  );
}

export default App;
