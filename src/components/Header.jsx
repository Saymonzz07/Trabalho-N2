import Logo from "./Logo";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <Logo />

      <nav aria-label="Navegação principal">
        <Link to="/">Início</Link>
        <Link to="/#modalidades">Modalidades</Link>
        <Link to="/cadastro">Cadastre-se</Link>
      </nav>
    </header>
  );
}