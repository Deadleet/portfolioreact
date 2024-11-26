import React from 'react'
import styles from './cover.module.css'
import Link from 'next/link'

const cover = () => {
  return (
    <div className={styles.cover}>
      <div className={styles.spaceText}>
        <div className="textPull">
          <span className={styles.title}>Applications <span className="colorGreen">web</span> <br />sur mesure</span><br />
          <span className={styles.textTitle}>Concevons ensembles les applications web de demain qui nous permettrons d&#39;attirer vos clients.</span>
          <div className={styles.clickZone}>
            <Link href="">Mes projets</Link>
            <Link href="">Contacter-moi</Link>
            </div>
        </div>
        <div className="cardImage"></div>
        <div className="textAbout"></div>
      </div>
      <div className={styles.spaceImage}></div>
    </div>
  )
}

export default cover
