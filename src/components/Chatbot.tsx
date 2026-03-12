import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const presetQA: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["what is performing arts", "performing arts", "what are performing arts"],
    answer: "Performing arts include disciplines like theatre, dance, music, and spoken word — any art form performed live before an audience. They allow individuals to express emotions, tell stories, and connect with others.",
  },
  {
    keywords: ["theatre", "theater", "what is theatre"],
    answer: "Theatre is a collaborative art form combining acting, directing, writing, and design to tell stories on stage. It's one of the oldest forms of human expression and a powerful tool for emotional well-being.",
  },
  {
    keywords: ["mental health", "well-being", "wellbeing", "happiness"],
    answer: "Performing arts contribute to mental well-being by reducing stress, boosting self-confidence, improving emotional awareness, and fostering a sense of community and belonging.",
  },
  {
    keywords: ["exercise", "exercises", "practice", "try"],
    answer: "You can try simple exercises like the Emotion Mirror (expressing emotions in a mirror), One-Minute Character (improvising as a character), or Silent Story (telling a story through gestures). Visit our 'Try It Yourself' page for more!",
  },
  {
    keywords: ["benefits", "why", "advantages"],
    answer: "Key benefits include: increased self-confidence, emotional awareness, stress relief, a sense of purpose, improved empathy, and stronger social connections.",
  },
  {
    keywords: ["community", "connection", "social"],
    answer: "Theatre is inherently collaborative. It brings people together in shared emotional experiences and artistic communities provide belonging, support, and creative fulfillment.",
  },
  {
    keywords: ["escape", "stress", "relief"],
    answer: "Performing arts act as a healthy escape — performers can step into characters to temporarily leave personal worries, while audiences find reflection and relief through shared stories.",
  },
  {
    keywords: ["hello", "hi", "hey", "help"],
    answer: "Hello! I'm here to answer questions about performing arts and their connection to happiness and well-being. Try asking about theatre, mental health benefits, or exercises you can try!",
  },
  {
    keywords: ["catalogue", "videos", "learn", "watch"],
    answer: "Check out our Video Catalogue page for curated YouTube tutorials on theatre exercises you can practice at home!",
  },
];

function findAnswer(input: string): string {
  const lower = input.toLowerCase();
  for (const qa of presetQA) {
    if (qa.keywords.some((kw) => lower.includes(kw))) {
      return qa.answer;
    }
  }
  return "I'm a simple helper focused on performing arts and well-being. Try asking about theatre, mental health benefits, exercises, or our video catalogue!";
}

interface Message {
  role: "user" | "bot";
  text: string;
}

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hi! Ask me anything about performing arts and happiness. 🎭" },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg: Message = { role: "user", text: trimmed };
    const botMsg: Message = { role: "bot", text: findAnswer(trimmed) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
        aria-label="Open chat"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-h-[28rem] bg-card border border-border rounded-xl shadow-xl flex flex-col overflow-hidden">
          <div className="px-4 py-3 border-b border-border bg-secondary/50">
            <p className="font-serif text-sm font-semibold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              🎭 Arts & Happiness Assistant
            </p>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-[12rem]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] text-sm px-3 py-2 rounded-lg leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="px-3 py-3 border-t border-border flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask about performing arts..."
              className="flex-1 bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
            />
            <button
              onClick={send}
              className="w-9 h-9 rounded-md bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
