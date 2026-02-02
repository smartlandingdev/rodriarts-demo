import { Instagram, Facebook } from 'lucide-react';
import logo from '../assets/logo.jpg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src={logo} alt="RODRIART'S" className="footer__logo" />
            <p>
              Soluções em personalização para eventos, festas e empresas em
              Curitiba e região.
            </p>
            <div className="footer__social">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Produtos</h4>
            <a href="#produtos">Pulseiras para Festas</a>
            <a href="#produtos">Cordões Personalizados</a>
            <a href="#produtos">Crachás Personalizados</a>
          </div>

          <div className="footer__col">
            <h4>Navegação</h4>
            <a href="#inicio">Início</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#como-funciona">Como Funciona</a>
            <a href="#contato">Contato</a>
          </div>

          <div className="footer__col">
            <h4>Contato</h4>
            <a href="https://wa.me/5541999999999" target="_blank" rel="noopener noreferrer">
              (41) 99999-9999
            </a>
            <a href="mailto:contato@rodriarts.com.br">
              contato@rodriarts.com.br
            </a>
            <span>Curitiba, PR</span>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} RODRIART'S Personalizados. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
