import { useState } from "react";
import { Link } from "react-router-dom";
import { Drama, ArrowLeft, Smile, Frown, Sparkles, Lightbulb, CheckCircle } from "lucide-react";

const questions = [
  {
    question: "How are you feeling today?",
    options: ["Calm", "Stressed", "Curious", "Creative"],
  },
  {
    question: "Have you ever performed on stage before?",
    options: ["Yes", "No", "I want to try"],
  },
  {
    question: "What interests you more?",
    options: ["Acting", "Movement", "Storytelling", "Observing performances"],
  },
  {
    question: "What do you hope to gain from art?",
    options: ["Relaxation", "Self-expression", "Confidence", "Fun"],
  },
];

const exercises = [
  {
    title: "Emotion Mirror",
    desc: "Stand in front of a mirror and express different emotions using only your face: happiness, anger, surprise, curiosity.",
    benefit: "This exercise helps build emotional awareness and expression.",
  },
  {
    title: "One-Minute Character",
    desc: 'Invent a random character (for example: a tired teacher, a superhero, or a traveler). Speak as that character for one minute about their day.',
    benefit: "This helps develop imagination and confidence.",
  },
  {
    title: "Silent Story",
    desc: "Try telling a small story without speaking, using only gestures and body language.",
    benefit: "This improves non-verbal communication and creativity.",
  },
  {
    title: "Breath and Voice Exercise",
    desc: 'Take a deep breath and slowly speak a line such as: "I am here, and I am present." Repeat it with different emotions each time.',
    benefit: "This helps with mindfulness and emotional grounding.",
  },
];

const reflectionOptions = [
  "Relaxed",
  "More creative",
  "More confident",
  "Curious to explore theatre further",
];

const TryItYourself = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [reflection, setReflection] = useState<string | null>(null);

  const allAnswered = Object.keys(answers).length === questions.length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <nav className="bg-background/95 backdrop-blur border-b border-border sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <span className="font-serif text-lg font-semibold text-foreground tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            <Drama className="inline-block w-5 h-5 mr-2 text-primary" />
            Try It Yourself
          </span>
        </div>
      </nav>

      {/* Intro */}
      <section className="pt-20 pb-12 px-6 text-center">
        <Sparkles className="w-10 h-10 text-primary mx-auto mb-6 opacity-60" />
        <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          Experience Performing Arts
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Take a moment to reflect on how you're feeling, then try a few simple theatre exercises you can do on your own.
        </p>
      </section>

      {/* Questionnaire */}
      {!submitted ? (
        <section className="pb-20 px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-8 text-center" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              A Short Reflection
            </h2>
            <div className="space-y-8">
              {questions.map((q, qi) => (
                <div key={qi} className="bg-card rounded-lg border border-border p-6">
                  <p className="font-medium mb-4">{q.question}</p>
                  <div className="flex flex-wrap gap-3">
                    {q.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setAnswers((prev) => ({ ...prev, [qi]: opt }))}
                        className={`px-4 py-2 rounded-full text-sm border transition-all ${
                          answers[qi] === opt
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background border-border text-muted-foreground hover:border-primary/50"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <button
                onClick={() => setSubmitted(true)}
                disabled={!allAnswered}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${
                  allAnswered
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
              >
                See Theatre Exercises →
              </button>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Exercises */}
          <section className="pb-16 px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Simple Theatre Exercises You Can Try Alone
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                  Performing arts can improve well-being even when practiced individually. Here are a few exercises to get started.
                </p>
              </div>
              <div className="space-y-6">
                {exercises.map((ex, i) => (
                  <div key={i} className="bg-card rounded-lg border border-border p-6">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                          {ex.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-2">{ex.desc}</p>
                        <p className="text-xs text-primary/80 italic">{ex.benefit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Reflection */}
          <section className="pb-20 px-6">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-px bg-primary/30 mx-auto mb-8" />
              <h2 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                How did this exercise make you feel?
              </h2>
              <p className="text-muted-foreground text-sm mb-6">Select the response that resonates with you.</p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {reflectionOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setReflection(opt)}
                    className={`px-4 py-2 rounded-full text-sm border transition-all ${
                      reflection === opt
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {reflection && (
                <div className="bg-card rounded-lg border border-border p-6 text-left">
                  <Lightbulb className="w-5 h-5 text-primary mb-3" />
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    That's wonderful! Performing arts — even in small, personal moments — can transform how we feel and connect with ourselves. 
                    We encourage you to keep exploring theatre, movement, and storytelling as tools for mental well-being and happiness.
                  </p>
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default TryItYourself;
