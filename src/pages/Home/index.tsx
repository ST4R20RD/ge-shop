import ClothingSection from "./ClothingSection";
import { EletronicSection } from "./EletronicSection";
import JewelrySection from "./JewelrySection";

export function Home() {
  return (
    <div className="flex justify-center w-screen">
      <div>
        <ClothingSection />
        <JewelrySection />
        <EletronicSection />
      </div>
    </div>
  );
}
