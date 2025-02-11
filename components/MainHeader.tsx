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
} from '@heroui/react';

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="justify-start">
          <Link href="/">
            <Image src="/tihii-logo.svg" alt="logo" width={1171} height={490} className="w-32 h-auto" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-12 hidden md:flex">
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

      <NavbarContent justify="end" className="md:hidden">
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="md:hidden" />
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
      </NavbarMenu>
    </Navbar>
  );
};

export default MainHeader;
