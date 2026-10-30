import Logo from "./Logo";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-about">
          <Logo />
          <p>Seu espaço para praticar esportes,<br />fazer amizades e aproveitar a vida na areia.</p>
          <strong>◎ Localização</strong>
          <span>Endereço da arena<br />Cidade – Estado</span>
        </div>
        <div className="footer-links">
          <strong>Navegação</strong>
          <a href="#inicio">Início</a>
          <a href="#modalidades">Modalidades</a>
          <a href="#cadastro">Cadastre-se</a>
        </div>
        <div className="footer-contact">
          <strong>Contato</strong>
          <span>☎ (00) 00000-0000</span>
          <span>✉ contato@arena.com.br</span>
          <span>◎ @arenasolareia</span>
        </div>
      </div>
      <div className="copyright">© 2026 Arena Sol &amp; Areia. Todos os direitos reservados.</div>
    </footer>
  );
}
