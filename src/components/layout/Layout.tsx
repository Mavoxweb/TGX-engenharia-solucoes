import { Outlet, Link } from 'react-router-dom';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import logoTgx from '../../assets/logo-tgx-sembg.png';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(215,168,61,0.12),transparent)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Brand & Tagline */}
            <div>
              <Link to="/" className="flex items-center gap-2 mb-6 group">
                <img src={logoTgx} alt="TGX Engenharia Logo" className="h-[53px] w-auto object-contain" />
              </Link>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Referência em engenharia especializada, laudos técnicos e regularização imobiliária corporativa. Protegemos vidas e patrimônios com rigor técnico e agilidade.
              </p>
              <div className="text-xs text-gray-500 font-manrope">
                CREA-SP nº 2043516
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-manrope font-bold text-base text-white mb-6 uppercase tracking-wider border-b border-gold/30 pb-2 inline-block">Navegação</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-gold transition-colors text-sm font-medium">Home</Link>
                </li>
                <li>
                  <Link to="/servicos" className="text-gray-400 hover:text-gold transition-colors text-sm font-medium">Serviços</Link>
                </li>
                <li>
                  <Link to="/sobre" className="text-gray-400 hover:text-gold transition-colors text-sm font-medium">Sobre Nós</Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-400 hover:text-gold transition-colors text-sm font-medium">Blog</Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-400 hover:text-gold transition-colors text-sm font-medium">FAQ</Link>
                </li>
                <li>
                  <Link to="/contato" className="text-gray-400 hover:text-gold transition-colors text-sm font-medium">Contato</Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="font-manrope font-bold text-base text-white mb-6 uppercase tracking-wider border-b border-gold/30 pb-2 inline-block">Soluções</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/servicos" className="text-gray-400 hover:text-gold transition-colors text-sm">AVCB & CLCB (Bombeiros)</Link>
                </li>
                <li>
                  <Link to="/servicos" className="text-gray-400 hover:text-gold transition-colors text-sm">Alvará de Funcionamento</Link>
                </li>
                <li>
                  <Link to="/servicos" className="text-gray-400 hover:text-gold transition-colors text-sm">Licenciamento Ambiental</Link>
                </li>
                <li>
                  <Link to="/servicos" className="text-gray-400 hover:text-gold transition-colors text-sm">Licença Sanitária</Link>
                </li>
                <li>
                  <Link to="/servicos" className="text-gray-400 hover:text-gold transition-colors text-sm">Laudos Técnicos & ART</Link>
                </li>
                <li>
                  <Link to="/servicos" className="text-gray-400 hover:text-gold transition-colors text-sm">Regularização de Imóveis</Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Channels */}
            <div>
              <h4 className="font-manrope font-bold text-base text-white mb-6 uppercase tracking-wider border-b border-gold/30 pb-2 inline-block">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gold mt-1 text-sm shrink-0" />
                  <span className="text-gray-400 text-sm leading-relaxed">
                    Rua Olimpíadas, 205 - Cj. 41 - Vila Olímpia, São Paulo - SP, 04551-000
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faPhone} className="text-gold text-sm shrink-0" />
                  <span className="text-gray-400 text-sm">+55 (11) 94750-5886</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-gold text-sm shrink-0" />
                  <a href="mailto:tgxengenharia@gmail.com" className="text-gray-400 text-sm hover:text-gold transition-colors">
                    tgxengenharia@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} TGX Engenharia e Soluções. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link to="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
              <Link to="/politicas" className="hover:text-white transition-colors">Políticas</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
