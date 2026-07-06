import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faHandshake, faGears, faCircleCheck, faHelmetSafety } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Sobre = () => {
  const valores = [
    {
      title: 'Excelência Técnica',
      desc: 'Nossos projetos são executados seguindo rigorosamente as legislações vigentes e normas técnicas da ABNT.',
      icon: faShieldHalved
    },
    {
      title: 'Compromisso com Prazos',
      desc: 'Sabemos que tempo é dinheiro para nossos clientes. Cumprimos o cronograma acordado de forma transparente.',
      icon: faGears
    },
    {
      title: 'Transparência Total',
      desc: 'Informamos a real situação do imóvel desde o primeiro dia. Sem surpresas ou taxas ocultas nos trâmites.',
      icon: faHandshake
    },
    {
      title: 'Parceria de Longo Prazo',
      desc: 'Apoiamos sua empresa no crescimento contínuo, cuidando de todas as renovações de laudos e licenças.',
      icon: faCircleCheck
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sobre Nós | TGX Engenharia e Soluções</title>
        <meta name="description" content="Conheça a história, missão, visão e valores da TGX Engenharia. Mais de 10 anos de experiência e +1.000 projetos regularizados." />
      </Helmet>
      
      {/* Page Header (Cinematic Dark Theme) */}
      <div className="pt-40 pb-28 relative overflow-hidden bg-primary text-white border-b border-gold/10">
        <div className="absolute inset-0 bg-primary/95 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" 
          alt="Escritório de Engenharia" 
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
              <FontAwesomeIcon icon={faShieldHalved} /> Sobre a TGX
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-manrope mb-6 text-white leading-tight">
              Engenharia especializada que <span className="text-gradient">descomplica</span> burocracias.
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
              Transformamos o complexo mercado de regularizações técnicas em um processo rápido, seguro e transparente para empresas de todos os portes.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Story & Mission Section */}
      <div className="py-24 bg-white relative z-30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-8"
            >
              <div>
                <span className="text-gold font-bold text-xs uppercase tracking-widest mb-4 block">Nossa Trajetória</span>
                <h2 className="text-3xl md:text-4xl font-black font-manrope text-primary mb-6 leading-tight">
                  Mais de 10 anos construindo <br className="hidden md:block"/> conformidade corporativa.
                </h2>
                <div className="space-y-4 text-slate-600 text-base leading-relaxed font-light">
                  <p>
                    A TGX Engenharia e Soluções nasceu com a missão de transformar o mercado de regularizações técnicas no Brasil. Identificamos que as empresas perdiam muito tempo e dinheiro lidando com burocracias fragmentadas.
                  </p>
                  <p>
                    Ao longo da nossa atuação, construímos um histórico sólido de projetos de combate a incêndio (AVCB), alvarás de funcionamento e licenciamentos ambientais (CETESB), nos consolidando como parceiro preferido de grandes corporações paulistas.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gold transition-all duration-300 group-hover:w-full group-hover:opacity-10" />
                  <h3 className="font-bold text-lg mb-3 text-primary font-manrope flex items-center gap-2">
                    <FontAwesomeIcon icon={faHelmetSafety} className="text-gold" /> Missão
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed relative z-10">
                    Proteger vidas e resguardar operações corporativas através de rigor técnico e regularizações inteligentes.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary transition-all duration-300 group-hover:w-full group-hover:opacity-5" />
                  <h3 className="font-bold text-lg mb-3 text-primary font-manrope flex items-center gap-2">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-primary" /> Visão
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed relative z-10">
                    Ser reconhecida como o principal parceiro B2B de engenharia legal e licenciamento corporativo até 2028.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 aspect-[4/5] md:aspect-auto md:h-[600px]">
                <img 
                  src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
                  alt="Trabalho de engenharia civil de campo na TGX" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-gold font-black text-xl">10+</span>
                    </div>
                    <div>
                      <h4 className="text-primary font-bold font-manrope text-sm">Anos de Experiência</h4>
                      <p className="text-slate-500 text-xs mt-1">Mais de 1.000 projetos entregues com rigor técnico.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-24 bg-slate-50 relative z-20 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-bold text-[10px] uppercase tracking-widest bg-gold/10 px-4 py-2 rounded-full inline-block mb-4">Nossos Pilares</span>
            <h2 className="text-3xl md:text-4xl font-black font-manrope text-primary mb-6">
              Valores que direcionam cada projeto
            </h2>
            <p className="text-slate-600 text-base font-light">
              Nossa cultura técnica é moldada pela ética profissional e pela busca incessante das soluções mais eficientes para nossos parceiros corporativos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100%] -z-10 group-hover:bg-primary/5 transition-colors" />
                <div>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-md shadow-primary/20 mb-8 group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={valor.icon} className="text-xl text-white" />
                  </div>
                  <h3 className="font-bold font-manrope text-lg text-primary mb-3">{valor.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">{valor.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Corporate Call to Action */}
      <div className="py-24 bg-primary text-white border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_-20%,rgba(215,168,61,0.15),transparent)] pointer-events-none" />
        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <FontAwesomeIcon icon={faHandshake} className="text-gold text-5xl mb-8 opacity-90" />
          <h3 className="text-3xl md:text-4xl font-black font-manrope mb-6 text-white leading-tight">Quer saber mais sobre nossa metodologia?</h3>
          <p className="text-gray-400 mb-10 text-base leading-relaxed max-w-2xl mx-auto">
            Consulte nossa equipe técnica e veja como podemos apoiar a sua empresa a alcançar a regularização total perante todos os órgãos públicos.
          </p>
          <a 
            href="https://wa.me/5511947505886?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20e%20atuação%20da%20TGX."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline border-white/20 text-white hover:bg-white hover:text-primary rounded-full text-sm px-8 py-4 inline-flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
            Falar com um Consultor Técnico
          </a>
        </div>
      </div>
    </>
  );
};

export default Sobre;
