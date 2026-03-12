import { Link } from "react-router-dom";
import { ArrowLeft, Drama, Play, ExternalLink } from "lucide-react";

const videos = [
  {
    title: "Theatre Exercises for Beginners",
    description: "A comprehensive guide to basic theatre exercises you can practice at home to improve your acting skills and emotional expression.",
    url: "https://www.youtube.com/watch?v=n2e5Wsg9PxI",
    type: "Video",
  },
  {
    title: "Theatre Exercise Playlist",
    description: "A curated playlist of theatre exercises covering movement, voice, improvisation, and character development techniques.",
    url: "https://www.youtube.com/playlist?list=PLiT8blrXVn0T723g8Er705yajNJuzb9KS",
    type: "Playlist",
  },
];

const Catalogue = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center gap-4">
          <Link to="/" className="text-primary hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="font-serif text-2xl font-semibold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              <Drama className="inline-block w-6 h-6 mr-2 text-primary" />
              Video Catalogue
            </h1>
            <p className="text-muted-foreground text-sm mt-1">Learn theatre exercises through guided video tutorials</p>
          </div>
        </div>
      </div>

      {/* Videos */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="space-y-6">
          {videos.map((video, i) => (
            <a
              key={i}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-card border border-border rounded-lg p-6 hover:border-primary/40 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Play className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">{video.type}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{video.description}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-primary mt-3 font-medium">
                    Open on YouTube <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            These resources can help you explore theatre exercises for emotional well-being and personal growth.
          </p>
          <Link to="/try-it-yourself" className="inline-block mt-4 text-primary text-sm font-medium hover:underline">
            Or try our guided exercises →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
