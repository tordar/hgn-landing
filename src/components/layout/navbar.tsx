"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";

const navigationItems = [
  { name: "Hjem", href: "/" },
  { name: "Tjenester", href: "/tjenester" },
  { name: "Portefølje", href: "/portefolje" },
  { name: "Autorisasjoner", href: "/autorisasjoner" },
  { name: "Karriere", href: "/karriere" },
  { name: "Om HGN", href: "/om-hgn" },
  { name: "Kontakt oss", href: "/kontakt-oss" },
];

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">
              HGN Elektro
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Desktop Search */}
            <div className="hidden md:flex items-center">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center space-x-2">
                  <Input
                    type="search"
                    placeholder="Søk..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48"
                    autoFocus
                  />
                  <Button type="submit" size="sm" variant="ghost">
                    <Search className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </form>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Søk</span>
                </Button>
              )}
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Åpne meny</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-6">
                  {/* Mobile Search */}
                  <form onSubmit={handleSearch} className="flex items-center space-x-2">
                    <Input
                      type="search"
                      placeholder="Søk..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit" size="sm">
                      <Search className="h-4 w-4" />
                    </Button>
                  </form>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-3">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium transition-colors hover:text-primary py-2"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
} 