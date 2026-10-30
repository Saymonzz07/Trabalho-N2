import "./Modalidades.css"
const modalidades = [
  {
    icon: "♢",
    nome: "Beach Tennis",
    descricao: "Agilidade, diversão e competição na areia.",
  },
  {
    icon: "◉",
    nome: "Vôlei de Praia",
    descricao: "Trabalho em equipe e muita energia a cada partida.",
  },
  {
    icon: "⚽",
    nome: "Futevôlei",
    descricao: "Técnica e habilidade para quem ama desafios.",
  },
];

function ModalidadeCard({ icon, nome, descricao }) {
  return (
    <article className="modality-card">
      <span className="modality-icon" aria-hidden="true">{icon}</span>
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <a href="#cadastro" aria-label={`Cadastrar interesse em ${nome}`}>→</a>
    </article>
  );
}

export default function Modalidades() {
  return (
    <section className="section modalities-section" id="modalidades">
      <div className="section-heading">
        <span className="eyebrow">MODALIDADES</span>
        <h2>Escolha sua modalidade</h2>
      </div>
      <div className="modality-grid">
        {modalidades.map((modalidade) => (
          <ModalidadeCard key={modalidade.nome} {...modalidade} />
        ))}
      </div>
    </section>
  );
}
