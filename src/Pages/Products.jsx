import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const items = [
  { id: 1, category: "web", title: "Web Design" },
  { id: 2, category: "graphic", title: "Graphic Design" },
  { id: 3, category: "web", title: "Frontend Development" },
  { id: 4, category: "graphic", title: "Logo Design" },
  { id: 5, category: "web", title: "React Development" },
  { id: 6, category: "web", title: "Web Design" },
  { id: 7, category: "graphic", title: "Graphic Design" },
  { id: 8, category: "web", title: "Frontend Development" },
  { id: 9, category: "graphic", title: "Logo Design" },
  { id: 10, category: "web", title: "React Development" },
  { id: 11, category: "web", title: "Web Design" },
  { id: 12, category: "graphic", title: "Graphic Design" },
  { id: 13, category: "web", title: "Frontend Development" },
  { id: 14, category: "graphic", title: "Logo Design" },
  { id: 15, category: "web", title: "React Development" },
];

function Products() {
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    isotope.current = new Isotope(".isotopeTrigger", {
      itemSelector: ".grid-item",
      layoutMode: "fitRows",
    });

    return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    filterKey === "*"
      ? isotope.current.arrange({ filter: "*" })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  console.log(filterKey);

  return (
    <div className="container mx-auto p-6">
      {/* Filter Buttons */}
      <div className="flex gap-3 mb-5">
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => setFilterKey("*")}
        >
          All
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => setFilterKey("web")}
        >
          Web Design
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => setFilterKey("graphic")}
        >
          Graphic Design
        </button>
      </div>

      {/* Grid Items */}
      <div className="isotopeTrigger flex flex-wrap justify-start gap-x-9 gap-y-7">
        {items.map((item) => (
          <div
            key={item.id}
            className={`grid-item ${item.category} w-[calc(20%_-_30px)] border border-[#eee] shadow-sm flex flex-col`}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
