import ClothingSection from "./ClothingSection";
import { EletronicSection } from "./EletronicSection";
import JewelrySection from "./JewelrySection";

export function Home() {
  return (
    <div className="flex justify-center w-screen">
      <div className="border h-full w-44 mx-10 hidden 1/2xl:block" />
      <div className="mt-5 max-w-screen-lg">
        <ClothingSection />
        <JewelrySection />
        <EletronicSection />
      </div>
      <div className="border h-full w-44 mx-10 hidden 1/2xl:block" />
    </div>
  );
}
