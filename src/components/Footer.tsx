import Logo from "./Logo";
import styles from "./Footer.module.css";
import { buildWhatsAppLink, business, navLinks } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.8fr] lg:px-8">
        <div className={styles.brandBlock}>
          <Logo />
          <p className={styles.copy}>
            Fresh homemade cakes, celebration add-ons, and custom designs made with care in Barshi.
          </p>
        </div>

        <div>
          <h3 className={styles.heading}>Quick Links</h3>
          <div className={styles.linkList}>
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className={styles.link}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className={styles.heading}>Contact</h3>
          <div className={styles.contactList}>
            <a
              href={buildWhatsAppLink(business.defaultOrderMessage)}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              WhatsApp: {business.displayPhone}
            </a>
            <a href={`tel:+91${business.phoneNumber}`} className={styles.link}>
              Call: {business.displayPhone}
            </a>
            <a href={business.mapsLink} target="_blank" rel="noreferrer" className={styles.link}>
              Open Google Maps
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
        <p>Made by @yogiSoft with ❤️</p>
      </div>
    </footer>
  );
}
