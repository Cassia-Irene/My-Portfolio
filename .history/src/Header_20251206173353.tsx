import React, { useLayoutEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  logo: string;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = 'rgba(0,0,0,0.3)',
  menuColor = '#fff'
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 100;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        void contentEl.offsetHeight;

        const topBar = 80;
        const padding = 24;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 100;
  };

  const createTimeline = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 80, overflow: 'hidden' }); // topo maior
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.1 }, '-=0.1');

    return tl;
  }, [ease]);

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [createTimeline]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;
      const newHeight = calculateHeight();
      gsap.set(navRef.current, { height: newHeight });
      tlRef.current.kill();
      const newTl = createTimeline();
      if (newTl) tlRef.current = newTl;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [createTimeline]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={`card-nav-container absolute left-1/2 -translate-x-1/2 w-[95%] max-w-[900px] z-[100] top-[1.5em] ${className}`}
    >
      <nav
        ref={navRef}
        className="card-nav block relative rounded-[50px] shadow-lg overflow-hidden will-change-[height]"
        style={{ backgroundColor: baseColor }}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-[80px] flex items-center justify-between px-6 z-10">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} flex flex-col items-center justify-center cursor-pointer gap-2 md:hidden`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor }}
          >
            <div className={`hamburger-line w-8 h-0.5 bg-current ${isHamburgerOpen ? 'rotate-45 translate-y-1' : ''}`} />
            <div className={`hamburger-line w-8 h-0.5 bg-current ${isHamburgerOpen ? '-rotate-45 -translate-y-1' : ''}`} />
          </div>

          <div className="logo-container flex items-center justify-center">
            <img src={logo} alt={logoAlt} className="h-10" />
          </div>
        </div>

        <div
          className={`card-nav-content absolute left-0 right-0 top-[80px] p-4 flex flex-col items-stretch gap-4 ${
            isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          } md:flex-row md:items-center md:justify-around`}
          aria-hidden={!isExpanded}
        >
          {items.map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card flex flex-col gap-2 p-4 rounded-[20px]"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="font-semibold text-lg">{item.label}</div>
              <div className="flex flex-col gap-1">
                {item.links.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                    className="inline-flex items-center gap-2 text-sm hover:opacity-80 transition"
                  >
