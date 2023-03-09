import { Inter } from 'next/font/google';
import Image from 'next/image';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Wellcome to the best Livescore and Live RosterUpdate Page&nbsp;
          <code className={styles.code}>TopLivescore/Livescore</code>
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/football-live-score.png.jpg"
          alt="Next.js Logo"
          width={469}
          height={280}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            TeamRoster <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find your favourite Team and check out all the Roster changes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Players <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Playerinfos, stats and more</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            LiveScores <span>-&gt;</span>
          </h2>
          <p className={inter.className}>all scores Live and in real time</p>
        </a>
      </div>
    </main>
  );
}
