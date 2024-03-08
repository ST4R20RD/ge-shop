import ExploreSection from "./ExploreSection";
import ProductSection from "./ProductSection";
import JewelrySection from "./JewelrySection";

export function Home() {
  return (
    <div className="flex justify-center w-screen">
      <div>
        <ExploreSection />
        <ProductSection />
        <ProductSection />
      </div>
    </div>
  );
}
