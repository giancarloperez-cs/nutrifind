import { useState, useMemo } from "react"
import { useLang } from "../context/LanguageContext"
import FoodResourceCard from "../components/FoodResourceCard"
import foodResources from "../data/foodResources"

// Day-of-week index matching JS Date.getDay() (0 = Sunday)
const DAY_INDEX = {
  Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3,
  Thursday: 4, Friday: 5, Saturday: 6,
}

function daysUntilNext(dayName, todayIndex) {
  const diff = (DAY_INDEX[dayName] - todayIndex + 7) % 7
  return diff
}

function getNextAvailable(resource) {
  if (resource.alwaysOpen) {
    return { day: null, hours: null, daysUntil: 0 }
  }
  const todayIndex = new Date().getDay()
  let best = null
  for (const entry of resource.schedule) {
    const d = daysUntilNext(entry.day, todayIndex)
    if (best === null || d < best.daysUntil) {
      best = { day: entry.day, hours: entry.hours, daysUntil: d }
    }
  }
  // Fallback if schedule is unexpectedly empty
  return best ?? { day: null, hours: null, daysUntil: 99 }
}

const STRINGS = {
  en: {
    searchLabel: "Find Food Nearby",
    placeholder: "Enter Zip Code",
    searchBtn: "Search",
    useLocation: "Use My Location",
    list: "List",
    map: "Map",
    noResults: "No resources found for this zip code.",
    noResultsSub: "Try a nearby zip like 90059, 90221, 90262, 90280, or 90255.",
    mapSoon: "Map view coming soon",
    mapSoonSub: "We're working on an interactive map. For now, use the list to find what's nearby.",
  },
  es: {
    searchLabel: "Encuentra Comida Cerca",
    placeholder: "Ingresa Código Postal",
    searchBtn: "Buscar",
    useLocation: "Usar Mi Ubicación",
    list: "Lista",
    map: "Mapa",
    noResults: "No se encontraron recursos para este código postal.",
    noResultsSub: "Intenta un código cercano como 90059, 90221, 90262, 90280 o 90255.",
    mapSoon: "Vista de mapa próximamente",
    mapSoonSub: "Estamos trabajando en un mapa interactivo. Por ahora usa la lista para encontrar recursos cercanos.",
  },
}

export default function NearMePage() {
  const { lang } = useLang()
  const t = STRINGS[lang]

  const [zipInput, setZipInput] = useState("")
  const [zipQuery, setZipQuery] = useState("")
  const [view, setView] = useState("list") // "list" | "map"

  function handleSearch() {
    setZipQuery(zipInput.trim())
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleSearch()
  }

  const sortedResources = useMemo(() => {
    const source =
      zipQuery === ""
        ? foodResources
        : foodResources.filter(r => r.zip === zipQuery)

    return source
      .map(r => ({ resource: r, next: getNextAvailable(r) }))
      .sort((a, b) => a.next.daysUntil - b.next.daysUntil)
  }, [zipQuery])

  return (
    <div className="pb-6">
      {/* ── Search section ── */}
      <section className="px-edge-margin pt-md pb-sm">
        <div className="flex flex-col gap-xs">
          <label
            htmlFor="zip-code"
            className="font-['Be_Vietnam_Pro'] text-[14px] font-bold uppercase tracking-wider text-on-surface-variant px-1"
          >
            {t.searchLabel}
          </label>

          <div className="relative flex items-center">
            <input
              id="zip-code"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={5}
              value={zipInput}
              onChange={e => setZipInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t.placeholder}
              className="w-full h-12 bg-[#F2F4F0] border-2 border-transparent focus:border-primary-container focus:outline-none rounded-2xl px-md font-['Be_Vietnam_Pro'] text-base text-on-surface transition-all"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 px-md py-1.5 bg-primary-container text-on-primary rounded-xl font-['Plus_Jakarta_Sans'] font-semibold text-sm active:scale-95 transition-transform"
            >
              {t.searchBtn}
            </button>
          </div>

          <button className="flex items-center justify-center gap-xs mt-xs py-2 text-primary-container font-['Plus_Jakarta_Sans'] font-semibold active:opacity-70 transition-opacity">
            <span className="material-symbols-outlined text-[20px]">my_location</span>
            <span>{t.useLocation}</span>
          </button>
        </div>
      </section>

      {/* ── List / Map toggle ── */}
      <section className="px-edge-margin mb-md">
        <div className="bg-surface-container-low p-1 rounded-full flex gap-1">
          <button
            onClick={() => setView("list")}
            className={`flex-1 py-2 rounded-full font-['Plus_Jakarta_Sans'] font-semibold text-sm flex items-center justify-center gap-xs transition-all ${
              view === "list"
                ? "bg-white shadow-sm text-primary-container"
                : "text-on-surface-variant hover:bg-surface-variant"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">list</span>
            {t.list}
          </button>
          <button
            onClick={() => setView("map")}
            className={`flex-1 py-2 rounded-full font-['Plus_Jakarta_Sans'] font-semibold text-sm flex items-center justify-center gap-xs transition-all ${
              view === "map"
                ? "bg-white shadow-sm text-primary-container"
                : "text-on-surface-variant hover:bg-surface-variant"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">map</span>
            {t.map}
          </button>
        </div>
      </section>

      {/* ── Content: list or map placeholder ── */}
      {view === "map" ? (
        <section className="px-edge-margin">
          <div className="bg-white rounded-2xl border border-[#E9EDC9] shadow-[0_4px_12px_rgba(45,106,79,0.08)] p-md flex flex-col items-center gap-sm text-center py-xl">
            <span
              className="material-symbols-outlined text-[48px] text-primary-container"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              map
            </span>
            <p className="font-['Plus_Jakarta_Sans'] font-semibold text-on-surface text-lg">
              {t.mapSoon}
            </p>
            <p className="font-['Be_Vietnam_Pro'] text-on-surface-variant text-sm leading-relaxed max-w-xs">
              {t.mapSoonSub}
            </p>
          </div>
        </section>
      ) : sortedResources.length === 0 ? (
        <section className="px-edge-margin">
          <div className="bg-white rounded-2xl border border-[#E9EDC9] shadow-[0_4px_12px_rgba(45,106,79,0.08)] p-md flex flex-col items-center gap-sm text-center py-xl">
            <span className="material-symbols-outlined text-[48px] text-outline">
              search_off
            </span>
            <p className="font-['Plus_Jakarta_Sans'] font-semibold text-on-surface text-lg">
              {t.noResults}
            </p>
            <p className="font-['Be_Vietnam_Pro'] text-on-surface-variant text-sm leading-relaxed max-w-xs">
              {t.noResultsSub}
            </p>
          </div>
        </section>
      ) : (
        <section className="px-edge-margin flex flex-col gap-md">
          {sortedResources.map(({ resource, next }) => (
            <FoodResourceCard
              key={resource.id}
              resource={resource}
              next={next}
              lang={lang}
            />
          ))}
        </section>
      )}

      {/* ── Filter FAB (visual only for now) ── */}
      <div className="fixed bottom-24 right-5 z-40">
        <button className="w-14 h-14 rounded-full bg-primary-container text-on-primary shadow-xl flex items-center justify-center active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-[28px]">filter_list</span>
        </button>
      </div>
    </div>
  )
}
