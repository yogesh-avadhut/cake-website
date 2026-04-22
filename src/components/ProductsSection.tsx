import Image from "next/image";
import { Gift, PartyPopper, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import styles from "./ProductsSection.module.css";
import { productCategories } from "@/data/siteData";

const iconMap = {
  "paper-blast": Gift,
  candles: Sparkles,
  extras: PartyPopper
};

export default function ProductsSection() {
  return (
    <section id="products" className={styles.section}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Other Products"
          title="Thoughtful add-ons that make the whole surprise feel complete."
          description="Choose the little extras that turn a cake order into a full celebration setup."
        />

        <div className="grid gap-8 xl:grid-cols-3">
          {productCategories.map((category, index) => {
            const Icon = iconMap[category.id];

            return (
              <Reveal key={category.id} delay={index * 120}>
                <article className={styles.categoryCard}>
                  <div className={styles.categoryTop}>
                    <div className={styles.iconWrap}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className={styles.categoryTitle}>{category.title}</h3>
                      <p className={styles.categoryCopy}>{category.subtitle}</p>
                    </div>
                  </div>

                  <div className={styles.items}>
                    {category.items.map((item) => (
                      <div key={item.name} className={styles.itemCard}>
                        <div className={styles.itemImageWrap}>
                          <Image src={item.image} alt={item.name} fill className={styles.itemImage} />
                        </div>
                        <div className={styles.itemBody}>
                          <div className={styles.itemTop}>
                            <h4 className={styles.itemName}>{item.name}</h4>
                            <span className={styles.itemPrice}>₹{item.price}</span>
                          </div>
                          <p className={styles.itemDescription}>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
