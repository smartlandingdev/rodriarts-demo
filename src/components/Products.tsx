import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ticket, Ribbon, BadgeCheck, ShieldCheck, ArrowRight, Check, Images, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import imgPulseira from '../assets/produtos/pulseira.jpg';
import imgCordao from '../assets/produtos/cordao.jpg';
import imgCracha from '../assets/produtos/cracha.jpg';
import imgLacre from '../assets/produtos/lacre.jpg';

interface Product {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  accent: string;
  image: string;
  gallery: string[];
}

const products: Product[] = [
  {
    icon: Ticket,
    title: 'Pulseiras Personalizadas',
    description:
      'Material flexível similar ao nylon, resistente à água e confortável. Ideal para controle de acesso em festas, baladas, congressos e eventos corporativos.',
    features: [
      'Personalização em cor preta',
      'Resistente à água',
      'Mínimo 50 unidades por arte',
      'Envio em até 24h',
    ],
    accent: '#25D366',
    image: imgPulseira,
    gallery: [imgPulseira, imgPulseira, imgPulseira, imgPulseira, imgPulseira, imgPulseira],
  },
  {
    icon: Ribbon,
    title: 'Cordões Personalizados',
    description:
      'Poliéster de alta qualidade com impressão frente e verso em cores 4/4. Acompanha presilha jacaré para fixação segura do crachá.',
    features: [
      'Medida 900 x 20 mm',
      'Impressão frente e verso',
      'Presilha jacaré inclusa',
      'Produção em 3 a 5 dias úteis',
    ],
    accent: '#FFD54F',
    image: imgCordao,
    gallery: [imgCordao, imgCordao, imgCordao, imgCordao, imgCordao, imgCordao],
  },
  {
    icon: BadgeCheck,
    title: 'Crachás Personalizados',
    description:
      'Crachás de identificação personalizados com seus dados e foto. Tamanho 5,4 x 8,6 cm, ideais para uso profissional, eventos e identificação especial.',
    features: [
      'Tamanho 5,4 x 8,6 cm',
      'Personalizado com foto e dados',
      'Produção sob encomenda',
      'Cordão vendido separadamente',
    ],
    accent: '#B388FF',
    image: imgCracha,
    gallery: [imgCracha, imgCracha, imgCracha, imgCracha, imgCracha, imgCracha],
  },
  {
    icon: ShieldCheck,
    title: 'Lacres Personalizados',
    description:
      'Etiquetas lacre 10x3 cm com recortes de segurança, ideais para delivery, embalagens e envios. Disponíveis em 5 cores com impressão em preto.',
    features: [
      'Tamanho 10 x 3 cm',
      'Mínimo 500 unidades',
      'Recorte de segurança',
      'Envio em até 24h',
    ],
    accent: '#42A5F5',
    image: imgLacre,
    gallery: [imgLacre, imgLacre, imgLacre, imgLacre, imgLacre, imgLacre],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Products() {
  const [activeGallery, setActiveGallery] = useState<Product | null>(null);

  return (
    <section id="produtos" className="products">
      <div className="container">
        <motion.div
          className="products__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label section-label--dark">Nossos Produtos</span>
          <h2 className="section-title">
            Soluções que fazem a{' '}
            <span className="gradient-text">diferença</span>
          </h2>
          <p className="section-subtitle">
            Materiais personalizados de alta qualidade para destacar sua marca
            em eventos, festas e no ambiente corporativo.
          </p>
        </motion.div>

        <motion.div
          className="products__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                className="product-card"
                variants={cardVariants}
                style={{ '--card-accent': product.accent } as React.CSSProperties}
              >
                <img
                  className="product-card__bg-img"
                  src={product.image}
                  alt=""
                  aria-hidden="true"
                />
                <div className="product-card__bg-overlay" />

                <div className="product-card__inner">
                  <div className="product-card__icon-wrap">
                    <Icon size={28} strokeWidth={1.8} />
                  </div>

                  <h3 className="product-card__title">{product.title}</h3>
                  <p className="product-card__desc">{product.description}</p>

                  <ul className="product-card__features">
                    {product.features.map((f, i) => (
                      <li key={i}>
                        <Check size={15} strokeWidth={2.5} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="product-card__actions">
                    <a
                      href="https://wa.me/5541999999999?text=Olá! Tenho interesse em saber mais sobre os produtos."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="product-card__cta"
                    >
                      Solicitar Orçamento
                      <ArrowRight size={15} />
                    </a>
                    <button
                      className="product-card__gallery-btn"
                      onClick={() => setActiveGallery(product)}
                    >
                      <Images size={15} />
                      Ver Exemplos
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {activeGallery && (
          <motion.div
            className="gallery-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveGallery(null)}
          >
            <motion.div
              className="gallery-modal__content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="gallery-modal__header">
                <h3>{activeGallery.title}</h3>
                <button
                  className="gallery-modal__close"
                  onClick={() => setActiveGallery(null)}
                  aria-label="Fechar"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="gallery-modal__grid">
                {activeGallery.gallery.map((img, i) => (
                  <div key={i} className="gallery-modal__item">
                    <img src={img} alt={`${activeGallery.title} exemplo ${i + 1}`} />
                    <span className="gallery-modal__placeholder">Foto em breve</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
