import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { posts } from '../data/posts';
import { useModal } from '../contexts/ModalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { 
  faArrowRight, 
  faBuilding, 
  faFireExtinguisher, 
  faFileSignature, 
  faHelmetSafety, 
  faTree, 
  faMapLocationDot,
  faStar,
  faCircleCheck,
  faPlus,
  faMinus,
  faCircleQuestion,
  faBookOpen
} from '@fortawesome/free-solid-svg-icons';
import { 
  Shield, 
  ArrowRight, 
  FileCheck2, 
  ShieldCheck, 
  BadgePlus, 
  Leaf, 
  ClipboardCheck, 
  Building2, 
  Clock, 
  Users, 
  MapPin, 
  MessageCircle 
} from 'lucide-react';

const partners = [
  { name: "McDonald's",         logo: "/logos/mcdonalds.svg" },
  { name: "Pepsi",              logo: "/logos/pepsi.svg" },
  { name: "Walmart",            logo: "/logos/walmart.svg" },
  { name: "Nestlé",             logo: "/logos/nestle.svg" },
  { name: "Ambev",              logo: "/logos/ambev.svg" },
  { name: "Grupo Pão de Açúcar",logo: "/logos/gpa.svg" },
  { name: "Unilever",           logo: "/logos/unilever.svg" },
  { name: "KFC",                logo: "/logos/kfc.svg" },
  { name: "Subway",             logo: "/logos/subway.svg" },
  { name: "Carrefour",          logo: "/logos/carrefour.svg" },
  { name: "Coca-Cola",          logo: "/logos/cocacola.svg" },
  { name: "Burger King",        logo: "/logos/burgerking.svg" }
];

const Home = () => {
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

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const toggleFAQ = (index: number) => setActiveFaq(activeFaq === index ? null : index);

  const stats = [
    { number: '+6.745', label: 'Empresas Atendidas' },
    { number: '+10 Anos', label: 'de Experiência Técnica' },
    { number: '98%', label: 'de Aprovação Direta' },
    { number: '100%', label: 'Exigências Resolvidas' }
  ];

  const servicos = [
    { 
      title: 'AVCB e CLCB', 
      desc: 'Projetos, vistorias e renovações completas de Auto de Vistoria do Corpo de Bombeiros. Proteção absoluta contra incêndios.', 
      icon: faFireExtinguisher,
      tag: 'Bombeiros'
    },
    { 
      title: 'Alvará de Funcionamento', 
      desc: 'Regularização completa junto às prefeituras para o funcionamento legal de indústrias, comércios e escritórios.', 
      icon: faBuilding,
      tag: 'Prefeituras'
    },
    { 
      title: 'Licenciamento Ambiental', 
      desc: 'Adequação, assessoria técnica e emissão de licenças junto à CETESB e órgãos reguladores ambientais.', 
      icon: faTree,
      tag: 'CETESB'
    },
    { 
      title: 'Licença Sanitária', 
      desc: 'Projetos técnicos e adequação estrutural para conformidade com a Vigilância Sanitária (ANVISA) e prefeituras.', 
      icon: faFileSignature,
      tag: 'ANVISA'
    },
    { 
      title: 'Laudos Técnicos e ART', 
      desc: 'Emissão de laudos de estabilidade, SPDA (para-raios), instalações elétricas e reformas, assinados por especialistas.', 
      icon: faHelmetSafety,
      tag: 'Engenharia'
    },
    { 
      title: 'Regularização de Imóveis', 
      desc: 'Habite-se, desdobros, projetos de reforma e retificação de áreas. Segurança jurídica para o seu patrimônio.', 
      icon: faMapLocationDot,
      tag: 'Imobiliário'
    },
  ];

  const diferenciais = [
    {
      title: 'Agilidade & Prazos Rígidos',
      desc: 'Atraso em licenças custa caro. Nossos processos são padronizados para garantir protocolos rápidos e emissões ágeis.'
    },
    {
      title: 'Equipe Técnica Especializada',
      desc: 'Nossos engenheiros e arquitetos possuem trâmite direto e profundo conhecimento das normas vigentes e legislações locais.'
    },
    {
      title: 'Suporte & Transparência Real',
      desc: 'Você sabe exatamente em qual etapa está o seu protocolo. Sem jargões difíceis, com comunicação clara e direta.'
    },
    {
      title: 'Conformidade Sem Retrabalho',
      desc: 'Elaboramos projetos precisos de primeira. Minimizamos multas, custos desnecessários e interdições operacionais.'
    }
  ];

  const passos = [
    {
      num: '01',
      title: 'Diagnóstico Gratuito',
      desc: 'Avaliamos a situação atual do seu imóvel e identificamos todas as licenças e laudos necessários para regularização.'
    },
    {
      num: '02',
      title: 'Plano de Ação',
      desc: 'Elaboramos uma proposta técnica detalhada com escopo, prazos, investimentos e responsabilidades.'
    },
    {
      num: '03',
      title: 'Execução Técnica',
      desc: 'Realizamos vistorias, coletamos dados, elaboramos projetos e emitimos todas as documentações e laudos necessários.'
    },
    {
      num: '04',
      title: 'Protocolo e Entrega',
      desc: 'Acompanhamos o trâmite nos órgãos emissores e gerenciamos exigências até a entrega da sua licença aprovada.'
    }
  ];

  const depoimentos = [
    {
      quote: "A TGX regularizou nosso galpão logístico em tempo recorde. Estávamos travados por conta do AVCB e eles resolveram tudo sem que precisássemos parar as operações.",
      author: "Marcos Aurelio",
      role: "Gerente de Operações, LogiTrans Brasil",
      stars: 5
    },
    {
      quote: "Excelente suporte no licenciamento da nossa nova fábrica. O conhecimento técnico deles sobre as exigências da CETESB evitou retrabalho e nos economizou milhares de reais.",
      author: "Clara Mendes",
      role: "Diretora Industrial, Inova Alimentos",
      stars: 5
    },
    {
      quote: "Trabalho sério e muito profissional. Acompanhamos cada etapa pelo painel e o alvará de funcionamento foi emitido sem nenhuma surpresa ou taxa extra inesperada.",
      author: "Roberto D'Angelo",
      role: "Sócio Administrador, Rede Plaza Co.",
      stars: 5
    }
  ];

  const faqs = [
    { 
      q: "Qual é a diferença real entre AVCB e CLCB e qual meu imóvel necessita?", 
      a: "O AVCB (Auto de Vistoria do Corpo de Bombeiros) é exigido para edificações de maior porte ou alto risco. O CLCB (Certificado de Licença do Corpo de Bombeiros) aplica-se a imóveis menores. Nossa equipe avalia seu espaço gratuitamente para definir o correto." 
    },
    { 
      q: "Quanto tempo leva o processo para emissão de um Alvará de Funcionamento?", 
      a: "Varia conforme o município e o risco. Liberações digitais simples podem sair em dias, enquanto atividades industriais levam de 30 a 90 dias. Nós aceleramos esse processo protocolando corretamente de primeira." 
    },
    { 
      q: "Quais são as punições por operar sem licenças?", 
      a: "Multas pesadas, interdição física do negócio, recusa de pagamento por seguradoras em caso de sinistro e responsabilidade civil/criminal aos sócios." 
    },
    { 
      q: "A TGX executa as obras físicas de combate a incêndio?", 
      a: "Nossa especialidade é a Engenharia Legal (projetos, laudos e trâmites). Para execução de obras (hidrantes, extintores), fornecemos o projeto exato e podemos indicar parceiros confiáveis." 
    }
  ];


  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '#faq') {
      const element = document.getElementById('faq');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [hash]);

  const recentPosts = posts.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>TGX Engenharia e Soluções | Engenharia Especializada e Regularização</title>
        <meta name="description" content="Protegemos empresas através da engenharia especializada e regularização completa. Especialistas em AVCB, CLCB, Alvarás, CETESB e Laudos Técnicos." />
        <meta property="og:title" content="TGX Engenharia e Soluções | Engenharia Especializada e Regularização" />
        <meta property="og:description" content="Protegemos empresas através da engenharia especializada e regularização completa. Especialistas em AVCB, CLCB, Alvarás, CETESB e Laudos Técnicos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tgxengenharia.com.br/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "TGX Engenharia e Soluções",
              "image": "https://www.tgxengenharia.com.br/logo.png",
              "description": "Engenharia especializada e regularização corporativa. AVCB, CLCB, Alvarás, CETESB e Laudos Técnicos.",
              "url": "https://www.tgxengenharia.com.br",
              "telephone": "+5511947505886",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "addressCountry": "BR"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full overflow-x-hidden bg-[#071C3A] text-white" style={{ paddingTop: 'clamp(112px, 13vw, 150px)', paddingBottom: 'clamp(56px, 8vw, 100px)' }}>
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#061426] via-[#071C3A] to-[#061426] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1542362567-b07eac790acd?q=80&w=2070&auto=format&fit=crop" 
            alt="Fachada corporativa" 
            className="w-full h-full object-cover opacity-15 mix-blend-overlay scale-105 pointer-events-none"
          />
          <div 
            className="absolute inset-0 opacity-[0.04] z-10 pointer-events-none" 
            style={{ 
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)', 
              backgroundSize: '40px 40px' 
            }} 
          />
          <div 
            className="absolute inset-0 opacity-[0.02] z-10 pointer-events-none" 
            style={{ 
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', 
              backgroundSize: '8px 8px' 
            }} 
          />
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#D7A83D]/5 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="w-full px-4 sm:px-6 relative z-20">
          {/* Main Content Layout */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LADO ESQUERDO: Texto e Ações */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="col-span-12 lg:col-span-7 flex flex-col items-start text-left w-full min-w-0"
            >
              {/* Badge */}
              <div className="inline-flex self-start items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm mb-5">
                <Shield className="w-3.5 h-3.5 text-[#D7A83D]" />
                <span className="text-[9px] md:text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/80">
                  Engenharia Legal e Regularizações
                </span>
              </div>

              {/* Headline */}
              <h1
                className="font-black font-manrope text-white tracking-tight leading-[1.05] text-left mb-4"
                style={{ fontSize: 'clamp(32px, 5.5vw, 68px)' }}
              >
                Alvarás e Licenças
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#D7A83D] via-[#E2B84A] to-[#E8C86F]">
                  para Empresas
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#D7A83D] via-[#E2B84A] to-[#E8C86F]">
                  em São Paulo.
                </span>
              </h1>

              {/* Descrição */}
              <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed font-light mb-5 w-full max-w-full break-words whitespace-normal text-left">
                Regularizamos seu negócio com rapidez, segurança e total conformidade legal.
              </p>

              {/* Serviços — Pills */}
              <div className="flex flex-wrap justify-start gap-1.5 mb-8 w-full">
                {['AVCB / CLCB','Alvará de Funcionamento','Vigilância Sanitária','CETESB','Laudos Técnicos'].map((s) => (
                  <span key={s} className="text-[9px] md:text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#D7A83D]/20 bg-[#D7A83D]/[0.06] text-[#D7A83D]/90 leading-none tracking-wide whitespace-normal sm:whitespace-nowrap text-left break-words">{s}</span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-2.5 w-full max-w-xs sm:max-w-none sm:flex-row sm:gap-3">
                <button
                  onClick={() => openModal('Olá, gostaria de solicitar um diagnóstico gratuito com a TGX Engenharia.')}
                  className="w-full bg-[#D7A83D] hover:bg-[#E2B84A] text-[#071C3A] font-extrabold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 group transition-all duration-300 shadow-[0_4px_24px_rgba(215,168,61,0.3)] hover:shadow-[0_6px_32px_rgba(215,168,61,0.45)] hover:-translate-y-0.5 cursor-pointer text-xs xl:text-sm px-4" style={{ height: '48px' }}
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Diagnóstico Gratuito</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
                <Link
                  to="/contato"
                  className="w-full border border-white/25 hover:border-[#D7A83D]/60 text-white hover:text-[#D7A83D] font-extrabold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer text-xs xl:text-sm px-4 hover:bg-white/[0.03]" style={{ height: '48px' }}
                >
                  <span>Falar com Engenheiro</span>
                </Link>
              </div>
            </motion.div>

            {/* LADO DIREITO: Composição Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="hidden lg:block relative col-span-12 lg:col-span-5"
            >
              <div className="relative rounded-2xl overflow-hidden bg-slate-950/40 border border-white/10 p-2 shadow-2xl backdrop-blur-xs">
                <div className="relative aspect-[4/4.5] w-full rounded-xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071C3A] via-transparent to-transparent z-10 opacity-85" />
                  <div className="absolute inset-0 bg-[#071C3A]/20 z-10 mix-blend-multiply" />
                  <img 
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop" 
                    alt="Engenharia legal e regularização corporativa" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                </div>
                
                {/* Floating Status Panel */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#071C3A]/90 backdrop-blur-md border border-white/10 rounded-xl p-5 shadow-2xl z-20">
                  <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D7A83D] flex items-center gap-1.5 font-manrope">
                      <Shield className="w-3.5 h-3.5 text-[#D7A83D]" />
                      Conformidade Empresarial
                    </span>
                    <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  </div>
                  <div className="space-y-3 font-inter">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-300 font-medium">AVCB / CLCB</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/25 border border-blue-500/30 text-blue-300 font-bold uppercase tracking-wider">Análise Técnica</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-300 font-medium">Alvará de Funcionamento</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#D7A83D]/25 border border-[#D7A83D]/30 text-[#D7A83D] font-bold uppercase tracking-wider">Em Acompanhamento</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-300 font-medium">Licença Sanitária</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 border border-white/20 text-gray-300 font-bold uppercase tracking-wider">Documentação</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* GRID DE SERVIÇOS */}
          <div className="mt-10 md:mt-14 bg-white/[0.08] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[1px]">
              {[
                { name: 'Alvará de Funcionamento', icon: FileCheck2 },
                { name: 'AVCB e CLCB', icon: ShieldCheck },
                { name: 'Vigilância Sanitária', icon: BadgePlus },
                { name: 'Lic. Ambiental', icon: Leaf },
                { name: 'Laudos Técnicos', icon: ClipboardCheck },
                { name: 'Regularização', icon: Building2 },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={index}
                    to="/servicos"
                    className="flex flex-col items-center text-center py-5 px-3 md:py-6 md:px-4 bg-[#071C3A] hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <div className="mb-2.5 transform group-hover/item:-translate-y-0.5 transition-transform duration-300 text-[#D7A83D] bg-[#D7A83D]/10 p-2.5 rounded-lg border border-[#D7A83D]/15">
                      <IconComponent className="w-5 h-5 shrink-0" />
                    </div>
                    <span className="text-[9px] md:text-[10px] font-bold text-gray-400 group-hover/item:text-white transition-colors uppercase tracking-wide leading-tight mt-0.5">
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* DIFERENCIAIS */}
          <div className="mt-8 md:mt-12 pt-8 border-t border-white/[0.06]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-0 sm:divide-x sm:divide-white/10">
              {[
                { title: 'Sem Multas ou Interdições', desc: 'Conformidade legal completa para proteger sua empresa de riscos.', icon: ShieldCheck },
                { title: 'Agilidade Garantida', desc: 'Processos padronizados com equipe técnica especializada.', icon: Clock },
                { title: 'Engenharia do Início ao Fim', desc: 'Acompanhamos do diagnóstico até a aprovação final.', icon: Users }
              ].map((diff, index) => {
                const DiffIcon = diff.icon;
                return (
                  <div key={index} className="flex gap-3 items-start sm:px-6 first:sm:pl-0 last:sm:pr-0">
                    <div className="text-[#D7A83D] bg-[#D7A83D]/[0.08] p-2 rounded-lg border border-[#D7A83D]/15 shrink-0 mt-0.5">
                      <DiffIcon className="w-4 h-4 shrink-0" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-white mb-1 font-manrope">{diff.title}</h4>
                      <p className="text-[11px] text-gray-400 leading-relaxed">{diff.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ÁREA DE ATENDIMENTO */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#D7A83D]/10 border border-[#D7A83D]/15 flex items-center justify-center text-[#D7A83D] shrink-0">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <p className="text-xs text-white font-medium">
                Atendimento em <span className="text-[#D7A83D] font-bold">São Paulo e Grande SP</span> — todos os portes.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
              <Shield className="w-3 h-3 text-[#D7A83D]/50" />
              Conformidade Garantida
            </div>
          </div>

        </div>
      </section>


      
      {/* Stats Bar */}
      <section className="py-12 bg-slate-50 border-b border-slate-100 relative z-30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {stats.map((stat, idx) => (
               <div key={idx} className="text-center">
                 <h3 className="text-3xl md:text-4xl font-extrabold font-manrope text-primary mb-1">{stat.number}</h3>
                 <p className="text-slate-500 font-semibold text-xs uppercase tracking-wider">{stat.label}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative z-30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-bold text-xs uppercase tracking-widest bg-gold/10 px-4 py-1.5 rounded-full inline-block mb-4">Soluções Corporativas</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-manrope mb-6 text-primary">
              Nossos Serviços Especializados
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Oferecemos assessoria técnica e jurídica completa nos principais órgãos públicos para garantir a conformidade da sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((servico, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 flex flex-col justify-between rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(7,28,58,0.08)] hover:-translate-y-1 hover:border-gold/30 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center border border-primary/10">
                      <FontAwesomeIcon icon={servico.icon} className="text-xl text-primary" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/10 px-2.5 py-1 rounded-md">
                      {servico.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-manrope text-primary mb-4">{servico.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8">{servico.desc}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3 w-full mt-auto">
                  <button 
                    onClick={() => openModal(`Interesse no serviço: ${servico.title}`, getModalServiceValue(servico.title))}
                    className="btn-primary rounded-full text-[10px] sm:text-xs flex-1 justify-center py-3 px-4 flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    Contato Direto
                  </button>
                  <Link 
                    to="/servicos" 
                    className="btn-outline rounded-full text-[10px] sm:text-xs flex-1 justify-center py-3 px-4 flex items-center gap-1.5 transition-all text-center"
                  >
                    Detalhe
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative z-30 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold font-bold text-xs uppercase tracking-widest bg-gold/10 px-4 py-1.5 rounded-full inline-block mb-4">Diferenciais TGX</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-manrope mb-6 text-primary leading-tight">
                A segurança que sua empresa precisa, sem burocracia.
              </h2>
              <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">
                Nós não vendemos apenas papéis ou relatórios técnicos. Entregamos a tranquilidade de saber que sua empresa opera de forma 100% legal, protegendo sua operação contra multas e garantindo a segurança física do seu patrimônio e colaboradores.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-gold text-lg shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">Projetos rigorosamente alinhados ao Decreto Estadual nº 63.911</span>
                </div>
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-gold text-lg shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">Processos digitais integrados via Via Fácil Bombeiros e prefeituras</span>
                </div>
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-gold text-lg shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">Acompanhamento de pendências em tempo real</span>
                </div>
              </div>
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); openModal('Olá, gostaria de falar com um engenheiro sobre regularização.'); }}
                className="btn-outline-primary text-xs flex items-center gap-2 w-max"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-sm" />
                Falar com um Engenheiro
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {diferenciais.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-[0_5px_20px_rgba(0,0,0,0.02)]">
                  <h4 className="font-bold font-manrope text-base text-primary mb-3">{item.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding / Process steps Section */}
      <section className="py-24 bg-white relative z-30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-gold font-bold text-xs uppercase tracking-widest bg-gold/10 px-4 py-1.5 rounded-full inline-block mb-4">Etapas de Trabalho</span>
            <h2 className="text-3xl md:text-4xl font-black font-manrope mb-6 text-primary">
              Como Funciona Nosso Método
            </h2>
            <p className="text-slate-600 text-base">
              Simplificamos o complexo. Criamos um caminho estruturado para regularizar sua empresa com segurança técnica e conformidade jurídica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-slate-100 z-0" />
            
            {passos.map((passo, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-slate-50 border-2 border-slate-100 flex items-center justify-center font-black font-manrope text-xl text-gold mb-6 shadow-sm relative bg-white">
                  {passo.num}
                  <div className="absolute inset-0 rounded-full border border-gold/20 scale-125 animate-pulse pointer-events-none" />
                </div>
                <h3 className="font-bold font-manrope text-lg text-primary mb-3">{passo.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed max-w-xs">{passo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50 relative z-30 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-bold text-xs uppercase tracking-widest bg-gold/10 px-4 py-1.5 rounded-full inline-block mb-4">Depoimentos</span>
            <h2 className="text-3xl md:text-4xl font-black font-manrope mb-6 text-primary">
              O que dizem os nossos clientes corporativos
            </h2>
            <p className="text-slate-600 text-base">
              A satisfação técnica e o cumprimento de prazos são as bases dos nossos relacionamentos com empresas de diversos segmentos.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {depoimentos.map((dep, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-gold mb-6">
                    {Array.from({ length: dep.stars }).map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="text-xs" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm italic leading-relaxed mb-8">
                    "{dep.quote}"
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary font-manrope text-sm">{dep.author}</h4>
                  <p className="text-xs text-slate-500 font-semibold">{dep.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Logo Cloud */}
      <section className="py-12 bg-white border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6 mb-8 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Grandes corporações que confiam na nossa engenharia
          </p>
        </div>
        <div className="relative w-full flex overflow-hidden">
          {/* Fading edges for infinite scroll effect */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            className="flex items-center gap-16 min-w-max px-8"
          >
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex items-center justify-center w-36 h-16 group shrink-0 relative">
                <img 
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  className="max-w-full max-h-10 object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <span className="hidden items-center justify-center font-bold text-slate-400 uppercase tracking-widest text-[9px] text-center w-full">{partner.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white relative z-30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-gold font-bold text-xs uppercase tracking-widest bg-gold/10 px-4 py-1.5 rounded-full inline-block mb-4">Central de Dúvidas</span>
              <h2 className="text-3xl md:text-4xl font-black font-manrope mb-6 text-primary">
                Perguntas Frequentes
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Esclarecemos os principais termos e exigências de engenharia de segurança e regularização patrimonial para sua empresa.
              </p>
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); openModal('Olá, tenho uma dúvida sobre licenciamento.'); }}
                className="btn-outline-primary text-xs w-max flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-sm" />
                Minha dúvida não está aqui
              </a>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div 
                    key={idx}
                    className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors hover:bg-slate-100/50"
                    >
                      <div className="flex gap-4 items-center pr-4">
                        <FontAwesomeIcon icon={faCircleQuestion} className={`text-lg transition-colors ${isOpen ? 'text-gold' : 'text-primary/40'}`} />
                        <span className="text-primary font-bold font-manrope text-sm md:text-base">{faq.q}</span>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs transition-transform duration-300 ${isOpen ? 'rotate-180 bg-gold/10 text-gold' : 'bg-white border border-slate-200 text-slate-400'}`}>
                        <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="p-6 pt-0 text-slate-600 text-sm leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-24 bg-slate-50 relative z-30 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-gold font-bold text-xs uppercase tracking-widest bg-gold/10 px-4 py-1.5 rounded-full inline-block mb-4">Conteúdo Técnico</span>
              <h2 className="text-3xl md:text-4xl font-black font-manrope mb-4 text-primary">
                Acompanhe nosso Blog
              </h2>
              <p className="text-slate-600 text-base">
                Artigos, atualizações na legislação e dicas de engenharia legal.
              </p>
            </div>
            <Link to="/blog" className="btn-outline-primary text-xs shrink-0 whitespace-nowrap hidden md:inline-flex">
              Ver Todos os Artigos <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts.map((post: any, idx: number) => (
              <Link to={`/blog/${post.slug}`} key={idx} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-primary">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-xs text-slate-400 font-semibold mb-3 flex items-center gap-2">
                    <FontAwesomeIcon icon={faBookOpen} /> {post.date}
                  </p>
                  <h3 className="text-lg font-bold font-manrope text-primary mb-3 group-hover:text-gold transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto text-xs font-bold text-primary uppercase tracking-widest group-hover:text-gold transition-colors inline-flex items-center gap-2">
                    Ler Artigo <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/blog" className="btn-outline-primary text-xs w-full justify-center">
              Ver Todos os Artigos
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Banner (Premium Dark/Gold Gradient Card) */}
      <section className="py-24 bg-white relative z-30">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-[#051123] text-white p-12 md:p-16 lg:p-20 shadow-2xl border border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(215,168,61,0.2),transparent)] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <span className="text-gold font-bold text-xs uppercase tracking-widest mb-6 inline-block border border-gold/30 px-4 py-1.5 rounded-full">
                Solicite um Orçamento Técnico
              </span>
              <h2 className="text-3xl md:text-5xl font-black font-manrope text-white mb-6 leading-tight">
                Evite multas e interdições. Coloque as licenças da sua empresa em dia hoje.
              </h2>
              <p className="text-gray-400 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Nossos consultores técnicos estão prontos para analisar sua situação e indicar o caminho mais econômico e eficiente para sua regularização técnica completa.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="#"
                  onClick={(e) => { e.preventDefault(); openModal('Olá, gostaria de solicitar um orçamento com a TGX Engenharia.'); }}
                  className="btn-primary flex items-center justify-center gap-2 group text-sm"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                  Falar com Engenheiro no WhatsApp
                  <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link to="/contato" className="btn-outline border-white/20 text-white hover:bg-white hover:text-primary flex items-center justify-center gap-2 text-sm">
                  Preencher Formulário
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
