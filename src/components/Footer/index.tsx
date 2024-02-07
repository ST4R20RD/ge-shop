const LANGUAGES = ["Português", "Español", "Français", "Deutsch", "Italiano"];
const CERTIFICATIONS = ["Fair Trade Certifications", "Our Suppliers", "Vegan Leather Origins"];
const CONTACTUS = ["About us", "Careers", "Blog", "Our Communities"];
const SECONDHAND = ["Sell your products with us", "Donations with Red Cross"];
function ItemsMenu({ title, list }: { title: string; list: string[] }) {
  return (
    <div className="m-2 sm:mx-4">
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
    <div className="bg-[#46B29D] dark:bg-slate-800 text-floral p-5">
      <div className="max-w-5xl m-auto">
        <div className="flex flex-wrap justify-start sm:justify-around items-start">
          <ItemsMenu title={"LANGUAGE"} list={LANGUAGES} />
          <ItemsMenu title={"OUR CERTIFICATIONS"} list={CERTIFICATIONS} />
          <ItemsMenu title={"CONTACT US"} list={CONTACTUS} />
          <ItemsMenu title={"SECOND HAND DEALS"} list={SECONDHAND} />
        </div>
        <div className="text-xs sm:text-sm md:text-base text-center mt-10">
          <p>
            Conditions of Use & Sale Privacy Notice Imprint Cookies Notice Interest-Based Ads Notice
          </p>
          <p>© 2023,xx.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  );
}
