import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';

const Politicas = () => {
  return (
    <>
      <Helmet>
        <title>Políticas de Privacidade e LGPD | TGX Engenharia e Soluções</title>
        <meta name="description" content="Política de privacidade, tratamento de dados (LGPD) e política de cookies da TGX Engenharia." />
      </Helmet>
      
      {/* Document Header */}
      <div className="pt-40 pb-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_-20%,rgba(215,168,61,0.1),transparent)] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <span className="text-gold font-bold text-[10px] uppercase tracking-widest bg-white/[0.03] border border-white/10 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-sm">
            <FontAwesomeIcon icon={faShieldHalved} /> Proteção de Dados
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-manrope mb-4 text-white">
            Políticas de Privacidade (LGPD)
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
              A <strong>TGX Engenharia e Soluções</strong> valoriza a sua privacidade e garante o sigilo das informações que você nos fornece. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos seus dados pessoais em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">1. Coleta de Dados Pessoais</h2>
            <p className="mb-4 text-slate-600 leading-relaxed text-sm md:text-base">
              Coletamos informações essenciais para a prestação dos nossos serviços de engenharia e para fins de comunicação comercial:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2 text-sm md:text-base">
              <li><strong>Dados de Contato:</strong> Nome, e-mail, telefone/WhatsApp e empresa, quando você preenche nossos formulários ou entra em contato conosco.</li>
              <li><strong>Dados de Navegação (Cookies):</strong> Endereço de IP, tipo de navegador, tempo de visita e páginas acessadas, com o objetivo de melhorar a experiência no site.</li>
              <li><strong>Dados Documentais:</strong> CNPJ, IPTU e plantas arquitetônicas, apenas quando formalmente solicitados para análise prévia de orçamentos ou emissão de laudos.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">2. Uso e Tratamento dos Dados</h2>
            <p className="mb-4 text-slate-600 leading-relaxed text-sm md:text-base">
              Seus dados pessoais são utilizados unicamente para:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2 text-sm md:text-base">
              <li>Responder a solicitações de orçamentos e dúvidas enviadas pelo site.</li>
              <li>Elaborar propostas técnicas de engenharia e contratos de prestação de serviços.</li>
              <li>Envio de comunicações institucionais relevantes (que podem ser canceladas a qualquer momento).</li>
              <li>Cumprimento de obrigações legais perante prefeituras, Corpo de Bombeiros, CETESB e CREA.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">3. Compartilhamento de Informações</h2>
            <p className="mb-6 text-slate-600 leading-relaxed text-sm md:text-base">
              A TGX Engenharia <strong>não vende, aluga ou cede</strong> seus dados para terceiros. 
              As informações poderão ser compartilhadas apenas com órgãos públicos (como Prefeituras e Bombeiros) exclusivamente para o trâmite de aprovação de projetos, quando houver contrato firmado e com seu conhecimento.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">4. Política de Cookies</h2>
            <p className="mb-6 text-slate-600 leading-relaxed text-sm md:text-base">
              Nosso site utiliza cookies para garantir que você tenha a melhor experiência possível. Cookies são pequenos arquivos de texto armazenados no seu dispositivo que nos ajudam a entender como você interage com nosso conteúdo. Você pode configurar seu navegador para bloquear cookies, mas algumas funcionalidades do site podem ser afetadas.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">5. Armazenamento e Segurança</h2>
            <p className="mb-6 text-slate-600 leading-relaxed text-sm md:text-base">
              Armazenamos seus dados em ambientes seguros e controlados. Utilizamos protocolos de segurança avançados para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. Os dados são mantidos pelo período necessário para a execução do serviço ou conforme exigido pela legislação tributária e profissional do CREA.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">6. Seus Direitos (LGPD)</h2>
            <p className="mb-4 text-slate-600 leading-relaxed text-sm md:text-base">
              De acordo com a LGPD, você tem direito a:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2 text-sm md:text-base">
              <li>Confirmar a existência de tratamento de dados.</li>
              <li>Acessar, corrigir ou atualizar seus dados.</li>
              <li>Solicitar a eliminação dos seus dados pessoais (exceto aqueles que precisamos manter por obrigações legais).</li>
              <li>Revogar o consentimento a qualquer momento.</li>
            </ul>

            <div className="mt-16 p-8 bg-slate-50 border border-slate-100 rounded-2xl">
              <h3 className="font-bold text-primary font-manrope mb-2">Canal de Privacidade (DPO)</h3>
              <p className="text-sm text-slate-600">
                Para exercer seus direitos ou tirar dúvidas sobre como tratamos seus dados, entre em contato através do e-mail: <a href="mailto:privacidade@tgxengenharia.com.br" className="text-gold font-medium">privacidade@tgxengenharia.com.br</a>.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Politicas;
