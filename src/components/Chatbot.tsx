import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const presetQuestions = [
  {
    question: "What are performing arts?",
    answer:
      "Performing arts are creative art forms where artists use their body, voice, or movement to express ideas and emotions in front of an audience. Examples include theatre, dance, music, and storytelling.",
  },
  {
    question: "How does theatre help mental health?",
    answer:
      "Theatre allows individuals to explore emotions, express themselves creatively, and connect with others. Acting and storytelling can help people process feelings, reduce stress, and develop empathy.",
  },
  {
    question: "Why do people feel connected during performances?",
    answer:
      "Audiences experience stories together. Watching characters go through emotional journeys can create empathy, reflection, and a shared emotional experience that bonds people.",
  },
  {
    question: "How do performing arts help performers emotionally?",
    answer:
      "Performers channel emotions through characters, which helps them understand and process their own feelings. The creative process builds confidence, resilience, and emotional intelligence.",
  },
  {
    question: "How do audiences benefit from theatre?",
    answer:
      "Audiences gain emotional insight, stress relief, and a sense of community. Watching stories unfold on stage can spark reflection, inspire change, and provide a meaningful escape from daily life.",
  },
  {
    question: "Can theatre reduce stress?",
    answer:
      "Yes! Both performing and watching theatre can lower stress. Acting provides a creative outlet, while audiences experience catharsis — an emotional release that leaves them feeling lighter and more at peace.",
  },
  {
    question: "What theatre exercises can I try alone?",
    answer:
      "Simple activities like improvising a character, expressing emotions in front of a mirror, or telling a silent story through gestures can help develop creativity and emotional awareness. Visit our 'Try It Yourself' page for guided exercises!",
  },
];

interface Message {
  role: "bot" | "user";
  text: string;
  showQuestions?: boolean;
}

const INTRO_MESSAGE: Message = {
  role: "bot",
  text: "Hello! I'm your Theatre Guide. 🎭\n\nI can help you explore how performing arts like theatre, dance, and storytelling contribute to mental well-being and happiness.\n\nChoose a question below to learn more.",
  showQuestions: true,
};

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INTRO_MESSAGE]);

  const handleQuestion = (q: (typeof presetQuestions)[number]) => {
    setMessages((prev) => [
      ...prev.map((m) => ({ ...m, showQuestions: false })),
      { role: "user" as const, text: q.question },
      {
        role: "bot" as const,
        text: q.answer + "\n\nWould you like to explore more?",
        showQuestions: true,
      },
    ]);
  };

  const reset = () => setMessages([INTRO_MESSAGE]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
        aria-label="Open chat"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[22rem] max-h-[32rem] bg-card border border-border rounded-xl shadow-xl flex flex-col overflow-hidden">
          <div className="px-4 py-3 border-b border-border bg-secondary/50 flex items-center justify-between">
            <p className="font-serif text-sm font-semibold">🎭 Ask the Theatre Guide</p>
            <button onClick={reset} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Restart
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-[14rem]">
            {messages.map((msg, i) => (
              <div key={i}>
                <div className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] text-sm px-3 py-2 rounded-lg leading-relaxed whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
                {msg.showQuestions && (
                  <div className="mt-3 space-y-2">
                    {presetQuestions.map((q, qi) => (
                      <button
                        key={qi}
                        onClick={() => handleQuestion(q)}
                        className="w-full text-left text-xs px-3 py-2 rounded-md border border-border bg-background text-foreground hover:border-primary/50 hover:bg-primary/5 transition-colors"
                      >
                        {q.question}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
