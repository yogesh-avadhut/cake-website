"use client";

import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import Logo from "./Logo";
import styles from "./Navbar.module.css";
import { buildWhatsAppLink, business, navLinks } from "@/data/siteData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openWhatsApp = () => {
    window.open(buildWhatsAppLink(business.defaultOrderMessage), "_blank", "noopener,noreferrer");
  };

  return (
    <header className={styles.header}>
      <div className={styles.shell}>
        <Logo />

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button
            label="Order on WhatsApp"
            icon="pi pi-whatsapp"
            className={styles.desktopOrder}
            onClick={openWhatsApp}
          />
          <Button
            icon={isOpen ? "pi pi-times" : "pi pi-bars"}
            className={styles.mobileToggle}
            text
            rounded
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
      </div>

      {isOpen && (
        <div className={styles.mobilePanel}>
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={styles.mobileLink}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.mobileActions}>
            <Button
              label="Order on WhatsApp"
              icon="pi pi-whatsapp"
              className={styles.mobileOrder}
              onClick={openWhatsApp}
            />
            <Button
              label="Call Now"
              icon="pi pi-phone"
              outlined
              className={styles.mobileCall}
              onClick={() => {
                window.location.href = `tel:+91${business.phoneNumber}`;
              }}
            />
          </div>
        </div>
      )}
    </header>
  );
}
