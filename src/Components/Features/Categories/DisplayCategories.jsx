import { Skeleton } from "@/Components/ui/skeleton";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function DisplayCategories() {
  const [totalItems, setTotalItems] = useState([]); // Stores total items per category
  const [categories, setCategories] = useState([]); // Stores unique categories
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get("https://api.escuelajs.co/api/v1/products");

        // Extract all categories from API response
        const allCategories = res.data.map((product) => product.category);

        // Count total items per category
        const categoryCount = allCategories.reduce((count, category) => {
          count[category.id] = (count[category.id] || 0) + 1;
          return count;
        }, {});
        setTotalItems(categoryCount);

        // Remove duplicate categories
        const uniqueCategories = allCategories.filter(
          (category, index, self) =>
            index === self.findIndex((c) => c.id === category.id)
        );

        setCategories(uniqueCategories);
      } catch (err) {
        console.error("Error fetching categories:", err.message);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    getCategories();
  }, []);

  // Determine the number of skeletons dynamically
  const skeletonCount = categories.length || 6; // Show 6 skeletons if categories are empty

  return (
    <div>
      <h2 className="h2-title mb-7">Provided Categories</h2>
      <div className="flex flex-wrap gap-y-[15px] md:gap-y-[15px] gap-x-[15px] md:gap-x-[15px] 2xl:gap-x-[36px]">
        {(loading ? [...Array(skeletonCount)] : categories).map(
          (category, i) => (
            <div
              key={i}
              className="w-[calc(50%_-_30px)] sm:w-[calc(33.333%_-_30px)] lg:w-[calc(20%_-_30px)] 2xl:w-[calc(16.6666%_-_30px)] relative shadow-lg category-card"
            >
              {loading ? (
                <div className="flex flex-col space-y-3 p-9">
                  <Skeleton className="h-[125px] w-full rounded-xl " />
                  <Skeleton className="h-4 w-[80%]" />
                  <Skeleton className="h-4 w-[50%]" />
                </div>
              ) : (
                <NavLink to="products">
                  <div className="categoryImg">
                    <img src={category.image} alt={category.name} />
                  </div>
                  <div className="category-info-wrap">
                    <div className="category-info">
                      <p className="tracking-[2px] font-medium text-[15px] mb-2">
                        {category.name}
                      </p>
                      <p className="text-[13px]">
                        {totalItems[category.id] || 0} Items
                      </p>
                    </div>
                  </div>
                </NavLink>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default DisplayCategories;
