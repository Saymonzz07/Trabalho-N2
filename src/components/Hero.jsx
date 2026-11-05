import "./Hero.css";


export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <span className="eyebrow">ESPORTES DE AREIA</span>

        <h1>Mais que uma arena,<br />um estilo de vida.</h1>

        <p>
          A Arena Sol &amp; Areia é o lugar perfeito para você praticar esportes,
          se conectar com pessoas e aproveitar o melhor da vida ao ar livre.
        </p>

        <a className="primary-button" href="#cadastro">
      Quero me cadastrar
        </a>
      </div>

      <div
        className="hero-image"
        role="img"
        aria-label="Quadra de vôlei de praia com rede e areia"
      />

      <span className="hero-corner" aria-hidden="true" />
    </section>
  );
}