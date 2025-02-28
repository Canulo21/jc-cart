import { Skeleton } from "@/components/ui/skeleton"; // ✅ Import Skeleton
import axios from "axios";
import { useEffect, useState } from "react";
import fallBackImg from "../../../assets/images/jc-cart-logo.png";

function DisplayNewArrivals() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios.get("https://api.escuelajs.co/api/v1/products");
        setItems(res.data);
        console.log(res);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getItems();
  }, []);

  return (
    <div>
      <div className="top-part">
        <div className="text-area mb-7">
          <h2 className="h2-title">New Arrivals</h2>
          <p className="text-sm">
            Shop online for new arrivals and get free shipping!
          </p>
        </div>
        <div className="new-arriva-wrap">
          <div className="flex flex-wrap justify-start gap-x-9 gap-y-7">
            {(loading
              ? Array.from({ length: 10 })
              : [...items].sort(() => 0.5 - Math.random()).slice(0, 10)
            ).map((item, i) => (
              <div
                key={i}
                className="item-card w-[calc(20%_-_30px)] border border-[#eee] shadow-sm flex flex-col"
              >
                {loading ? (
                  <div className="flex flex-col space-y-3 p-9">
                    <Skeleton className="h-[125px] w-full rounded-xl" />
                    <Skeleton className="h-4 w-[80%]" />
                    <Skeleton className="h-4 w-[50%]" />
                  </div>
                ) : (
                  <>
                    <div className="item-img">
                      <img
                        className="w-full h-full object-cover object-center"
                        src={item.images?.[0] || fallBackImg}
                        alt={item.title || "Product image"}
                      />
                    </div>
                    <div className="item-desc p-5 flex flex-col h-full">
                      <p className="text-[13px] capitalize text-[#999] mb-3">
                        {item.category?.name ?? "Uncategorized"}
                      </p>
                      <p className="text-sm capitalize text-[#4b5966] tracking-[.85px] mb-2">
                        {item.title}
                      </p>
                      <p className="mb-3">
                        <em className="text-[13px] text-[#999] line-clamp-2">
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayNewArrivals;
