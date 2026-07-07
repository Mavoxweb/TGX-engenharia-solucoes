import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { useModal } from '../../contexts/ModalContext';
import logoTgx from '../../assets/logo-tgx-sembg.png';

const Navbar = () => {
  const { openModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary/95 backdrop-blur-md border-b border-white/10 py-4 shadow-xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logoTgx} alt="TGX Engenharia Logo" className="h-14 md:h-16 w-auto object-contain transition-all duration-300" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-xs font-semibold uppercase tracking-widest transition-colors duration-300 text-white/90 hover:text-gold"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="/#faq"
            className="text-xs font-semibold uppercase tracking-widest transition-colors duration-300 text-white/90 hover:text-gold"
          >
            FAQ
          </a>
        </nav>

        <div className="hidden md:block">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); openModal('Olá, gostaria de solicitar um orçamento com a TGX Engenharia.'); }}
            className="btn-primary text-xs py-2 px-5 flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
            Falar no WhatsApp
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-2xl transition-colors duration-300 text-white/90 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-md border-b border-white/10 py-6 px-6 flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-sm font-semibold text-white/90 hover:text-gold transition-colors uppercase tracking-widest block py-2 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="/#faq"
            className="text-sm font-semibold text-white/90 hover:text-gold transition-colors uppercase tracking-widest block py-2 border-b border-white/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <a 
            href="#" 
            onClick={(e) => { 
              e.preventDefault(); 
              openModal('Olá, gostaria de solicitar um orçamento com a TGX Engenharia.');
              setIsMobileMenuOpen(false);
            }}
            className="btn-primary text-center mt-4 text-xs py-3 flex items-center justify-center gap-2"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
            Falar no WhatsApp
          </a>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
