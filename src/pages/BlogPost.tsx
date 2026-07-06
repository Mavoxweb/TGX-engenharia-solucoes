import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCalendarDays, faShareNodes, faChevronRight, faHelmetSafety } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { posts } from '../data/posts';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.slug === slug);
  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="pt-40 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-black text-primary mb-4">Artigo não encontrado</h1>
        <p className="text-slate-500 mb-8">O conteúdo que você procura pode ter sido movido ou não existe mais.</p>
        <button onClick={() => navigate('/blog')} className="btn-primary px-8 py-3 rounded-full text-sm">
          Voltar para o Blog
        </button>
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      <Helmet>
        <title>{post.title} | Blog TGX Engenharia</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      {/* Post Header Hero */}
      <div className="pt-32 pb-24 relative overflow-hidden bg-primary text-white border-b border-gold/10">
        <div className="absolute inset-0 bg-primary/95 z-10" />
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent z-10" />
        
        <div className="container mx-auto px-6 relative z-20 mt-12 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gold/80 hover:text-gold text-xs font-bold uppercase tracking-widest mb-8 transition-colors">
            <FontAwesomeIcon icon={faArrowLeft} /> Voltar para o Blog
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gold font-bold text-[10px] uppercase tracking-widest bg-gold/10 border border-gold/20 px-3 py-1 rounded-md backdrop-blur-sm">
              {post.category}
            </span>
            <span className="text-xs text-white/60 font-medium flex items-center gap-2">
              <FontAwesomeIcon icon={faCalendarDays} />
              {post.date}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black font-manrope text-white leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed border-l-2 border-gold pl-6">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="py-16 bg-white min-h-screen">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Content Area */}
            <div className="lg:w-2/3">
              <article 
                className="prose prose-lg prose-slate prose-headings:font-manrope prose-headings:font-black prose-headings:text-primary prose-a:text-gold hover:prose-a:text-primary prose-li:text-slate-600 prose-p:text-slate-600 prose-p:font-light prose-strong:text-primary max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Share and Tags */}
              <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4 text-sm font-bold text-slate-400 uppercase tracking-widest">
                  <FontAwesomeIcon icon={faShareNodes} /> Compartilhar:
                  <div className="flex gap-2">
                    <a 
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' - ' + shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-12">
              
              {/* Sidebar CTA */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.03] rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-6 shadow-lg shadow-primary/20">
                  <FontAwesomeIcon icon={faHelmetSafety} />
                </div>
                <h3 className="text-xl font-black font-manrope text-primary mb-3">Precisa regularizar seu imóvel?</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Evite multas e interdições. Fale com um de nossos engenheiros e descubra como podemos ajudar a sua empresa hoje mesmo.
                </p>
                <a 
                  href="https://wa.me/5511947505886?text=Olá,%20li%20um%20artigo%20no%20blog%20e%20gostaria%20de%20consultoria%20técnica."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-3 text-sm flex items-center justify-center gap-2"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                  Falar no WhatsApp
                </a>
              </div>

              {/* Related Posts */}
              <div>
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-4">
                  Leia Também
                </h3>
                <div className="space-y-6">
                  {otherPosts.map((op, idx) => (
                    <Link to={`/blog/${op.slug}`} key={idx} className="group flex gap-4 items-start">
                      <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                        <img 
                          src={op.image} 
                          alt={op.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold font-manrope text-primary leading-tight mb-2 group-hover:text-gold transition-colors line-clamp-2">
                          {op.title}
                        </h4>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 group-hover:text-gold transition-colors">
                          Ler Artigo <FontAwesomeIcon icon={faChevronRight} className="text-[8px]" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
