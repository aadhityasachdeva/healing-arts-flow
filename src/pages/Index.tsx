import { Heart, Users, Sparkles, Drama, Eye, Music, Star, ArrowUp, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Introduction", href: "#hero" },
  { label: "Expression", href: "#expression" },
  { label: "Escape", href: "#escape" },
  { label: "Community", href: "#community" },
  { label: "Well-being", href: "#wellbeing" },
  { label: "Conclusion", href: "#conclusion" },
  { label: "Try It Yourself", href: "/try-it-yourself", isRoute: true },
  { label: "Catalogue", href: "/catalogue", isRoute: true },
];

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-serif text-lg font-semibold text-foreground tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            <Drama className="inline-block w-5 h-5 mr-2 text-primary" />
            Dynamics of Happiness
          </span>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) =>
              (link as any).isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-primary font-medium hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur border-t border-border px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) =>
              (link as any).isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-primary font-medium hover:text-foreground transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <Drama className="w-16 h-16 text-primary mb-8 opacity-60" />
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          The Healing Power of Performing Arts
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          How theatre and performing arts contribute to mental well-being and happiness.
        </p>
        <div className="w-16 h-px bg-primary/40 mb-10" />
        <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
          Throughout history, forms of art like theatre, dance, music, and performance have allowed
          humans to express emotions, connect with others, and understand themselves. This project
          explores how these art forms contribute to mental health, happiness, and personal growth.
        </p>
      </section>

      {/* Emotional Expression */}
      <section id="expression" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Section 01</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Performing Arts as Emotional Expression
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            Performing arts allow individuals to express emotions that might otherwise remain
            suppressed, creating pathways for healing and self-discovery.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Exploring Perspectives",
                desc: "Acting allows performers to explore different emotions and perspectives, building deeper emotional intelligence.",
              },
              {
                title: "A Safe Space",
                desc: "Theatre creates a safe environment to process complex feelings without judgment.",
              },
              {
                title: "Clarity & Relief",
                desc: "Emotional expression through art can reduce stress and improve mental clarity.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-lg mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Escape */}
      <section id="escape" className="py-24 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Eye className="w-5 h-5 text-primary" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Section 02</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Performing Arts as an Escape
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            For both performers and audiences, the performing arts offer a meaningful escape — a
            chance to step away from daily life and find renewal.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Music className="w-4 h-4 text-primary" />
                <h3 className="text-xl font-semibold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  For Performers
                </h3>
              </div>
              <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  Stepping into a character allows actors to temporarily leave their personal worries behind.
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  Creative immersion helps build emotional resilience and adaptability.
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <h3 className="text-xl font-semibold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  For Audiences
                </h3>
              </div>
              <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  Watching theatre or performances allows people to step away from daily stress.
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  Stories and characters help audiences reflect on their own lives and emotions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Section 03</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Community & Human Connection
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            The performing arts are inherently communal — they bring people together and foster deep
            human connections.
          </p>
          <div className="space-y-6">
            {[
              {
                title: "Collaboration",
                desc: "Theatre is inherently collaborative, requiring trust, communication, and shared creative vision.",
              },
              {
                title: "Shared Experiences",
                desc: "Performances bring people together in shared emotional experiences that transcend individual differences.",
              },
              {
                title: "Belonging",
                desc: "Artistic communities provide a sense of belonging, support, and creative fulfillment that enriches daily life.",
              },
            ].map((item, i) => (
              <div key={item.title} className="flex gap-6 items-start border-l-2 border-primary/30 pl-6 py-2">
                <div>
                  <h3 className="font-semibold text-lg mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mental Well-being */}
      <section id="wellbeing" className="py-24 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Star className="w-5 h-5 text-primary" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Section 04</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Impact on Mental Well-being
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            Engagement with performing arts contributes to happiness in profound and measurable ways.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Self-Confidence", desc: "Performing builds courage and self-assurance." },
              { label: "Emotional Awareness", desc: "Deepens understanding of one's own feelings." },
              { label: "Stress Relief", desc: "Creative expression provides a healthy outlet for tension." },
              { label: "Sense of Purpose", desc: "Being part of a production gives meaning and direction." },
              { label: "Empathy", desc: "Understanding characters cultivates compassion for others." },
            ].map((item) => (
              <div key={item.label} className="bg-card rounded-lg p-5 border border-border">
                <h3 className="font-semibold mb-2 text-base" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {item.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section id="conclusion" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-px bg-primary/40 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Conclusion
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Performing arts are more than entertainment — they are powerful tools for emotional
            healing, expression, and human connection. Through theatre, dance, and music, individuals
            find the courage to explore their emotions, the relief of creative escape, and the warmth
            of community.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            In modern society, the performing arts continue to play an essential role in promoting
            mental well-being and happiness, reminding us that our shared humanity is best expressed
            through the stories we tell and the art we create together.
          </p>
        </div>
      </section>

      {/* Credits Footer */}
      <footer className="py-16 px-6 bg-card border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <Drama className="w-8 h-8 text-primary mx-auto mb-4 opacity-50" />
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Project created by</p>
          <div className="space-y-1 mb-8">
            <p className="font-medium">Aadhitya Sachdeva <span className="text-muted-foreground text-sm">(A2305223582)</span></p>
            <p className="font-medium">Suryaansh Tyagi <span className="text-muted-foreground text-sm">(A2305223074)</span></p>
            <p className="font-medium">Ranveer Shakdher <span className="text-muted-foreground text-sm">(A2305223046)</span></p>
          </div>
          <div className="w-10 h-px bg-border mx-auto mb-4" />
          <p className="text-sm text-muted-foreground">
            For the course: <span className="font-medium text-foreground">Dynamics of Happiness</span>
          </p>
        </div>
      </footer>

      {/* Back to top */}
      {scrolled && (
        <a
          href="#hero"
          className="fixed bottom-6 right-24 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md hover:opacity-80 transition-opacity z-40"
        >
          <ArrowUp className="w-4 h-4" />
        </a>
      )}
    </div>
  );
};

export default Index;
