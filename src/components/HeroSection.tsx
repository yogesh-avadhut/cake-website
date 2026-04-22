"use client";

import Image from "next/image";
import { Button } from "primereact/button";
import { HeartHandshake, Sparkles, Star } from "lucide-react";
import Reveal from "./Reveal";
import styles from "./HeroSection.module.css";
import { buildWhatsAppLink, business } from "@/data/siteData";

export default function HeroSection() {
  const openWhatsApp = () => {
    window.open(buildWhatsAppLink(business.defaultOrderMessage), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.background}>
        <Image
          src="/images/cakes/hero-celebration.jpeg"
          alt="A joyful celebration with cake from Renuka's Kitchen"
          fill
          priority
          className={styles.backgroundImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pt-32">
        <Reveal className={styles.content}>
          <div className={styles.kicker}>
            <Sparkles size={16} />
            Homemade cakes for birthdays, anniversaries, and surprises
          </div>

          <h1 className={styles.title}>Celebrate Love &amp; Make Sweet Memories With Us ❤️</h1>
          <p className={styles.subtitle}>Custom cakes for every occasion.</p>

          <div className={styles.actions}>
            <Button
              label="Order on WhatsApp"
              icon="pi pi-whatsapp"
              className={styles.primaryButton}
              onClick={openWhatsApp}
            />
            <Button
              label="Explore Cakes"
              icon="pi pi-arrow-down"
              text
              className={styles.secondaryButton}
              onClick={() => {
                document.getElementById("cakes")?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>

          <div className={styles.featureStrip}>
            <div className={styles.featureItem}>
              <HeartHandshake size={18} />
              <span>Made with a homemade touch</span>
            </div>
            <div className={styles.featureItem}>
              <Star size={18} />
              <span>Designer cakes for every celebration</span>
            </div>
          </div>
        </Reveal>

        <Reveal className={styles.highlightCard} delay={140}>
          <span className={styles.cardTag}>Freshly crafted in Barshi</span>
          <h2 className={styles.cardTitle}>A cake experience that feels personal from first message to final cut.</h2>
          <p className={styles.cardCopy}>
            Tell us the flavor, design idea, name on cake, and your event timing. We&apos;ll help you choose something beautiful, memorable, and made with care.
          </p>

          <div className={styles.cardGrid}>
            <div className={styles.cardTile}>
              <strong>2+ years</strong>
              <span>of fresh cake making</span>
            </div>
            <div className={styles.cardTile}>
              <strong>Quick order</strong>
              <span>straight on WhatsApp</span>
            </div>
            <div className={styles.cardTile}>
              <strong>Custom styles</strong>
              <span>for love, birthdays, and more</span>
            </div>
            <div className={styles.cardTile}>
              <strong>Location</strong>
              <span>Near Hiremat Hospital, Barshi</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
