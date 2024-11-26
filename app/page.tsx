import Image from "next/image";
import styles from "./page.module.css";
import Cover from "./components/cover";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <Cover></Cover>
      </main>
      <footer>
      </footer>
    </div>
  );
}
