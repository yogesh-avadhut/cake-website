"use client";

import Image from "next/image";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import styles from "./CakeCatalog.module.css";
import { buildWhatsAppLink, business, cakeCatalog } from "@/data/siteData";

export default function CakeCatalog() {
  const orderCake = (cakeName: string) => {
    const message = `Hello Renuka's Kitchen, I want to order the ${cakeName} cake 🎂`;
    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="cakes" className={styles.section}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cake Catalog"
          title="Beautiful custom cakes that look festive even before the first slice."
          description="Browse real cakes from Renuka's Kitchen. Each design can be customized for names, colors, flavors, and celebration style."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cakeCatalog.map((cake, index) => (
            <Reveal key={cake.name} delay={index * 60}>
              <article className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={cake.image}
                    alt={cake.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className={styles.image}
                  />
                  <div className={styles.topRow}>
                    <Tag value={cake.weight} severity="danger" rounded />
                    <span className={styles.price}>₹{cake.price}</span>
                  </div>
                </div>

                <div className={styles.body}>
                  <div className={styles.copy}>
                    <p className={styles.flavour}>{cake.flavour}</p>
                    <h3 className={styles.name}>{cake.name}</h3>
                    <p className={styles.description}>{cake.description}</p>
                  </div>

                  <div className={styles.meta}>
                    <span>{cake.occasion}</span>
                    <span>{business.name}</span>
                  </div>

                  <Button
                    label="Order this cake"
                    icon="pi pi-whatsapp"
                    text
                    className={styles.orderButton}
                    onClick={() => orderCake(cake.name)}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
