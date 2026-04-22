import classNames from "classnames";
import { CakeSlice } from "lucide-react";
import styles from "./Logo.module.css";

type LogoProps = {
  light?: boolean;
};

export default function Logo({ light = false }: LogoProps) {
  return (
    <a href="#home" className={classNames(styles.logo, light && styles.light)}>
      <span className={styles.mark}>
        <CakeSlice size={22} strokeWidth={2.2} />
      </span>
      <span className={styles.copy}>
        <strong>Renuka&apos;s</strong>
        <small>Kitchen</small>
      </span>
    </a>
  );
}
