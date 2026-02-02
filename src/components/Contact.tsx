import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="contact__bg">
        <div className="contact__orb contact__orb--1" />
        <div className="contact__orb contact__orb--2" />
      </div>

      <div className="container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Fale Conosco</span>
          <h2 className="section-title" style={{ color: '#fff' }}>
            Pronto para{' '}
            <span className="gradient-text">personalizar?</span>
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Solicite seu orçamento sem compromisso. Respondemos em até 24 horas.
          </p>
        </motion.div>

        <motion.div
          className="contact__center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact__info-card">
            <h3>Atendimento Rápido</h3>
            <p>
              Prefere falar diretamente? Chame no WhatsApp e receba uma
              resposta ágil da nossa equipe.
            </p>

            <a
              href="https://wa.me/5541999999999?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
            >
              <MessageCircle size={20} />
              Chamar no WhatsApp
            </a>

            <div className="contact__details">
              <div className="contact__detail">
                <MapPin size={18} />
                <span>Curitiba, PR</span>
              </div>
              <div className="contact__detail">
                <Phone size={18} />
                <span>(41) 99999-9999</span>
              </div>
              <div className="contact__detail">
                <Mail size={18} />
                <span>contato@rodriarts.com.br</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
