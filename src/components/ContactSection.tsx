"use client";

import { Button } from "primereact/button";
import { MapPinned, Phone, Send } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import styles from "./ContactSection.module.css";
import { buildWhatsAppLink, business, orderTips } from "@/data/siteData";

export default function ContactSection() {
  const openWhatsApp = () => {
    window.open(buildWhatsAppLink(business.defaultOrderMessage), "_blank", "noopener,noreferrer");
  };

  const openDialer = () => {
    window.location.href = `tel:+91${business.phoneNumber}`;
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className={styles.panel}>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Contact & Order"
                title="Ready to order your cake?"
                description="The fastest way is WhatsApp. Send your flavor, design idea, name on cake, and preferred date or time."
              />

              <div className={styles.buttonRow}>
                <Button
                  label="Order on WhatsApp"
                  icon="pi pi-whatsapp"
                  className={styles.whatsappButton}
                  onClick={openWhatsApp}
                />
                <Button
                  label="Call Now"
                  icon="pi pi-phone"
                  outlined
                  className={styles.callButton}
                  onClick={openDialer}
                />
              </div>

              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <Phone size={18} />
                  <div>
                    <strong>Phone</strong>
                    <span>{business.displayPhone}</span>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <MapPinned size={18} />
                  <div>
                    <strong>Address</strong>
                    <span>{business.address}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.orderCard}>
              <div className={styles.cardHeader}>
                <Send size={18} />
                <strong>Suggested order message</strong>
              </div>

              <p className={styles.prefillMessage}>{business.defaultOrderMessage}</p>

              <div className={styles.tipList}>
                {orderTips.map((tip) => (
                  <div key={tip} className={styles.tipItem}>
                    <span className={styles.tipDot} />
                    <p>{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
