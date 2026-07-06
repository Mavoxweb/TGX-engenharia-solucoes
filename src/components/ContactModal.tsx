import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTimes, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import DOMPurify from 'dompurify';
import { useModal } from '../contexts/ModalContext';

const ContactModal = () => {
  const { isOpen, closeModal, defaultMessage } = useModal();
  
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    urgencia: '',
    servico: '',
    detalhes: ''
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formatWhatsAppMessage = () => {
    // Sanitização rigorosa contra Cross-Site Scripting e Injection
    const sanitize = (text: string) => DOMPurify.sanitize(text.trim(), { ALLOWED_TAGS: [] });

    let msg = `*Novo Contato via Site - TGX Engenharia*\n\n`;
    msg += `*Nome:* ${sanitize(formData.nome)}\n`;
    msg += `*Telefone:* ${sanitize(formData.telefone)}\n`;
    msg += `*Grau de Urgência:* ${sanitize(formData.urgencia)}\n`;
    msg += `*Tipo de Serviço:* ${sanitize(formData.servico)}\n`;
    if (formData.detalhes) {
      msg += `*Detalhes:* ${sanitize(formData.detalhes)}\n`;
    }
    if (defaultMessage) {
      msg += `\n*Origem/Interesse:* ${sanitize(defaultMessage)}\n`;
    }
    return encodeURIComponent(msg);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/5511947505886?text=${formatWhatsAppMessage()}`;
    window.open(whatsappUrl, '_blank');
    closeModal();
  };

  const handleDirectWhatsapp = () => {
    const msg = defaultMessage ? encodeURIComponent(defaultMessage) : encodeURIComponent("Olá, gostaria de falar com um especialista da TGX.");
    window.open(`https://wa.me/5511947505886?text=${msg}`, '_blank');
    closeModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors z-20"
            >
              <FontAwesomeIcon icon={faTimes} className="text-xl" />
            </button>

            <div className="overflow-y-auto p-6 md:p-8 custom-scrollbar">
              
              {/* Direct WhatsApp CTA */}
              <div className="bg-[#25D366] rounded-xl p-6 text-center text-white shadow-lg shadow-[#25D366]/20 mb-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
                <h3 className="text-xl font-bold font-manrope flex items-center justify-center gap-2 mb-1">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
                  Atendimento Imediato
                </h3>
                <p className="text-sm text-white/90 mb-4 font-light">Fale agora com um especialista pelo WhatsApp</p>
                <button 
                  onClick={handleDirectWhatsapp}
                  className="bg-white text-[#25D366] font-bold py-3 px-6 rounded-lg w-full hover:bg-slate-50 transition-colors shadow-sm"
                >
                  Chamar no WhatsApp &rarr;
                </button>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="h-px bg-slate-200 flex-1" />
                <span className="text-[9px] uppercase font-bold text-slate-400 tracking-widest whitespace-nowrap">
                  PARA O ATENDIMENTO PERSONALIZADO, PREENCHA O FORMULÁRIO:
                </span>
                <div className="h-px bg-slate-200 flex-1" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Nome *</label>
                  <input 
                    type="text" 
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all outline-none"
                    placeholder="Como podemos te chamar?"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Telefone/WhatsApp *</label>
                  <input 
                    type="text" 
                    name="telefone"
                    required
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all outline-none"
                    placeholder="Digite seu telefone"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Qual seu Grau de Urgência? *</label>
                  <select 
                    name="urgencia"
                    required
                    value={formData.urgencia}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all outline-none text-slate-600 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-no-repeat bg-[position:right_1rem_center]"
                  >
                    <option value="" disabled>Selecione a urgência</option>
                    <option value="Baixa">Baixa (Planejamento futuro)</option>
                    <option value="Média">Média (Regularização pendente)</option>
                    <option value="Alta">Alta (Recebi Notificação/Multa)</option>
                    <option value="Imediata">Imediata (Imóvel Interditado)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Tipo de Serviço *</label>
                  <select 
                    name="servico"
                    required
                    value={formData.servico}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all outline-none text-slate-600 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-no-repeat bg-[position:right_1rem_center]"
                  >
                    <option value="" disabled>Selecione o serviço</option>
                    <option value="AVCB / Bombeiros">AVCB / Bombeiros</option>
                    <option value="Alvará de Funcionamento">Alvará de Funcionamento</option>
                    <option value="CETESB">Licenciamento Ambiental (CETESB)</option>
                    <option value="ANVISA">Vigilância Sanitária (ANVISA)</option>
                    <option value="Laudos Técnicos">Laudos Técnicos</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Detalhes Adicionais (Opcional)</label>
                  <textarea 
                    name="detalhes"
                    value={formData.detalhes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all outline-none resize-none"
                    placeholder="Descreva brevemente seu projeto ou necessidade"
                  ></textarea>
                </div>

                <div className="flex gap-3 pt-4 border-t border-slate-100 mt-6">
                  <button 
                    type="button"
                    onClick={closeModal}
                    className="flex-[0.4] bg-white border border-slate-200 text-slate-700 font-bold py-3 px-4 rounded-lg hover:bg-slate-50 transition-colors text-sm"
                  >
                    Cancelar
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold py-3 px-4 rounded-lg transition-colors text-sm shadow-md shadow-blue-500/20"
                  >
                    Enviar Solicitação
                  </button>
                </div>
              </form>

              <div className="mt-5 text-center flex items-center justify-center gap-1.5 text-slate-400">
                <FontAwesomeIcon icon={faShieldHalved} className="text-[9px]" />
                <span className="text-[9px] font-medium tracking-wide">Seus dados estão seguros e não serão compartilhados</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
