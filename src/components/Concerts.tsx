interface ConcertsProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Book a Session",
    label: "Appointment",
    bookNow: "Book Now",
    sessions: [
      {
        slot: "Weekdays",
        time: "12:00 – 20:00",
        title: "Standard Session",
        description: "Sketches & small-medium works",
        location: "Lytkarino, Moscow Region",
      },
      {
        slot: "Weekends",
        time: "11:00 – 19:00",
        title: "Full-Day Session",
        description: "Large compositions & detailed works",
        location: "Lytkarino, Moscow Region",
      },
      {
        slot: "By request",
        time: "Flexible",
        title: "Custom Project",
        description: "Unique gothic & blackwork compositions",
        location: "Online consultation available",
      },
    ],
  },
  de: {
    heading: "Session buchen",
    label: "Termin",
    bookNow: "Buchen",
    sessions: [
      {
        slot: "Wochentags",
        time: "12:00 – 20:00",
        title: "Standard-Session",
        description: "Skizzen & kleine bis mittlere Werke",
        location: "Lytkarino, Moskauer Gebiet",
      },
      {
        slot: "Wochenende",
        time: "11:00 – 19:00",
        title: "Ganztages-Session",
        description: "Große Kompositionen & detaillierte Werke",
        location: "Lytkarino, Moskauer Gebiet",
      },
      {
        slot: "Auf Anfrage",
        time: "Flexibel",
        title: "Individuelles Projekt",
        description: "Einzigartige gotische & Blackwork-Kompositionen",
        location: "Online-Beratung möglich",
      },
    ],
  },
  ru: {
    heading: "Запись на сеанс",
    label: "Запись",
    bookNow: "Записаться",
    sessions: [
      {
        slot: "Будни",
        time: "12:00 – 20:00",
        title: "Стандартный сеанс",
        description: "Эскизы и работы малого и среднего размера",
        location: "Лыткарино, Московская область",
      },
      {
        slot: "Выходные",
        time: "11:00 – 19:00",
        title: "Полный день",
        description: "Крупные композиции и детальные работы",
        location: "Лыткарино, Московская область",
      },
      {
        slot: "По запросу",
        time: "Гибко",
        title: "Авторский проект",
        description: "Уникальные готические и блэкворк-композиции",
        location: "Возможна онлайн-консультация",
      },
    ],
  },
}

export default function Concerts({ language }: ConcertsProps) {
  const t = translations[language]

  return (
    <section id="concerts" className="py-32 md:py-48" style={{backgroundColor: '#110f14'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-gold/70 text-xs tracking-[0.4em] uppercase mb-4 font-sans">{t.label}</p>
          <h2 className="text-charcoal mb-6">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="space-y-8">
          {t.sessions.map((session, idx) => (
            <div key={idx} className="pb-8 border-b last:border-b-0" style={{borderColor: 'rgba(184,150,46,0.2)'}}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start">
                <div>
                  <h3 className="text-charcoal mb-1">{session.slot}</h3>
                  <small className="text-taupe">{session.time}</small>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-charcoal mb-1">{session.title}</h3>
                  <p className="text-charcoal/60 mb-1">{session.description}</p>
                  <small className="text-taupe">{session.location}</small>
                </div>
                <div className="flex justify-start md:justify-end">
                  <a
                    href="#contact"
                    className="text-gold hover:text-gold/70 transition-colors text-sm font-medium tracking-wider"
                  >
                    {t.bookNow} &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
