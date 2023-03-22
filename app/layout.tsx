import './global.scss';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getUserBySessionToken } from '../database/users';
import styles from './layout.module.scss';

export const metadata = {
  title: {
    default: 'LiveScores and Roster Updates',
    template: '%s | LiveScores and Roster Updates',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

type Props = {
  children: React.ReactNode;
};

export const dynamic = 'force-dynamic';

export default async function RootLayout(props: Props) {
  // 1. get the session token from the cookie
  const cookieStore = cookies();
  const token = cookieStore.get('sessionToken');

  // 2. validate the session

  // 3. get the user profile matching the session
  const user = token && (await getUserBySessionToken(token.value));

  const randomNumber = Math.floor(Math.random() * 10);

  return (
    <html lang="en">
      <head />
      <body>
        <header className={styles.header}>
          <h2>
            <Link href="/" className={`${styles.glitch} no-hover-color`}>
              <span aria-hidden="true">LSaI</span>
              LSaI
              <span aria-hidden="true">LSaI</span>
            </Link>
          </h2>
          <nav>
            <div>
              <Link href="/" className={styles.link}>
                Home
              </Link>
              <Link href="/livescore" className={styles.link}>
                LiveScore
              </Link>
              {user && (
                <Link href="/teamroster" className={styles.link}>
                  TeamRoster
                </Link>
              )}
              {user && (
                <Link href="/players" className={styles.link}>
                  Players
                </Link>
              )}
              <Link href="/support" className={styles.link}>
                Support
              </Link>

              {user && user.username}
            </div>
            <div>{randomNumber}</div>
            {!user && (
              <Link href="/register" className={styles.link}>
                Register |
              </Link>
            )}
            {!user && (
              <Link href="/login" className={styles.link}>
                Login |
              </Link>
            )}
            {/* we want to disable prefetch for logout link */}
            {user && (
              <Link href="/logout" prefetch={false} className={styles.link}>
                Logout
              </Link>
            )}
            <button id="dark-mode-toggle">Dark Mode</button>
          </nav>
        </header>
        {props.children}
        <footer className={`${styles.footer} ${styles.link}`}>
          something something copyright 2023
        </footer>
      </body>
    </html>
  );
}
