import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import Hockey from '../public/hockey.avif';
import Soccerfield from '../public/Soccerfield.avif';
import Tennisball from '../public/TennisBall.avif';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Welcome to the best Livescore and Live RosterUpdate Page&nbsp;
          <code className={styles.code}>TopLivescore/Livescore</code>
        </p>
      </div>

      <div className={styles.cardWrapper}>
        <Image
          src={Soccerfield}
          alt="Background image 1"
          layout="fill"
          className={styles.cardBackground}
        />
        <Link href="/livescore">
          <div className={styles.card}>
            <h2 className={`${inter.className} ${styles.linkText}`}>
              LiveScores <span>-&gt;</span>
            </h2>
          </div>
        </Link>
        <p>
          Stay updated on live scores for your favorite sports! Click here to
          access real-time match results, game statistics, and team standings
          from leagues around the world. Don't miss a moment - stay in the game
          with our comprehensive live score platform.
        </p>
      </div>

      <div className={styles.cardWrapper}>
        <Image
          src={Tennisball}
          alt="Background image 1"
          layout="fill"
          className={styles.cardBackground}
        />
        <Link href="/teamroster">
          <div className={styles.card}>
            <h2 className={`${inter.className} ${styles.linkText}`}>
              TeamRoster <span>-&gt;</span>
              <p>Users only!</p>
            </h2>
          </div>
        </Link>
        <p>
          Keep up with the latest team roster changes and updates! Click here to
          explore in-depth player profiles, transfers, and lineup information
          for your favorite teams across various leagues. Stay informed and
          ahead of the game with our comprehensive team roster resource.
        </p>
      </div>

      <div className={styles.cardWrapper}>
        <Image
          src={Hockey}
          alt="Background image 1"
          layout="fill"
          className={styles.cardBackground}
        />
        <Link href="/players">
          <div className={styles.card}>
            <h2 className={`${inter.className} ${styles.linkText}`}>
              Players <span>-&gt;</span>
              <p>Users only!</p>
            </h2>
          </div>
        </Link>
        <p>
          Immerse yourself in the world of professional athletes' information!
          Click here to access detailed profiles, stats, career highlights, and
          personal achievements from various sports and leagues. Stay connected
          to the athletes you admire with our extensive player info database.
        </p>
      </div>
    </main>
  );
}
