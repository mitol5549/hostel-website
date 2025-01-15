'use client';

import { useState } from 'react'; // Импортируем хук useState
import { NAV_LINKS } from '@/Constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Состояние для мобильного меню

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'; // Блокируем прокрутку при открытии меню
    } else {
      document.body.style.overflow = ''; // Восстанавливаем прокрутку при закрытии меню
    }
  };

  return (
    <nav id="#navbar" className="flexBetween py-2 fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
      <div className="flexBetween max-container px-4 w-full lg:px-8">
        <Link href="/">
          <Image src="/tihii-logo.svg" alt="logo" width={170} height={80} />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map(link => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-15 text-gray-700 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Button type="button" title="Забронировать" variant="btn_dark_green" />
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="inline-block lg:hidden z-50"
          onClick={toggleMobileMenu} // Открытие/закрытие меню
        >
          <Image
            src={isMobileMenuOpen ? 'menu-close.svg' : 'menu.svg'}
            alt={isMobileMenuOpen ? 'close menu' : 'open menu'}
            width={32}
            height={32}
            className="cursor-pointer"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 text-white z-40">
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center gap-6 text-xl">
              {NAV_LINKS.map(link => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="cursor-pointer transition-all hover:font-bold"
                  onClick={toggleMobileMenu} // Закрываем меню при клике
                >
                  {link.label}
                </Link>
              ))}
            </ul>
            <Button type="button" title="Забронировать" variant="btn_dark_green" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
