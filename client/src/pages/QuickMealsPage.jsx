import { useState } from "react"
import { useLang } from "../context/LanguageContext"
import { matchRecipes } from "../data/recipes"

const STRINGS = {
  en: {
    heading: "What's in your pantry?",
    sub: "Pick the items you have on hand and we'll find budget-friendly meals for you.",
    cta: "Show me meals",
    back: "Back",
    results: "Suggested Recipes",
    fallbackNote: "No exact matches — here are our best suggestions based on what you have.",
    matchOf: (have, total) => `You have ${have} of ${total} ingredients`,
    viewRecipe: "View Recipe",
    ingredients: "Ingredients",
    instructions: "Instructions",
    haveLabel: "You have this",
    needLabel: "You need this",
    tip: "Quick Tip",
    servings: n => `${n} servings`,
    min: "min",
    cal: "cal",
    protein: n => `${n}g protein`,
    cost: n => `$${n.toFixed(2)}/serving`,
    changeIngredients: "Change ingredients",
  },
  es: {
    heading: "¿Qué tienes en tu despensa?",
    sub: "Selecciona los ingredientes que tienes y encontraremos comidas económicas para ti.",
    cta: "Mostrarme comidas",
    back: "Regresar",
    results: "Recetas Sugeridas",
    fallbackNote: "Sin coincidencias exactas — aquí están las mejores sugerencias según lo que tienes.",
    matchOf: (have, total) => `Tienes ${have} de ${total} ingredientes`,
    viewRecipe: "Ver Receta",
    ingredients: "Ingredientes",
    instructions: "Instrucciones",
    haveLabel: "Ya tienes esto",
    needLabel: "Necesitas esto",
    tip: "Consejo Rápido",
    servings: n => `${n} porciones`,
    min: "min",
    cal: "cal",
    protein: n => `${n}g proteína`,
    cost: n => `$${n.toFixed(2)}/porción`,
    changeIngredients: "Cambiar ingredientes",
  },
}

const INGREDIENTS = [
  { id: "rice",       icon: "rice_bowl",             label: { en: "Rice",       es: "Arroz"       } },
  { id: "beans",      icon: "eco",                   label: { en: "Beans",      es: "Frijoles"    } },
  { id: "eggs",       icon: "egg",                   label: { en: "Eggs",       es: "Huevos"      } },
  { id: "chicken",    icon: "restaurant",            label: { en: "Chicken",    es: "Pollo"       } },
  { id: "tortillas",  icon: "circle",                label: { en: "Tortillas",  es: "Tortillas"   } },
  { id: "potatoes",   icon: "grass",                 label: { en: "Potatoes",   es: "Papas"       } },
  { id: "onions",     icon: "radio_button_checked",  label: { en: "Onions",     es: "Cebollas"    } },
  { id: "tomatoes",   icon: "nutrition",             label: { en: "Tomatoes",   es: "Tomates"     } },
  { id: "ground_beef",icon: "skillet",               label: { en: "Ground Beef",es: "Carne Molida"} },
  { id: "pasta",      icon: "ramen_dining",          label: { en: "Pasta",      es: "Pasta"       } },
  { id: "cheese",     icon: "grid_view",             label: { en: "Cheese",     es: "Queso"       } },
  { id: "chiles",     icon: "local_fire_department", label: { en: "Chiles",     es: "Chiles"      } },
]

const CARD_COLORS = [
  "bg-primary-fixed",
  "bg-secondary-fixed",
  "bg-tertiary-fixed",
  "bg-primary-fixed-dim",
  "bg-secondary-fixed-dim",
]

// ── Ingredient picker ────────────────────────────────────────────────────────
function PickerView({ selected, onToggle, onSubmit, lang }) {
  const t = STRINGS[lang]

  return (
    <div className="px-edge-margin pt-md pb-6 anim-slide-right">
      <section className="mb-lg">
        <h1 className="font-['Plus_Jakarta_Sans'] font-bold text-[30px] leading-[38px] tracking-tight text-on-surface mb-xs">
          {t.heading}
        </h1>
        <p className="font-['Be_Vietnam_Pro'] text-base text-on-surface-variant leading-relaxed">
          {t.sub}
        </p>
      </section>

      <div className="grid grid-cols-3 gap-xs mb-xl">
        {INGREDIENTS.map(({ id, icon, label }) => {
          const isSelected = selected.has(id)
          return (
            <button
              key={id}
              onClick={() => onToggle(id)}
              className={`flex flex-col items-center justify-center p-md rounded-xl border shadow-[0_4px_12px_rgba(45,106,79,0.08)] active:scale-95 transition-all duration-150 ${
                isSelected
                  ? "bg-primary border-primary text-white"
                  : "bg-white border-[#E9EDC9] text-on-surface-variant"
              }`}
            >
              <span
                className="material-symbols-outlined text-[28px] mb-xs"
                style={isSelected ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {icon}
              </span>
              <span className="font-['Be_Vietnam_Pro'] text-[12px] font-bold uppercase tracking-wider leading-tight text-center">
                {label[lang]}
              </span>
            </button>
          )
        })}
      </div>

      <button
        onClick={onSubmit}
        disabled={selected.size === 0}
        className="w-full h-xl bg-primary text-white font-['Plus_Jakarta_Sans'] font-semibold text-base rounded-full shadow-lg flex items-center justify-center gap-xs active:scale-[0.98] transition-transform disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <span>{t.cta}</span>
        <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  )
}

// ── Recipe card (results list) ────────────────────────────────────────────────
function RecipeCard({ match, colorClass, lang, onView }) {
  const t = STRINGS[lang]
  const { recipe, have, pct } = match
  const haveCount = have.length
  const totalCount = recipe.requiredIngredients.length
  const pctInt = Math.round(pct * 100)

  return (
    <article className="bg-white rounded-[16px] border border-[#E9EDC9] shadow-[0_4px_12px_rgba(45,106,79,0.08)] overflow-hidden">
      {/* Tonal color header (replaces image) */}
      <div className={`${colorClass} h-16 flex items-center px-md gap-xs`}>
        <span
          className="material-symbols-outlined text-[32px] text-primary opacity-70"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          restaurant
        </span>
        {/* Match pill */}
        <span className={`ml-auto inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider whitespace-nowrap ${
          pct >= 1
            ? "bg-primary text-on-primary"
            : pct >= 0.7
              ? "bg-[#E7F3ED] text-primary"
              : "bg-[#FFF4E5] text-secondary"
        }`}>
          {pct >= 1 ? "✓ Full Match" : `${pctInt}% match`}
        </span>
      </div>

      <div className="p-md">
        {/* Name */}
        <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[20px] leading-[28px] text-on-surface mb-xs">
          {recipe.name[lang]}
        </h3>

        {/* Match indicator */}
        <p className="font-['Be_Vietnam_Pro'] text-[13px] text-on-surface-variant mb-sm">
          {t.matchOf(haveCount, totalCount)}
        </p>

        {/* Stats row */}
        <div className="flex items-center gap-sm mb-md">
          <div className="flex items-center gap-[4px] text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            <span className="font-['Be_Vietnam_Pro'] text-[13px] font-semibold">{recipe.cookTime} {t.min}</span>
          </div>
          <div className="flex items-center gap-[4px] text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
            <span className="font-['Be_Vietnam_Pro'] text-[13px] font-semibold">{recipe.caloriesPerServing} {t.cal}</span>
          </div>
          <div className="flex items-center gap-[4px] text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]">fitness_center</span>
            <span className="font-['Be_Vietnam_Pro'] text-[13px] font-semibold">{t.protein(recipe.proteinPerServing)}</span>
          </div>
          <div className="flex items-center gap-[4px] text-on-surface-variant ml-auto">
            <span className="material-symbols-outlined text-[16px]">payments</span>
            <span className="font-['Be_Vietnam_Pro'] text-[13px] font-semibold">{t.cost(recipe.costPerServing)}</span>
          </div>
        </div>

        <button
          onClick={() => onView(match)}
          className="w-full py-3 bg-primary text-on-primary rounded-full font-['Plus_Jakarta_Sans'] font-semibold text-base flex items-center justify-center gap-xs active:scale-[0.98] transition-transform"
        >
          {t.viewRecipe}
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </article>
  )
}

// ── Results list view ─────────────────────────────────────────────────────────
function ResultsView({ results, isFallback, lang, onView, onBack }) {
  const t = STRINGS[lang]

  return (
    <div className="px-edge-margin pt-md pb-32 anim-slide-right">
      <section className="mb-md">
        <button
          onClick={onBack}
          className="flex items-center gap-xs text-on-surface-variant font-['Plus_Jakarta_Sans'] font-semibold text-sm mb-md active:opacity-60 transition-opacity"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          {t.changeIngredients}
        </button>

        <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] leading-[36px] text-primary mb-xs">
          {t.results}
        </h2>

        {isFallback && (
          <p className="font-['Be_Vietnam_Pro'] text-sm text-on-surface-variant leading-relaxed">
            {t.fallbackNote}
          </p>
        )}
      </section>

      <div className="flex flex-col gap-md">
        {results.map((match, i) => (
          <RecipeCard
            key={match.recipe.id}
            match={match}
            colorClass={CARD_COLORS[i % CARD_COLORS.length]}
            lang={lang}
            onView={onView}
          />
        ))}
      </div>
    </div>
  )
}

// ── Recipe detail view ────────────────────────────────────────────────────────
function DetailView({ match, lang, onBack }) {
  const t = STRINGS[lang]
  const { recipe, have } = match
  const haveSet = new Set(have)

  return (
    <div className="pb-32 anim-slide-right">
      {/* Color header with recipe name */}
      <div className={`${CARD_COLORS[0]} px-edge-margin pt-md pb-lg`}>
        <button
          onClick={onBack}
          className="flex items-center gap-xs text-primary font-['Plus_Jakarta_Sans'] font-semibold text-sm mb-md active:opacity-60 transition-opacity"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          {t.back}
        </button>
        <h1 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] leading-[36px] tracking-tight text-on-surface mb-xs">
          {recipe.name[lang]}
        </h1>
        {/* Stats row */}
        <div className="flex items-center gap-sm flex-wrap">
          <div className="flex items-center gap-[4px] text-primary">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            <span className="font-['Be_Vietnam_Pro'] text-sm font-semibold">{recipe.cookTime} {t.min}</span>
          </div>
          <div className="flex items-center gap-[4px] text-primary">
            <span className="material-symbols-outlined text-[16px]">people</span>
            <span className="font-['Be_Vietnam_Pro'] text-sm font-semibold">{t.servings(recipe.servings)}</span>
          </div>
          <div className="flex items-center gap-[4px] text-primary">
            <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
            <span className="font-['Be_Vietnam_Pro'] text-sm font-semibold">{recipe.caloriesPerServing} {t.cal}</span>
          </div>
          <div className="flex items-center gap-[4px] text-primary">
            <span className="material-symbols-outlined text-[16px]">payments</span>
            <span className="font-['Be_Vietnam_Pro'] text-sm font-semibold">{t.cost(recipe.costPerServing)}</span>
          </div>
        </div>
      </div>

      <div className="px-edge-margin pt-lg">
        {/* Ingredients */}
        <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[20px] text-on-surface mb-sm">
          {t.ingredients}
        </h2>
        <div className="flex flex-col gap-xs mb-lg">
          {recipe.fullIngredients.map((item, i) => {
            const hasIt = item.stapleId ? haveSet.has(item.stapleId) : true
            const needsIt = item.stapleId && !haveSet.has(item.stapleId)

            return (
              <div
                key={i}
                className={`flex items-center gap-sm p-sm rounded-xl border ${
                  needsIt
                    ? "border-[#E9EDC9] bg-white opacity-50"
                    : "border-[#E9EDC9] bg-white"
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  needsIt
                    ? "bg-surface-container"
                    : "bg-[#E7F3ED]"
                }`}>
                  <span className={`material-symbols-outlined text-[16px] ${
                    needsIt ? "text-outline" : "text-primary"
                  }`}
                  style={needsIt ? {} : { fontVariationSettings: "'FILL' 1" }}
                  >
                    {needsIt ? "add_circle" : "check_circle"}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-['Be_Vietnam_Pro'] text-base text-on-surface font-semibold">
                    {item.name[lang]}
                  </span>
                </div>
                <span className="font-['Be_Vietnam_Pro'] text-sm text-on-surface-variant whitespace-nowrap">
                  {item.qty}
                </span>
              </div>
            )
          })}
        </div>

        {/* Instructions */}
        <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[20px] text-on-surface mb-sm">
          {t.instructions}
        </h2>
        <ol className="flex flex-col gap-sm mb-lg">
          {recipe.instructions[lang].map((step, i) => (
            <li key={i} className="flex gap-sm">
              <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-[2px]">
                <span className="font-['Plus_Jakarta_Sans'] font-bold text-[12px] text-on-primary">
                  {i + 1}
                </span>
              </div>
              <p className="font-['Be_Vietnam_Pro'] text-base text-on-surface leading-relaxed flex-1">
                {step}
              </p>
            </li>
          ))}
        </ol>

        {/* Tip card */}
        <div className="bg-secondary-fixed rounded-[16px] p-md flex gap-sm mb-6">
          <span
            className="material-symbols-outlined text-[24px] text-secondary flex-shrink-0 mt-[2px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            lightbulb
          </span>
          <div>
            <p className="font-['Plus_Jakarta_Sans'] font-semibold text-base text-on-surface mb-xs">
              {t.tip}
            </p>
            <p className="font-['Be_Vietnam_Pro'] text-sm text-on-surface-variant leading-relaxed">
              {recipe.tip[lang]}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function QuickMealsPage() {
  const { lang } = useLang()

  const [view, setView]               = useState("picker")     // "picker" | "results" | "detail"
  const [selected, setSelected]       = useState(new Set())
  const [matchResults, setMatchResults] = useState([])
  const [isFallback, setIsFallback]   = useState(false)
  const [activeMatch, setActiveMatch] = useState(null)

  function toggle(id) {
    setSelected(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  function handleSubmit() {
    const { results, isFallback: fallback } = matchRecipes(selected)
    setMatchResults(results)
    setIsFallback(fallback)
    setView("results")
  }

  function handleViewRecipe(match) {
    setActiveMatch(match)
    setView("detail")
  }

  function handleBackToResults() {
    setView("results")
  }

  function handleBackToPicker() {
    setView("picker")
  }

  if (view === "detail" && activeMatch) {
    return (
      <DetailView
        key="detail"
        match={activeMatch}
        lang={lang}
        onBack={handleBackToResults}
      />
    )
  }

  if (view === "results") {
    return (
      <ResultsView
        key="results"
        results={matchResults}
        isFallback={isFallback}
        lang={lang}
        onView={handleViewRecipe}
        onBack={handleBackToPicker}
      />
    )
  }

  return (
    <PickerView
      key="picker"
      selected={selected}
      onToggle={toggle}
      onSubmit={handleSubmit}
      lang={lang}
    />
  )
}
