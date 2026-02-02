import { motion } from 'framer-motion';
import { MessageSquare, Upload, CheckCircle, Package } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Entre em Contato',
    description: 'Fale conosco pelo WhatsApp ou formulário e conte o que precisa.',
  },
  {
    icon: Upload,
    number: '02',
    title: 'Envie seu Projeto',
    description: 'Mande sua arte pronta ou nossa equipe cria o layout para você.',
  },
  {
    icon: CheckCircle,
    number: '03',
    title: 'Aprovação',
    description: 'Valide a prova digital antes de iniciarmos a produção.',
  },
  {
    icon: Package,
    number: '04',
    title: 'Receba seu Pedido',
    description: 'Produção ágil e entrega rápida em Curitiba e região.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="how-it-works">
      <div className="container">
        <motion.div
          className="how-it-works__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label section-label--dark">Processo Simples</span>
          <h2 className="section-title">
            Como <span className="gradient-text">funciona</span>
          </h2>
          <p className="section-subtitle">
            Do primeiro contato à entrega, tudo de forma simples e transparente.
          </p>
        </motion.div>

        <motion.div
          className="how-it-works__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="step-card"
                variants={stepVariants}
              >
                <div className="step-card__number">{step.number}</div>
                <div className="step-card__icon">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__desc">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="step-card__connector" />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
