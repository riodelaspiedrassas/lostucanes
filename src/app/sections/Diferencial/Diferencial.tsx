import styles from "./Diferencial.module.css";

export default function Diferencial() {
  return (
    <section className={`section section-white ${styles.wrapper}`}>
      <div className="container">
        <div className={`panel soft ${styles.panel}`}>
          <div className="kicker">Diferencial</div>
          <h2>Sistema productivo innovador para la región</h2>
          <p className="lead">
            Trabajamos integrando cuidado del suelo, manejo responsable de
            fitosanitarios, estrategias biológicas y trazabilidad por lote.
          </p>
        </div>
      </div>
    </section>
  );
}
