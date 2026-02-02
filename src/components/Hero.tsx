import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Ticket, Ribbon, BadgeCheck, ShieldCheck } from 'lucide-react';
import imgPulseira from '../assets/produtos/pulseira.jpg';
import imgCordao from '../assets/produtos/cordao.jpg';
import imgCracha from '../assets/produtos/cracha.jpg';
import imgLacre from '../assets/produtos/lacre.jpg';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      {/* Background element that zooms OUT (backward) */}
      <motion.div
        className="hero__backdrop"
        initial={{ scale: 2.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="hero__backdrop-ring hero__backdrop-ring--1" />
        <div className="hero__backdrop-ring hero__backdrop-ring--2" />
        <div className="hero__backdrop-ring hero__backdrop-ring--3" />
        <div className="hero__backdrop-ring hero__backdrop-ring--4" />
        <div className="hero__backdrop-burst" />
      </motion.div>

      {/* Animated background orbs */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      {/* Floating geometric shapes */}
      <div className="hero__shapes">
        <div className="hero__shape hero__shape--1" />
        <div className="hero__shape hero__shape--2" />
        <div className="hero__shape hero__shape--3" />
        <div className="hero__shape hero__shape--4" />
        <div className="hero__shape hero__shape--5" />
      </div>

      <div className="container hero__layout">
        {/* LEFT — Text content */}
        <div className="hero__content">
          <motion.span
            className="hero__badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Curitiba e Região
          </motion.span>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            Personalização que{' '}
            <span className="hero__title-highlight">marca presença</span>
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <span className="hero__kw hero__kw--green">Pulseiras</span>,{' '}
            <span className="hero__kw hero__kw--yellow">cordões</span> e{' '}
            <span className="hero__kw hero__kw--purple">crachás</span> personalizados para eventos, festas e
            empresas. Qualidade profissional que fortalece sua marca.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            <a
              href="https://wa.me/5541999999999?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              <MessageCircle size={20} />
              Solicitar Orçamento
            </a>
            <a href="#produtos" className="btn btn--outline">
              Ver Produtos
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            className="hero__stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <div className="hero__stat">
              <strong className="hero__stat-num--green">XXX</strong>
              <span>Eventos Atendidos</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <strong className="hero__stat-num--yellow">XXX</strong>
              <span>Pulseiras Produzidas</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <strong className="hero__stat-num--purple">XXX</strong>
              <span>Empresas Confiam</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — Decorative visual element that zooms IN (forward) */}
        <motion.div
          className="hero__visual"
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Rotating outer rings */}
          <div className="hero__visual-ring hero__visual-ring--outer" />
          <div className="hero__visual-ring hero__visual-ring--middle" />
          <div className="hero__visual-ring hero__visual-ring--inner" />

          {/* Glow behind products */}
          <div className="hero__visual-glow" />

          {/* 2x2 product cards grid */}
          <div className="hero__products">
            <div className="hero__pcard">
              <img
                className="hero__pcard-img"
                src={imgPulseira}
                alt="Pulseiras para festas"
              />
              <div className="hero__pcard-overlay" />
              <div className="hero__pcard-content">
                <div className="hero__pcard-icon hero__pcard-icon--pulse">
                  <Ticket size={24} strokeWidth={1.8} />
                </div>
                <div>
                  <span className="hero__pcard-label">Pulseiras</span>
                  <span className="hero__pcard-sub">Festas & Baladas</span>
                </div>
              </div>
            </div>

            <div className="hero__pcard">
              <img
                className="hero__pcard-img"
                src={imgCordao}
                alt="Cordões personalizados"
              />
              <div className="hero__pcard-overlay" />
              <div className="hero__pcard-content">
                <div className="hero__pcard-icon hero__pcard-icon--ribbon">
                  <Ribbon size={24} strokeWidth={1.8} />
                </div>
                <div>
                  <span className="hero__pcard-label">Cordões</span>
                  <span className="hero__pcard-sub">Personalizados</span>
                </div>
              </div>
            </div>

            <div className="hero__pcard">
              <img
                className="hero__pcard-img"
                src={imgCracha}
                alt="Crachás corporativos"
              />
              <div className="hero__pcard-overlay" />
              <div className="hero__pcard-content">
                <div className="hero__pcard-icon hero__pcard-icon--badge">
                  <BadgeCheck size={24} strokeWidth={1.8} />
                </div>
                <div>
                  <span className="hero__pcard-label">Crachás</span>
                  <span className="hero__pcard-sub">Corporativos</span>
                </div>
              </div>
            </div>

            <div className="hero__pcard">
              <img
                className="hero__pcard-img"
                src={imgLacre}
                alt="Lacres personalizados"
              />
              <div className="hero__pcard-overlay" />
              <div className="hero__pcard-content">
                <div className="hero__pcard-icon hero__pcard-icon--lacre">
                  <ShieldCheck size={24} strokeWidth={1.8} />
                </div>
                <div>
                  <span className="hero__pcard-label">Lacres</span>
                  <span className="hero__pcard-sub">Personalizados</span>
                </div>
              </div>
            </div>
          </div>

          {/* Orbiting dots */}
          <div className="hero__visual-orbit">
            <div className="hero__visual-dot hero__visual-dot--1" />
            <div className="hero__visual-dot hero__visual-dot--2" />
            <div className="hero__visual-dot hero__visual-dot--3" />
          </div>
        </motion.div>
      </div>

    </section>
  );
}
