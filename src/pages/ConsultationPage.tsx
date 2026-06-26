import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";

const steps = [
  {
    id: 1,
    question: "What is your project type?",
    options: ["Residential", "Commercial", "Holiday Home"],
  },
  {
    id: 2,
    question: "What style defines you?",
    options: ["Warm Minimalist", "Classic Editorial", "Contemporary Luxe"],
  },
  {
    id: 3,
    question: "What is your target timeline?",
    options: ["Immediate", "3-6 Months", "Planning Ahead"],
  },
  {
    id: 4,
    question: "Your Details",
    fields: [
      { name: "name", label: "Full Name", type: "text" },
      { name: "phone", label: "Phone Number", type: "tel" },
      { name: "email", label: "Email Address", type: "email" },
    ],
  },
];

export default function ConsultationPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref: headerRef, inView: headerInView } = useInView(0.15);

  const step = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  const canProceed = isLastStep
    ? step.fields?.every((f) => answers[f.name]?.trim())
    : !!answers[step.question];

  const handleOption = (option: string) => {
    setAnswers((prev) => ({ ...prev, [step.question]: option }));
  };

  const handleFieldChange = (name: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (canProceed && !isLastStep) {
      setCurrentStep((s) => s + 1);
    }
  };

  const handleBack = () => {
    if (!isFirstStep) {
      setCurrentStep((s) => s - 1);
    }
  };

  const handleSubmit = async () => {
    if (!canProceed) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-28 md:pt-36 pb-28 md:pb-40 bg-canvas min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gold text-xs font-sans tracking-ultra uppercase mb-5">
            Design Intake
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-charcoal tracking-wide mb-6">
            Schedule a Design Consultation
          </h1>
          <p className="text-stone text-sm sm:text-base font-sans font-light max-w-xl mx-auto">
            Tell us about your vision. Our Principal Architect will respond
            within 24 hours.
          </p>
        </div>

        <div className="bg-alabaster border border-charcoal/5 p-10 md:p-14">
          {/* Progress bar */}
          <div className="flex items-center gap-3 mb-16">
            {steps.map((s, i) => (
              <div key={s.id} className="flex-1 flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-sans font-medium transition-all duration-300 ${
                    i <= currentStep
                      ? "bg-gold text-charcoal"
                      : "bg-charcoal/5 text-stone"
                  }`}
                >
                  {i < currentStep ? <Check size={14} /> : String(s.id)}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`flex-1 h-px transition-all duration-300 ${
                      i < currentStep ? "bg-gold" : "bg-charcoal/5"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="overflow-hidden">
            {!submitted ? (
              <div key={currentStep} className="animate-slide-in-right">
                <h3 className="font-serif text-2xl md:text-3xl font-light text-charcoal tracking-wide mb-10">
                  {step.question}
                </h3>

                {"options" in step && step.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                    {step.options.map((option) => {
                      const selected = answers[step.question] === option;
                      return (
                        <button
                          key={option}
                          onClick={() => handleOption(option)}
                          className={`px-6 py-5 border text-sm font-sans font-light tracking-wide transition-all duration-300 ${
                            selected
                              ? "border-gold text-gold"
                              : "border-charcoal/10 text-charcoal/70 hover:border-charcoal/20 hover:text-charcoal"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                )}

                {"fields" in step && step.fields && (
                  <div className="space-y-6 mb-12">
                    {step.fields.map((field) => (
                      <div key={field.name}>
                        <label className="block text-stone text-xs font-sans tracking-ultra uppercase mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          value={answers[field.name] || ""}
                          onChange={(e) =>
                            handleFieldChange(field.name, e.target.value)
                          }
                          className="w-full bg-canvas border border-charcoal/10 px-5 py-4 text-charcoal text-sm font-sans font-light focus:outline-none focus:border-gold transition-colors duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <button
                    onClick={handleBack}
                    disabled={isFirstStep}
                    className={`flex items-center gap-2 text-xs font-sans tracking-ultra uppercase transition-colors duration-300 ${
                      isFirstStep
                        ? "text-stone/30 cursor-not-allowed"
                        : "text-stone hover:text-charcoal"
                    }`}
                  >
                    <ArrowLeft size={14} />
                    Back
                  </button>

                  {isLastStep ? (
                    <button
                      onClick={handleSubmit}
                      disabled={!canProceed || isSubmitting}
                      className={`flex items-center gap-2 px-8 py-4 text-xs font-sans tracking-ultra uppercase transition-all duration-300 ${
                        canProceed && !isSubmitting
                          ? "bg-gold text-charcoal hover:bg-gold-light"
                          : "bg-charcoal/5 text-stone cursor-not-allowed"
                      }`}
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          Reserve Discovery Call
                          <ArrowRight size={14} />
                        </>
                      )}
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      disabled={!canProceed}
                      className={`flex items-center gap-2 px-8 py-4 text-xs font-sans tracking-ultra uppercase transition-all duration-300 ${
                        canProceed
                          ? "bg-gold text-charcoal hover:bg-gold-light"
                          : "bg-charcoal/5 text-stone cursor-not-allowed"
                      }`}
                    >
                      Continue
                      <ArrowRight size={14} />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-16 animate-scale-in">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-8">
                  <Check size={28} className="text-gold" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-charcoal tracking-wide mb-5">
                  Consultation Reserved
                </h3>
                <p className="text-stone text-sm sm:text-base font-sans font-light max-w-md mx-auto">
                  Thank you. Our Principal Architect will review your brief and
                  contact you within 24 hours to schedule your discovery call.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
