import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const whatsappUrl =
    "https://wa.me/+919773596207?text=Hi%20Sigma%20Design%20Team,%20I%20would%20like%20to%20schedule%20a%20turnkey%20interior%20consultation%20for%20my%20space.";

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-end flex-col gap-4">
      {hovered && (
        <div className="frosted-light-card rounded-sm shadow-lg px-5 py-3 max-w-xs text-right animate-fade-in">
          <p className="text-charcoal text-sm font-sans font-light">
            Consult with our Principal Architect
          </p>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-14 h-14 rounded-full bg-charcoal flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 animate-pulse-soft"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="text-gold" />
      </a>
    </div>
  );
}
