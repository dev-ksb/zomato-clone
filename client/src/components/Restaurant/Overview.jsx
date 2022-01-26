import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";
import { NextArrow, PrevArrow } from "../CarouselArrow";
import MenuSimilarRestaurantCard from "./MenuSimilarRestaurantCard";
import MenuCollection from "./MenuCollection";
import ReviewCard from "./Reviews/ReviewCard";
import MapView from "./MapView";

const Overview = () => {
  const [menuImages, setMenuImages] = useState({
    images: [
      "https://b.zmtcdn.com/data/menus/601/8601/544b163b8999ca55f2706d481a986604.jpg",
      "https://b.zmtcdn.com/data/menus/843/3843/651bcd543345159337c3c443c95cf25f.jpg",
    ],
  });

  const [reviews, setReviews] = useState([
    {
      fullName: "Kuldeep singh",
      isRestaurantReview: false,
      createAt: "2021-7-02",
      reviewText: "Food was good, but service was slow",
    },
    {
      fullName: "Robin",
      isRestaurantReview: true,
      createAt: "2020-8-02",
      reviewText: "Food was good, but service was slow",
    },
    {
      fullName: "Vijay Kumar",
      isRestaurantReview: false,
      createAt: "2022-7-02",
      reviewText: "Very Good service",
    },
  ]);

  const [cuisine, setCuisine] = useState(["Modern Indian", "Bar Food"]);

  const averageCost = 200;

  const { id } = useParams();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const getLatLong = (mapAddress) => {
    return mapAddress?.split(",").map((item) => parseFloat(item));
  };

  return (
    <>
      <div className="flex flex-col gap-6 md:flex-row bg-white">
        <div className="w-full md:w-8/12">
          <h2 className="font-semibold text-lg md:text-xl my-4">
            About this place
          </h2>

          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium">Menu</h4>
            <Link to={`/restaurant/${id}/menu`}>
              <span className="flex items-center gap-1 text-zomato-400">
                Sell all menu <IoMdArrowDropright />
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 my-4">
            <MenuCollection
              menuTitle="Food Menu"
              pages="3"
              images={menuImages.images}
            />
          </div>
          <h4 className="text-lg font-medium my-4">Cuisines</h4>
          <div className="flex flex-wrap gap-2">
            {cuisine.map((cuisineName, index) => (
              <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
                {cuisineName}
              </span>
            ))}
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Average Cost</h4>
            <h6>$ {averageCost} for one order (approx.)</h6>
            <small className="text-gray-500">
              Exclusive of applicable taxes and charges, if any
            </small>
          </div>

          <div className="flex flex-col-reverse">
            <div className="my-4">
              <h4 className="text-lg font-medium">
                Rate your delivery experience
              </h4>
              <ReactStars
                size={24}
                count={5}
                onChange={ratingChanged}
                activeColor={"#ffd700"}
              />
              {reviews.map((review, index) => (
                <ReviewCard {...review} key={index} />
              ))}
            </div>
            <div className="my-4">
              <h4 className="text-lg font-medium">Similar Restaurants</h4>
              <div>
                <Slider {...settings}>
                  <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg"
                    title="tea"
                  />
                  <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg"
                    title="tea"
                  />
                  <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg"
                    title="tea"
                  />
                  <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg"
                    title="tea"
                  />
                  <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg"
                    title="tea"
                  />
                  <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg"
                    title="tea"
                  />
                </Slider>
              </div>
            </div>
            <div className="my-4 w-full md:hidden flex flex-col gap-4 -z-0">
              <MapView
                title="McDonald's"
                phno="+918939332311"
                mapLocation={getLatLong(
                  "28.589142957931283, 77.39410480600951"
                )}
                address="Khasra 567/568, Lotus Krishna Apartment, Sarfabad Village, Sector 72, Noida"
              />
            </div>
          </div>
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex md:4/12 rounded-xl sticky top-72 bg-white p-3 shadow-md flex-col gap-4"
        >
          <MapView
            title="McDonald's"
            phno="+918939332311"
            mapLocation={getLatLong("28.589142957931283, 77.39410480600951")}
            address="Khasra 567/568, Lotus Krishna Apartment, Sarfabad Village, Sector 72, Noida"
          />
        </aside>
      </div>
    </>
  );
};

export default Overview;
