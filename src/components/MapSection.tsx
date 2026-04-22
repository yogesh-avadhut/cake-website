import { MapPinned, Navigation, PhoneCall } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import styles from "./MapSection.module.css";
import { business } from "@/data/siteData";

export default function MapSection() {
  return (
    <section className={styles.section}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Find Us"
          title="Visit Renuka's Kitchen near Hiremat Hospital in Barshi."
          description="You can open the location directly in Google Maps or message us on WhatsApp to confirm your order details."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className={styles.mapCard}>
            <div className={styles.mapWrap}>
              <iframe
                title="Renuka's Kitchen location map"
                src={business.embedMapUrl}
                loading="lazy"
                className={styles.map}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <p className={styles.addressText}>{business.address}</p>
          </Reveal>

          <Reveal className={styles.infoCard} delay={120}>
            <div className={styles.infoRow}>
              <MapPinned size={20} />
              <div>
                <strong>Shop Address</strong>
                <span>{business.address}</span>
              </div>
            </div>

            <div className={styles.infoRow}>
              <PhoneCall size={20} />
              <div>
                <strong>Phone Number</strong>
                <span>{business.displayPhone}</span>
              </div>
            </div>

            <a href={business.mapsLink} target="_blank" rel="noreferrer" className={styles.mapLink}>
              <Navigation size={18} />
              Open in Google Maps
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
