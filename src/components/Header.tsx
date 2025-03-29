"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
    // Navigate to search results page
    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
  };

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 1000); // 1 second delay
  };

  // Clean up timeout when component unmounts
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="bg-white shadow-medium py-4 border-b-2 border-border">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-40 h-12">
            <Image 
              src="/logo_ac.png" 
              alt="AC Group Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 ml-6">
          <Link href="/" className="nav-link">Главная</Link>
          <Link href="/about" className="nav-link">О нас</Link>
          <div 
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="nav-link flex items-center">
              Продукция
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div 
              className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-medium py-2 z-10 border-2 border-border transition-all duration-300 ${
                isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              <Link href="/products/ups" className="block px-4 py-2 hover:bg-background">Источники бесперебойного питания</Link>
              <Link href="/products/circuit-breakers" className="block px-4 py-2 hover:bg-background">Автоматические выключатели</Link>
              <Link href="/products/lightning-protection" className="block px-4 py-2 hover:bg-background">Молниезащита и заземление</Link>
            </div>
          </div>
          <Link href="/services" className="nav-link">Услуги</Link>
          <Link href="/portfolio" className="nav-link">Портфолио</Link>
          <Link href="/blog" className="nav-link">Блог</Link>
        </nav>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="hidden md:flex mx-4 flex-1 max-w-[220px]">
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="Поиск товаров..." 
              className="w-full py-2 px-4 pr-10 rounded-full border-2 border-border focus:outline-none focus:border-primary text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </form>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-primary" 
          onClick={toggleMenu}
          aria-label="Открыть меню"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <Link href="/contacts" className="btn btn-primary">
            Связаться с нами
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden container mt-4 pb-4">
          <nav className="flex flex-col space-y-4 bg-white p-5 rounded-lg shadow-medium border-2 border-border">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-2">
              <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="Поиск товаров..." 
                  className="w-full py-2 px-4 pr-10 rounded-full border-2 border-border focus:outline-none focus:border-primary text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                  type="submit" 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </div>
            </form>
            
            <Link href="/" className="nav-link">Главная</Link>
            <Link href="/about" className="nav-link">О нас</Link>
            <details className="group">
              <summary className="nav-link flex items-center cursor-pointer">
                Продукция
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <div className="pl-4 mt-2 space-y-2 border-l-2 border-border">
                <Link href="/products/ups" className="block py-2">Источники бесперебойного питания</Link>
                <Link href="/products/circuit-breakers" className="block py-2">Автоматические выключатели</Link>
                <Link href="/products/lightning-protection" className="block py-2">Молниезащита и заземление</Link>
              </div>
            </details>
            <Link href="/services" className="nav-link">Услуги</Link>
            <Link href="/portfolio" className="nav-link">Портфолио</Link>
            <Link href="/blog" className="nav-link">Блог</Link>
            <Link href="/contacts" className="btn btn-primary inline-block text-center">
              Связаться с нами
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}; 