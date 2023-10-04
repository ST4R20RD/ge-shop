export function Footer() {
  const languages = [
    "Pусский",
    "Português",
    "Español",
    "Français",
    "Deutsch",
    "Italiano",
    "Nederlands",
    "Türk",
    "日本語",
    "한국어",
    "ภาษาไทย",
    "tiếng Việt",
    "اللغة العربي",
    "עברית",
    "Polish",
  ];
  return (
    <div className="flex justify-around items-center bg-[#46B29D] dark:bg-slate-800 text p-5 text-slate-800 dark:text-stone-400">
      <div>
        <p className="text-xl font-semibold">Languages</p>
        <ul>
          {languages.map((language, index) => {
            return <li key={index}>{language}</li>;
          })}
        </ul>
      </div>
      <div>About Us</div>
    </div>
  );
}
