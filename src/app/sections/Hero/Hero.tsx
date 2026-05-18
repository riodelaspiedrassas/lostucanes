import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={`container ${styles.heroInner}`}>
        <div>
          <div className={styles.eyebrow}>
            Urundel, Salta · El Bananal, Yuto, Jujuy
          </div>
          <h1 className={styles.title}>
            Producción frutihortícola con escala, calidad y trazabilidad
          </h1>
          <p className={styles.subtitle}>
            Desde el norte argentino, desarrollamos un sistema productivo que
            integra producción a campo e invernaderos, manejo sustentable y
            control técnico en cada etapa.
          </p>
          <p className={styles.strong}>
            Ofrecemos volumen, continuidad y compromiso comercial, adaptándonos
            a las necesidades de cada cliente.
          </p>
          <div className={styles.buttons}>
            <Link href="#contacto" className={`btn btn-primary ${styles.btnPrimary}`}>
              Contactanos
            </Link>
            <Link href="#productos" className={`btn btn-secondary ${styles.btnSecondary}`}>
              Ver productos
            </Link>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.value}>120 ha</div>
            <div className={styles.label}>Caña de azúcar</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.value}>40 ha</div>
            <div className={styles.label}>Banana</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.value}>20 ha</div>
            <div className={styles.label}>Mango</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.value}>50 ha</div>
            <div className={styles.label}>Hortalizas a campo</div>
          </div>
          <div className={`${styles.stat} ${styles.statFull}`}>
            <div className={styles.value}>30</div>
            <div className={styles.label}>Naves de invernadero</div>
          </div>
        </div>
      </div>
    </section>
  );
}
