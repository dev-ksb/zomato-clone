import { useState } from "react";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ImageGrid from "../components/Restaurant/ImageGrid";
import InfoButton from "../components/Restaurant/InfoButton";
import RestaurantInfo from "../components/Restaurant/RestaurantInfo";
import Tabs from "../components/Restaurant/Tabs";

const RestaurantLayout = () => {
  const [restaurant, setRestaurant] = useState({
    images: [
      "https://b.zmtcdn.com/data/pictures/chains/3/307893/ac9e6b3236967e1e255e14e24cc0c9e7.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/3/307893/ab32e4d69281d2eb639cb9ae4850e972.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/3/307893/ab32e4d69281d2eb639cb9ae4850e972.jpg",
    ],
    name: "Bakehouse Comfort",
    cuisine: "Bakery, Desserts, Fast food",
    address: "Sector 53, Gurgaon",
    restaurantRating: 4.5,
    deliveryRating: 3.5,
  });

  const [images, setImages] = useState([]);

  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-10 px-4 lg:px-20 pb-10">
        <ImageGrid images={restaurant.images} />
        <div className="bg-white sticky top-0 z-10">
          <RestaurantInfo
            name={restaurant?.name}
            restaurantRating={restaurant?.restaurantRating || 0}
            deliveryRating={restaurant?.deliveryRating || 0}
            cuisine={restaurant?.cuisine}
            address={restaurant?.address}
          />
          <div className="flex flex-wrap gap-3">
            <InfoButton isActive>
              <TiStarOutline /> Add Review
            </InfoButton>
            <InfoButton>
              <RiDirectionLine /> Direction
            </InfoButton>
            <InfoButton>
              <BiBookmarkPlus /> Bookmark
            </InfoButton>
            <InfoButton>
              <RiShareForwardLine /> Share
            </InfoButton>
          </div>
          <Tabs />
        </div>
        <div className="my-10 mx-6">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default RestaurantLayout;
