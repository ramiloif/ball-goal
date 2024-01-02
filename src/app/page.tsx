'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Map from './map'
import {  useEffect, useState } from 'react';




export default function Home() {
  const [ballCords, setBallCords] = useState({ lat: 32.0853, lng: 34.7818 });

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Map ballCords={ballCords} setBallCords={setBallCords} />
      </div>
    </main>
  )
}
