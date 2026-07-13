import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFireExtinguisher, 
  faBuildingCircleCheck, 
  faFileSignature, 
  faHelmetSafety, 
  faTree, 
  faMapLocationDot,
  faCheck,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useModal } from '../contexts/ModalContext';

const Servicos = () => {
  const { openModal } = useModal();
  const getModalServiceValue = (title: string) => {
    if (title.includes('AVCB')) return 'AVCB / Bombeiros';
    if (title.includes('Alvará')) return 'Alvará de Funcionamento';
    if (title.includes('CETESB') || title.includes('Ambiental')) return 'CETESB';
    if (title.includes('Sanitária') || title.includes('Vigilância')) return 'ANVISA';
    if (title.includes('Laudos')) return 'Laudos Técnicos';
    if (title.includes('Regularização')) return 'Regularização de Imóveis';
    return 'Outros';
  };

  const servicos = [
    { 
      title: 'AVCB e CLCB (Corpo de Bombeiros)', 
      desc: 'Obtenção e renovação do Auto de Vistoria do Corpo de Bombeiros, atestando que a edificação cumpre as rigorosas exigências de segurança contra incêndios.', 
      icon: faFireExtinguisher,
      whoNeeds: 'Indústrias, galpões logísticos, condomínios residenciais e comerciais, escolas, shoppings e comércios em geral.',
      includes: [
        'Dimensionamento e projeto técnico de combate a incêndio',
        'Vistoria prévia detalhada com engenheiro qualificado',
        'Dimensionamento de hidrantes, extintores e sinalização de emergência',
        'Assessoria técnica durante a vistoria oficial do Corpo de Bombeiros'
      ],
      color: 'border-l-red-500'
    },
    { 
      title: 'Alvará de Funcionamento', 
      desc: 'Legalização total da sua atividade perante as prefeituras locais, permitindo o funcionamento legal do seu negócio sem riscos de multas ou interdições.', 
      icon: faBuildingCircleCheck,
      whoNeeds: 'Qualquer estabelecimento comercial, industrial, corporativo ou prestador de serviços.',
      includes: [
        'Estudo de viabilidade de zoneamento urbano',
        'Representação técnica junto à secretaria municipal de urbanismo',
        'Licenciamento e alvará para anúncios publicitários',
        'Emissão de alvarás de funcionamento, reforma e demolição'
      ],
      color: 'border-l-blue-500'
    },
    { 
      title: 'Licenciamento Ambiental (CETESB)', 
      desc: 'Licenciamento obrigatório para atividades potencialmente poluidoras, assegurando que o empreendimento atenda a todas as diretrizes ecológicas e de sustentabilidade.', 
      icon: faTree,
      whoNeeds: 'Indústrias químicas, metalúrgicas, alimentícias, oficinas, depósitos de resíduos e transportadoras.',
      includes: [
        'Obtenção de Licença Prévia (LP), Instalação (LI) e Operação (LO)',
        'Cadastramento e assessoria para o CADRI (Coleta de Resíduos Industriais)',
        'Elaboração de Estudos e Relatórios de Impacto Ambiental',
        'Defesa administrativa técnica contra autuações e multas'
      ],
      color: 'border-l-emerald-500'
    },
    { 
      title: 'Licença Sanitária (Vigilância)', 
      desc: 'Adequação física e operacional para aprovação sanitária, garantindo a conformidade higiênica e documental perante a ANVISA e vigilâncias municipais.', 
      icon: faFileSignature,
      whoNeeds: 'Restaurantes, farmácias, clínicas médicas/odontológicas, depósitos de alimentos, salões de beleza e laboratórios.',
      includes: [
        'Elaboração do LTA (Laudo Técnico de Avaliação) estrutural',
        'Desenho técnico de layouts e fluxos de processos operacionais',
        'Assessoria na redação do Manual de Boas Práticas',
        'Trâmite completo em órgãos estaduais e municipais de vigilância'
      ],
      color: 'border-l-amber-500'
    },
    { 
      title: 'Laudos Técnicos e ART', 
      desc: 'Documentações técnicas robustas que atestam a estabilidade estrutural e a segurança das instalações da empresa, emitidas por engenheiros certificados.', 
      icon: faHelmetSafety,
      whoNeeds: 'Empresas em fase de auditoria, renovação de seguros, vistorias prediais obrigatórias ou pós-reformas estruturais.',
      includes: [
        'Laudo de SPDA (Para-raios) e aterramentos elétricos',
        'Laudo de Instalações Elétricas em conformidade com a NR-10',
        'Laudo de estabilidade, segurança e capacidade de carga estrutural',
        'Emissão imediata de ART (Anotação de Responsabilidade Técnica)'
      ],
      color: 'border-l-purple-500'
    },
    { 
      title: 'Regularização de Imóveis', 
      desc: 'Resolução completa de irregularidades imobiliárias, desde Habite-se até a retificação de medidas e averbação de áreas ampliadas em cartório.', 
      icon: faMapLocationDot,
      whoNeeds: 'Proprietários de galpões, imóveis comerciais, administradores de patrimônio e empresas em fase de expansão.',
      includes: [
        'Emissão de Habite-se (Certificado de Conclusão de Obra)',
        'Averbação de ampliações físicas e reformas na prefeitura',
        'Desdobros, desmembramentos e unificação de lotes corporativos',
        'Retificação administrativa de áreas junto ao cartório de registro'
      ],
      color: 'border-l-indigo-500'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Serviços Especializados | TGX Engenharia e Soluções</title>
        <meta name="description" content="Conheça nossas soluções completas em regularização corporativa. AVCB, Alvarás, CETESB, Laudos Técnicos, Vigilância Sanitária e Habite-se." />
      </Helmet>
      
      {/* Page Header (Cinematic Dark Theme) */}
      <div className="pt-40 pb-28 relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-primary/95 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1541888087401-d5bbc2254e26?q=80&w=2070&auto=format&fit=crop" 
          alt="Projetos de Engenharia" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay absolute inset-0"
        />
        <div 
          className="absolute inset-0 opacity-10 z-10 pointer-events-none" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
            backgroundSize: '48px 48px' 
          }} 
        />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none z-10" />
        
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-gold font-bold text-[10px] uppercase tracking-widest bg-white/[0.03] border border-white/10 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-sm">
              <FontAwesomeIcon icon={faHelmetSafety} /> Portfólio de Engenharia
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-manrope mb-6 text-white leading-tight">
              Soluções Completas em <span className="text-gradient">Regularização</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
              Elimine riscos jurídicos e operacionais. Atuamos desde a vistoria inicial até a obtenção das licenças finais perante todas as instâncias governamentais, garantindo a segurança contínua do seu negócio.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services List Block */}
      <div className="py-24 bg-slate-50 relative z-30">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {servicos.map((servico, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`bg-white rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-0 overflow-hidden grid lg:grid-cols-12 items-stretch group hover:shadow-[0_20px_40px_rgba(7,28,58,0.12)] hover:-translate-y-1 transition-all duration-500 hover:border-gold/30 border-l-4 lg:border-l-0 ${servico.color}`}
              >
                {/* Left Side (Accent Bar - Hidden on mobile) */}
                <div className={`hidden lg:block lg:col-span-1 bg-slate-100 ${servico.color.replace('border-l-', 'bg-')} opacity-10 transition-opacity group-hover:opacity-20`} />
                
                {/* Center Content: Icon, Title & Description */}
                <div className="lg:col-span-6 p-8 md:p-12 space-y-6 flex flex-col justify-center bg-white">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                    <FontAwesomeIcon icon={servico.icon} className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold font-manrope text-primary mb-4">{servico.title}</h3>
                    <p className="text-slate-600 text-base leading-relaxed mb-6">{servico.desc}</p>
                  </div>

                  <div className="p-5 rounded-xl bg-primary/5 border border-primary/10">
                    <h5 className="text-xs font-extrabold text-primary uppercase tracking-wider mb-2 flex items-center gap-2">
                      <FontAwesomeIcon icon={faExclamationTriangle} className="text-gold" />
                      Quem Precisa
                    </h5>
                    <p className="text-slate-700 text-sm leading-relaxed font-medium">{servico.whoNeeds}</p>
                  </div>
                </div>

                {/* Right Side: What is included checklist */}
                <div className="lg:col-span-5 bg-slate-50 p-8 md:p-12 border-l border-slate-100 flex flex-col justify-center">
                  <div>
                    <h4 className="font-bold font-manrope text-xs text-slate-400 mb-6 uppercase tracking-widest border-b border-slate-200 pb-4">
                      O Que Está Incluso no Escopo
                    </h4>
                    <ul className="space-y-5">
                      {servico.includes.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-4">
                          <span className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center shrink-0 border border-success/20 mt-0.5">
                            <FontAwesomeIcon icon={faCheck} className="text-xs text-success" />
                          </span>
                          <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={() => openModal(`Interesse no serviço: ${servico.title}`, getModalServiceValue(servico.title))}
                      className="btn-primary rounded-full text-[10px] sm:text-xs flex-1 justify-center py-3.5 px-4 flex items-center gap-1.5 cursor-pointer shadow-md"
                    >
                      Contato Direto
                    </button>
                    <a 
                      href={`https://wa.me/5511947505886?text=Olá,%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20serviço%20de%20${encodeURIComponent(servico.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline rounded-full text-[10px] sm:text-xs flex-1 justify-center py-3.5 px-4 flex items-center gap-1.5 transition-all text-center"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} className="text-sm text-[#25D366]" />
                      Detalhe
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Quote Banner */}
      <div className="py-24 bg-primary text-white border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_-20%,rgba(215,168,61,0.15),transparent)] pointer-events-none" />
        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <FontAwesomeIcon icon={faBuildingCircleCheck} className="text-gold text-5xl mb-8 opacity-90" />
          <h3 className="text-3xl md:text-4xl font-black font-manrope mb-6 text-white leading-tight">Precisa de uma solução customizada?</h3>
          <p className="text-gray-400 mb-10 text-base leading-relaxed max-w-2xl mx-auto">
            Se o seu imóvel possui características complexas, áreas mistas ou pendências antigas de fiscalização, elaboramos um projeto personalizado para sanar as exigências legais com segurança jurídica total.
          </p>
          <a 
            href="https://wa.me/5511947505886?text=Olá,%20tenho%20um%20caso%20complexo%20e%20preciso%20de%20uma%20solução%20personalizada%20de%20regularização."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline border-white/20 text-white hover:bg-white hover:text-primary rounded-full text-sm px-8 py-4 inline-flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
            Conversar com Engenheiro Responsável
          </a>
        </div>
      </div>
    </>
  );
};

export default Servicos;
