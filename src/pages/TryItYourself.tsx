import { useState } from "react";
import { Link } from "react-router-dom";
import { Drama, ArrowLeft, Smile, Sparkles, Lightbulb, CheckCircle, User, Music, BookOpen, Eye } from "lucide-react";

// ── Original reflection questionnaire ──
const reflectionQuestions = [
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

// ── Personality Quiz ──
const quizQuestions = [
  {
    question: "When you're feeling stressed, what do you prefer to do?",
    options: [
      "Talk about your feelings",
      "Move around or exercise",
      "Write stories or imagine scenarios",
      "Watch movies or performances",
    ],
  },
  {
    question: "Which activity sounds the most exciting?",
    options: [
      "Acting in a play",
      "Dancing or expressing emotions through movement",
      "Creating stories or directing",
      "Watching powerful performances",
    ],
  },
  {
    question: "How do you usually express emotions?",
    options: [
      "Through words",
      "Through movement",
      "Through imagination",
      "Through observation and reflection",
    ],
  },
  {
    question: "Which environment do you enjoy most?",
    options: [
      "Performing in front of others",
      "Moving freely and creatively",
      "Building stories and characters",
      "Observing and learning from performances",
    ],
  },
  {
    question: "What motivates you most about art?",
    options: [
      "Confidence and expression",
      "Physical creativity",
      "Storytelling and imagination",
      "Emotional connection",
    ],
  },
  {
    question: "How do performances make you feel?",
    options: [
      "Inspired to perform",
      "Energized and expressive",
      "Curious about the story",
      "Emotionally connected",
    ],
  },
];

interface QuizResult {
  title: string;
  icon: React.ReactNode;
  description: string;
  exercises: string[];
}

const quizResults: QuizResult[] = [
  {
    title: "Actor / Performer",
    icon: <User className="w-6 h-6" />,
    description:
      "You enjoy expressing emotions through dialogue and character. Acting may be a powerful way for you to explore emotions and build confidence.",
    exercises: ["One-minute character monologue", "Emotion mirror exercise"],
  },
  {
    title: "Movement Performer",
    icon: <Music className="w-6 h-6" />,
    description:
      "You connect with emotions through body movement and energy. Dance and physical theatre could be your ideal creative outlet.",
    exercises: ["Character walk", "Express emotions using only body language"],
  },
  {
    title: "Storyteller / Director",
    icon: <BookOpen className="w-6 h-6" />,
    description:
      "You enjoy creating narratives and imagining characters and worlds. Your imagination is your greatest tool.",
    exercises: ["Write a short scene", "Create a character and describe their story"],
  },
  {
    title: "Audience Explorer",
    icon: <Eye className="w-6 h-6" />,
    description:
      "You deeply connect with stories and emotions through observation. Watching and reflecting is your way of experiencing art.",
    exercises: [
      "Watch a short performance and reflect on the emotions portrayed",
      "Imagine alternative endings to stories",
    ],
  },
];

function getQuizResult(answers: Record<number, number>): QuizResult {
  const counts = [0, 0, 0, 0];
  Object.values(answers).forEach((v) => counts[v]++);
  const maxIdx = counts.indexOf(Math.max(...counts));
  return quizResults[maxIdx];
}

const TryItYourself = () => {
  // Reflection state
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [reflection, setReflection] = useState<string | null>(null);

  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const allAnswered = Object.keys(answers).length === reflectionQuestions.length;
  const allQuizAnswered = Object.keys(quizAnswers).length === quizQuestions.length;
  const quizResult = quizSubmitted ? getQuizResult(quizAnswers) : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <nav className="bg-background/95 backdrop-blur border-b border-border sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <span className="font-serif text-lg font-semibold text-foreground tracking-tight">
            <Drama className="inline-block w-5 h-5 mr-2 text-primary" />
            Try It Yourself
          </span>
        </div>
      </nav>

      {/* Intro */}
      <section className="pt-20 pb-12 px-6 text-center">
        <Sparkles className="w-10 h-10 text-primary mx-auto mb-6 opacity-60" />
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Experience Performing Arts
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Take a moment to reflect on how you're feeling, then try a few simple theatre exercises you can do on your own.
        </p>
      </section>

      {/* Reflection Questionnaire */}
      {!submitted ? (
        <section className="pb-20 px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-8 text-center">A Short Reflection</h2>
            <div className="space-y-8">
              {reflectionQuestions.map((q, qi) => (
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
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
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
                        <h3 className="font-semibold text-lg mb-2">{ex.title}</h3>
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
          <section className="pb-16 px-6">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-px bg-primary/30 mx-auto mb-8" />
              <h2 className="text-xl font-semibold mb-2">How did this exercise make you feel?</h2>
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

      {/* ── Personality Quiz ── */}
      <section className="pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-px bg-primary/30 mx-auto mb-12" />
          <div className="text-center mb-10">
            <Smile className="w-10 h-10 text-primary mx-auto mb-4 opacity-60" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Which Performing Art Matches Your Personality?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Everyone connects with performing arts differently. Answer a few questions to discover which performing art style may suit your personality best.
            </p>
          </div>

          {!quizSubmitted ? (
            <>
              <div className="space-y-8">
                {quizQuestions.map((q, qi) => (
                  <div key={qi} className="bg-card rounded-lg border border-border p-6">
                    <p className="font-medium mb-4">
                      <span className="text-primary mr-2">{qi + 1}.</span>
                      {q.question}
                    </p>
                    <div className="space-y-2">
                      {q.options.map((opt, oi) => (
                        <button
                          key={oi}
                          onClick={() => setQuizAnswers((prev) => ({ ...prev, [qi]: oi }))}
                          className={`w-full text-left px-4 py-3 rounded-lg text-sm border transition-all ${
                            quizAnswers[qi] === oi
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
                  onClick={() => setQuizSubmitted(true)}
                  disabled={!allQuizAnswered}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${
                    allQuizAnswered
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                >
                  Discover My Art Style →
                </button>
              </div>
            </>
          ) : (
            quizResult && (
              <div className="bg-card rounded-xl border border-border p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  {quizResult.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{quizResult.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{quizResult.description}</p>
                <div className="text-left bg-background rounded-lg border border-border p-5">
                  <p className="text-sm font-semibold mb-3">Suggested exercises:</p>
                  <ul className="space-y-2">
                    {quizResult.exercises.map((ex, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <p className="text-sm text-muted-foreground mb-4">Would you like to try a theatre exercise now?</p>
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="px-6 py-2 rounded-full text-sm border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    Go to Exercises ↑
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default TryItYourself;
