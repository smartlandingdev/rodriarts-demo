import { motion } from 'framer-motion';
import { Award, Truck, Headphones, DollarSign } from 'lucide-react';

const differentials = [
  {
    icon: Award,
    title: 'Qualidade Premium',
    description:
      'Materiais de primeira linha e impressão de alta definição que garantem durabilidade e visual impecável.',
  },
  {
    icon: Truck,
    title: 'Entrega Ágil',
    description:
      'Produção rápida e logística eficiente para atender seu prazo. Entregas em Curitiba e região.',
  },
  {
    icon: Headphones,
    title: 'Atendimento Personalizado',
    description:
      'Suporte dedicado do orçamento à entrega. Ajudamos em cada etapa para um resultado perfeito.',
  },
  {
    icon: DollarSign,
    title: 'Melhor Custo-Benefício',
    description:
      'Preços competitivos sem abrir mão da qualidade. Condições especiais para grandes volumes.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Differentials() {
  return (
    <section id="diferenciais" className="differentials">
      <div className="container differentials__layout">
        {/* LEFT — Cards */}
        <motion.div
          className="differentials__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="diff-card"
                variants={itemVariants}
              >
                <div className="diff-card__icon">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="diff-card__title">{item.title}</h3>
                <p className="diff-card__desc">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* RIGHT — Text */}
        <motion.div
          className="differentials__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label section-label--dark">Por que nos escolher</span>
          <h2 className="section-title">
            Excelência em cada{' '}
            <span className="gradient-text">detalhe</span>
          </h2>
          <p className="section-subtitle">
            Mais do que produtos, entregamos confiança e resultado para o seu
            evento ou empresa.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
