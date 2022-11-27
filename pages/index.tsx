import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const ref = useRef<any>(null)

  useEffect(() => {
    ref.current.click()
  }, [])
  
  return (
    <div className={styles.container}>
      <a ref={ref} href="https://google.com"></a>
    </div>
  )
}
