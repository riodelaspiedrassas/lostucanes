import styles from "./Sustentabilidad.module.css";

const pilares = [
  {
    icon: "🌾",
    titulo: "Cuidado del suelo",
    descripcion:
      "Trabajamos para mejorar estructura, fertilidad y estabilidad a largo plazo mediante rotación de cultivos, incorporación de materia orgánica, manejo del tránsito de maquinaria y adaptación según tipo de suelo.",
  },
  {
    icon: "🐞",
    titulo: "Manejo integrado y enfoque biológico",
    descripcion:
      "Aplicamos monitoreo permanente, intervención según umbrales, uso complementario de herramientas biológicas y cuidado de insectos benéficos para reducir presión química sin perder eficiencia productiva.",
  },
  {
    icon: "⚗️",
    titulo: "Uso responsable de fitosanitarios",
    descripcion:
      "Cuando es necesario intervenir, lo hacemos con criterio técnico: selección específica de productos, rotación de principios activos, aplicaciones dirigidas y optimización de dosis y momentos.",
  },
  {
    icon: "🔎",
    titulo: "Trazabilidad y control",
    descripcion:
      "Cada lote es monitoreado y registrado desde la producción hasta la cosecha, incorporando seguimiento por lote, registro de prácticas y desarrollo de identificación mediante códigos QR.",
  },
];

export default function Sustentabilidad() {
  return (
    <section className={`section section-dark`} id="sustentabilidad">
      <div className="container">
        <div className="kicker">Sustentabilidad y manejo responsable</div>
        <h2>Producción eficiente con enfoque sustentable</h2>
        <p className="lead">
          Desarrollamos un sistema productivo que busca equilibrar
          productividad, calidad y cuidado del recurso suelo, incorporando
          prácticas innovadoras para la región.
        </p>

        <div className={`cards-2 ${styles.pillarsGrid}`}>
          {pilares.map((pilar) => (
            <article className={`card ${styles.pillarCard}`} key={pilar.titulo}>
              <div className="card-body">
                <div className={styles.icon}>{pilar.icon}</div>
                <h3>{pilar.titulo}</h3>
                <p>{pilar.descripcion}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.quote}>
          Nuestro sistema productivo representa un enfoque innovador para la
          región, combinando manejo técnico, sustentabilidad y eficiencia para
          lograr productos de calidad de manera consistente.
        </div>
      </div>
    </section>
  );
}
