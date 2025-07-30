import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>Welcome to Medal Count App</h2>

        <div className={styles.ctas}>
          <a href='/medal-count' className={styles.secondary}>
            View Medal Count
          </a>
        </div>
      </main>
    </div>
  )
}
