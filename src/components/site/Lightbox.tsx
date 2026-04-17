import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Props = {
  images: string[];
  startIndex: number;
  onClose: () => void;
  alt: string;
};

export function Lightbox({ images, startIndex, onClose, alt }: Props) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [images.length, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-md flex items-center justify-center animate-fade-in"
    >
      <button
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute top-6 right-6 lg:top-10 lg:right-10 text-bone/80 hover:text-gold transition-colors p-2"
      >
        <X className="h-6 w-6" />
      </button>

      <button
        onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
        aria-label="Previous image"
        className="absolute left-3 lg:left-8 text-bone/70 hover:text-gold transition-colors p-3 z-10"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      <div className="relative max-w-[92vw] max-h-[88vh] flex items-center justify-center">
        <img
          src={images[index]}
          alt={`${alt} — image ${index + 1}`}
          className="max-w-full max-h-[88vh] object-contain shadow-2xl"
        />
      </div>

      <button
        onClick={() => setIndex((i) => (i + 1) % images.length)}
        aria-label="Next image"
        className="absolute right-3 lg:right-8 text-bone/70 hover:text-gold transition-colors p-3 z-10"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      <p className="absolute bottom-8 left-0 right-0 text-center font-sans text-xs uppercase tracking-[0.3em] text-bone/60">
        {index + 1} / {images.length}
      </p>
    </div>
  );
}
