import { useState } from "react"
import { useLang } from "../context/LanguageContext"
import { QUESTIONS, PROGRAMS, assessEligibility } from "../data/benefitsPrograms"

// ── Pill styles for each confidence level ─────────────────────────────────
const PILL = {
  likely:        { bg: "bg-[#E7F3ED]", text: "text-primary",   label: { en: "Likely Eligible",  es: "Probablemente Elegible" } },
  worth_checking: { bg: "bg-[#FFF4E5]", text: "text-secondary", label: { en: "Worth Checking",   es: "Vale la Pena Verificar" } },
  enrolled:      { bg: "bg-surface-container", text: "text-on-surface-variant", label: { en: "Already Enrolled", es: "Ya Inscrito/a" } },
}

const INITIAL_ANSWERS = {
  householdSize: null,
  incomeBracket: null,
  childrenUnder5: null,
  pregnantBreastfeeding: null,
  currentBenefits: [],
}

const UI = {
  en: {
    stepOf: (n, t) => `Question ${n} of ${t}`,
    pct: (n, t) => `${Math.round((n / t) * 100)}% Complete`,
    back: "Back",
    continue: "Continue",
    skip: "Skip",
    yourResults: "Your Benefits Results",
    resultsSub: "Based on your answers, you may qualify for these programs.",
    learnMore: "Learn More →",
    disclaimer:
      'This is an estimate based on general income guidelines. Actual eligibility is determined by your official application. We encourage you to apply — you may qualify even if this tool says “Worth Checking.”',
    retake: "Retake Questionnaire",
    needHelp: "Need help applying?",
    needHelpSub: "Community guides can walk you through every step — in person or by phone.",
    findGuide: "Find a Guide",
  },
  es: {
    stepOf: (n, t) => `Pregunta ${n} de ${t}`,
    pct: (n, t) => `${Math.round((n / t) * 100)}% Completado`,
    back: "Atrás",
    continue: "Continuar",
    skip: "Omitir",
    yourResults: "Tus Resultados de Beneficios",
    resultsSub: "Según tus respuestas, podrías calificar para estos programas.",
    learnMore: "Más Información →",
    disclaimer:
      'Esto es un estimado basado en pautas generales de ingresos. La elegibilidad real se determina con tu solicitud oficial. Te animamos a aplicar — podrías calificar aunque esta herramienta diga “Vale la Pena Verificar.”',
    retake: "Repetir el Cuestionario",
    needHelp: "¿Necesitas ayuda para aplicar?",
    needHelpSub: "Guías comunitarios pueden acompañarte en cada paso — en persona o por teléfono.",
    findGuide: "Encontrar un Guía",
  },
}

// ── Question screen ───────────────────────────────────────────────────────
function QuestionScreen({ question, stepIndex, totalSteps, dir, answers, onAnswer, onBack }) {
  const { lang } = useLang()
  const t = UI[lang]

  // Multi-select local state (only used for Q5)
  const [multiSelected, setMultiSelected] = useState(
    answers.currentBenefits ?? []
  )

  function toggleMulti(value) {
    setMultiSelected(prev => {
      if (value === "none") return ["none"]
      const without = prev.filter(v => v !== "none")
      return without.includes(value)
        ? without.filter(v => v !== value)
        : [...without, value]
    })
  }

  const isMulti = question.type === "multi"

  return (
    <div
      key={stepIndex}
      className={`px-edge-margin pt-xs pb-32 ${dir === "forward" ? "anim-slide-right" : "anim-slide-left"}`}
    >
      {/* Progress bar */}
      <div className="w-full mb-lg">
        <div className="flex justify-between items-center mb-xs">
          <span className="font-['Be_Vietnam_Pro'] text-[13px] font-bold uppercase tracking-wider text-primary">
            {t.stepOf(stepIndex + 1, totalSteps)}
          </span>
          <span className="font-['Be_Vietnam_Pro'] text-[13px] font-bold uppercase tracking-wider text-outline">
            {t.pct(stepIndex + 1, totalSteps)}
          </span>
        </div>
        <div className="h-2 w-full bg-[#E9EDC9] rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${((stepIndex + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Question text */}
      <div className="mb-lg">
        <h1 className="font-['Plus_Jakarta_Sans'] font-bold text-[26px] leading-[34px] tracking-tight text-on-surface mb-sm">
          {question.text[lang]}
        </h1>
        <p className="font-['Be_Vietnam_Pro'] text-base text-on-surface-variant leading-relaxed">
          {question.subtext[lang]}
        </p>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-sm">
        {question.options.map(opt => {
          const isSelected = isMulti
            ? multiSelected.includes(opt.value)
            : false

          return (
            <button
              key={String(opt.value)}
              onClick={() => {
                if (isMulti) {
                  toggleMulti(opt.value)
                } else {
                  onAnswer(question.id, opt.value)
                }
              }}
              className={`group flex items-center justify-between p-md rounded-xl border shadow-[0_4px_12px_rgba(45,106,79,0.08)] transition-all active:scale-[0.98] ${
                isSelected
                  ? "bg-primary-fixed border-primary"
                  : "bg-surface-container-lowest border-[#E9EDC9] hover:border-primary"
              }`}
            >
              <div className="flex items-center gap-md">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    isSelected
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container text-primary-container group-hover:bg-primary-fixed"
                  }`}
                >
                  <span className="material-symbols-outlined text-2xl">{opt.icon}</span>
                </div>
                <span className="font-['Plus_Jakarta_Sans'] font-semibold text-base text-on-surface">
                  {opt.label[lang]}
                </span>
              </div>
              {isMulti ? (
                <span
                  className={`material-symbols-outlined text-[22px] transition-colors ${
                    isSelected ? "text-primary" : "text-outline"
                  }`}
                  style={isSelected ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {isSelected ? "check_circle" : "radio_button_unchecked"}
                </span>
              ) : (
                <span className="material-symbols-outlined text-outline group-hover:text-primary">
                  chevron_right
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Multi-select Continue button */}
      {isMulti && (
        <div className="fixed bottom-24 left-0 w-full px-edge-margin z-40 max-w-[390px] mx-auto">
          <button
            onClick={() => onAnswer(question.id, multiSelected.length > 0 ? multiSelected : ["none"])}
            className="w-full py-3 bg-primary text-on-primary rounded-full font-['Plus_Jakarta_Sans'] font-semibold text-base flex items-center justify-center gap-xs active:scale-[0.98] transition-transform"
          >
            {t.continue}
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      )}

      {/* Back button */}
      {stepIndex > 0 && (
        <button
          onClick={onBack}
          className="mt-xl flex items-center gap-xs text-on-surface-variant font-['Plus_Jakarta_Sans'] font-semibold text-sm active:opacity-60 transition-opacity"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          {t.back}
        </button>
      )}
    </div>
  )
}

// ── Program card (results screen) ─────────────────────────────────────────
function ProgramCard({ program, level, lang }) {
  const pill = PILL[level]
  const name = typeof program.name === "object" ? program.name[lang] : program.name
  const applyLabel = program.applyLabel[lang]

  return (
    <article className="bg-surface-container-lowest rounded-[16px] border border-[#E9EDC9] p-md shadow-[0_4px_12px_rgba(45,106,79,0.08)] flex flex-col gap-sm">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-xs">
          <div className={`w-10 h-10 rounded-full ${program.iconBg} flex items-center justify-center ${program.iconColor}`}>
            <span className="material-symbols-outlined text-[20px]">{program.icon}</span>
          </div>
          <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[20px] leading-[28px] text-on-surface">
            {name}
          </h3>
        </div>
        <span className={`inline-flex items-center px-3 py-1 rounded-full ${pill.bg} ${pill.text} text-[11px] font-bold uppercase tracking-wider whitespace-nowrap ml-xs`}>
          {pill.label[lang]}
        </span>
      </div>

      <p className="font-['Be_Vietnam_Pro'] text-base text-on-surface-variant leading-relaxed">
        {program.description[lang]}
      </p>

      <div className="mt-auto">
        <a
          href={program.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-primary text-on-primary py-3 rounded-full font-['Plus_Jakarta_Sans'] font-semibold text-base transition-transform active:scale-95"
        >
          {applyLabel}
        </a>
      </div>
    </article>
  )
}

// ── Results screen ────────────────────────────────────────────────────────
function ResultsScreen({ answers, onRetake }) {
  const { lang } = useLang()
  const t = UI[lang]
  const results = assessEligibility(answers)

  const RESULT_MAP = {
    calFresh:    results.calFresh,
    wic:         results.wic,
    schoolMeals: results.schoolMeals,
    mediCal:     results.mediCal,
  }

  return (
    <div className="px-edge-margin pt-md pb-32 anim-slide-right">
      {/* Heading */}
      <section className="mb-lg">
        <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] leading-[36px] text-primary mb-xs">
          {t.yourResults}
        </h2>
        <p className="font-['Be_Vietnam_Pro'] text-base text-on-surface-variant leading-relaxed">
          {t.resultsSub}
        </p>
      </section>

      {/* Program cards */}
      <div className="flex flex-col gap-md mb-lg">
        {PROGRAMS.map(program => (
          <ProgramCard
            key={program.id}
            program={program}
            level={RESULT_MAP[program.id]}
            lang={lang}
          />
        ))}
      </div>

      {/* Help banner (from Stitch results screen) */}
      <section className="mb-md">
        <div className="relative overflow-hidden rounded-[20px] bg-primary p-lg text-on-primary">
          <div className="relative z-10 max-w-[260px]">
            <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-xl mb-xs">
              {t.needHelp}
            </h4>
            <p className="font-['Be_Vietnam_Pro'] text-base opacity-90 mb-sm leading-relaxed">
              {t.needHelpSub}
            </p>
            <button className="bg-surface-container-lowest text-primary px-md py-3 rounded-full font-['Plus_Jakarta_Sans'] font-semibold text-base transition-transform active:scale-95">
              {t.findGuide}
            </button>
          </div>
          <div className="absolute -right-8 -bottom-8 opacity-20 pointer-events-none select-none">
            <span
              className="material-symbols-outlined text-[140px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              volunteer_activism
            </span>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <p className="font-['Be_Vietnam_Pro'] text-sm text-on-surface-variant leading-relaxed mb-lg px-1">
        {t.disclaimer}
      </p>

      {/* Retake */}
      <button
        onClick={onRetake}
        className="w-full py-3 border-2 border-primary text-primary rounded-full font-['Plus_Jakarta_Sans'] font-semibold text-base flex items-center justify-center gap-xs active:scale-[0.98] transition-transform"
      >
        <span className="material-symbols-outlined text-[20px]">refresh</span>
        {t.retake}
      </button>
    </div>
  )
}

// ── Main BenefitsPage ─────────────────────────────────────────────────────
export default function BenefitsPage() {
  const [step, setStep]       = useState(0)
  const [dir, setDir]         = useState("forward")
  const [answers, setAnswers] = useState(INITIAL_ANSWERS)

  const TOTAL = QUESTIONS.length   // 5

  function handleAnswer(questionId, value) {
    setDir("forward")
    setAnswers(prev => ({ ...prev, [questionId]: value }))
    setStep(s => s + 1)
  }

  function handleBack() {
    setDir("backward")
    setStep(s => s - 1)
  }

  function handleRetake() {
    setDir("backward")
    setAnswers(INITIAL_ANSWERS)
    setStep(0)
  }

  if (step >= TOTAL) {
    return (
      <ResultsScreen
        key="results"
        answers={answers}
        onRetake={handleRetake}
      />
    )
  }

  return (
    <QuestionScreen
      key={step}
      question={QUESTIONS[step]}
      stepIndex={step}
      totalSteps={TOTAL}
      dir={dir}
      answers={answers}
      onAnswer={handleAnswer}
      onBack={handleBack}
    />
  )
}
