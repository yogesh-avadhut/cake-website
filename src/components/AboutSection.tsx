import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import styles from "./AboutSection.module.css";
import { aboutHighlights, aboutPoints } from "@/data/siteData";

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <Reveal className={styles.visualWrap}>
          <div className={styles.imageFrame}>
            <Image
              src="/images/cakes/signature-birthday-lights.jpeg"
              alt="Signature celebration cake from Renuka's Kitchen"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={styles.image}
            />
          </div>

          <div className={styles.floatingCard}>
            <strong>Homemade warmth</strong>
            <span>Fresh flavors, careful finishing, and cakes made with heart.</span>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <SectionHeading
            eyebrow="About Us"
            title="Every cake carries a little love from our kitchen to your celebration."
            description="Renuka's Kitchen is built around the joy of making special occasions feel more personal."
          />

          <div className={styles.points}>
            {aboutPoints.map((point) => (
              <p key={point} className={styles.point}>
                {point}
              </p>
            ))}
          </div>

          <div className={styles.highlightGrid}>
            {aboutHighlights.map((item) => (
              <div key={item.label} className={styles.highlightCard}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
