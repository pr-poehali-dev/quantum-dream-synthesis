import { useState } from "react"

interface GalleryProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Portfolio",
    label: "Works",
  },
  de: {
    heading: "Portfolio",
    label: "Arbeiten",
  },
  ru: {
    heading: "Портфолио",
    label: "Работы",
  },
}

const galleryItems = {
  en: [
    { id: 1, image: "/images/dscf3862.jpeg", title: "Gothic Composition" },
    { id: 2, image: "/images/dscf3805.jpeg", title: "Blackwork Detail" },
    { id: 3, image: "/images/dscf3938.jpeg", title: "Fine Line" },
    { id: 4, image: "/images/dscf3768.jpeg", title: "Dark Realism" },
    { id: 5, image: "/images/dscf3917.jpeg", title: "Ornamental" },
  ],
  de: [
    { id: 1, image: "/images/dscf3862.jpeg", title: "Gotische Komposition" },
    { id: 2, image: "/images/dscf3805.jpeg", title: "Blackwork Detail" },
    { id: 3, image: "/images/dscf3938.jpeg", title: "Fine Line" },
    { id: 4, image: "/images/dscf3768.jpeg", title: "Dunkler Realismus" },
    { id: 5, image: "/images/dscf3917.jpeg", title: "Ornamental" },
  ],
  ru: [
    { id: 1, image: "/images/dscf3862.jpeg", title: "Готическая композиция" },
    { id: 2, image: "/images/dscf3805.jpeg", title: "Блэкворк" },
    { id: 3, image: "/images/dscf3938.jpeg", title: "Файнлайн" },
    { id: 4, image: "/images/dscf3768.jpeg", title: "Тёмный реализм" },
    { id: 5, image: "/images/dscf3917.jpeg", title: "Орнамент" },
  ],
}

export default function Gallery({ language }: GalleryProps) {
  const t = translations[language]
  const items = galleryItems[language]
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const selectedItem = items.find((item) => item.id === selectedId)
  const selectedIndex = items.findIndex((item) => item.id === selectedId)

  const goToNext = () => {
    if (selectedId !== null) {
      const nextIndex = (selectedIndex + 1) % items.length
      setSelectedId(items[nextIndex].id)
    }
  }

  const goToPrev = () => {
    if (selectedId !== null) {
      const prevIndex = (selectedIndex - 1 + items.length) % items.length
      setSelectedId(items[prevIndex].id)
    }
  }

  return (
    <section id="gallery" className="py-24 md:py-36" style={{background: 'linear-gradient(180deg, #110f14 0%, var(--cream) 100%)'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-gold/70 text-xs tracking-[0.4em] uppercase mb-4 font-sans">{t.label}</p>
          <h2 className="text-charcoal mb-4">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className="group overflow-hidden cursor-pointer relative"
              style={{border: '1px solid rgba(184,150,46,0.15)'}}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-8 h-px bg-gold mr-2"></div>
                  <span className="text-gold text-xs tracking-wider">VIEW</span>
                  <div className="w-8 h-px bg-gold ml-2"></div>
                </div>
              </div>
              <div className="p-3" style={{backgroundColor: 'rgba(14,12,15,0.8)'}}>
                <small className="text-charcoal/60 font-medium tracking-wider text-xs uppercase">{item.title}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image || "/placeholder.svg"}
              alt={selectedItem.title}
              className="max-w-full max-h-full object-contain"
            />

            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-gold transition-colors"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={goToPrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-gold transition-colors"
              aria-label="Previous"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-gold transition-colors"
              aria-label="Next"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest">
              {selectedIndex + 1} / {items.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
