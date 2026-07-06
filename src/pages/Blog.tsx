import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendarDays, faEnvelope, faSearch, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { posts } from '../data/posts';

const Blog = () => {
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <>
      <Helmet>
        <title>Blog e Informações Técnicas | TGX Engenharia e Soluções</title>
        <meta name="description" content="Artigos técnicos, novidades regulatórias e guias práticos sobre AVCB, Alvarás de Funcionamento, Licenciamento Ambiental e Vigilância Sanitária." />
      </Helmet>
      
      {/* Page Header (Cinematic Dark Theme) */}
      <div className="pt-40 pb-28 relative overflow-hidden bg-primary text-white border-b border-gold/10">
        <div className="absolute inset-0 bg-primary/95 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
          alt="Documentos e Projetos" 
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
              <FontAwesomeIcon icon={faNewspaper} /> Conteúdo Técnico
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-manrope mb-6 text-white leading-tight">
              Nosso <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
              Informação técnica especializada para manter a sua empresa protegida e em total conformidade legal. Acompanhe as últimas novidades e regulamentações.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 max-w-lg mx-auto relative"
          >
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-slate-400" />
            </div>
            <input 
              type="text" 
              placeholder="Pesquisar por assunto (ex: AVCB, CETESB)..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all backdrop-blur-md"
            />
          </motion.div>
        </div>
      </div>

      <div className="py-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-6">
          
          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-4 after:content-[''] after:flex-1 after:h-px after:bg-slate-200">
              Artigo em Destaque
            </h2>
            <Link to={`/blog/${featuredPost.slug}`}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group cursor-pointer grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                <div className="relative overflow-hidden h-72 lg:h-auto">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10 duration-500" />
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full -z-10 group-hover:bg-primary/[0.02] transition-colors duration-500" />
                  
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-gold bg-gold/10 px-4 py-1.5 rounded-md">
                      {featuredPost.category}
                    </span>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-2">
                      <FontAwesomeIcon icon={faCalendarDays} className="text-slate-400" />
                      {featuredPost.date}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black font-manrope text-primary mb-4 group-hover:text-gold transition-colors leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 font-light line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="btn-outline-primary text-xs w-max inline-flex items-center gap-2 group-hover:bg-primary group-hover:text-white transition-all">
                      Ler Artigo Completo
                      <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Grid of Posts */}
          <div className="mb-24">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-4 after:content-[''] after:flex-1 after:h-px after:bg-slate-200">
              Últimas Publicações
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, idx) => (
                <Link to={`/blog/${post.slug}`} key={idx}>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-2xl border border-slate-100 overflow-hidden group cursor-pointer flex flex-col h-full hover:shadow-xl transition-all duration-300"
                  >
                    <div className="h-56 overflow-hidden bg-slate-100 relative">
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10 duration-300" />
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-grow relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-10 group-hover:bg-primary/[0.02] transition-colors duration-500" />
                      
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-md">
                          {post.category}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5">
                          <FontAwesomeIcon icon={faCalendarDays} className="text-slate-400" />
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold font-manrope text-primary mb-3 group-hover:text-gold transition-colors line-clamp-2 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed mb-6 line-clamp-3 font-light">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto pt-4 border-t border-slate-100">
                        <span className="text-[10px] font-bold text-primary group-hover:text-gold transition-colors inline-flex items-center gap-2 uppercase tracking-wider">
                          Continuar Lendo
                          <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-24 bg-white relative z-20 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center gap-12">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_100%_100%,rgba(215,168,61,0.15),transparent)] pointer-events-none" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-br-[100%] pointer-events-none" />
            
            <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
              <span className="text-gold font-bold text-[10px] uppercase tracking-widest bg-white/[0.05] border border-white/10 px-4 py-1.5 rounded-full inline-block mb-6">
                Fique Atualizado
              </span>
              <h3 className="text-3xl md:text-4xl font-black font-manrope text-white mb-4 leading-tight">
                Receba insights sobre <span className="text-gold">regularização</span> corporativa.
              </h3>
              <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed">
                Assine nossa newsletter e receba mensalmente atualizações sobre legislações, guias de licenciamento e dicas para evitar multas.
              </p>
            </div>
            
            <div className="lg:w-1/2 w-full relative z-10">
              <form className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faEnvelope} className="text-slate-400" />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Seu melhor e-mail corporativo" 
                    className="w-full bg-white border border-transparent rounded-xl py-3 pl-12 pr-4 text-sm text-slate-800 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition-all shadow-inner"
                    required
                  />
                </div>
                <button type="button" className="btn-primary w-full py-3 text-sm justify-center rounded-xl shadow-lg shadow-gold/20">
                  Inscrever-se na Newsletter
                </button>
                <p className="text-[10px] text-slate-400 text-center mt-2 font-light">
                  Ao assinar, você concorda com nossa Política de Privacidade.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
