import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-primary-500 text-white text-sm relative">
      <div className="container-max flex items-center justify-center gap-2 px-10 py-2.5">
        <span className="hidden sm:inline font-medium">
          🚀 Now serving pan-India with facilities in NOIDA & Pune
        </span>
        <span className="sm:hidden font-medium">🚀 Pan-India manufacturing live!</span>
        <Link
          to="/about/locations"
          className="inline-flex items-center gap-1 underline underline-offset-2 hover:text-white/90 font-semibold"
        >
          Learn more <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-white/20 transition-colors"
          aria-label="Close announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
