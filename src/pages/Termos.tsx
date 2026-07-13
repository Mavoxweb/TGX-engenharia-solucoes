import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileContract } from '@fortawesome/free-solid-svg-icons';

const Termos = () => {
  return (
    <>
      <Helmet>
        <title>Termos de Uso | TGX Engenharia e Soluções</title>
        <meta name="description" content="Termos de uso e condições gerais de serviço da TGX Engenharia e Soluções." />
      </Helmet>
      
      {/* Document Header */}
      <div className="pt-40 pb-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_-20%,rgba(215,168,61,0.1),transparent)] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <span className="text-gold font-bold text-[10px] uppercase tracking-widest bg-white/[0.03] border border-white/10 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-sm">
            <FontAwesomeIcon icon={faFileContract} /> Documentação Legal
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-manrope mb-4 text-white">
            Termos de Uso
          </h1>
          <p className="text-gray-400 text-sm md:text-base font-light">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>

      {/* Document Content */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="prose prose-slate prose-headings:font-manrope prose-headings:text-primary prose-a:text-gold hover:prose-a:text-primary max-w-none">
            
            <p className="lead text-lg text-slate-600 mb-8">
              Bem-vindo ao site da <strong>TGX Engenharia e Soluções</strong>. Ao acessar e utilizar este site, você concorda com os presentes Termos de Uso. Caso não concorde com algum dos termos descritos, solicitamos que não utilize nossos serviços online.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">1. Aceitação dos Termos</h2>
            <p className="mb-6 text-slate-600 leading-relaxed text-sm md:text-base">
              Estes Termos de Uso regem o acesso e uso do site da TGX Engenharia. O uso continuado do site após quaisquer alterações constitui aceitação das novas condições. A TGX reserva-se o direito de atualizar estes termos a qualquer momento, sem aviso prévio.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">2. Uso dos Serviços e Informações</h2>
            <p className="mb-6 text-slate-600 leading-relaxed text-sm md:text-base">
              Todo o conteúdo disponibilizado neste site — incluindo textos, gráficos, imagens, logotipos e detalhamento de serviços — tem caráter informativo. 
              Nenhum conteúdo aqui publicado substitui a consultoria técnica formal realizada por um engenheiro responsável. A solicitação de orçamentos pelo site está sujeita a análise técnica e viabilidade.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">3. Propriedade Intelectual</h2>
            <p className="mb-6 text-slate-600 leading-relaxed text-sm md:text-base">
              Todo o material presente neste site é de propriedade exclusiva da <strong>TGX Engenharia e Soluções</strong> ou de seus licenciadores, sendo protegido pelas leis de direitos autorais e propriedade intelectual (Lei nº 9.279/96). 
              É proibida a reprodução, cópia ou distribuição sem autorização prévia por escrito.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">4. Limitação de Responsabilidade</h2>
            <p className="mb-6 text-slate-600 leading-relaxed text-sm md:text-base">
              A TGX Engenharia empenha-se em manter as informações do site atualizadas e corretas, porém não garante a precisão absoluta dos conteúdos, uma vez que normas técnicas e leis (como do Corpo de Bombeiros, Prefeituras e CETESB) mudam frequentemente. 
              Não nos responsabilizamos por perdas ou danos decorrentes da utilização das informações gerais dispostas no site.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">5. Links para Sites de Terceiros</h2>
            <p className="mb-6 text-slate-600 leading-relaxed text-sm md:text-base">
              Nosso site pode conter links para sites de terceiros (como WhatsApp ou portais governamentais). Estes links são fornecidos apenas para sua conveniência. A TGX não tem controle sobre o conteúdo desses sites e não assume qualquer responsabilidade pelas políticas de privacidade ou termos de uso deles.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">6. Legislação Aplicável e Foro</h2>
            <p className="mb-6 text-slate-600 leading-relaxed text-sm md:text-base">
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de São Paulo, SP, para dirimir quaisquer dúvidas ou litígios oriundos deste instrumento.
            </p>

            <div className="mt-16 p-8 bg-slate-50 border border-slate-100 rounded-2xl">
              <h3 className="font-bold text-primary font-manrope mb-2">Dúvidas sobre estes Termos?</h3>
              <p className="text-sm text-slate-600">
                Se você tiver alguma dúvida sobre nossos Termos de Uso, entre em contato através do e-mail: <a href="mailto:tgxengenharia@gmail.com" className="text-gold font-medium">tgxengenharia@gmail.com</a>.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Termos;
