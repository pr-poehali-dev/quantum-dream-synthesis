interface HeroProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    title: "TATTOO KRISTOFER",
    subtitle: "Gothic Tattoo Studio",
    description: "Kristina Dyakova — tattoo artist from Lytkarino, Moscow region. Dark art, fine lines, blackwork and gothic style in every piece.",
  },
  de: {
    title: "TATTOO KRISTOFER",
    subtitle: "Gotisches Tattoo-Studio",
    description: "Kristina Dyakova — Tattoo-Künstlerin aus Lytkarino, Moskauer Gebiet. Dunkle Kunst, feine Linien, Blackwork und Gothic-Stil in jedem Werk.",
  },
  ru: {
    title: "TATTOO KRISTOFER",
    subtitle: "Готическая тату студия",
    description: "Кристина Дьякова — тату-мастер из Лыткарино, Подмосковье. Тёмное искусство, тонкие линии, блэкворк и готический стиль в каждой работе.",
  },
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language]

  return (
    <section id="hero" className="relative pt-40 pb-32 md:pt-56 md:pb-48 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/dscf3797.jpeg"
          alt="Tattoo studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(14,12,15,0.85) 0%, rgba(14,12,15,0.6) 100%)'}}></div>
      </div>

      {/* Gothic decorative lines */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-0 left-0 w-px h-32 bg-gradient-to-b from-transparent to-gold/30 ml-8 mt-16"></div>
        <div className="absolute top-0 right-0 w-px h-32 bg-gradient-to-b from-transparent to-gold/30 mr-8 mt-16"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in-up font-sans">— Lytkarino, Moscow Region —</p>
          <h1 className="text-white mb-6 animate-fade-in-up" style={{fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em'}}>{t.title}</h1>
          <h3 className="text-white/70 font-light mb-8 animate-fade-in-up animation-delay-100 tracking-widest uppercase text-base">{t.subtitle}</h3>
          <div className="line-accent mb-10 animate-fade-in-up animation-delay-200"></div>
          <p className="text-white/80 font-light max-w-2xl mb-16 animate-fade-in-up animation-delay-300 text-lg leading-relaxed">{t.description}</p>

          {/* Social Links */}
          <div className="flex gap-8 animate-fade-in-up animation-delay-400">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-gold transition-colors duration-300 flex items-center gap-2 text-sm tracking-wider"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.949 0-3.204.013-3.583.072-4.949.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
              </svg>
              Instagram
            </a>
            <a
              href="https://vk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-gold transition-colors duration-300 flex items-center gap-2 text-sm tracking-wider"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-.9-1.745-.9-.356 0-.458.102-.458.593v1.562c0 .424-.135.677-1.253.677-1.846 0-3.896-1.12-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.762-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
              </svg>
              ВКонтакте
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
