import styles from "./QuienesSomos.module.css";

export default function QuienesSomos() {
  return (
    <section className={`section ${styles.wrapper}`} id="quienes">
      <div className="container">
        <div className={styles.split}>
          {/* Left: text content */}
          <div>
            <div className="kicker">Quiénes somos</div>
            <h2>Una empresa familiar con raíces en el campo y visión de futuro</h2>
            <div className={styles.textBlock}>
              <p>
                Somos una empresa frutihortícola con base productiva en el norte
                argentino, con fincas ubicadas en Urundel (Salta) y en la zona
                de El Bananal, Yuto (Jujuy).
              </p>
              <p>
                Nuestra historia comienza en la década del 80, cuando Coco
                inició la producción de banana en la región, sentando las bases
                de lo que hoy es la empresa.
              </p>
              <p>
                Con el paso del tiempo, las siguientes generaciones se
                incorporaron al proyecto, diversificando la producción,
                ampliando la escala y elevando los estándares de calidad.
              </p>
              <p>
                Este proceso nos permitió evolucionar hacia un sistema
                productivo más completo, logrando productos con alta calidad
                tanto desde lo visual como desde lo nutricional, a partir de un
                manejo más equilibrado y con menor dependencia de agroquímicos.
              </p>
              <p>
                Hoy combinamos esa experiencia con conocimiento técnico y una
                visión moderna de la producción, integrando sistemas a campo e
                invernaderos para lograr estabilidad, volumen y flexibilidad en
                la oferta.
              </p>
              <p>
                Creemos en el trabajo bien hecho, en el cumplimiento y en
                construir relaciones comerciales a largo plazo.
              </p>
            </div>
            <div className="quote">Producción eficiente con manejo sustentable.</div>
          </div>

          {/* Right: base productiva panel */}
          <div className="panel">
            <div className={styles.panelKicker}>Nuestra base productiva</div>
            <div className={styles.baseList}>
              <div className={styles.baseItem}>
                <strong>Fincas en dos zonas</strong>
                Urundel, Salta · El Bananal, Yuto, Jujuy
              </div>
              <div className={styles.baseItem}>
                <strong>Producción diversificada</strong>
                Frutas, hortalizas, caña de azúcar e invernaderos
              </div>
              <div className={styles.baseItem}>
                <strong>Crecimiento generacional</strong>
                De la banana como origen a un sistema productivo integral
              </div>
              <div className={styles.baseItem}>
                <strong>Modelo innovador para la región</strong>
                Sustentabilidad, manejo responsable y visión de largo plazo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
