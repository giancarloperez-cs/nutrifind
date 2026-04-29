import { useLang } from "../context/LanguageContext"

export default function TopBar() {
  const { lang, toggle } = useLang()

  return (
    <header className="sticky top-0 w-full bg-[#FEFAE0] flex justify-between items-center px-5 py-4 h-16 z-40">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-extrabold text-[#2D6A4F] font-['Plus_Jakarta_Sans'] tracking-tight">
          NutriFind
        </h1>
      </div>
      <button
        onClick={toggle}
        className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#2D6A4F] hover:opacity-75 transition-opacity active:scale-95 duration-150"
        aria-label="Toggle language"
      >
        {lang === "en" ? "EN / ES" : "ES / EN"}
      </button>
    </header>
  )
}
