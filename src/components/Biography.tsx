interface BiographyProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "About the Artist",
    label: "Master",
    paragraphs: [
      "Kristina Dyakova is a tattoo artist and founder of TATTOO KRISTOFER studio, located in Lytkarino, Moscow region. From the very beginning of her career, Kristina chose the path of dark aesthetics — gothic motifs, fine lines, and blackwork became her signature style.",
      "The studio works with a wide spectrum of tattoo styles: from gothic and dark realism to ornamental and geometric works, fine line, dotwork, and traditional styles. Each tattoo is an individual piece of art created in close dialogue with the client.",
      "Kristina approaches every project with full dedication — from the first sketch to the finished work. The studio is open to all those who seek not just a tattoo, but a true work of art that will remain with you forever.",
    ],
  },
  de: {
    heading: "Über die Künstlerin",
    label: "Meisterin",
    paragraphs: [
      "Kristina Dyakova ist Tattoo-Künstlerin und Gründerin des TATTOO KRISTOFER Studios in Lytkarino, Moskauer Gebiet. Von Anfang an wählte sie den Weg der dunklen Ästhetik — gotische Motive, feine Linien und Blackwork wurden ihr Markenzeichen.",
      "Das Studio arbeitet in einem breiten Spektrum von Tattoo-Stilen: von Gothic und Dark Realism bis hin zu ornamentalen und geometrischen Werken, Fine Line, Dotwork und traditionellen Stilen. Jedes Tattoo ist ein individuelles Kunstwerk.",
      "Kristina widmet sich jedem Projekt vollständig — vom ersten Entwurf bis zur fertigen Arbeit. Das Studio ist offen für alle, die nicht nur ein Tattoo, sondern ein echtes Kunstwerk suchen.",
    ],
  },
  ru: {
    heading: "О мастере",
    label: "Мастер",
    paragraphs: [
      "Кристина Дьякова — тату-мастер и основательница студии TATTOO KRISTOFER, расположенной в Лыткарино, Московская область. С самого начала карьеры Кристина выбрала путь тёмной эстетики — готические мотивы, тонкие линии и блэкворк стали её фирменным стилем.",
      "Студия работает с широким спектром стилей татуировок: от готики и тёмного реализма до орнаментальных и геометрических работ, файнлайна, дотворка и традиционных стилей. Каждая татуировка — индивидуальное произведение искусства, созданное в тесном диалоге с клиентом.",
      "Кристина подходит к каждому проекту с полной самоотдачей — от первого эскиза до готовой работы. Студия открыта для всех, кто ищет не просто тату, а настоящее произведение искусства, которое останется с вами навсегда.",
    ],
    styles: ["Блэкворк", "Готика", "Файнлайн", "Дотворк", "Тёмный реализм", "Орнаментальный"],
  },
}

export default function Biography({ language }: BiographyProps) {
  const t = translations[language]
  const styles = language === "ru" ? ["Блэкворк", "Готика", "Файнлайн", "Дотворк", "Тёмный реализм", "Орнаментальный"] :
                 language === "en" ? ["Blackwork", "Gothic", "Fine Line", "Dotwork", "Dark Realism", "Ornamental"] :
                 ["Blackwork", "Gothic", "Fine Line", "Dotwork", "Dark Realism", "Ornamental"]

  return (
    <section id="biography" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8" style={{background: 'linear-gradient(180deg, var(--cream) 0%, #110f14 100%)'}}>
      <div className="max-w-3xl mx-auto">
        <p className="text-gold/70 text-xs tracking-[0.4em] uppercase mb-4 font-sans">{t.label}</p>
        <h2 className="text-charcoal mb-12 text-pretty">
          {t.heading}
        </h2>
        <div className="space-y-6 mb-16">
          {t.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed text-charcoal/80 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Styles tags */}
        <div className="border-t border-gold/20 pt-10">
          <p className="text-gold/60 text-xs tracking-[0.3em] uppercase mb-6 font-sans">
            {language === "ru" ? "Стили работ" : language === "de" ? "Arbeitsstile" : "Work Styles"}
          </p>
          <div className="flex flex-wrap gap-3">
            {styles.map((style, index) => (
              <span
                key={index}
                className="px-4 py-2 border border-gold/30 text-gold/80 text-sm tracking-wider hover:border-gold/60 hover:text-gold transition-colors duration-300"
              >
                {style}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
