import { Skeleton } from "@/Components/ui/skeleton";
import axios from "axios";
import imagesLoaded from "imagesloaded";
import Isotope from "isotope-layout";
import { Eye, Heart, ShoppingBasket } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import fallBackImg from "../../../assets/images/jc-cart-logo.png";

function DisplayNewArrivals() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [passProductData, setPassProductData] = useState([]);

  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");

  // Fetch Items from API
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios.get("https://api.escuelajs.co/api/v1/products");

        // Extract all categories from API response
        const allCategories = res.data.map((product) => product.category);

        // Remove duplicate categories properly
        const uniqueCategories = allCategories.filter(
          (category, index, self) =>
            self.findIndex((c) => c.id === category.id) === index
        );

        setCategories(uniqueCategories);
        setItems(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getItems();
  }, []);

  // Initialize Isotope and ensure layout after images load
  useEffect(() => {
    const iso = new Isotope(".isotopeTrigger", {
      itemSelector: ".grid-item",
      layoutMode: "fitRows",
    });

    imagesLoaded(".isotopeTrigger", () => {
      iso.layout(); // Recalculate layout after images load
    });

    isotope.current = iso;

    return () => iso.destroy();
  }, [items]); // Re-run when items change

  // Apply filter when filterKey changes
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: "*" })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  return (
    <div>
      <div className="top-part flex items-center justify-between flex-col lg:flex-row">
        <div className="text-area mb-7 w-full lg:w-fit">
          <h2 className="h2-title">New Arrivals</h2>
          <p className="text-sm">
            Shop online for new arrivals and get free shipping!
          </p>
        </div>
        <div className="filter-btn-area">
          <div className="flex flex-wrap gap-2 mb-5">
            <button
              className={`px-4 py-2 rounded text-xs tracking-[1px] ${
                filterKey === "*"
                  ? "bg-[#2d3748] text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setFilterKey("*")}
            >
              All
            </button>
            {categories.map((category, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded text-xs tracking-[1px] ${
                  filterKey === category.name
                    ? "bg-[#2d3748] text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => setFilterKey(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="new-arriva-wrap">
        <div className="isotopeTrigger">
          {(loading
            ? Array.from({ length: 10 })
            : [...items].sort(() => 0.5 - Math.random()).slice(0, 10)
          ).map((item, i) => (
            <div
              key={i}
              className={`grid-item ${
                !loading && item.category ? item.category.name : ""
              } w-[calc(50%_-_1px)] sm:w-[calc(33.333%_-_1px)] lg:w-[calc(25%_-_1px)] xl:w-[calc(20%_-_1px)] p-2 new-arrival-card`}
            >
              <div className="border border-[#eee] shadow-sm flex flex-col">
                {loading ? (
                  <div className="flex flex-col space-y-3 p-9">
                    <Skeleton className="h-[125px] w-full rounded-xl" />
                    <Skeleton className="h-4 w-[80%]" />
                    <Skeleton className="h-4 w-[50%]" />
                  </div>
                ) : (
                  <>
                    <div className="item-img relative">
                      <img
                        className="w-full h-full"
                        src={item.images[0] || fallBackImg}
                        alt={item?.title || "Fallback Image"}
                        onError={(e) => (e.target.src = fallBackImg)}
                      />
                      <div className="wishlist-cart flex flex-wrap absolute w-full border-2 border-[#2d3748]">
                        <div className="wishlist-wrap w-1/3 flex justify-center p-2 bg-[#2d3748] hover:bg-white text-white hover:text-black ">
                          <Heart size={15} />
                        </div>
                        <div className="cart-wrap w-1/3 flex justify-center p-2 hover:bg-[#2d3748] bg-white hover:text-white ">
                          <ShoppingBasket size={15} />
                        </div>
                        <div className="wishlist-wrap w-1/3 flex justify-center p-2 bg-[#2d3748] hover:bg-white text-white hover:text-black ">
                          <Eye size={15} />
                        </div>
                      </div>
                    </div>
                    <div className="item-desc p-5 flex flex-col h-full">
                      <p className="text-[13px] capitalize text-[#999] mb-3">
                        {item.category?.name ?? "Uncategorized"}
                      </p>
                      <p className="text-sm capitalize text-[#4b5966] tracking-[.85px] mb-4 line-clamp-2">
                        {item.title}
                      </p>
                      <p className="mb-3">
                        <em className="text-[12px] text-[#999] line-clamp-2">
                          {item.description}
                        </em>
                      </p>
                      <div className="mt-auto">
                        <span className="font-bold text-[#4b5966] text-sm">
                          {item.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "PHP",
                          })}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DisplayNewArrivals;
