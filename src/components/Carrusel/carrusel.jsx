import './carrusel.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect, useMemo, useRef, useState } from 'react';

const slides = [
  {
    id: 'escuela',
    title: 'Escuela de Yachting',
    description:
      'La Escuela de Náutica Deportiva del Club Náutico Córdoba se fundó en 1997 en Villa Carlos Paz, Argentina. Desde los comienzos, nuestra filosofía siempre ha sido ofrecer formación de máxima calidad, con medios apropiados y horarios flexibles para adaptarnos a la disponibilidad de cada alumno.',
    href: '/nosotros',
    cta: 'Saber más',
    video: '/assets/videos/video3.mp4',
    label: 'Presentación institucional',
  },
  {
    id: 'conductor-nautico',
    title: 'Curso de Conductor Náutico',
    description:
      'Aprendé a navegar con seguridad y criterio práctico. El curso combina conocimientos de meteorología, reglamentación, seguridad y navegación con práctica real en embarcación escuela, siguiendo el programa oficial de la Prefectura Naval Argentina.',
    href: '/conductornautico',
    cta: 'Ver curso',
    video: '/assets/videos/video1.mp4',
    label: 'Formación náutica deportiva',
  },
  {
    id: 'timonel-vela-motor',
    title: 'Curso de Timonel Vela y Motor',
    description:
      'Una formación ideal para adquirir una base sólida y ampliar tu habilitación náutica. Incluye contenidos teóricos y prácticos para despachar embarcaciones deportivas con mayor preparación y seguridad.',
    href: '/timonelvelamotor',
    cta: 'Ver curso',
    video: '/assets/videos/video2.mp4',
    label: 'Formación náutica deportiva',
  },
  {
    id: 'patron-de-yate',
    title: 'Patrón de Yate',
    description:
      'El siguiente paso para quien ya es timonel y quiere avanzar. Profundiza en artes marineras, meteorología, seguridad, reglamentación, navegación costera y práctica orientada a un mando más sólido y seguro.',
    href: '/patrondeyate',
    cta: 'Ver curso',
    video: '/assets/videos/video4.mp4',
    label: 'Formación náutica deportiva',
  },
  {
    id: 'timonel-yate-motor',
    title: 'Curso de Timonel Yate y Motor',
    description:
      'Pensado para quienes buscan una habilitación amplia y más confianza al mando de embarcaciones a motor. Reúne formación técnica, criterio náutico y práctica orientada a una navegación más segura y completa.',
    href: '/timonelyatemotor',
    cta: 'Ver curso',
    video: '/assets/videos/video5.mp4',
    label: 'Formación náutica deportiva',
  },
  {
    id: 'perfeccionamiento',
    title: 'Perfeccionamiento',
    description:
      'Un programa para mejorar maniobras, trimado de velas, regatas, fondeo, amarre, entrada y salida de puertos, navegación con mal tiempo y otros aspectos avanzados. Ideal para quien quiere llevar su nivel náutico un paso más allá.',
    href: '/perfeccionamiento',
    cta: 'Ver curso',
    video: '/assets/videos/video6.mp4',
    label: 'Formación náutica deportiva',
  },
];

const coursesMenu = [
  { label: 'Conductor Náutico', href: '/conductornautico' },
  { label: 'Timonel Vela y Motor', href: '/timonelvelamotor' },
  { label: 'Timonel Yate y Motor', href: '/timonelyatemotor' },
  { label: 'Patrón de Yate', href: '/patrondeyate' },
  { label: 'Perfeccionamiento', href: '/perfeccionamiento' },
];

const onlineCoursesMenu = [
  { label: 'Navegación Astronómica', href: '/navegacionastronomica' },
  { label: 'Meteorología Práctica', href: '/meteorologiapractica' },
  { label: 'Navegación Electrónica', href: '/navegacionelectronica' },
  { label: 'Meteorología Aeronáutica', href: '/meteorologiaaeronautica' },
];

const AUTO_PLAY_MS = 8000;
const SWIPE_THRESHOLD = 45;

function NavDropdown({ label, items, open, onToggle, closeMenu, mobile = false }) {
  return (
    <div className={`hero-dropdown ${open ? 'is-open' : ''} ${mobile ? 'is-mobile' : ''}`}>
      <button
        type="button"
        className="hero-dropdown__trigger"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span>{label}</span>
        <i className="fas fa-chevron-down" aria-hidden="true"></i>
      </button>

      <div className="hero-dropdown__menu" role="menu">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="hero-dropdown__item"
            role="menuitem"
            onClick={closeMenu}
          >
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
  const navRef = useRef(null);
  const touchStartX = useRef(null);
  const active = useMemo(() => slides[activeSlide], [activeSlide]);

  useEffect(() => {
    if (paused || menuOpen) return undefined;
    const id = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, menuOpen]);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const overflowValue = menuOpen ? 'hidden' : '';
    body.style.overflow = overflowValue;
    html.style.overflowX = 'hidden';
    body.style.overflowX = 'hidden';

    return () => {
      body.style.overflow = '';
      body.style.overflowX = '';
      html.style.overflowX = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
      if (event.key === 'ArrowRight') {
        setPaused(true);
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }
      if (event.key === 'ArrowLeft') {
        setPaused(true);
        setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
    };

    const onPointerDown = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const nextSlide = () => {
    setPaused(true);
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setPaused(true);
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setPaused(true);
    setActiveSlide(index);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;
    if (deltaX < 0) nextSlide();
    else prevSlide();
  };

  return (
    <section
      className="hero-carousel"
      aria-label="Carrusel principal de Escuela de Yachting"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hero-carousel__media" aria-hidden="true">
        {slides.map((slide, index) => (
          <video
            key={slide.id}
            className={`hero-carousel__video ${index === activeSlide ? 'is-active' : ''}`}
            src={slide.video}
            autoPlay
            muted
            loop
            playsInline
            preload={index === activeSlide ? 'auto' : 'metadata'}
          />
        ))}
      </div>

      <div className="hero-carousel__overlay" aria-hidden="true" />
      <div
        className={`hero-carousel__backdrop ${menuOpen ? 'is-visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <header className="hero-carousel__header">
        <a href="/" className="hero-carousel__brand" aria-label="Ir al inicio">
          <img src="/assets/img/file.png" alt="Escuela de Yachting" />
        </a>

        <div className="hero-carousel__nav-shell" ref={navRef}>
          <button
            type="button"
            className={`hero-carousel__menu-btn ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="hero-mobile-nav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className="hero-carousel__desktop-nav" aria-label="Navegación principal">
            <a href="/" className="hero-carousel__nav-link">Inicio</a>
            <NavDropdown
              label="Cursos"
              items={coursesMenu}
              open={openDropdown === 'courses'}
              onToggle={() => toggleDropdown('courses')}
              closeMenu={closeMenu}
            />
            <NavDropdown
              label="Cursos Online"
              items={onlineCoursesMenu}
              open={openDropdown === 'online'}
              onToggle={() => toggleDropdown('online')}
              closeMenu={closeMenu}
            />
            <a href="/Viajes" className="hero-carousel__nav-link">Viajes</a>
            <a href="/Nosotros" className="hero-carousel__nav-link">Nosotros</a>
            <a href="/Formulario" className="hero-carousel__nav-link hero-carousel__nav-link--cta">Inscribirse</a>
          </nav>

          <nav
            id="hero-mobile-nav"
            className={`hero-carousel__mobile-nav ${menuOpen ? 'is-open' : ''}`}
            aria-label="Navegación móvil"
          >
            <div className="hero-carousel__mobile-head">Menú</div>
            <div className="hero-carousel__mobile-body">
              <a href="/" className="hero-carousel__mobile-link" onClick={closeMenu}>Inicio</a>
              <NavDropdown
                label="Cursos"
                items={coursesMenu}
                open={openDropdown === 'mobile-courses'}
                onToggle={() => toggleDropdown('mobile-courses')}
                closeMenu={closeMenu}
                mobile
              />
              <NavDropdown
                label="Cursos Online"
                items={onlineCoursesMenu}
                open={openDropdown === 'mobile-online'}
                onToggle={() => toggleDropdown('mobile-online')}
                closeMenu={closeMenu}
                mobile
              />
              <a href="/Viajes" className="hero-carousel__mobile-link" onClick={closeMenu}>Viajes</a>
              <a href="/Nosotros" className="hero-carousel__mobile-link" onClick={closeMenu}>Nosotros</a>
              <a href="/Formulario" className="hero-carousel__mobile-link hero-carousel__mobile-link--cta" onClick={closeMenu}>Inscribirse</a>
            </div>
          </nav>
        </div>
      </header>

      <div className="hero-carousel__content-wrap">
        <div className="hero-carousel__badge">{active.label}</div>

        <div className="hero-carousel__content" aria-live="polite">
          <p className="hero-carousel__counter">
            {String(activeSlide + 1).padStart(2, '0')} <span>/ {String(slides.length).padStart(2, '0')}</span>
          </p>
          <h1>{active.title}</h1>
          <p>{active.description}</p>

          <div className="hero-carousel__actions">
            <a href={active.href} className="hero-btn hero-btn--primary">{active.cta}</a>
            <button type="button" className="hero-btn hero-btn--ghost" onClick={nextSlide}>Siguiente curso</button>
          </div>
        </div>

        <aside className="hero-carousel__aside" aria-label="Redes y controles del carrusel">
          <div className="hero-carousel__socials">
            <a href="https://www.instagram.com/escueladeyachting/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a>
            <a href="https://www.facebook.com/escueladeyachting" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
          </div>

          <div className="hero-carousel__controls">
            <div className="hero-carousel__dots" role="tablist" aria-label="Seleccionar curso">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  className={`hero-carousel__dot ${index === activeSlide ? 'is-active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir a ${slide.title}`}
                  aria-selected={index === activeSlide}
                  role="tab"
                />
              ))}
            </div>

            <div className="hero-carousel__arrows">
              <button type="button" className="hero-carousel__arrow" onClick={prevSlide} aria-label="Curso anterior">
                <i className="fas fa-arrow-left" aria-hidden="true"></i>
              </button>
              <button type="button" className="hero-carousel__arrow" onClick={nextSlide} aria-label="Siguiente curso">
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
