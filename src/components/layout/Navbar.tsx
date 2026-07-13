import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
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
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'FAQ', path: '/#faq', isHash: true },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#071C3A]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logoTgx} alt="TGX Engenharia Logo" className="h-10 md:h-14 w-auto object-contain transition-all duration-500" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.isHash ? (
              <a 
                key={link.name} 
                href={link.path}
                className="text-xs font-bold uppercase tracking-widest transition-colors duration-300 text-white/90 hover:text-gold"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-xs font-bold uppercase tracking-widest transition-colors duration-300 text-white/90 hover:text-gold"
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden md:block">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); openModal('Olá, gostaria de falar com um especialista da TGX Engenharia.'); }}
            className="btn-outline rounded-full text-[10px] py-2 px-5 uppercase tracking-widest font-bold border-gold/50 text-gold hover:bg-gold hover:text-primary transition-all duration-300 inline-flex items-center gap-1.5 shadow-md"
          >
            Falar com Especialista
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white/90 hover:text-white p-2 text-2xl focus:outline-none transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir Menu Principal"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FontAwesomeIcon icon={faTimes} className="text-white" /> : <FontAwesomeIcon icon={faBars} className="text-white" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#071C3A]/95 backdrop-blur-lg border-b border-white/5 py-6 px-6 flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              link.isHash ? (
                <a 
                  key={link.name} 
                  href={link.path}
                  className="text-sm font-bold text-white/90 hover:text-gold transition-colors uppercase tracking-widest block py-2 border-b border-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-sm font-bold text-white/90 hover:text-gold transition-colors uppercase tracking-widest block py-2 border-b border-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <a 
              href="#" 
              onClick={(e) => { 
                e.preventDefault(); 
                openModal('Olá, gostaria de falar com um especialista da TGX Engenharia.');
                setIsMobileMenuOpen(false);
              }}
              className="btn-primary justify-center text-center mt-4 text-xs py-3.5 rounded-full flex items-center gap-2"
            >
              Falar com Especialista
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
