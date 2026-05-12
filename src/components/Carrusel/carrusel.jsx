import './carrusel.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect, useMemo, useRef, useState } from 'react';

const slides = [
  {
    id: 'escuela',
    label: 'Presentación institucional',
    title: 'Escuela de Yachting',
    description:
      'La Escuela de Náutica Deportiva del Club Náutico Córdoba se fundó en 1997 en Villa Carlos Paz, Argentina. Desde los comienzos, nuestra filosofía siempre ha sido ofrecer formación de máxima calidad, con medios apropiados y horarios flexibles para adaptarnos a la disponibilidad de cada alumno.',
    href: '/nosotros',
    cta: 'Saber más',
    video: '/assets/videos/video3.mp4',
  },
  {
    id: 'conductor',
    label: 'Formación Náutica Deportiva',
    title: 'Curso de Conductor Náutico',
    description:
      'Aprendé a navegar con seguridad y criterio práctico. El curso combina conocimientos de meteorología, reglamentación, seguridad y navegación con práctica real en embarcación escuela, siguiendo el programa oficial de la Prefectura Naval Argentina.',
    href: '/conductornautico',
    cta: 'Ver curso',
    video: '/assets/videos/video1.mp4',
  },
  {
    id: 'timonel-vela',
    label: 'Formación Náutica Deportiva',
    title: 'Curso de Timonel Vela y Motor',
    description:
      'Una formación ideal para adquirir una base sólida y ampliar tu habilitación náutica. Incluye contenidos teóricos y prácticos para despachar embarcaciones deportivas con mayor preparación y seguridad.',
    href: '/timonelvelamotor',
    cta: 'Ver curso',
    video: '/assets/videos/video2.mp4',
  },
  {
    id: 'patron',
    label: 'Formación Náutica Deportiva',
    title: 'Patrón de Yate',
    description:
      'El siguiente paso para quien ya es timonel y quiere avanzar. Profundiza en artes marineras, meteorología, seguridad, reglamentación y navegación costera, con práctica orientada a un mando más sólido y seguro.',
    href: '/patrondeyate',
    cta: 'Ver curso',
    video: '/assets/videos/video4.mp4',
  },
  {
    id: 'timonel-motor',
    label: 'Formación Náutica Deportiva',
    title: 'Curso de Timonel Yate y Motor',
    description:
      'Pensado para quienes buscan una habilitación amplia y más confianza al mando de embarcaciones a motor. Reúne formación técnica, criterio náutico y práctica orientada a una navegación más segura y completa.',
    href: '/timonelyatemotor',
    cta: 'Ver curso',
    video: '/assets/videos/video5.mp4',
  },
  {
    id: 'perfeccionamiento',
    label: 'Formación Náutica Deportiva',
    title: 'Perfeccionamiento',
    description:
      'Un programa para mejorar maniobras, trimado de velas, regatas, fondeo, amarre, entrada y salida de puertos, navegación con mal tiempo y otros aspectos avanzados. Ideal para quien quiere llevar su nivel náutico un paso más allá.',
    href: '/perfeccionamiento',
    cta: 'Ver curso',
    video: '/assets/videos/video6.mp4',
  },
];

const coursesMenu = [
  { label: 'Conductor Náutico', href: '/conductornautico' },
  { label: 'Timonel Vela y Motor', href: '/timonelvelamotor' },
  { label: 'Timonel Yate Motor', href: '/timonelyatemotor' },
  { label: 'Patrón de Yate', href: '/patrondeyate' },
  { label: 'Perfeccionamiento', href: '/perfeccionamiento' },
];

const onlineMenu = [
  { label: 'Navegación Astronómica', href: '/navegacionastronomica' },
  { label: 'Meteorología Práctica', href: '/meteorologiapractica' },
  { label: 'Navegación Electrónica', href: '/navegacionelectronica' },
  { label: 'Meteorología Aeronáutica', href: '/meteorologiaaeronautica' },
];

const AUTO_MS = 8000;

function Dropdown({ label, items, open, onToggle, onClose, mobile = false }) {
  return (
    <div className={`carousel-dropdown ${open ? 'is-open' : ''} ${mobile ? 'is-mobile' : ''}`}>
      <button type="button" className="carousel-dropdown__trigger" onClick={onToggle} aria-expanded={open}>
        <span>{label}</span>
        <i className="fas fa-chevron-down" aria-hidden="true"></i>
      </button>
      <div className="carousel-dropdown__menu" role="menu">
        {items.map((item) => (
          <a key={item.href} href={item.href} className="carousel-dropdown__item" onClick={onClose} role="menuitem">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Carrusel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [paused, setPaused] = useState(false);
  const startX = useRef(null);
  const navRef = useRef(null);

  const active = useMemo(() => slides[activeSlide], [activeSlide]);

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    const onOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenDropdown(null);
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onOutside);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onOutside);
    };
  });

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setPaused(true);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setPaused(true);
  };

  const goTo = (index) => {
    setActiveSlide(index);
    setPaused(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (startX.current == null) return;
    const delta = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) nextSlide();
      else prevSlide();
    }
    startX.current = null;
  };

  return (
    <section
      className="carousel"
      aria-label="Carrusel principal"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="carousel__media" aria-hidden="true">
        {slides.map((slide, index) => (
          <video
            key={slide.id}
            className={`carousel__video ${index === activeSlide ? 'is-active' : ''}`}
            src={slide.video}
            autoPlay
            muted
            loop
            playsInline
            preload={index === activeSlide ? 'auto' : 'metadata'}
          />
        ))}
      </div>

      <div className="carousel__overlay" aria-hidden="true"></div>
      <div className={`carousel__backdrop ${menuOpen ? 'is-visible' : ''}`} aria-hidden="true"></div>

      <header className="carousel__header">
        <a href="/" className="carousel__brand" aria-label="Ir al inicio">
          <img src="/assets/img/file.png" alt="Escuela de Yachting" />
        </a>

        <div className="carousel__nav-wrap" ref={navRef}>
          <button
            type="button"
            className={`carousel__menu-btn ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className="carousel__nav carousel__nav--desktop" aria-label="Principal">
            <a href="/" className="carousel__nav-link">Inicio</a>
            <Dropdown
              label="Cursos"
              items={coursesMenu}
              open={openDropdown === 'courses'}
              onToggle={() => toggleDropdown('courses')}
              onClose={closeMenu}
            />
            <Dropdown
              label="Cursos Online"
              items={onlineMenu}
              open={openDropdown === 'online'}
              onToggle={() => toggleDropdown('online')}
              onClose={closeMenu}
            />
            <a href="/viajes" className="carousel__nav-link">Viajes</a>
            <a href="/nosotros" className="carousel__nav-link">Nosotros</a>
            <a href="/formulario" className="carousel__nav-link carousel__nav-link--cta">Inscribirse</a>
          </nav>

          <nav className={`carousel__nav-mobile ${menuOpen ? 'is-open' : ''}`} aria-label="Principal móvil">
            <div className="carousel__nav-mobile-title">Menú</div>
            <a href="/" className="carousel__nav-mobile-link" onClick={closeMenu}>Inicio</a>
            <Dropdown
              label="Cursos"
              items={coursesMenu}
              open={openDropdown === 'mobile-courses'}
              onToggle={() => toggleDropdown('mobile-courses')}
              onClose={closeMenu}
              mobile
            />
            <Dropdown
              label="Cursos Online"
              items={onlineMenu}
              open={openDropdown === 'mobile-online'}
              onToggle={() => toggleDropdown('mobile-online')}
              onClose={closeMenu}
              mobile
            />
            <a href="/viajes" className="carousel__nav-mobile-link" onClick={closeMenu}>Viajes</a>
            <a href="/nosotros" className="carousel__nav-mobile-link" onClick={closeMenu}>Nosotros</a>
            <a href="/formulario" className="carousel__nav-mobile-link carousel__nav-mobile-link--cta" onClick={closeMenu}>Inscribirse</a>
          </nav>
        </div>
      </header>

      <div className="carousel__inner">
        <div className="carousel__content">
          <div className="carousel__text-block">
            <div className="carousel__badge">{active.label}</div>
            <div className="carousel__count">{String(activeSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</div>
            <h1>{active.title}</h1>
            <p>{active.description}</p>
          </div>

          <div className="carousel__socials carousel__socials--mobile">
            <a href="https://www.instagram.com/escueladeyachting" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/escuelanauticacba" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>

          <div className="carousel__footer">
            <div className="carousel__actions">
              <a href={active.href} className="carousel__btn carousel__btn--primary">{active.cta}</a>
              <button type="button" className="carousel__btn carousel__btn--ghost" onClick={nextSlide}>Siguiente curso</button>
            </div>

            <div className="carousel__controls">
              <div className="carousel__dots" role="tablist" aria-label="Cambiar curso">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={`carousel__dot ${index === activeSlide ? 'is-active' : ''}`}
                    onClick={() => goTo(index)}
                    aria-label={`Ir a ${slide.title}`}
                    aria-selected={index === activeSlide}
                  ></button>
                ))}
              </div>
              <div className="carousel__arrows">
                <button type="button" className="carousel__arrow" onClick={prevSlide} aria-label="Anterior">
                  <i className="fas fa-arrow-left"></i>
                </button>
                <button type="button" className="carousel__arrow" onClick={nextSlide} aria-label="Siguiente">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <aside className="carousel__side">
          <div className="carousel__socials carousel__socials--desktop">
            <a href="https://www.instagram.com/escueladeyachting" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/escuelanauticacba" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
