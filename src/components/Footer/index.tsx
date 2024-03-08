import { FaFacebookF, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import { CurrencySelect } from "./CurrencySelect";
import { Button } from "../Button";

const LANGUAGES = ["Português", "Español", "Français", "Deutsch", "Italiano"];
const CERTIFICATIONS = ["Fair Trade Certifications", "Our Suppliers", "Vegan Leather Origins"];
const CONTACTUS = ["About us", "Careers", "Blog", "Our Communities"];
const SECONDHAND = ["Sell your products with us", "Donations with Red Cross"];

function ItemsMenu({ title, list }: { title: string; list: string[] }) {
  return (
    <div className="my-2">
      <p className="text-xs sm:text-sm md:text-lg font-semibold">{title}</p>
      <ul className="text-[10px] sm:text-xs md:text-base">
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <div className="bg-neutral-600 text-floral font-grotesque">
      <div className="border-b-2 p-5">
        <div className="flex justify-between items-center max-w-7xl m-auto">
          <div className="flex space-x-5">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaPinterest />
          </div>
          <CurrencySelect className="bg-transparent" />
        </div>
      </div>
      <div className="max-w-7xl m-auto py-10">
        <div className="flex justify-between">
          <div className="w-60 flex flex-col space-y-5">
            <p className="font-bold">NEWSLETTER</p>
            <p>Subscribe to our newsletter and bring inspiration directly to your inbox.</p>
            <Button label="SIGN UP" />
          </div>
          <div className="flex flex-wrap justify-start sm:justify-between items-start space-x-32">
            <ItemsMenu title={"LANGUAGE"} list={LANGUAGES} />
            <ItemsMenu title={"OUR CERTIFICATIONS"} list={CERTIFICATIONS} />
            <ItemsMenu title={"CONTACT US"} list={CONTACTUS} />
            <ItemsMenu title={"SECOND HAND DEALS"} list={SECONDHAND} />
          </div>
        </div>
      </div>
      <div className="py-10 border-t-2">
        <div className="flex justify-between max-w-7xl m-auto">
          <p>@2024 AMIGO</p>
          <div className="flex space-x-5">
            <p>Conditions of Sale</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Code of Ethic</p>
            <p>Cookie Settings</p>
            <p>Whistleblowing</p>
          </div>
          <div className="flex space-x-4">
            <img src="https://i.ibb.co/xf2m9nZ/visa.png" alt="visa" />
            <img src="https://i.ibb.co/fnypmDB/mastercard.png" alt="mastercard" />
            <img src="https://i.ibb.co/vw6swWF/paypal.png" alt="paypal" />
            <img src="https://i.ibb.co/HBfXsVw/americanexpress.png" alt="american-express" />
          </div>
        </div>
      </div>
    </div>
  );
}
