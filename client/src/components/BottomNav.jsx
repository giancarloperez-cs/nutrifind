import { NavLink } from "react-router-dom"
import { useLang } from "../context/LanguageContext"

const TABS = [
  {
    to: "/near-me",
    icon: "location_on",
    label: { en: "Near Me", es: "Cerca de Mí" },
  },
  {
    to: "/benefits",
    icon: "shield",
    label: { en: "Benefits", es: "Beneficios" },
  },
  {
    to: "/meals",
    icon: "restaurant",
    label: { en: "Quick Meals", es: "Comidas" },
  },
]

export default function BottomNav() {
  const { lang } = useLang()

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-4 bg-white border-t border-[#E9EDC9] shadow-[0_-4px_12px_rgba(45,106,79,0.08)]">
      {TABS.map(({ to, icon, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-0.5 min-w-[64px] py-1 transition-transform active:scale-90 duration-150 ${
              isActive ? "text-[#2D6A4F]" : "text-slate-400"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span
                className="material-symbols-outlined text-[24px] leading-none"
                style={
                  isActive
                    ? { fontVariationSettings: "'FILL' 1" }
                    : {}
                }
              >
                {icon}
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold uppercase tracking-wider">
                {label[lang]}
              </span>
              {isActive && (
                <span className="w-1 h-1 bg-[#2D6A4F] rounded-full mt-0.5" />
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
