"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaChevronDown } from 'react-icons/fa';

export const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">AC Group</h3>
            <p className="mb-4 text-gray-200">Профессиональное оборудование для энергетики и автоматизации.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-200 hover:text-accent-light transition-colors" aria-label="Facebook">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-200 hover:text-accent-light transition-colors" aria-label="Twitter">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-200 hover:text-accent-light transition-colors" aria-label="Instagram">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-200 hover:text-accent-light transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:block">
            <div 
              className="flex justify-between items-center md:block cursor-pointer md:cursor-auto" 
              onClick={() => isMobile && toggleSection('links')}
            >
              <h3 className="text-xl font-bold text-white mb-4">Быстрые ссылки</h3>
              <FaChevronDown className={`md:hidden w-4 h-4 transition-transform ${openSection === 'links' ? 'rotate-180' : ''}`} />
            </div>
            <ul className={`space-y-2 mt-2 ${isMobile && openSection !== 'links' ? 'hidden md:block' : 'block'}`}>
              <li><Link href="/" className="text-gray-200 hover:text-accent-light transition-colors flex items-center">
                <span className="mr-2">→</span>Главная
              </Link></li>
              <li><Link href="/about" className="text-gray-200 hover:text-accent-light transition-colors flex items-center">
                <span className="mr-2">→</span>О нас
              </Link></li>
              <li><Link href="/products" className="text-gray-200 hover:text-accent-light transition-colors flex items-center">
                <span className="mr-2">→</span>Продукция
              </Link></li>
              <li><Link href="/services" className="text-gray-200 hover:text-accent-light transition-colors flex items-center">
                <span className="mr-2">→</span>Услуги
              </Link></li>
              <li><Link href="/portfolio" className="text-gray-200 hover:text-accent-light transition-colors flex items-center">
                <span className="mr-2">→</span>Портфолио
              </Link></li>
              <li><Link href="/blog" className="text-gray-200 hover:text-accent-light transition-colors flex items-center">
                <span className="mr-2">→</span>Блог
              </Link></li>
              <li><Link href="/contacts" className="text-gray-200 hover:text-accent-light transition-colors flex items-center">
                <span className="mr-2">→</span>Контакты
              </Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="md:block">
            <div 
              className="flex justify-between items-center md:block cursor-pointer md:cursor-auto"
              onClick={() => isMobile && toggleSection('products')}
            >
              <h3 className="text-xl font-bold text-white mb-4">Продукция</h3>
              <FaChevronDown className={`md:hidden w-4 h-4 transition-transform ${openSection === 'products' ? 'rotate-180' : ''}`} />
            </div>
            <ul className={`space-y-2 mt-2 ${isMobile && openSection !== 'products' ? 'hidden md:block' : 'block'}`}>
              <li><Link href="/products/ups" className="text-gray-200 hover:text-accent-light transition-colors flex items-center">
                <span className="mr-2">→</span>Источники бесперебойного питания
              </Link></li>
              <li><Link href="/products/circuit-breakers" className="text-gray-200 hover:text-accent-light transition-colors flex items-center">
                <span className="mr-2">→</span>Автоматические выключатели
              </Link></li>
              <li><Link href="/products/lightning-protection" className="text-gray-200 hover:text-accent-light transition-colors flex items-center">
                <span className="mr-2">→</span>Молниезащита и заземление
              </Link></li>
              <li><Link href="/products/automation" className="text-gray-200 hover:text-accent-light transition-colors flex items-center">
                <span className="mr-2">→</span>Системы автоматизации
              </Link></li>
              <li><Link href="/products/cables" className="text-gray-200 hover:text-accent-light transition-colors flex items-center">
                <span className="mr-2">→</span>Кабельная продукция
              </Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Контактная информация</h3>
            <ul className="space-y-4 mt-2">
              <li className="flex items-start bg-primary/30 p-3 rounded-lg hover:bg-primary/40 transition-colors">
                <FaMapMarkerAlt className="w-5 h-5 mr-3 mt-1 text-accent-light" />
                <span className="text-gray-200">г. Алматы,<br />ул. Ислама Каримова 164, оф.309</span>
              </li>
              <li className="flex items-center bg-primary/30 p-3 rounded-lg hover:bg-primary/40 transition-colors">
                <FaPhone className="w-5 h-5 mr-3 text-accent-light" />
                <span className="text-gray-200">+7 (727) 268 38 48</span>
              </li>
              <li className="flex items-center bg-primary/30 p-3 rounded-lg hover:bg-primary/40 transition-colors">
                <FaEnvelope className="w-5 h-5 mr-3 text-accent-light" />
                <span className="text-gray-200">info@acgroup.kz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 text-center opacity-80">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} AC Group. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}; 