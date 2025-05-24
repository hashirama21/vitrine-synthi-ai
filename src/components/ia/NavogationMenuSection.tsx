import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React from "react";

export default function NavigationMenuSection() {
  // Navigation menu items data
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "FAQs", href: "#" },
  ];

  return (
    <header className="flex items-center justify-between py-8 px-8 md:px-16 lg:px-24 w-full">
      {/* Logo */}
      <img
        className="h-[50px] w-auto object-contain"
        alt="Synthi AI Logo"
        src=""
      />

      {/* Navigation Menu */}
      <NavigationMenu>
        <NavigationMenuList className="flex gap-8 md:gap-12 lg:gap-[60px]">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink
                href={item.href}
                className="font-normal text-base text-[#A1A1AA] hover:text-white transition-colors"
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* CTA Button */}
      <Button className="h-[50px] min-w-[200px]" variant="default">
        Get Started
      </Button>
    </header>
  );
}
