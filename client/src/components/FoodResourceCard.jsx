/*
  Translated 1:1 from the Stitch near_me_food_resources/code.html card structure.

  Type → pill color mapping follows the Stitch's two-tone pattern:
    warm peach  → Food Pantry, Community Fridge
    mint green  → Free Groceries, Food Distribution
    soft red    → Church Giveaway

  Schedule icon varies by availability to match Stitch exactly:
    all_inclusive → Open 24/7
    schedule      → Today
    calendar_today → Tomorrow or a future day name
*/

const TYPE_STYLES = {
  "Food Pantry":       "bg-secondary-fixed text-on-secondary-fixed-variant",
  "Community Fridge":  "bg-secondary-fixed text-on-secondary-fixed-variant",
  "Free Groceries":    "bg-primary-fixed text-on-primary-fixed-variant",
  "Food Distribution": "bg-primary-fixed text-on-primary-fixed-variant",
  "Church Giveaway":   "bg-tertiary-fixed text-on-tertiary-fixed-variant",
}

function scheduleIcon(daysUntil, alwaysOpen) {
  if (alwaysOpen) return "all_inclusive"
  if (daysUntil === 0) return "schedule"
  return "calendar_today"
}

export default function FoodResourceCard({ resource, next, lang }) {
  const pillStyle = TYPE_STYLES[resource.type] ?? "bg-surface-container text-on-surface-variant"

  const typeLabel = lang === "es"
    ? TYPE_LABELS_ES[resource.type] ?? resource.type
    : resource.type

  const nextLabel = resource.alwaysOpen
    ? (lang === "es" ? "Abierto 24/7" : "Open 24/7")
    : next.daysUntil === 0
      ? (lang === "es" ? "Hoy" : "Today")
      : next.daysUntil === 1
        ? (lang === "es" ? "Mañana" : "Tomorrow")
        : next.day

  const availablePrefix = lang === "es" ? "Próxima Disponible:" : "Next Available:"

  const directionsLabel = lang === "es" ? "Cómo Llegar" : "Get Directions"

  return (
    <div className="bg-white rounded-2xl border border-[#E9EDC9] shadow-[0_4px_12px_rgba(45,106,79,0.08)] overflow-hidden">
      <div className="p-md">
        {/* Type pill row */}
        <div className="flex justify-between items-start mb-xs">
          <span className={`px-3 py-1 ${pillStyle} rounded-full text-[12px] font-bold uppercase tracking-wider`}>
            {typeLabel}
          </span>
          {!resource.verified && (
            <span className="text-[11px] text-outline italic">
              {lang === "es" ? "por verificar" : "unverified"}
            </span>
          )}
        </div>

        {/* Name */}
        <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[20px] leading-[28px] text-on-surface mb-1">
          {resource.name}
        </h3>

        {/* Address */}
        <p className="text-on-surface-variant text-sm mb-md flex items-start gap-xs">
          <span className="material-symbols-outlined text-[16px] mt-0.5 shrink-0">location_on</span>
          {resource.address}
        </p>

        {/* Next available box */}
        <div className="bg-surface-container-low p-sm rounded-xl mb-md">
          {resource.alwaysOpen ? (
            <div className="flex items-center gap-xs">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                all_inclusive
              </span>
              <span className="font-bold text-on-surface text-sm">
                {nextLabel}
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-xs">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {scheduleIcon(next.daysUntil, resource.alwaysOpen)}
                </span>
                <span className="font-bold text-on-surface text-sm">
                  {availablePrefix} {nextLabel}
                </span>
              </div>
              {next.hours && (
                <span className="text-primary font-bold text-sm">{next.hours}</span>
              )}
            </div>
          )}
        </div>

        {/* Get Directions button */}
        <a
          href={resource.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 bg-primary text-on-primary rounded-full font-['Plus_Jakarta_Sans'] font-semibold text-base flex items-center justify-center gap-xs active:scale-[0.98] transition-transform"
        >
          <span className="material-symbols-outlined text-[20px]">near_me</span>
          {directionsLabel}
        </a>
      </div>
    </div>
  )
}

const TYPE_LABELS_ES = {
  "Food Pantry":       "Despensa de Alimentos",
  "Community Fridge":  "Nevera Comunitaria",
  "Free Groceries":    "Comida Gratis",
  "Food Distribution": "Distribución de Alimentos",
  "Church Giveaway":   "Reparto de Iglesia",
}
