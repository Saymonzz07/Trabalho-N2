import "./Diferenciais.css"
const beneficios = [
  "Ambiente descontraído",
  "Espaço para reunir os amigos",
  "Incentivo à saúde e ao bem-estar",
];

export default function Diferenciais() {
  return (
    <section className="differentials section" id="diferenciais">
      <div className="differential-photo" role="img" aria-label="Quadra de areia ensolarada" />
      <div className="differential-copy">
        <span className="eyebrow">DIFERENCIAIS</span>
        <h2>Por que escolher<br />a Arena Sol &amp; Areia?</h2>
        <ul>
          {beneficios.map((beneficio) => (
            <li key={beneficio}><span aria-hidden="true">✓</span>{beneficio}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
