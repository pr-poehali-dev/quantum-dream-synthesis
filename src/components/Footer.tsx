interface FooterProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    copyright: "All rights reserved.",
    followMe: "Social",
    subtitle: "Gothic Tattoo Studio · Lytkarino",
    quickLinks: "Navigation",
    biography: "About",
    concerts: "Book a Session",
    gallery: "Portfolio",
    privacyPolicy: "Privacy Policy",
    terms: "Terms",
  },
  de: {
    copyright: "Alle Rechte vorbehalten.",
    followMe: "Soziale Medien",
    subtitle: "Gotisches Tattoo-Studio · Lytkarino",
    quickLinks: "Navigation",
    biography: "Über mich",
    concerts: "Session buchen",
    gallery: "Portfolio",
    privacyPolicy: "Datenschutz",
    terms: "AGB",
  },
  ru: {
    copyright: "Все права защищены.",
    followMe: "Соцсети",
    subtitle: "Готическая тату студия · Лыткарино",
    quickLinks: "Навигация",
    biography: "О мастере",
    concerts: "Запись",
    gallery: "Портфолио",
    privacyPolicy: "Политика конфиденциальности",
    terms: "Условия",
  },
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language]

  return (
    <footer style={{backgroundColor: '#080608'}} className="text-white/70 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top divider */}
        <div className="flex items-center mb-12">
          <div className="flex-1 h-px" style={{backgroundColor: 'rgba(184,150,46,0.2)'}}></div>
          <div className="mx-6 text-gold/40 text-xs tracking-[0.3em]">✦</div>
          <div className="flex-1 h-px" style={{backgroundColor: 'rgba(184,150,46,0.2)'}}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-white font-serif font-normal mb-3 text-lg tracking-wider">TATTOO KRISTOFER</h3>
            <small className="text-white/40 tracking-wider text-xs">{t.subtitle}</small>
          </div>

          <div>
            <h3 className="text-white/60 mb-4 text-xs tracking-widest uppercase font-sans font-medium">{t.quickLinks}</h3>
            <ul className="space-y-3 text-sm text-white/40">
              <li>
                <a href="#biography" className="hover:text-gold transition-colors tracking-wider text-xs uppercase">
                  {t.biography}
                </a>
              </li>
              <li>
                <a href="#concerts" className="hover:text-gold transition-colors tracking-wider text-xs uppercase">
                  {t.concerts}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold transition-colors tracking-wider text-xs uppercase">
                  {t.gallery}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white/60 mb-4 text-xs tracking-widest uppercase font-sans font-medium">{t.followMe}</h3>
            <div className="flex gap-6">
              <a href="https://instagram.com" className="text-white/40 hover:text-gold transition-colors text-xs tracking-wider uppercase">
                Instagram
              </a>
              <a href="https://vk.com" className="text-white/40 hover:text-gold transition-colors text-xs tracking-wider uppercase">
                ВКонтакте
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center" style={{borderColor: 'rgba(255,255,255,0.05)'}}>
          <small className="text-white/25 text-xs tracking-wider">&copy; 2025 TATTOO KRISTOFER. {t.copyright}</small>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-white/25 hover:text-white/50 transition-colors text-xs">
              {t.privacyPolicy}
            </a>
            <a href="#" className="text-white/25 hover:text-white/50 transition-colors text-xs">
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
