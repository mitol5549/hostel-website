'use client';

import { useState } from 'react';
import { NAV_LINKS } from '@/Constants';
import Image from 'next/image';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  useDisclosure,
  Button,
} from '@heroui/react';
import { ModalBooking } from './ModalBooking';

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для мобильного меню
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    // <nav id="#navbar" className="flexBetween py-2 fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
    //   <div className="flexBetween max-container px-4 w-full lg:px-8">
    //     <Link href="/">
    //       <Image src="/tihii-logo.svg" alt="logo" width={170} height={80} />
    //     </Link>

    //     {/* Desktop Menu */}
    //     <ul className="hidden h-full gap-12 lg:flex">
    //       {NAV_LINKS.map(link => (
    //         <Link
    //           href={link.href}
    //           key={link.key}
    //           className="regular-15 text-gray-700 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
    //         >
    //           {link.label}
    //         </Link>
    //       ))}
    //     </ul>

    //     <div className="lg:flexCenter hidden">
    //       <Button type="button" title="Забронировать" variant="btn_dark_green" />
    //     </div>

    //     {/* Mobile Menu Icon */}
    //     <button
    //       className="inline-block lg:hidden z-50"
    //       onClick={toggleMobileMenu} // Открытие/закрытие меню
    //     >
    //       <Image
    //         src={isMobileMenuOpen ? 'menu-close.svg' : 'menu.svg'}
    //         alt={isMobileMenuOpen ? 'close menu' : 'open menu'}
    //         width={32}
    //         height={32}
    //         className="cursor-pointer"
    //       />
    //     </button>
    //   </div>

    //   {/* Mobile Menu */}
    //   {isMobileMenuOpen && (
    //     <div className="fixed top-0 left-0 w-full h-full bg-gray-800 text-white z-40">
    //       <div className="flex flex-col items-center justify-center h-full">
    //         <ul className="flex flex-col items-center gap-6 text-xl">
    //           {NAV_LINKS.map(link => (
    //             <Link
    //               href={link.href}
    //               key={link.key}
    //               className="cursor-pointer transition-all hover:font-bold"
    //               onClick={toggleMobileMenu} // Закрываем меню при клике
    //             >
    //               {link.label}
    //             </Link>
    //           ))}
    //         </ul>
    //         <Button type="button" title="Забронировать" variant="btn_dark_green" />
    //       </div>
    //     </div>
    //   )}
    // </nav>

    <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll isBordered>
      <NavbarBrand>
        <Link href="/">
          <Image src="/tihii-logo.svg" alt="logo" width={120} height={100} />
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center" className="gap-4 hidden md:flex">
        {NAV_LINKS.map(link => (
          <NavbarItem key={link.key}>
            <Link
              href={link.href}
              className="regular-15 text-gray-700 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="gap-12 hidden sm:flex">
          <Button onPress={onOpen}>Забронировать</Button>
          <ModalBooking isOpen={isOpen} onClose={onOpenChange} />
        </NavbarItem>
        <NavbarItem>
          <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}

      <NavbarMenu>
        {NAV_LINKS.map(link => (
          <NavbarMenuItem key={link.key}>
            <Link
              href={link.href}
              className="w-full regular-15 text-gray-700 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </NavbarMenuItem>
        ))}

        <NavbarMenuItem className="w-full flex sm:hidden">
          <Button onPress={onOpen}>Забронировать</Button>
          <ModalBooking isOpen={isOpen} onClose={onOpenChange} />{' '}
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default MainHeader;
