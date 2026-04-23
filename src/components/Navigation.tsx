import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  language: "en" | "de" | "ru"
  onLanguageChange: (lang: "en" | "de" | "ru") => void
}

const translations = {
  en: {
    biography: "About",
    concerts: "Book",
    gallery: "Portfolio",
    contact: "Contact",
  },
  de: {
    biography: "Über mich",
    concerts: "Buchen",
    gallery: "Portfolio",
    contact: "Kontakt",
  },
  ru: {
    biography: "О мастере",
    concerts: "Запись",
    gallery: "Портфолио",
    contact: "Контакт",
  },
}

export default function Navigation({ language, onLanguageChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isHeroSection, setIsHeroSection] = useState(true)
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero")
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        setIsHeroSection(heroBottom > 100)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinkColor = "text-white/70"
  const navLinkHoverColor = "hover:text-gold"
  const logoColor = "text-white"
  const menuButtonColor = "text-white/70"
  const languageButtonActiveColor = "text-gold"
  const languageButtonInactiveColor = "text-white/40 hover:text-white/70"
  const navBgColor = isHeroSection ? "bg-transparent" : "bg-black/90"
  const borderColor = isHeroSection ? "border-transparent" : "border-gold/10"
  const mobileMenuBg = "bg-black/95 backdrop-blur-sm"
  const mobileLinkColor = "text-white/70"

  return (
    <nav
      className={`fixed w-full ${navBgColor} backdrop-blur-sm z-50 border-b ${borderColor} transition-all duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className={`${logoColor} font-serif text-xl font-normal tracking-[0.15em] transition-colors duration-300`}>
            TATTOO KRISTOFER
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#biography"
              className={`text-xs tracking-widest uppercase ${navLinkColor} ${navLinkHoverColor} transition-colors duration-300`}
            >
              {t.biography}
            </a>
            <a
              href="#concerts"
              className={`text-xs tracking-widest uppercase ${navLinkColor} ${navLinkHoverColor} transition-colors duration-300`}
            >
              {t.concerts}
            </a>
            <a
              href="#gallery"
              className={`text-xs tracking-widest uppercase ${navLinkColor} ${navLinkHoverColor} transition-colors duration-300`}
            >
              {t.gallery}
            </a>
            <a
              href="#contact"
              className={`text-xs tracking-widest uppercase ${navLinkColor} ${navLinkHoverColor} transition-colors duration-300`}
            >
              {t.contact}
            </a>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {(["en", "de", "ru"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`text-xs font-medium transition-colors duration-300 ${
                    language === lang ? languageButtonActiveColor : languageButtonInactiveColor
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden ${menuButtonColor} transition-colors duration-300`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`md:hidden pb-6 pt-2 space-y-1 border-t ${borderColor} ${mobileMenuBg} transition-all duration-300`}
          >
            <a
              href="#biography"
              onClick={() => setIsOpen(false)}
              className={`block text-xs tracking-widest uppercase ${mobileLinkColor} hover:text-gold transition-colors duration-300 py-3 px-2`}
            >
              {t.biography}
            </a>
            <a
              href="#concerts"
              onClick={() => setIsOpen(false)}
              className={`block text-xs tracking-widest uppercase ${mobileLinkColor} hover:text-gold transition-colors duration-300 py-3 px-2`}
            >
              {t.concerts}
            </a>
            <a
              href="#gallery"
              onClick={() => setIsOpen(false)}
              className={`block text-xs tracking-widest uppercase ${mobileLinkColor} hover:text-gold transition-colors duration-300 py-3 px-2`}
            >
              {t.gallery}
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className={`block text-xs tracking-widest uppercase ${mobileLinkColor} hover:text-gold transition-colors duration-300 py-3 px-2`}
            >
              {t.contact}
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
