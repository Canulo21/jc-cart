import DisplayCategories from "../Components/Features/Categories/DisplayCategories";
import DisplayNewArrivals from "../Components/Features/NewArrivals/DisplayNewArrivals";

function Home() {
  return (
    <div>
      <section id="category" className="py-20">
        <DisplayCategories />
      </section>
      <section id="new-arrivals" className="pb-20">
        <DisplayNewArrivals />
      </section>
    </div>
  );
}

export default Home;
