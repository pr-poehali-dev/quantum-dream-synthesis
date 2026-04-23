import type React from "react"
import { useState } from "react"

interface ContactProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Contact",
    label: "Get in Touch",
    subheading: "Book a consultation or ask about your project",
    email: "Email",
    phone: "Phone",
    message: "Describe your tattoo idea",
    send: "Send Request",
    location: "Location",
    name: "Your Name",
    successMessage: "Request sent! Kristina will contact you soon.",
    locationValue: "Lytkarino, Moscow Region",
    phoneValue: "+7 (___) ___-__-__",
    emailValue: "tattookristofer@gmail.com",
  },
  de: {
    heading: "Kontakt",
    label: "In Kontakt treten",
    subheading: "Buchen Sie eine Beratung oder fragen Sie nach Ihrem Projekt",
    email: "E-Mail",
    phone: "Telefon",
    message: "Beschreiben Sie Ihre Tattoo-Idee",
    send: "Anfrage senden",
    location: "Standort",
    name: "Ihr Name",
    successMessage: "Anfrage gesendet! Kristina wird sich bald bei Ihnen melden.",
    locationValue: "Lytkarino, Moskauer Gebiet",
    phoneValue: "+7 (___) ___-__-__",
    emailValue: "tattookristofer@gmail.com",
  },
  ru: {
    heading: "Контакты",
    label: "Связаться",
    subheading: "Запишитесь на консультацию или расскажите о вашей идее",
    email: "Email",
    phone: "Телефон",
    message: "Опишите вашу идею татуировки",
    send: "Отправить заявку",
    location: "Адрес",
    name: "Ваше имя",
    successMessage: "Заявка отправлена! Кристина свяжется с вами в ближайшее время.",
    locationValue: "Лыткарино, Московская область",
    phoneValue: "+7 (___) ___-__-__",
    emailValue: "tattookristofer@gmail.com",
  },
}

export default function Contact({ language }: ContactProps) {
  const t = translations[language]
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const mailtoLink = `mailto:tattookristofer@gmail.com?subject=${encodeURIComponent(`Заявка от ${formData.name}`)}&body=${encodeURIComponent(`Имя: ${formData.name}\nEmail: ${formData.email}\n\nИдея: ${formData.message}`)}`
    window.location.href = mailtoLink

    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 md:py-36" style={{backgroundColor: 'var(--cream)'}}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in-up">
          <p className="text-gold/70 text-xs tracking-[0.4em] uppercase mb-4 font-sans">{t.label}</p>
          <h2 className="text-charcoal mb-4">{t.heading}</h2>
          <p className="text-taupe mb-4">{t.subheading}</p>
          <div className="line-accent mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <small className="font-medium text-charcoal/50 mb-2 block tracking-widest uppercase text-xs">{t.email}</small>
              <p className="text-charcoal text-gold/90">{t.emailValue}</p>
            </div>
            <div>
              <small className="font-medium text-charcoal/50 mb-2 block tracking-widest uppercase text-xs">{t.phone}</small>
              <p className="text-charcoal">{t.phoneValue}</p>
            </div>
            <div>
              <small className="font-medium text-charcoal/50 mb-2 block tracking-widest uppercase text-xs">{t.location}</small>
              <p className="text-charcoal">{t.locationValue}</p>
            </div>

            {/* Decorative gothic element */}
            <div className="pt-8 border-t" style={{borderColor: 'rgba(184,150,46,0.2)'}}>
              <p className="text-charcoal/40 text-xs leading-relaxed tracking-wider">
                {language === "ru"
                  ? "Студия работает по предварительной записи. Консультация по эскизу — бесплатно."
                  : language === "de"
                  ? "Das Studio arbeitet nach vorheriger Terminvereinbarung. Skizzenberatung — kostenlos."
                  : "Studio works by appointment. Sketch consultation — free of charge."}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in-up">
            {submitted && (
              <div className="p-4 border text-charcoal text-sm" style={{backgroundColor: 'rgba(184,150,46,0.05)', borderColor: 'rgba(184,150,46,0.3)'}}>
                {t.successMessage}
              </div>
            )}
            <div>
              <input
                type="text"
                placeholder={t.name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 text-charcoal placeholder-charcoal/30 focus:outline-none transition-colors text-sm"
                style={{backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,150,46,0.2)'}}
                onFocus={(e) => e.target.style.borderColor = 'rgba(184,150,46,0.6)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(184,150,46,0.2)'}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder={t.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 text-charcoal placeholder-charcoal/30 focus:outline-none transition-colors text-sm"
                style={{backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,150,46,0.2)'}}
                onFocus={(e) => e.target.style.borderColor = 'rgba(184,150,46,0.6)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(184,150,46,0.2)'}
              />
            </div>
            <div>
              <textarea
                placeholder={t.message}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full px-4 py-3 text-charcoal placeholder-charcoal/30 focus:outline-none transition-colors resize-none text-sm"
                style={{backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,150,46,0.2)'}}
                onFocus={(e) => e.target.style.borderColor = 'rgba(184,150,46,0.6)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(184,150,46,0.2)'}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 font-medium transition-all duration-300 text-sm tracking-widest uppercase hover:opacity-80"
              style={{backgroundColor: 'var(--gold)', color: '#0e0c0f'}}
            >
              {t.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
