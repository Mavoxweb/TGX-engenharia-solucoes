import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faClock, faComments } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contato = () => {
  return (
    <>
      <Helmet>
        <title>Fale com um Especialista | TGX Engenharia e Soluções</title>
        <meta name="description" content="Fale conosco. Solicite um orçamento técnico gratuito ou tire suas dúvidas sobre AVCB, Alvará de Funcionamento, CETESB e Laudos." />
      </Helmet>
      
      {/* Page Header (Cinematic Dark Theme) */}
      <div className="pt-40 pb-28 relative overflow-hidden bg-primary text-white border-b border-gold/10">
        <div className="absolute inset-0 bg-primary/95 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
          alt="Contato TGX" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay absolute inset-0"
        />
        <div 
          className="absolute inset-0 opacity-10 z-10 pointer-events-none" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
            backgroundSize: '48px 48px' 
          }} 
        />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none z-10" />
        
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-gold font-bold text-[10px] uppercase tracking-widest bg-white/[0.03] border border-white/10 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-sm">
              <FontAwesomeIcon icon={faComments} /> Atendimento Corporativo
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-manrope mb-6 text-white leading-tight">
              Fale com um <span className="text-gradient">Especialista</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
              Estamos prontos para entender a necessidade da sua empresa, analisar o seu imóvel e propor a melhor solução de engenharia.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-24 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
            
            {/* Contact Info Cards */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex items-start gap-5 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary text-2xl" />
                </div>
                <div>
                  <h3 className="text-primary font-bold font-manrope text-lg mb-2">Endereço Sede</h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">Rua Olimpíadas, 205 - Cj. 41 - Vila Olímpia<br/>São Paulo - SP | CEP: 04551-000</p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex items-start gap-5 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#25D366]/5 rounded-bl-[100%] -z-10 group-hover:scale-125 transition-transform" />
                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-[#25D366] text-2xl" />
                </div>
                <div>
                  <h3 className="text-primary font-bold font-manrope text-lg mb-2">Linha Direta & WhatsApp</h3>
                  <p className="text-slate-500 text-sm font-light mb-4">+55 (11) 94750-5886</p>
                  <a 
                    href="https://wa.me/5511947505886?text=Olá,%20gostaria%20de%20falar%20com%20um%20consultor%20da%20TGX."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-colors shadow-sm shadow-[#25D366]/20"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="text-base" />
                    Iniciar Conversa
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex items-start gap-5 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={faEnvelope} className="text-primary text-2xl" />
                </div>
                <div>
                  <h3 className="text-primary font-bold font-manrope text-lg mb-2">E-mail Corporativo</h3>
                  <a href="mailto:tgxengenharia@gmail.com" className="text-slate-500 text-sm font-light hover:text-gold transition-colors">tgxengenharia@gmail.com</a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex items-start gap-5 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={faClock} className="text-primary text-2xl" />
                </div>
                <div>
                  <h3 className="text-primary font-bold font-manrope text-lg mb-2">Horário Comercial</h3>
                  <p className="text-slate-500 text-sm font-light">Segunda a Sexta: 08:00 às 18:00</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-7"
            >
              <form className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/5 border border-slate-100 flex flex-col gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-bl-full pointer-events-none -z-10" />
                
                <div className="mb-4">
                  <h3 className="text-3xl font-black text-primary font-manrope mb-3 leading-tight">Envie uma Mensagem</h3>
                  <p className="text-slate-500 text-sm font-light">Nossos engenheiros retornarão o contato em menos de 2 horas úteis.</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] text-slate-500 font-bold uppercase tracking-widest ml-1">Nome Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm text-slate-800 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all placeholder:text-slate-400 shadow-inner" 
                      placeholder="Seu nome" 
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] text-slate-500 font-bold uppercase tracking-widest ml-1">E-mail Corporativo</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm text-slate-800 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all placeholder:text-slate-400 shadow-inner" 
                      placeholder="nome@suaempresa.com" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-[10px] text-slate-500 font-bold uppercase tracking-widest ml-1">Telefone / WhatsApp</label>
                    <input 
                      type="text" 
                      id="phone" 
                      className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm text-slate-800 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all placeholder:text-slate-400 shadow-inner" 
                      placeholder="(11) 94750-5886" 
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="servico" className="text-[10px] text-slate-500 font-bold uppercase tracking-widest ml-1">Serviço de Interesse</label>
                    <select 
                      id="servico" 
                      className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm text-slate-800 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all shadow-inner"
                    >
                      <option value="">Selecione o serviço...</option>
                      <option value="avcb">AVCB & CLCB</option>
                      <option value="alvara">Alvará de Funcionamento</option>
                      <option value="ambiental">Licenciamento Ambiental</option>
                      <option value="sanitaria">Licença Sanitária</option>
                      <option value="laudos">Laudos e ARTs</option>
                      <option value="regularizacao">Regularização de Imóvel</option>
                      <option value="outro">Outros Serviços</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] text-slate-500 font-bold uppercase tracking-widest ml-1">Sua Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm text-slate-800 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all placeholder:text-slate-400 shadow-inner resize-none" 
                    placeholder="Descreva brevemente sua necessidade (área do imóvel, atividade e situação atual)."
                  />
                </div>

                <button type="button" className="btn-primary w-full py-4 text-sm justify-center rounded-xl mt-4 shadow-lg shadow-gold/20 hover:-translate-y-1 transition-transform">
                  Solicitar Contato do Engenheiro
                </button>
                <p className="text-center text-[10px] font-light text-slate-400 mt-2">
                  Seus dados estão seguros. Não enviamos spam.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contato;
