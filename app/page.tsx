import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
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
          width={769}
          height={480}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link href="/teamroster">
          <div className={styles.card}>
            <h2 className={inter.className}>
              TeamRoster <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find your favourite Team and check out all the Roster changes!
            </p>
          </div>
        </Link>

        <Link href="/players">
          <div className={styles.card}>
            <h2 className={inter.className}>
              Players <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Playerinfos, stats and more</p>
          </div>
        </Link>

        <Link href="/livescore">
          <div className={styles.card}>
            <h2 className={inter.className}>
              LiveScores <span>-&gt;</span>
            </h2>
            <p className={inter.className}>all scores Live and in real time</p>
          </div>
        </Link>
      </div>
    </main>
  );
}
