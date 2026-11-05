import Logo from "./Logo";
import "./Header.css";


export default function Header() {
  return (
    <header className="site-header">
      <Logo />

      <nav aria-label="Navegação principal">
        <a href="#inicio">Inicio</a>
        <a href="#modalidades">Modalidades</a>
        <a href="#cadastro">Cadastro</a>
      </nav>
    </header>
  );
}