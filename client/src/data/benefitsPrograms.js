/*
  Benefits eligibility data for NutriFind 2.0.

  Income thresholds use 2025 Federal Poverty Guidelines
  (HHS, effective January 2025, 48 contiguous states + DC):
    Base: $15,650/year ($1,304/month) for 1 person
    Each additional person: +$5,500/year (+$458/month)

  Program thresholds:
    CalFresh (CA):      200% FPL gross income (broad-based categorical eligibility)
    WIC:                185% FPL
    Free School Meals:  185% FPL (NSLP), but LAUSD & Compton Unified use CEP
                        (Community Eligibility Provision — ALL students eat free)
    Medi-Cal adults:    138% FPL
    Medi-Cal children/
    pregnant:           266% FPL (CA Medi-Cal for families)

  DISCLAIMER: This tool provides estimates only. Actual eligibility
  depends on a full application and official review. We encourage
  everyone to apply — you may qualify even if this tool says
  "Worth Checking."
*/

// ── 2025 Monthly FPL by household size (size capped at 8) ─────────────────
const FPL = { 1: 1304, 2: 1763, 3: 2221, 4: 2679, 5: 3138, 6: 3596, 7: 4054, 8: 4513 }

function fpl(size) {
  return FPL[Math.min(size, 8)]
}

// Pre-computed monthly thresholds by household size 1–8
export const THRESHOLDS = {
  // CalFresh: 200% FPL (California BBCE)
  calFresh: Object.fromEntries(
    Object.entries(FPL).map(([k, v]) => [k, Math.round(v * 2.00)])
  ),
  // WIC / Free School Meals: 185% FPL
  wic: Object.fromEntries(
    Object.entries(FPL).map(([k, v]) => [k, Math.round(v * 1.85)])
  ),
  schoolMeals: Object.fromEntries(
    Object.entries(FPL).map(([k, v]) => [k, Math.round(v * 1.85)])
  ),
  // Medi-Cal adults: 138% FPL
  mediCalAdult: Object.fromEntries(
    Object.entries(FPL).map(([k, v]) => [k, Math.round(v * 1.38)])
  ),
  // Medi-Cal children / pregnant: 266% FPL
  mediCalChild: Object.fromEntries(
    Object.entries(FPL).map(([k, v]) => [k, Math.round(v * 2.66)])
  ),
}

// ── Income bracket definitions ────────────────────────────────────────────
export const INCOME_BRACKETS = {
  under_1500: { min: 0,    max: 1499 },
  "1500_2500":  { min: 1500, max: 2500 },
  "2500_3500":  { min: 2500, max: 3500 },
  "3500_4500":  { min: 3500, max: 4500 },
  over_4500:  { min: 4501, max: Infinity },
}

// ── Questionnaire questions (bilingual) ───────────────────────────────────
export const QUESTIONS = [
  {
    id: "householdSize",
    type: "single",
    text: {
      en: "How many people live in your household?",
      es: "¿Cuántas personas viven en tu hogar?",
    },
    subtext: {
      en: "Include everyone you buy and prepare food with.",
      es: "Incluye a todos con quienes compras y preparas alimentos.",
    },
    options: [
      { value: 1, label: { en: "1 Person",   es: "1 Persona"   }, icon: "person"          },
      { value: 2, label: { en: "2 People",   es: "2 Personas"  }, icon: "group"           },
      { value: 3, label: { en: "3 People",   es: "3 Personas"  }, icon: "family_restroom" },
      { value: 4, label: { en: "4 People",   es: "4 Personas"  }, icon: "groups"          },
      { value: 5, label: { en: "5 People",   es: "5 Personas"  }, icon: "diversity_3"     },
      { value: 6, label: { en: "6 People",   es: "6 Personas"  }, icon: "diversity_3"     },
      { value: 7, label: { en: "7 People",   es: "7 Personas"  }, icon: "diversity_3"     },
      { value: 8, label: { en: "8+ People",  es: "8+ Personas" }, icon: "diversity_3"     },
    ],
  },
  {
    id: "incomeBracket",
    type: "single",
    text: {
      en: "What's your approximate monthly household income?",
      es: "¿Cuál es el ingreso mensual aproximado de tu hogar?",
    },
    subtext: {
      en: "Before taxes, combining all sources for everyone in the household.",
      es: "Antes de impuestos, combinando todas las fuentes de ingreso del hogar.",
    },
    options: [
      { value: "under_1500",  label: { en: "Under $1,500",    es: "Menos de $1,500"  }, icon: "savings"                },
      { value: "1500_2500",   label: { en: "$1,500 – $2,500", es: "$1,500 – $2,500"  }, icon: "payments"               },
      { value: "2500_3500",   label: { en: "$2,500 – $3,500", es: "$2,500 – $3,500"  }, icon: "payments"               },
      { value: "3500_4500",   label: { en: "$3,500 – $4,500", es: "$3,500 – $4,500"  }, icon: "account_balance_wallet" },
      { value: "over_4500",   label: { en: "Over $4,500",     es: "Más de $4,500"    }, icon: "account_balance"        },
    ],
  },
  {
    id: "childrenUnder5",
    type: "single",
    text: {
      en: "Do you have children under 5 in your household?",
      es: "¿Tienes hijos menores de 5 años en tu hogar?",
    },
    subtext: {
      en: "This affects eligibility for WIC and Medi-Cal for families.",
      es: "Esto afecta la elegibilidad para WIC y Medi-Cal para familias.",
    },
    options: [
      { value: true,  label: { en: "Yes", es: "Sí" }, icon: "child_care" },
      { value: false, label: { en: "No",  es: "No"  }, icon: "person"    },
    ],
  },
  {
    id: "pregnantBreastfeeding",
    type: "single",
    text: {
      en: "Are you currently pregnant or breastfeeding?",
      es: "¿Estás embarazada o amamantando actualmente?",
    },
    subtext: {
      en: "This qualifies you for WIC and higher Medi-Cal income limits.",
      es: "Esto te califica para WIC y límites de ingreso más altos en Medi-Cal.",
    },
    options: [
      { value: true,  label: { en: "Yes", es: "Sí" }, icon: "pregnant_woman" },
      { value: false, label: { en: "No",  es: "No"  }, icon: "person"        },
    ],
  },
  {
    id: "currentBenefits",
    type: "multi",
    text: {
      en: "Do you currently receive any of these?",
      es: "¿Actualmente recibes alguno de estos?",
    },
    subtext: {
      en: "Select all that apply. We'll mark programs you already have.",
      es: "Selecciona todos los que apliquen. Marcaremos los que ya tienes.",
    },
    options: [
      { value: "none",     label: { en: "None of these",  es: "Ninguno"          }, icon: "block"            },
      { value: "calfresh", label: { en: "CalFresh",       es: "CalFresh"         }, icon: "shopping_basket"  },
      { value: "wic",      label: { en: "WIC",            es: "WIC"              }, icon: "child_care"       },
      { value: "medi_cal", label: { en: "Medi-Cal",       es: "Medi-Cal"         }, icon: "medical_services" },
      { value: "other",    label: { en: "Other benefits", es: "Otros beneficios" }, icon: "more_horiz"       },
    ],
  },
]

// ── Program metadata (used by results screen) ─────────────────────────────
export const PROGRAMS = [
  {
    id: "calFresh",
    name: "CalFresh",
    icon: "shopping_basket",
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary",
    description: {
      en: "Monthly grocery money on an EBT card to buy fresh food for your family.",
      es: "Dinero mensual en una tarjeta EBT para comprar comida fresca para tu familia.",
    },
    applyUrl: "https://www.getcalfresh.org",
    applyLabel: { en: "Apply on GetCalFresh.org", es: "Aplicar en GetCalFresh.org" },
  },
  {
    id: "wic",
    name: "WIC",
    icon: "child_care",
    iconBg: "bg-secondary-fixed",
    iconColor: "text-secondary",
    description: {
      en: "Free healthy food, nutrition support, and breastfeeding help for pregnant people and children under 5.",
      es: "Comida saludable gratis, apoyo nutricional y ayuda con lactancia para embarazadas e hijos menores de 5 años.",
    },
    applyUrl: "https://ph.lacounty.gov/wic",
    applyLabel: { en: "Find LA County WIC", es: "Encuentra WIC en el Condado de LA" },
  },
  {
    id: "schoolMeals",
    name: { en: "Free School Meals", es: "Comidas Escolares Gratis" },
    icon: "school",
    iconBg: "bg-tertiary-fixed",
    iconColor: "text-tertiary",
    description: {
      en: "Free breakfast and lunch at school every day. LAUSD and Compton Unified serve ALL students free — no income test required.",
      es: "Desayuno y almuerzo gratis en la escuela cada día. LAUSD y Compton Unified sirven a TODOS los estudiantes gratis — sin prueba de ingresos.",
    },
    applyUrl: "https://achieve.lausd.net/Page/11603",
    applyLabel: { en: "LAUSD Meal Programs", es: "Programas de Comidas LAUSD" },
  },
  {
    id: "mediCal",
    name: "Medi-Cal",
    icon: "medical_services",
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary",
    description: {
      en: "Free or low-cost health, dental, and vision coverage for individuals and families with limited income.",
      es: "Cobertura de salud, dental y visión gratuita o de bajo costo para personas y familias con ingresos limitados.",
    },
    applyUrl: "https://www.coveredca.com/medi-cal/",
    applyLabel: { en: "Apply on CoveredCA.com", es: "Aplicar en CoveredCA.com" },
  },
]

// ── Eligibility assessment ─────────────────────────────────────────────────
/*
  Returns one of three values per program:
    "likely"         → entire income range is under the threshold
    "worth_checking" → income may overlap the threshold, or above but
                       deductions / special cases could still qualify them
    "enrolled"       → user already receives this program
*/
export function assessEligibility(answers) {
  const size    = Math.min(answers.householdSize ?? 1, 8).toString()
  const bracket = INCOME_BRACKETS[answers.incomeBracket ?? "under_1500"]
  const current = answers.currentBenefits ?? []
  const hasKids = answers.childrenUnder5 === true
  const pregnant = answers.pregnantBreastfeeding === true

  function status(threshold) {
    if (bracket.max <= threshold) return "likely"
    return "worth_checking"
  }

  // CalFresh
  const calFresh = current.includes("calfresh")
    ? "enrolled"
    : status(THRESHOLDS.calFresh[size])

  // WIC — requires pregnancy, breastfeeding, or children under 5
  const wicQualifies = hasKids || pregnant
  const wic = current.includes("wic")
    ? "enrolled"
    : wicQualifies
      ? status(THRESHOLDS.wic[size])
      : "worth_checking"

  // Free School Meals — LAUSD/Compton Unified have CEP (all students eat free).
  // We don't know if they have school-age children, but for SE LA households
  // with 3+ members it's very likely. Any household qualifies income-wise at 185% FPL.
  const schoolMeals = (answers.householdSize >= 3)
    ? status(THRESHOLDS.schoolMeals[size])
    : "worth_checking"

  // Medi-Cal — use the child/pregnancy threshold (266% FPL) if applicable,
  // otherwise use adult threshold (138% FPL). California Medi-Cal covers all
  // income-eligible residents regardless of immigration status as of 2024.
  const mediCalThreshold = (hasKids || pregnant)
    ? THRESHOLDS.mediCalChild[size]
    : THRESHOLDS.mediCalAdult[size]
  const mediCal = current.includes("medi_cal")
    ? "enrolled"
    : status(mediCalThreshold)

  return { calFresh, wic, schoolMeals, mediCal }
}
