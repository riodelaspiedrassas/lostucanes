import Link from "next/link";
import styles from "./Contacto.module.css";
import { phone_number } from "@/app/contact_info";
import { mail } from "@/app/contact_info";
export default function Contacto() {

  return (
    <section className="section" id="contacto">
      <div className="container">
        <div className={styles.contactBox}>
          {/* Left */}
          <div>
            <div className={styles.kicker}>Contacto comercial</div>
            <h2>Hablemos</h2>
            <p className={styles.lead}>
              Estamos disponibles para consultas comerciales, coordinación de
              entregas y desarrollo de nuevos clientes.
            </p>
            <div className={styles.quote}>
              Horario de atención 08:00 a 13:00 y 15:00 a 19:00
              Atención personalizada según necesidad de cada cliente.
            </div>
          </div>

          {/* Right */}
          <div>
            <div className={styles.contactItem}>
              <div className={styles.small}>Ubicación</div>
              <div className={styles.big}>
                Urundel, Salta
                <br />
                El Bananal, Yuto, Jujuy
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.small}>WhatsApp</div>
              <div className={styles.big}>+549{phone_number}</div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.small}>Email</div>
              <div className={styles.big}>{mail}</div>
            </div>
            <Link href={`https://wa.me/+549${phone_number}`} className={`btn btn-primary ${styles.ctaBtn}`}>
              Contactar por WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
