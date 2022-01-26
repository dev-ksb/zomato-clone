import classnames from "classnames";
import { Link, useLocation, useParams } from "react-router-dom";

const Tab = (props) => {
  const { id } = useParams();

  return (
    <Link to={`/restaurant/${id}/${props.route}`}>
      <div
        className={classnames("text-gray-500 font-light", {
          "text-zomato-400 font-semibold": props.isActive,
        })}
      >
        <h3 className="text-lg md:text-xl">{props.title}</h3>
      </div>
    </Link>
  );
};

const Tabs = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const tabs = [
    {
      title: "Overview",
      route: "overview",
      isActive: currentPath.includes("overview"),
    },
    {
      title: "Order Online",
      route: "order-online",
      isActive: currentPath.includes("order-online"),
    },
    {
      title: "Reviews",
      route: "reviews",
      isActive: currentPath.includes("reviews"),
    },
    {
      title: "Photos",
      route: "photos",
      isActive: currentPath.includes("photos"),
    },
    {
      title: "Menu",
      route: "menu",
      isActive: currentPath.includes("menu"),
    },
  ];

  return (
    <>
      <div className="flex sticky top-48 mt-6 z-50 items-center pb-4 gap-8 md:gap-20 overflow-x-scroll lg:overscroll-auto border-b-2 bg-white">
        {tabs.map((tab) => (
          <Tab {...tab} key={tab.route} />
        ))}
      </div>
    </>
  );
};

export default Tabs;
